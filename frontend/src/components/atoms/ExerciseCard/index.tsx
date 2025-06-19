import type { Exercise } from "@graphql/__generated__/schema";
import { CheckIcon } from "@utils/icon-list/iconList";
import { convertSecondsToMin } from "@utils/timeUtils";
import "./ExerciseCard.scss";

type ExerciseCardType = {
  exercise: Exercise;
  finished?: boolean;
};

const ExerciseCard = ({ exercise, finished }: ExerciseCardType) => {
  const convertedDuration = convertSecondsToMin(exercise?.duration);
  const imageBasePath = `${import.meta.env.VITE_URL_BACK}/${import.meta.env.VITE_IMAGE_GIF}`;
  const imageUrl = exercise?.img_src
    ? `${imageBasePath}/${exercise.img_src}`
    : "";

  return (
    <div className="exercise-card">
      <div className="exercise-card__img-header-container">
        <div className="exercise-card__image-container">
          <img
            src={imageUrl}
            alt={exercise?.name}
            className="exercise-card__image"
          />
        </div>
        <div className="exercise-card__header">
          <span>{exercise?.name}</span>
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
