import { useState } from "react";

import ChartSlider from "@components/atoms/ChartSlider";
import MobileBodyLayout from "@components/atoms/Layout/MobileBodyLayout";
import ShortCalendar from "@components/atoms/ShortCalendar";
import ExercicesChart from "@components/molecules/ExercicesChart";
import WeightChart from "@components/molecules/WeightChart";
import { DashBoardView, HistoryView } from "./Views";

import "./UserProfileView.scss";
import Ribbon from "@components/atoms/Ribbon";
import { useUser } from "@context/UserContext";
import { useGetUserById } from "@hooks/useUsers";
import { GetHistoryEndDateProgramByUserId } from "@hooks/useUsers";
import { useTranslation } from "react-i18next";

type UserProfileViewType = {
  isDesktop: boolean;
};

const UserProfileView = ({ isDesktop }: UserProfileViewType) => {
  const { user } = useUser();
  const userId = Number(user?.id);
  const { t } = useTranslation();

  const { userById } = useGetUserById(userId);
  const { historyEndDateProgram } = GetHistoryEndDateProgramByUserId(userId);

  const [isHistoryView, setIsHistoryView] = useState(false);

  const handleHistoryView = () => {
    setIsHistoryView(!isHistoryView);
  };

  return (
    <div className="user-profile-view-container">
      {userById && <DashBoardView user={userById} isDesktop={isDesktop} />}
      <MobileBodyLayout>
        {isHistoryView && <HistoryView />}
        {/* apparait onClick et remplace DashBoardView */}
        <div className="user-profile-view-container__short-calendar">
          <div className="user-profile-view-container__short-calendar__container">
            <p className="user-profile-view-container__short-calendar__container__title">
              {t("WEEKLY_SUMMARY")}
            </p>
            <button
              type="button"
              onClick={handleHistoryView}
              className="user-profile-view-container__short-calendar__container__label"
            >
              {t("SEE_MORE")}
            </button>
          </div>
          {userId && <ShortCalendar endDate={historyEndDateProgram} />}
        </div>
        <div className="user-profile-view-container__ribbon">
          {historyEndDateProgram && <Ribbon endDate={historyEndDateProgram} />}
        </div>
        <ChartSlider
          charts={[
            <WeightChart key="weight-chart" userId={userId} />,
            <ExercicesChart key="exercices-chart" userId={userId} />,
          ]}
        />
      </div>
    </div>
  );
};

export default UserProfileView;
