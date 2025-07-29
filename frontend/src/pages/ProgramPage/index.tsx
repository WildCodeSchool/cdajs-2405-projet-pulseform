import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  CurrentExerciseView,
  ExitProgramView,
  FinishedProgramView,
  ProgramSummaryView,
  RestView,
  StartProgramView,
} from "./Views";

import DoubleScreenLayout from "@components/atoms/Layout/DoubleScreenLayout";
import { useUser } from "@context/UserContext";
import { useGetProgramById } from "@hooks/usePrograms";
import { useGetUserById } from "@hooks/useUsers";

import { useAddHistoryMutation } from "@graphql/__generated__/schema";
import "./ProgramPage.scss";
import { useTranslation } from "react-i18next";

const ProgramPage = () => {
  const { user } = useUser();
  const userId = Number(user?.id);

  const { userById } = useGetUserById(userId);

  const { t } = useTranslation();

  const REST_DURATION = 20;
  const [addHistoryMutation] = useAddHistoryMutation();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [currentView, setCurrentView] = useState<
    "summary" | "start" | "exercise" | "rest" | "exit" | "finished"
  >(window.innerWidth >= 768 ? "start" : "summary");

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [totalTimeElapsed, setTotalTimeElapsed] = useState(0);
  const [lastUnpausedTime, setLastUnpausedTime] = useState<number | null>(null);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const { id } = useParams<{ id: string }>();
  const programId = Number(id);
  const { loading, error, program } = useGetProgramById(programId);

  const exerciseList = program?.exercises || [];
  const currentExercise = exerciseList[currentExerciseIndex];

  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle window resizing with debouncing
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    resizeTimeoutRef.current = setTimeout(() => {
      setIsDesktop(window.innerWidth >= 768);
    }, 200); // Wait for 200ms after resize stops
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Reset timer when entering new exercise or rest
  useEffect(() => {
    if (currentView === "exercise") {
      const exercise = exerciseList[currentExerciseIndex];
      setTimer(exercise?.duration || 0);
    } else if (currentView === "rest") {
      setTimer(REST_DURATION);
    }
  }, [currentExerciseIndex, currentView, exerciseList]);

  useEffect(() => {
    // If we're on a non-active view (summary, exit, finished, or start), reset the timer state
    if (
      currentView === "summary" ||
      currentView === "exit" ||
      currentView === "finished" ||
      currentView === "start"
    ) {
      setLastUnpausedTime(null); // Reset the pause time
      return; // Exit early if we shouldn't be tracking time
    }

    // Handle running the timer when not paused
    if (!isPaused) {
      const now = Date.now();
      setLastUnpausedTime(now); // Update the last unpaused time

      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval); // Stop the interval when it reaches 0
            handleStepComplete();
            return 0;
          }
          return prev - 1;
        });

        setTotalTimeElapsed((prev) => prev + 1); // Update total elapsed time
      }, 1000);

      return () => clearInterval(interval); // Clean up the interval when the effect re-runs
    }
  }, [isPaused, currentView]);

  // Debounce togglePause to avoid unnecessary state changes
  const togglePause = useCallback(() => {
    if (!isPaused && lastUnpausedTime) {
      const now = Date.now();
      const secondsSinceUnpaused = Math.floor((now - lastUnpausedTime) / 1000);
      setTotalTimeElapsed((prev) => prev + secondsSinceUnpaused);
      setLastUnpausedTime(null);
    } else {
      setLastUnpausedTime(Date.now());
    }
    setIsPaused((prev) => !prev);
  }, [isPaused, lastUnpausedTime]);

  const startExercise = useCallback(() => {
    const exercise = exerciseList[currentExerciseIndex];
    setTimer(exercise?.duration || 0);
    setCurrentView("exercise");
  }, [currentExerciseIndex, exerciseList]);

  const startRest = useCallback(() => {
    setTimer(REST_DURATION);
    setCurrentView("rest");
  }, []);

  const handleStepComplete = () => {
    if (currentView === "exercise") {
      setCompletedExercises((prev) =>
        prev.includes(currentExerciseIndex)
          ? prev
          : [...prev, currentExerciseIndex],
      );
      startRest();
    } else if (currentView === "rest") {
      if (currentExerciseIndex + 1 < exerciseList.length) {
        setCurrentExerciseIndex((prev) => prev + 1);
        startExercise();
      } else {
        setCurrentView("finished");
      }
    }
  };

  // Handle mutation when program is finished
  const handleFinishProgram = async () => {
    const historyData = {
      user_id: Number(userById?.id), // TO DO pourquoi mon userById est une string ?
      program_id: programId,
      completed_exercises: completedExercises.length,
      total_kcal_loss: 0, // Empty for now
      total_time_spent: totalTimeElapsed,
      start_date: new Date(),
      end_date: new Date(),
    };

    try {
      await addHistoryMutation({ variables: { data: historyData } });
      toast.success(t("HISTORY_UPDATE_SUCCESS"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        theme: "light",
      });
    } catch (err) {
      toast.error(t("HISTORY_UPDATE_FAIL"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        theme: "light",
      });
      console.error("Error adding history:", err);
    }
  };

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex((prev) => prev - 1);
      startExercise();
    }
  };

  const handleNext = () => {
    if (currentView === "exercise") {
      startRest();
    } else if (currentView === "rest") {
      if (currentExerciseIndex + 1 < exerciseList.length) {
        setCurrentExerciseIndex((prev) => prev + 1);
        startExercise();
      } else {
        setCurrentView("finished");
        handleFinishProgram(); // Call the mutation when the program is finished
      }
    }
  };

  // Memoize to avoid unnecessary recalculations of child components
  const programSummaryView = useMemo(() => {
    if (!program) return null;
    return (
      <ProgramSummaryView
        isDesktop={isDesktop}
        program={program}
        onStartProgram={startExercise}
      />
    );
  }, [isDesktop, program, startExercise]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!program) return <p>No program found</p>;

  const renderMainProgramView = () => {
    switch (currentView) {
      case "start":
        return isDesktop ? (
          <StartProgramView onStart={startExercise} />
        ) : (
          programSummaryView
        );

      case "exercise":
        return (
          <CurrentExerciseView
            exercise={currentExercise}
            duration={currentExercise.duration}
            timer={timer}
            onNext={handleNext}
            onBack={handleBack}
            onPauseToggle={togglePause}
            isPaused={isPaused}
            currentIndex={currentExerciseIndex}
            totalExercises={exerciseList.length}
          />
        );

      case "rest":
        return (
          <RestView
            timer={timer}
            onNext={handleNext}
            onBack={handleBack}
            onPauseToggle={togglePause}
            isPaused={isPaused}
          />
        );

      case "exit":
        return <ExitProgramView />;

      case "finished":
        return (
          <FinishedProgramView
            totalTime={totalTimeElapsed}
            completedCount={completedExercises.length}
          />
        );

      default:
        return programSummaryView;
    }
  };

  return isDesktop ? (
    <DoubleScreenLayout noPadding>
      {programSummaryView}
      <section className="main-program-view">{renderMainProgramView()}</section>
    </DoubleScreenLayout>
  ) : (
    renderMainProgramView()
  );
};

export default ProgramPage;
