import { useState } from "react";
import { useTranslation } from "react-i18next";

import ChartSlider from "@components/atoms/ChartSlider";
import Ribbon from "@components/atoms/Ribbon";
import ShortCalendar from "@components/atoms/ShortCalendar";
import ExercicesChart from "@components/molecules/ExercicesChart";
import WeightChart from "@components/molecules/WeightChart";
import { DashBoardView, HistoryView } from "./Views";

import "./UserProfileView.scss";
import { GetHistoryEndDateProgramByUserId } from "@hooks/useUsers";

import type { UserProfileViewProps } from "./UserProfileView.type";

const UserProfileView = ({ isDesktop, user }: UserProfileViewProps) => {
  const userId = Number(user?.id);
  const { t } = useTranslation();

  const { historyEndDateProgram } = GetHistoryEndDateProgramByUserId(userId);

  const [isHistoryView, setIsHistoryView] = useState(false);

  const handleHistoryView = () => {
    setIsHistoryView(!isHistoryView);
  };

  return (
    <div className="user-profile-view">
      {user && <DashBoardView user={user} isDesktop={isDesktop} />}
      {user && (
        <div className="user-profile-view__container">
          {(!isDesktop || isHistoryView) && (
            <HistoryView
              user={user}
              handleHistoryView={handleHistoryView}
              isDesktop={isDesktop}
            />
          )}
          {!isHistoryView && isDesktop && (
            <>
              <div className="user-profile-view__container__short-calendar">
                <div className="user-profile-view__container__short-calendar__container">
                  <p className="user-profile-view__container__short-calendar__container__title">
                    {t("WEEKLY_SUMMARY")}
                  </p>
                  <button
                    type="button"
                    onClick={handleHistoryView}
                    className="user-profile-view__container__short-calendar__container__label"
                  >
                    {isHistoryView ? t("SEE_RETURN") : t("SEE_MORE")}
                  </button>
                </div>
                {userId && <ShortCalendar endDate={historyEndDateProgram} />}
              </div>
              {isHistoryView && (
                <HistoryView
                  user={user}
                  isDesktop={isDesktop}
                  handleHistoryView={handleHistoryView}
                />
              )}
              <div className="user-profile-view__container__ribbon">
                {historyEndDateProgram && (
                  <Ribbon endDate={historyEndDateProgram} />
                )}
              </div>
              <ChartSlider
                charts={[
                  <WeightChart
                    key="weight-chart"
                    dataWeight={user?.weights || []}
                  />,
                  <ExercicesChart key="exercices-chart" userId={userId} />,
                ]}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfileView;
