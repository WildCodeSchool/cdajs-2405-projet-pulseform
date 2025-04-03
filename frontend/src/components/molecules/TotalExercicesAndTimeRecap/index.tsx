import { useTranslation } from "react-i18next";
import "./TotalExercicesAndTimeRecap.scss";

type TotalExercicesAndTimeRecapType = {
  exercises: number;
  duration: string;
};

const TotalExercicesAndTimeRecap: React.FC<TotalExercicesAndTimeRecapType> = ({
  exercises,
  duration,
}) => {
  const { t } = useTranslation();

  return (
    <div className="recap-container">
      <div className="block-container">
        <div className="block__left" />
      </div>
      <div className="recap-content-container-first-background">
        <div className="recap-content-container">
          <div className="recap-content">
            <div className="recap-item">
              <span className="recap-value">{exercises || 0}</span>
              <span className="recap-label">{t("TOTAL_EXERCISES_SPENT")}</span>
            </div>
            <div className="recap-item">
              <span className="recap-value">{duration || "0H00"}</span>
              <span className="recap-label">{t("TOTAL_TIME_SPENT")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container">
        <div className="block__right" />
      </div>
    </div>
  );
};

export default TotalExercicesAndTimeRecap;
