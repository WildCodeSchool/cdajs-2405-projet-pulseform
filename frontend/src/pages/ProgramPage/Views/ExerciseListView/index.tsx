import type { Exercise } from "@graphql/__generated__/schema";
// import ExerciseListDesktopView from "./ExerciseListDesktopView/ExerciseListDesktopView";
// import ExerciseListMobileView from "./ExerciseListMobileView/ExerciseListMobileView";

import "./ExerciseListView.scss";
import ExerciseCard from "@components/atoms/ExerciseCard";

type ExercicesListViewType = {
  isDesktop: boolean;
  exercises: Exercise[];
};

// biome-ignore lint/correctness/noUnusedVariables: en cours de dev
const ExerciseListView = ({ isDesktop, exercises }: ExercicesListViewType) => {
  return (
    <>
      <div className="exercise-list-container">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      {/* {isDesktop ? (
        <div>
          <ExerciseListDesktopView />
        </div>
      ) : (
        <div>
          <ExerciseListMobileView />
        </div>
      )} */}
    </>
  );
};

export default ExerciseListView;
