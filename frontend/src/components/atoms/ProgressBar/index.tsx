// import { useEffect, useState, useRef } from "react";
// import { BackIcon, PauseIcon, NextIcon } from "@utils/icon-list/iconList";

// import "./ProgressBar.scss";

// type ProgressBarProps = {
//   duration: number; // in seconds
//   onComplete?: () => void;
// };

// const ProgressBar = ({ duration, onComplete }: ProgressBarProps) => {
//   const [timeLeft, setTimeLeft] = useState(duration);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const percent = (timeLeft / duration) * 100;

//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(intervalRef.current as NodeJS.Timeout);
//   }, []);

//   const startTimer = () => {
//     intervalRef.current = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(intervalRef.current as NodeJS.Timeout);
//           onComplete?.();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   };

//   const pauseTimer = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   return (
//     <div className="progress-bar">
//       <div className="progress-bar__track">
//         <div
//           className="progress-bar__fill"
//           style={{ width: `${percent}%` }}
//         />
//       </div>

//       <div className="progress-bar__controls">
//         <button type="button" aria-label="Back" onClick={() => {}}>
//           <BackIcon />
//         </button>
//         <button type="button" aria-label="Pause" onClick={pauseTimer}>
//           <PauseIcon />
//         </button>
//         <button type="button" aria-label="Next" onClick={() => {}}>
//           <NextIcon />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;
import {
  BackIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
} from "@utils/icon-list/iconList";

import "./ProgressBar.scss";

type ProgressBarProps = {
  duration: number;
  timeLeft: number;
  onBack: () => void;
  onNext: () => void;
  onPauseToggle: () => void;
  isPaused: boolean;
};

const ProgressBar = ({
  duration,
  timeLeft,
  onBack,
  onNext,
  onPauseToggle,
  isPaused,
}: ProgressBarProps) => {
  const percent = (timeLeft / duration) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar__track">
        <div className="progress-bar__fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="progress-bar__controls">
        <button type="button" aria-label="Back" onClick={onBack}>
          <BackIcon />
        </button>
        <button type="button" aria-label="Pause/Play" onClick={onPauseToggle}>
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button type="button" aria-label="Next" onClick={onNext}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
