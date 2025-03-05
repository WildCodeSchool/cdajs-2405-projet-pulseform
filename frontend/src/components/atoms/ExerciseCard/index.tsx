import { ClockIcon, FlameIcon } from "@assets/icons/icon-list/iconList";

import type { Exercise } from "@graphql/__generated__/schema";

type ExerciseCardProps = {
  exercise: Exercise;
};

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div className="exercise-card">
      <img
        src={exercise.img_src || ""}
        alt={exercise.name}
        className="exercise-card__image"
      />
      <div className="exercise-card__overlay">
        <div className="exercise-card__info">
          <ClockIcon />
          <span>{exercise.duration}</span>
          <FlameIcon />
        </div>
        <h3 className="exercise-card__title">{exercise.name}</h3>
      </div>
    </div>
  );
};

export default ExerciseCard;
