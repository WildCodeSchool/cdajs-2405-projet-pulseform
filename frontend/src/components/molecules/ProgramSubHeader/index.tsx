import DurationLabel from "@components/atoms/DurationLabel";
import FlamesFitnessLevelLabel from "@components/atoms/FlamesFitnessLevelLabel";
import type { Program } from "@graphql/__generated__/schema";
import { convertSecondsToMinRounded } from "@utils/timeUtils";
import "./ProgramSubHeader.scss";

type ProgramSubHeaderType = {
  program: Program;
};

const ProgramSubHeader = ({ program }: ProgramSubHeaderType) => {
  const convertedDuration = convertSecondsToMinRounded(program.total_duration);

  return (
    <>
      <div className="program-subheader-container">
        <FlamesFitnessLevelLabel withLabel level={program.level} />
        <DurationLabel duration={convertedDuration} />
      </div>
    </>
  );
};

export default ProgramSubHeader;
