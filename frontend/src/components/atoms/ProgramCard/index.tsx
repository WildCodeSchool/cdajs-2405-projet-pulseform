import type { Program } from "@graphql/__generated__/schema";
import DurationLabel from "../DurationLabel";
import FlamesFitnessLevel from "../FlamesFitnessLevelLabel";
import "@assets/_variables.scss";
import "./ProgramCard.scss";

type ProgramCardProps = {
  program: Program;
};

const ProgramCard = ({ program }: ProgramCardProps) => {
  return (
    <div className="program-card">
      <img
        src={program.image || ""}
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
