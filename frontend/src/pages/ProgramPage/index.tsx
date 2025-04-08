// import DoubleScreenLayout from "@components/atoms/Layout/DoubleScreenLayout";
// import { useEffect, useState } from "react";
// import {
//   CurrentExerciseView,
//   ExitProgramView,
//   FinishedProgramView,
//   ProgramSummaryView,
//   RestView,
//   StartProgramView,
// } from "./Views";

// import "./ProgramPage.scss";
// import { useGetProgramById } from "@hooks/usePrograms";
// import { useParams } from "react-router-dom";

// const ProgramPage = () => {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
//   const [currentView, setCurrentView] = useState("ProgramSummaryView");

//   const { id } = useParams<{ id: string }>();
//   const programId = Number(id);
//   const { loading, error, program } = useGetProgramById(programId);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;
//   if (!program) return <p>No program found</p>;

//   const exerciseList = program.exercises;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 768);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const renderMobileView = () => {
//     switch (currentView) {
//       case "CurrentExerciseView":
//         return (
//           <CurrentExerciseView
//           //  onNext={() => setCurrentView("RestView")}
//           />
//         );
//       case "RestView":
//         return (
//           <RestView
//           //  onNext={() => setCurrentView("ExitProgramView")}
//           />
//         );
//       case "ExitProgramView":
//         return (
//           <ExitProgramView
//           //  onNext={() => setCurrentView("FinishedProgramView")}
//           />
//         );
//       case "FinishedProgramView":
//         return <FinishedProgramView />;
//       default:
//         return (
//           <ProgramSummaryView
//             isDesktop={isDesktop}
//             onStartProgram={() => setCurrentView("CurrentExerciseView")}
//           />
//         );
//     }
//   };

//   return (
//     <>
//       {isDesktop ? (
//         <>
//           <DoubleScreenLayout>
//             <ProgramSummaryView isDesktop={isDesktop} />
//             {/* colonne de gauche de l'écran avec liste des exos reste visible tout le temps pendant le process*/}
//             <section>
//               <StartProgramView />
//               <CurrentExerciseView />
//               {/* colonne de droite de l'écran qui fait défiler les vues avec un state*/}
//               <RestView />
//               <ExitProgramView />
//               <FinishedProgramView />
//             </section>
//           </DoubleScreenLayout>
//         </>
//       ) : (
//         <>{renderMobileView()}</>

//         // <>
//         //   <ProgramSummaryView isDesktop={isDesktop} />
//         //   {/* on fait défiler une à une les vues avec un state*/}

//         //   {/* on fait défiler une à une les vues avec un state*/}
//         //   <MobileBodyLayout>
//         //     <CurrentExerciseView />
//         //     <RestView />
//         //     <ExitProgramView />
//         //     <FinishedProgramView />
//         //   </MobileBodyLayout>
//         // </>
//       )}
//     </>
//   );
// };

// export default ProgramPage;
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

const REST_DURATION = 20;

const ProgramPage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [currentView, setCurrentView] = useState<
    "summary" | "start" | "exercise" | "rest" | "exit" | "finished"
  >(isDesktop ? "start" : "summary");

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { id } = useParams<{ id: string }>();
  const programId = Number(id);
  const { loading, error, program } = useGetProgramById(programId);

  const exerciseList = program?.exercises || [];
  const currentExercise = exerciseList[currentExerciseIndex];

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 768;
      setIsDesktop(isNowDesktop);
      setCurrentView(isNowDesktop ? "start" : "summary");
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
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, currentView]);

  const startExercise = useCallback(() => {
    setTimer(currentExercise?.duration || 30);
    setCurrentView("exercise");
  }, [currentExercise]);

  const startRest = useCallback(() => {
    setTimer(REST_DURATION);
    setCurrentView("rest");
  }, []);

  const handleStepComplete = () => {
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

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex((prev) => prev - 1);
      startExercise();
    }
  };

  const handleNext = () => {
    if (currentExerciseIndex + 1 < exerciseList.length) {
      setCurrentExerciseIndex((prev) => prev + 1);
      startExercise();
    } else {
      setCurrentView("finished");
    }
  };

  const togglePause = () => setIsPaused((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!program) return <p>No program found</p>;

  const renderMobileView = () => {
    switch (currentView) {
      case "exercise":
        return (
          <CurrentExerciseView
            exercise={currentExercise}
            timer={timer}
            onBack={handleBack}
            onNext={handleNext}
            onPauseToggle={togglePause}
            isPaused={isPaused}
            currentIndex={currentExerciseIndex}
            totalExercises={exerciseList.length}
          />
        );
      case "rest":
        return <RestView timer={timer} />;
      case "finished":
        return <FinishedProgramView />;
      default:
        return (
          <ProgramSummaryView
            isDesktop={false}
            onStartProgram={startExercise}
          />
        );
    }
  };

  const renderDesktopView = () => (
    <DoubleScreenLayout>
      <ProgramSummaryView isDesktop />
      <section>
        {currentView === "start" && (
          <StartProgramView onStart={startExercise} />
        )}
        {currentView === "exercise" && (
          <CurrentExerciseView
            exercise={currentExercise}
            timer={timer}
            onNext={handleNext}
            onBack={handleBack}
            onPauseToggle={togglePause}
            isPaused={isPaused}
            currentIndex={currentExerciseIndex}
            totalExercises={exerciseList.length}
          />
        )}
        {currentView === "rest" && <RestView timer={timer} />}
        {currentView === "exit" && <ExitProgramView />}
        {currentView === "finished" && <FinishedProgramView />}
      </section>
    </DoubleScreenLayout>
  );

  return isDesktop ? renderDesktopView() : renderMobileView();
};

export default ProgramPage;
