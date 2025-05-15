import { FitnessLevel } from "@graphql/__generated__/schema";
import { FlameIcon } from "@utils/icon-list/iconList";
import { useTranslation } from "react-i18next";
import "./FlamesFitnessLevelLabel.scss";

type FlamesFitnessLevelLabelProps = {
  withLabel?: boolean;
  level: FitnessLevel;
};

const FlamesFitnessLevelLabel = ({
  withLabel,
  level,
}: FlamesFitnessLevelLabelProps) => {
  const { t } = useTranslation();

  const flamesCount =
    {
      [FitnessLevel.Beginner]: 1,
      [FitnessLevel.Intermediate]: 2,
      [FitnessLevel.Advanced]: 3,
    }[level] || 1;

  return (
    <div className="flames-fitness-level-container">
      {withLabel && (
        <span className="fitness-level-label">{t(`${level}`)}</span>
      )}
      <div className="flames-list">
        {Array.from({ length: flamesCount }, (_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey : the order does not matter here (we're only displaying the same flames N times)
          <FlameIcon key={`${level}-${index}`} />
        ))}
      </div>
    </div>
  );
};
export default FlamesFitnessLevelLabel;
