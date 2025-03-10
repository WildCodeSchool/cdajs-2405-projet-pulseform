import "./ProgramdoneCard.scss";

type ProgramDoneCardType = {
  name: string;
  date: string;
  total_duration: number;
};

export function ProgramDoneCard({ program }: { program: ProgramDoneCardType }) {
  return (
    <button className="program-done-card">
      <div className="program-done-card__details">
        <p className="program-done-card__details__name">{program.name}</p>
        <p className="program-done-card__details__date">{program.date}</p>
      </div>
      <div>{program.total_duration}</div>
    </button>
  );
}
