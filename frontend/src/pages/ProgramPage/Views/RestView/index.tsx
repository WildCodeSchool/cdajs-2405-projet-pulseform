import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ExerciseStepsLayout from "@components/atoms/ExerciseStepsLayout";
import FlipTimer from "@components/atoms/FlipTimer";
import ProgressBar from "@components/atoms/ProgressBar";

import restManBlob from "@assets/images/rest-man-blob.svg";
import "./RestView.scss";

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
  const restDuration = 20; // seconds

  const [restMessage, setRestMessage] = useState<string>("");

  useEffect(() => {
    const randomMessages = [
      t("KEEP_IT_UP_MESSAGE_1"),
      t("KEEP_IT_UP_MESSAGE_2"),
      t("KEEP_IT_UP_MESSAGE_3"),
      t("KEEP_IT_UP_MESSAGE_4"),
    ];
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    setRestMessage(randomMessages[randomIndex]);
  }, [t]);

  return (
    <ExerciseStepsLayout
      header={
        <div className="rest-view__header">
          <span>{restMessage}</span>
        </div>
      }
      body={
        <div className="rest-view__body">
          <img src={restManBlob || ""} alt="Rest" className="rest-view-image" />
        </div>
      }
      footer={
        <div className="rest-view__footer">
          <span>{t("REST")}</span>
          <FlipTimer seconds={timer} />
          <ProgressBar
            duration={restDuration}
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

export default RestView;
