import ChartSlider from "@components/atoms/ChartSlider";
import Ribbon from "@components/atoms/Ribbon";
import ShortCalendar from "@components/atoms/ShortCalendar";
import ExercicesChart from "@components/molecules/ExercicesChart";
import WeightChart from "@components/molecules/WeightChart";

import { GetHistoryEndDateProgramByUserId } from "@hooks/useUsers";

import "./ChartsView.scss";

type ChartsViewType = {
  userId: number;
};
const ChartsView = ({ userId }: ChartsViewType) => {
  const { historyEndDateProgram } = GetHistoryEndDateProgramByUserId(userId);

  return (
    <section className="user-charts-view">
      <div className="user-charts-view__short-calendar">
        {userId && <ShortCalendar endDate={historyEndDateProgram} />}
      </div>
      <div className="user-charts-view__ribbon">
        {historyEndDateProgram && <Ribbon endDate={historyEndDateProgram} />}
      </div>
      <ChartSlider
        charts={[
          <WeightChart key="weight-chart" userId={userId} />,
          <ExercicesChart key="exercices-chart" userId={userId} />,
        ]}
      />
    </section>
  );
};
export default ChartsView;
