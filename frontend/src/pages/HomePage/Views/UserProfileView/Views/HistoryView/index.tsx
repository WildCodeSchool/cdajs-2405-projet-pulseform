import { useTranslation } from "react-i18next";

import ChartSlider from "@components/atoms/ChartSlider";
import ExercicesChart from "@components/molecules/ExercicesChart";
import WeekDetails from "@components/molecules/WeekDetails";
import WeightChart from "@components/molecules/WeightChart";

import "./HistoryView.scss";
import { useGetUserExercicesForChart } from "@hooks/useUsers";
import type { HistoryViewProps } from "./HistoryView.type";

const HistoryView = ({
  handleHistoryView,
  isDesktop,
  user,
}: HistoryViewProps) => {
  const { t } = useTranslation();
  const userId = Number(user?.id);

  const { userExercicesChart } = useGetUserExercicesForChart(userId);

  const rawUserExercicesChart = userExercicesChart ?? [];

  const parsedUserExercicesChart = rawUserExercicesChart.map((item) => ({
    end_date: item?.end_date ?? "",
    program: {
      tags:
        item?.program?.tags?.map((tag) => ({
          name: tag?.name ?? "",
        })) ?? [],
    },
  }));

  return (
    <div className="HistoryView">
      {isDesktop && (
        <div className="user-profile-view__container__short-calendar__container">
          <p className="user-profile-view__container__short-calendar__container__title">
            {t("HISTORY")}
          </p>
          <button
            type="button"
            onClick={handleHistoryView}
            className="user-profile-view__container__short-calendar__container__label"
          >
            {t("BACK")}
          </button>
        </div>
      )}
      <WeekDetails />
      {!isDesktop && (
        <ChartSlider
          charts={[
            <WeightChart key="weight-chart" dataWeight={user?.weights || []} />,
            <ExercicesChart
              key="exercices-chart"
              userExercicesChart={parsedUserExercicesChart}
            />,
          ]}
        />
      )}
    </div>
  );
};

export default HistoryView;
