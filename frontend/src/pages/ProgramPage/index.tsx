import {
  CurrentExerciseView,
  ExerciseListView,
  ExitProgramView,
  FinishedProgramView,
  RestView,
  StartProgramView,
} from "./Views";
import "./ProgramPage.scss";
import { useEffect, useState } from "react";
const ProgramPage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <section>
          <ExerciseListView />
          {/* colonne de gauche de l'écran avec liste des exos reste visible tout le temps pendant le process*/}
          <section>
            <StartProgramView />
            <CurrentExerciseView />
            {/* colonne de droite de l'écran qui fait défiler les vues avec un state*/}
            <RestView />
            <ExitProgramView />
            <FinishedProgramView />
          </section>
        </section>
      ) : (
        <section>
          <ExerciseListView />
          {/* on fait défiler une à une les vues avec un state*/}
          <CurrentExerciseView />
          <RestView />
          <ExitProgramView />
          <FinishedProgramView />
        </section>
      )}
    </>
  );
};

export default ProgramPage;
