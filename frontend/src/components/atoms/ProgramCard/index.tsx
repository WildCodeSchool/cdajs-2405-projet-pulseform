import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import DurationLabel from "../DurationLabel";
import FlamesFitnessLevel from "../FlamesFitnessLevelLabel";

import type { Program } from "@graphql/__generated__/schema";
import { convertSecondsToMinRounded } from "@utils/timeUtils";

import "./ProgramCard.scss";

type ProgramCardProps = {
  program: Program;
};

const ProgramCard = forwardRef<HTMLButtonElement, ProgramCardProps>(
  ({ program }, ref) => {
    const convertedDuration = convertSecondsToMinRounded(
      program.total_duration,
    );
    const navigate = useNavigate();

    return (
      <button
        type="button"
        className="program-card"
        onClick={() => navigate(`/program/${program.id}`)}
        ref={ref}
      >
        <img
          src={program?.image || ""}
          alt={program?.name || ""}
          className="program-card__image"
        />
        <div className="program-card__overlay">
          <div className="program-card__header">
            <DurationLabel duration={convertedDuration || ""} />
            <FlamesFitnessLevel level={program?.level} />
          </div>
          <div className="program-card__title_container">
            <h3 className="program-card__title">{program?.name}</h3>
          </div>
        </div>
      </button>
    );
  },
);

ProgramCard.displayName = "ProgramCard";

export default ProgramCard;
