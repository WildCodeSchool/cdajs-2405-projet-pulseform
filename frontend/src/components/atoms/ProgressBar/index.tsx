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
