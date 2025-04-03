import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectionButton } from "../../atoms/SelectionButton/index.";

import { FitnessLevel } from "@graphql/__generated__/schema";

import "./FitnessLevelMenu.scss";
function FitnessLevelMenu() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);

  const fitnessLevels = [
    { label: t(FitnessLevel.Beginner), id: 0 },
    { label: t(FitnessLevel.Intermediate), id: 1 },
    { label: t(FitnessLevel.Advanced), id: 2 },
  ];

  return (
    <div className="fitness-level-menu">
      {fitnessLevels.map((level) => (
        <SelectionButton
          key={level.id}
          label={level.label}
          isActive={activeIndex === level.id}
          onClick={() => setActiveIndex(level.id)}
        />
      ))}
    </div>
  );
}

export default FitnessLevelMenu;
