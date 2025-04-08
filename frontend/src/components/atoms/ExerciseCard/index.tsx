import type { Exercise } from "@graphql/__generated__/schema";
import "./ExerciseCard.scss";

type ExerciseCardType = {
  exercise: Exercise;
};

const ExerciseCard = ({ exercise }: ExerciseCardType) => {
  return (
    <div className="exercise-card">
      <div className="exercise-card__image-container">
        <img
          src={exercise.img_src || ""}
          alt={exercise.name}
          className="exercise-card__image"
        />
      </div>
      <div className="exercise-card__header">
        <h2>{exercise.name}</h2>
        <span>{exercise.duration}</span>
      </div>
    </div>
  );
};

export default ExerciseCard;
