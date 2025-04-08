// import ExerciseStepsLayout from "@components/atoms/ExerciseStepsLayout";
// import type { Exercise } from "@graphql/__generated__/schema";

// import "./CurrentExerciseView.scss";
// import ProgressBar from "@components/atoms/ProgressBar";

// type CurrentExerciseViewType = {
//   exercise: Exercise;
// };

// const CurrentExerciseView = ({ exercise }: CurrentExerciseViewType) => {
//   return (
//     <ExerciseStepsLayout
//       header={
//         <div className="current-exercise-view__header">
//           <span>{exercise.name}</span>
//         </div>
//       }
//       body={
//         <div className="current-exercise-view__body">
//           <img
//             src={exercise.img_src || ""}
//             alt={exercise.name}
//             className="current-exercise-view-image"
//           />
//         </div>
//       }
//       footer={
//         <div className="current-exercise-view__footer">
//           <span>{exercise.description}</span>
//           <span>{exercise.duration} seconds</span>
//           <ProgressBar
//             duration={exercise.duration}
//             onComplete={() => {
//               console.log("Exercise completed");
//             }}
//           />
//         </div>
//       }
//     />
//   );
// };

// export default CurrentExerciseView;

import ExerciseStepsLayout from "@components/atoms/ExerciseStepsLayout";
import ProgressBar from "@components/atoms/ProgressBar";
import type { Exercise } from "@graphql/__generated__/schema";

import "./CurrentExerciseView.scss";

type CurrentExerciseViewProps = {
  exercise: Exercise;
  timer: number;
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
  onNext,
  onBack,
  onPauseToggle,
  isPaused,
  currentIndex,
  totalExercises,
}: CurrentExerciseViewProps) => {
  return (
    <ExerciseStepsLayout
      header={
        <div className="current-exercise-view__header">
          <span>{exercise.name}</span>
          <span>
            Exercise {currentIndex + 1} / {totalExercises}
          </span>
        </div>
      }
      body={
        <div className="current-exercise-view__body">
          <img
            src={exercise.img_src || ""}
            alt={exercise.name}
            className="current-exercise-view-image"
          />
        </div>
      }
      footer={
        <div className="current-exercise-view__footer">
          <span>{exercise.description}</span>
          <ProgressBar
            duration={exercise.duration}
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
