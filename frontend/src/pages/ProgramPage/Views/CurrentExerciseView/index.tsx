import ExerciseStepsLayout from "@components/atoms/ExerciseStepsLayout";
import ProgressBar from "@components/atoms/ProgressBar";
import type { Exercise } from "@graphql/__generated__/schema";

import FlipTimer from "@components/atoms/FlipTimer";
import "./CurrentExerciseView.scss";
import { useTranslation } from "react-i18next";

type CurrentExerciseViewProps = {
  exercise: Exercise;
  timer: number;
  duration: number;
  onNext: () => void;
  onBack: () => void;
  onPauseToggle: () => void;
  isPaused: boolean;
  currentIndex: number;
  totalExercises: number;
};

const CurrentExerciseView = ({
  exercise,
  timer,
  duration,
  onNext,
  onBack,
  onPauseToggle,
  isPaused,
  currentIndex,
  totalExercises,
}: CurrentExerciseViewProps) => {
  const imageBasePath = `${import.meta.env.VITE_URL_BACK}/${
    import.meta.env.VITE_IMAGE_GIF
  }`;
  const imageUrl = exercise?.img_src
    ? `${imageBasePath}/${exercise.img_src}`
    : "";

  const { t } = useTranslation();

  return (
    <ExerciseStepsLayout
      header={
        <div className="current-exercise-view__header">
          <span>{exercise?.name}</span>
        </div>
      }
      body={
        <div className="current-exercise-view__body">
          <img
            src={imageUrl}
            alt={exercise?.name}
            className="current-exercise-view__body-image"
          />
        </div>
      }
      footer={
        <div className="current-exercise-view__footer">
          <span>
            {t("EXERCISE")} {currentIndex + 1} / {totalExercises}
          </span>
          <FlipTimer seconds={timer} />
          <ProgressBar
            duration={duration}
            timeLeft={timer}
            onNext={onNext}
            onBack={onBack}
            onPauseToggle={onPauseToggle}
            isPaused={isPaused}
          />
        </div>
      }
    />
  );
};

export default CurrentExerciseView;
