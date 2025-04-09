import { useTranslation } from "react-i18next";

import ExerciseStepsLayout from "@components/atoms/ExerciseStepsLayout";

import restManBlob from "@assets/images/rest-man-blob.svg";
import "./RestView.scss";
import ProgressBar from "@components/atoms/ProgressBar";

type RestViewType = {
  timer: number;
  onNext: () => void;
  onBack: () => void;
  onPauseToggle: () => void;
  isPaused: boolean;
};

const RestView = ({
  timer,
  onBack,
  onNext,
  onPauseToggle,
  isPaused,
}: RestViewType) => {
  const { t } = useTranslation();

  return (
    <div>
      <ExerciseStepsLayout
        header={
          <div className="rest-view__header">
            <span>{t("KEEP_IT_UP")}</span>
          </div>
        }
        body={
          <div className="rest-view__body">
            <img
              src={restManBlob || ""}
              alt="Rest"
              className="rest-view-image"
            />
          </div>
        }
        footer={
          <div className="rest-view__footer">
            <span>{t("REST")}</span>
            <ProgressBar
              duration={20}
              timeLeft={timer}
              onNext={onNext}
              onBack={onBack}
              onPauseToggle={onPauseToggle}
              isPaused={isPaused}
            />
            <span>{timer} seconds left</span>
          </div>
        }
      />
    </div>
  );
};

export default RestView;
