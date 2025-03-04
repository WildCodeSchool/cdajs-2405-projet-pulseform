import type { Exercise } from "@graphql/__generated__/schema";

type ExerciseCardProps = {
  exercise: Exercise; // Correctly use the Exercise type here
};
const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div className="exercise-card">
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
    </div>
  );
};

export default ExerciseCard;
