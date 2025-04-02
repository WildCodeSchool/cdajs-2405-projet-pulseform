import "./ProgramdoneCard.scss";

export function ProgramDoneCard({
  program,
}: {
  program: { title: string; date: string; time: string };
}) {
  return (
    <button className="program-done-card">
      <div>
        <p>{program.title}</p>
        <p>{program.date}</p>
      </div>
      <div>{program.time}</div>
    </button>
  );
}
