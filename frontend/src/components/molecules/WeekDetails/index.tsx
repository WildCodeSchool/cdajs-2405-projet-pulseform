import { useUser } from "@context/UserContext";
import { convertSecondsToHoursMin } from "@utils/timeUtils";
import { endOfWeek, format, startOfWeek } from "date-fns";
import { useTranslation } from "react-i18next";
import { ProgramDoneCard, type ProgramLight } from "../ProgramDoneCard";

import "./WeekDetails.scss";
import DurationLabel from "@components/atoms/DurationLabel";
import WeekDetailsSkeleton from "@components/atoms/Skeleton/WeekDetailsSkeleton";
import { useUserHistoryByDatesRange } from "@hooks/useHistory";

const WeekDetails = () => {
  const { t } = useTranslation();
  const { user } = useUser();
  const userId = Number(user?.id);

  // get the current week dates
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const monday = format(startDate, "dd/MM/yy");
  const endDate = endOfWeek(new Date(), { weekStartsOn: 1 });
  const sunday = format(endDate, "dd/MM/yy");
  const weekDates: string = `${monday} - ${sunday}`;

  // get user histories with programs done during the current week
  const { loading, error, histories } = useUserHistoryByDatesRange(
    userId,
    startDate,
    endDate,
  );

  // build a programs array from user history
  const programs: ProgramLight[] = [];
  if (histories) {
    for (const history of histories) {
      if (history.program && history.end_date) {
        programs.push({
          id: history.program.id,
          name: history.program.name,
          total_completed_exercises: history.total_completed_exercises
            ? history.total_completed_exercises
            : 0,
          total_time_spent: history.total_time_spent
            ? history.total_time_spent
            : 0,
          end_date: history.end_date,
        });
      }
    }
  }

  // get the total duration for the week
  let weekDurationInSec = 0;
  for (const program of programs) {
    if (program.total_time_spent) {
      weekDurationInSec += program.total_time_spent;
    }
  }
  const weekDuration = convertSecondsToHoursMin(weekDurationInSec);
  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <WeekDetailsSkeleton />;

  return (
    <div className="week-details">
      <div className="week-details__header">
        <p className="week-details__header__dates">{weekDates}</p>
        <div className="week-details__header__details">
          <div className="week-details__header__details__duration">
            <DurationLabel duration={weekDuration} />
          </div>
          <p>
            {programs.length}{" "}
            {programs.length > 1 ? t("PROGRAMS") : t("PROGRAM")}
          </p>
        </div>
      </div>
      <div className="week-details__programs">
        {programs.map((program) => (
          <ProgramDoneCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
};

export default WeekDetails;
