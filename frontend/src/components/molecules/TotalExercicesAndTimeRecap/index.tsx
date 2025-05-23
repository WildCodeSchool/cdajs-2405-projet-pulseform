import { useTranslation } from "react-i18next";

import "./TotalExercicesAndTimeRecap.scss";
import type { GetUserByIdQuery } from "@graphql/__generated__/schema";
import { convertSecondsToHoursMin } from "@utils/timeUtils";

type TotalExercicesAndTimeRecapType = {
  user: GetUserByIdQuery["getUserById"];
};

const TotalExercicesAndTimeRecap: React.FC<TotalExercicesAndTimeRecapType> = ({
  user,
}) => {
  const { t } = useTranslation();

  const convertedTime = convertSecondsToHoursMin(user?.total_time_spent ?? 0);

  return (
    <div className="recap-container">
      <div className="block-container">
        <div className="block__left" />
      </div>
      <div className="recap-content-container-first-background">
        <div className="recap-content-container">
          <div className="recap-content">
            <div className="recap-item">
              <span className="recap-value">
                {user?.total_completed_exercises || 0}
              </span>
              <span className="recap-label">{t("TOTAL_EXERCISES_SPENT")}</span>
            </div>
            <div className="recap-item">
              <span className="recap-value">{convertedTime || "0H00"}</span>
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
