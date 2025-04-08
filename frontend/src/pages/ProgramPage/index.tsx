import DoubleScreenLayout from "@components/atoms/Layout/DoubleScreenLayout";
import { useEffect, useState } from "react";
import {
  CurrentExerciseView,
  ExitProgramView,
  FinishedProgramView,
  ProgramSummaryView,
  RestView,
  StartProgramView,
} from "./Views";

import "./ProgramPage.scss";

const ProgramPage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [currentView, setCurrentView] = useState("ProgramSummaryView");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderMobileView = () => {
    switch (currentView) {
      case "CurrentExerciseView":
        return (
          <CurrentExerciseView
          //  onNext={() => setCurrentView("RestView")}
          />
        );
      case "RestView":
        return (
          <RestView
          //  onNext={() => setCurrentView("ExitProgramView")}
          />
        );
      case "ExitProgramView":
        return (
          <ExitProgramView
          //  onNext={() => setCurrentView("FinishedProgramView")}
          />
        );
      case "FinishedProgramView":
        return <FinishedProgramView />;
      default:
        return (
          <ProgramSummaryView
            isDesktop={isDesktop}
            onStartProgram={() => setCurrentView("CurrentExerciseView")}
          />
        );
    }
  };

  return (
    <>
      {isDesktop ? (
        <>
          <DoubleScreenLayout>
            <ProgramSummaryView isDesktop={isDesktop} />
            {/* colonne de gauche de l'écran avec liste des exos reste visible tout le temps pendant le process*/}
            <section>
              <StartProgramView />
              <CurrentExerciseView />
              {/* colonne de droite de l'écran qui fait défiler les vues avec un state*/}
              <RestView />
              <ExitProgramView />
              <FinishedProgramView />
            </section>
          </DoubleScreenLayout>
        </>
      ) : (
        <>{renderMobileView()}</>

        // <>
        //   <ProgramSummaryView isDesktop={isDesktop} />
        //   {/* on fait défiler une à une les vues avec un state*/}

        //   {/* on fait défiler une à une les vues avec un state*/}
        //   <MobileBodyLayout>
        //     <CurrentExerciseView />
        //     <RestView />
        //     <ExitProgramView />
        //     <FinishedProgramView />
        //   </MobileBodyLayout>
        // </>
      )}
    </>
  );
};

export default ProgramPage;
