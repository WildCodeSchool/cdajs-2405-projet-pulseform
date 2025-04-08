import DurationLabel from "@components/atoms/DurationLabel";
import FlamesFitnessLevelLabel from "@components/atoms/FlamesFitnessLevelLabel";
import type { Program } from "@graphql/__generated__/schema";
import { convertSecondsToMinRounded } from "@utils/timeUtils";
import { useTranslation } from "react-i18next";

import "./ProgramSubHeader.scss";

type ProgramSubHeaderType = {
  program: Program;
  withExercises?: boolean;
};

const ProgramSubHeader = ({ program, withExercises }: ProgramSubHeaderType) => {
  const { t } = useTranslation();
  const convertedDuration = convertSecondsToMinRounded(program.total_duration);

  return (
    <>
      <div className="program-subheader-container">
        <FlamesFitnessLevelLabel withLabel level={program.level} />

        <div className="program-subheader-container__separator">
          {withExercises && (
            <span>
              {program.exercises?.length} {t("EXERCISES")}
            </span>
          )}
          <DurationLabel duration={convertedDuration} />
        </div>
      </div>
    </>
  );
};

export default ProgramSubHeader;
