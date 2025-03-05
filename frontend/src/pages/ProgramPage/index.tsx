import {
  CurrentExerciseView,
  ExerciseListView,
  ExitProgramView,
  FinishedProgramView,
  RestView,
  StartProgramView,
} from "./Views";
import "./ProgramPage.scss";
const ProgramPage = () => {
  return (
    <>
      {/*if screen size = phone */}
      <section>
        <ExerciseListView />{" "}
        {/* on fait défiler une à une les vues avec un state*/}
        <CurrentExerciseView />
        <RestView />
        <ExitProgramView />
        <FinishedProgramView />
      </section>

      {/*if screen size = desktop */}
      <section>
        <ExerciseListView />{" "}
        {/* colonne de gauche de l'écran avec liste des exos reste visible tout le temps pendant le process*/}
      </section>
      <section>
        <StartProgramView />
        <CurrentExerciseView />{" "}
        {/* colonne de droite de l'écran qui fait défiler les vues avec un state*/}
        <RestView />
        <ExitProgramView />
        <FinishedProgramView />
      </section>
    </>
  );
};

export default ProgramPage;
