import { useNavigate } from "react-router-dom";
import "./ProgramdoneCard.scss";

export type ProgramDoneCardType = {
  id: number;
  name: string;
  date: string;
  total_duration: number;
};

export function ProgramDoneCard({ program }: { program: ProgramDoneCardType }) {
  const navigate = useNavigate();

  return (
    <button className="program-done-card" onClick={() => navigate("/signup")}>
      <div className="program-done-card__details">
        <p className="program-done-card__details__name">{program.name}</p>
        <p className="program-done-card__details__date">{program.date}</p>
      </div>
      <div>{program.total_duration}min</div>
    </button>
  );
}
