import "./FitnessLevelMenu.scss";
import { SelectionButton } from "../../atoms/SelectionButton/index.";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FitnessLevel } from "@graphql/__generated__/schema";

function FitnessLevelMenu() {
  const { t } = useTranslation();
  // usenavigate pour gérer les affichages

  const [activeIndex, setActiveIndex] = useState(0);

  // we should use enum instead
  const fitnessLevels = [
    t(FitnessLevel.Beginner),
    t(FitnessLevel.Intermediate),
    t(FitnessLevel.Advanced),
  ];

  return (
    <div className="fitness-level-menu">
      {fitnessLevels.map((label, index) => (
        <SelectionButton
          key={index}
          children={label}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}

export default FitnessLevelMenu;
