import { useUser } from "@context/UserContext";
import { ClockIcon } from "@utils/icon-list/iconList";
import { convertSecondsToHoursMin } from "@utils/timeUtils";
import { endOfWeek, format, startOfWeek } from "date-fns";
import { useTranslation } from "react-i18next";
import { ProgramDoneCard, type ProgramLight } from "../ProgramDoneCard";

import "./WeekDetails.scss";
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

  // query programs done during the current week
  //   const { histories } = useHistoryByUserId(userId);
  //   console.log("histories");
  //   console.log(histories);

  const { histories } = useUserHistoryByDatesRange(userId, startDate, endDate);
  console.log("histories");
  console.log(histories);

  const programsDatas: ProgramLight[] = [];
  const programs = [];
  if (histories) {
    for (const history of histories) {
      if (history.program && history.end_date) {
        programsDatas.push({
          id: history.program.id,
          name: history.program.name,
          total_duration: history.program.total_duration
            ? history.program.total_duration
            : 0,
          end_date: history.end_date,
        });
        programs.push(history.program);
      }
    }
  }

  // get the total duration and total exercices for the week
  let weekDurationInSec = 0;
  for (const program of programs) {
    if (program.total_duration) {
      weekDurationInSec += program.total_duration;
    }
  }
  const weekDuration = convertSecondsToHoursMin(weekDurationInSec);

  return (
    <div className="week-details">
      <div className="week-details__header">
        <p className="week-details__header__dates">{weekDates}</p>
        <div className="week-details__header__details">
          <div className="week-details__header__details__duration">
            <ClockIcon />
            <p>{weekDuration}</p>
          </div>
          <p>
            {programs.length}{" "}
            {programs.length > 1 ? t("PROGRAMS") : t("PROGRAM")}
          </p>
        </div>
      </div>
      <div className="week-details__programs">
        {programsDatas.map((program) => (
          <ProgramDoneCard
            key={program.id}
            program={program}
            date={program.end_date}
          />
        ))}
      </div>
    </div>
  );
};

export default WeekDetails;
