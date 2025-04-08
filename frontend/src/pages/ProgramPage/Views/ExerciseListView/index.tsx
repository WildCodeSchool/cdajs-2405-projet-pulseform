import ExerciseCard from "@components/atoms/ExerciseCard";
import type { Exercise } from "@graphql/__generated__/schema";

import "./ExerciseListView.scss";

type ExercicesListViewType = {
  exercises: Exercise[];
};

const ExerciseListView = ({ exercises }: ExercicesListViewType) => {
  return (
    <>
      <div className="exercise-list-container">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </>
  );
};

export default ExerciseListView;
