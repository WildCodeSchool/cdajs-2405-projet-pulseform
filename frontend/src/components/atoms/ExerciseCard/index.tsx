import type { Exercise } from "@graphql/__generated__/schema";
import { CheckIcon } from "@utils/icon-list/iconList";
import { convertSecondsToMin } from "@utils/timeUtils";

import "./ExerciseCard.scss";

type ExerciseCardType = {
  exercise: Exercise;
  finished?: boolean;
};

const ExerciseCard = ({ exercise, finished }: ExerciseCardType) => {
  const convertedDuration = convertSecondsToMin(exercise.duration);

  return (
    <div className="exercise-card">
      <div className="exercise-card__img-header-container">
        <div className="exercise-card__image-container">
          <img
            src={exercise.img_src || ""}
            alt={exercise.name}
            className="exercise-card__image"
          />
        </div>
        <div className="exercise-card__header">
          <span>{exercise.name}</span>
          <span>{convertedDuration}</span>
        </div>
      </div>
      {finished && (
        <div className="exercise-card__footer">
          <CheckIcon />
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
