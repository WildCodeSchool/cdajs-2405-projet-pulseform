import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  CurrentExerciseView,
  ExitProgramView,
  FinishedProgramView,
  ProgramSummaryView,
  RestView,
  StartProgramView,
} from "./Views";

import DoubleScreenLayout from "@components/atoms/Layout/DoubleScreenLayout";
import { useGetProgramById } from "@hooks/usePrograms";

import "./ProgramPage.scss";

const ProgramPage = () => {
  const REST_DURATION = 20;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [currentView, setCurrentView] = useState<
    "summary" | "start" | "exercise" | "rest" | "exit" | "finished"
  >(window.innerWidth >= 768 ? "start" : "summary");

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Track elapsd time and completed exercises
  const [totalTimeElapsed, setTotalTimeElapsed] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const { id } = useParams<{ id: string }>();
  const programId = Number(id);
  const { loading, error, program } = useGetProgramById(programId);

  const exerciseList = program?.exercises || [];
  const currentExercise = exerciseList[currentExerciseIndex];

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 768;
      setIsDesktop(isNowDesktop);
      // Don't reset currentView here!
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      isPaused ||
      currentView === "summary" ||
      currentView === "exit" ||
      currentView === "finished" ||
      currentView === "start"
    )
      return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleStepComplete();
          return 0;
        }
        // Count time only when not paused
        setTotalTimeElapsed((time) => time + 1);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, currentView]);

  const startExercise = useCallback(() => {
    setTimer(currentExercise?.duration);
    setCurrentView("exercise");
  }, [currentExercise]);

  const startRest = useCallback(() => {
    setTimer(REST_DURATION);
    setCurrentView("rest");
  }, []);

  const handleStepComplete = () => {
    if (currentView === "exercise") {
      // Only mark it complete if it ran its full course
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
      }
    }
  };

  const togglePause = () => setIsPaused((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!program) return <p>No program found</p>;

  const renderMainProgramView = () => {
    switch (currentView) {
      case "start":
        return isDesktop ? (
          <StartProgramView onStart={startExercise} />
        ) : (
          <ProgramSummaryView
            isDesktop={false}
            program={program}
            onStartProgram={startExercise}
          />
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
        return (
          <ProgramSummaryView
            isDesktop={isDesktop}
            program={program}
            onStartProgram={startExercise}
          />
        );
    }
  };

  return isDesktop ? (
    <DoubleScreenLayout>
      <ProgramSummaryView isDesktop program={program} />
      <section className="main-program-view">{renderMainProgramView()}</section>
    </DoubleScreenLayout>
  ) : (
    renderMainProgramView()
  );
};

export default ProgramPage;
