import Confetti from "react-confetti";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import BasicButton from "@components/atoms/BasicButton";
import DurationLabel from "@components/atoms/DurationLabel";
import ExerciseStepsLayout from "@components/atoms/ExerciseStepsLayout";

import girlWithBall from "@assets/images/girl-standing-ball.svg";
import { convertSecondsToMinSec } from "@utils/timeUtils";
import "./FinishedProgramView.scss";
import { ToastContainer } from "react-toastify";

type FinishedProgramViewType = {
  totalTime: number;
  completedCount: number;
};

const FinishedProgramView = ({
  totalTime,
  completedCount,
}: FinishedProgramViewType) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const convertedTime = convertSecondsToMinSec(totalTime);

  return (
    <>
      <Confetti numberOfPieces={400} recycle={false} />
      <ToastContainer />
      <ExerciseStepsLayout
        header={
          <div className="finished-program-view__header">
            <p>{t("FINISHED_PROGRAM_MESSAGE")}</p>
            <div className="recap-container">
              <DurationLabel duration={convertedTime} />
              <span className="recap-text">
                {completedCount}{" "}
                {completedCount > 1 ? t("EXERCISES") : t("EXERCISE")}
              </span>
            </div>
          </div>
        }
        body={
          <div className="finished-program-view__body">
            <img
              src={girlWithBall || ""}
              alt="finished Program"
              className="finished-program-view-image"
            />
          </div>
        }
        footer={
          <div className="finished-program-view__footer">
            <BasicButton onClick={() => navigate("/home")}>
              {t("BACK_TO_HOME")}
            </BasicButton>
          </div>
        }
      />
    </>
  );
};

export default FinishedProgramView;
