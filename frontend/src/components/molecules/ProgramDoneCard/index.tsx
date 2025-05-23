import { convertSecondsToMinRounded } from "@utils/timeUtils";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./ProgramDoneCard.scss";

export type ProgramLight = {
  id: string;
  name: string;
  end_date: Date;
  total_completed_exercises: number;
  total_time_spent: number;
};

type ProgramDoneCardType = {
  program: ProgramLight;
};

export function ProgramDoneCard({ program }: ProgramDoneCardType) {
  const navigate = useNavigate();
  const convertedDuration = convertSecondsToMinRounded(
    program?.total_time_spent,
  );
  const program_date = format(new Date(program.end_date), "dd/MM/yy");

  return (
    <button
      className="program-done-card"
      type="button"
      onClick={() => navigate("/signup")}
    >
      <div className="program-done-card__details">
        <p className="program-done-card__details__name">{program?.name}</p>
        <p className="program-done-card__details__date">{program_date}</p>
      </div>
      <div>{convertedDuration || ""}</div>
    </button>
  );
}
