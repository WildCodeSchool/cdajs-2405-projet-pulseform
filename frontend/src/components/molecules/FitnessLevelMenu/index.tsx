import { FitnessLevel } from "@graphql/__generated__/schema";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectionButton } from "../../atoms/SelectionButton/index.";
import "./FitnessLevelMenu.scss";

type FitnessLevelMenuProps = {
  setSelectedFilters: (filters: string[]) => void;
};

function FitnessLevelMenu({ setSelectedFilters }: FitnessLevelMenuProps) {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);

  const fitnessLevels = [
    { label: t(FitnessLevel.Beginner), level: FitnessLevel.Beginner },
    { label: t(FitnessLevel.Intermediate), level: FitnessLevel.Intermediate },
    { label: t(FitnessLevel.Advanced), level: FitnessLevel.Advanced },
  ];

  const handleLevelClick = (level: FitnessLevel) => {
    setSelectedFilters([level]);
    setActiveIndex(
      fitnessLevels.findIndex((fitnessLevel) => fitnessLevel.level === level),
    );
  };

  return (
    <div className="fitness-level-menu">
      {fitnessLevels.map((level, index) => (
        <SelectionButton
          key={index}
          label={level.label}
          isActive={activeIndex === index}
          onClick={() => handleLevelClick(level.level)}
        />
      ))}
    </div>
  );
}

export default FitnessLevelMenu;
