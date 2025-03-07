import type { Program } from "@graphql/__generated__/schema";
import DurationLabel from "../DurationLabel";
import FlamesFitnessLevel from "../FlamesFitnessLevelLabel";
import "@assets/_variables.scss";
import "./ProgramCard.scss";

type ProgramCardProps = {
  program: Program;
};

const imgSrc =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dt";
const ProgramCard = ({ program }: ProgramCardProps) => {
  return (
    <div className="program-card">
      <img
        src={imgSrc || ""}
        alt={program.name}
        className="program-card__image"
      />
      <div className="program-card__overlay">
        <div className="program-card__header">
          <DurationLabel duration={program.total_duration} />
          <FlamesFitnessLevel level={program.level} />
        </div>
        <div className="program-card__title_container">
          <h3 className="program-card__title">{program.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
