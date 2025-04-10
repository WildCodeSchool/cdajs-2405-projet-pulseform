import ExerciseStepsLayout from "@components/atoms/ExerciseStepsLayout";
import ProgressBar from "@components/atoms/ProgressBar";
import type { Exercise } from "@graphql/__generated__/schema";

import FlipTimer from "@components/atoms/FlipTimer";
import "./CurrentExerciseView.scss";

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
  console.log("exercise", exercise);
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
            src={exercise.img_src || ""}
            alt={exercise?.name}
            className="current-exercise-view__body-image"
          />
        </div>
      }
      footer={
        <div className="current-exercise-view__footer">
          <span>
            Exercise {currentIndex + 1} / {totalExercises}
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
