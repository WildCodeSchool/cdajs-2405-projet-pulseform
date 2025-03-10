import { ClockIcon } from "@assets/icons/icon-list/iconList";
import { ProgramDoneCard } from "../ProgramDoneCard";
import "./WeekDetails.scss";
import { endOfWeek, format, minutesToHours, startOfWeek } from "date-fns";
import { useGetAllProgramsQuery } from "@graphql/__generated__/schema";

export function WeekDetails() {
  // On récupère en props un userId
  // à partir du userId on va chercher l'historique getHistoryByUserId
  // à partir de l'historique, on aura les programmes
  // Il faudra faire un dictionnaire avec {[key:programId]: {program.name, program.total_duration, history.start_date}} que l'on passera à notre composant programCardDone

  // Utiliser durationLabel ? Attention gap de 8px contre 4px pour proramCard + small phone et pas body phone
  // = modifier durationLabel avec prop gap et size et voir que faire pour duration (min ou h selon duration passée en props)

  // get the current week dates
  const monday = format(
    startOfWeek(new Date(), { weekStartsOn: 1 }),
    "dd/MM/yy"
  );
  const sunday = format(endOfWeek(new Date(), { weekStartsOn: 1 }), "dd/MM/yy");
  const weekDates: string = monday + " - " + sunday;

  // query the user history
  const { loading, error, data } = useGetAllProgramsQuery();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }
  if (!data) {
    return <p>No data available</p>;
  }
  //   const programs = data.getAllPrograms;
  //   console.log(programs);

  // query the programs done during the current week
  const programs = [
    {
      name: "VMA pyramide",
      date: "03/03/2025",
      total_duration: 30,
    },
    {
      name: "Upper body",
      date: "05/03/2025",
      total_duration: 45,
    },
    {
      name: "Lower body",
      date: "07/03/2025",
      total_duration: 60,
    },
  ];

  // get the total duration for the week
  let weekDuration: number = 0;
  for (const program of programs) {
    weekDuration += program.total_duration;
  }
  weekDuration = minutesToHours(weekDuration);
  console.log(weekDuration);

  return (
    <div className="week-details">
      <div className="week-details__header">
        <p className="week-details__header__dates">{weekDates}</p>
        <div className="week-details__header__details">
          <div className="week-details__header__details__duration">
            <ClockIcon />
            <p>3h00</p>
          </div>
          <p>{programs.length} séances</p>
        </div>
      </div>
      <div className="week-details__programs">
        {programs.map((program) => (
          <ProgramDoneCard program={program} />
        ))}
      </div>
    </div>
  );
}
