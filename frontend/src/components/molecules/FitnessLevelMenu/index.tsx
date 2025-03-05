import "./FitnessLevelMenu.scss";
import { SelectionButton } from "../../atoms/SelectionButton/index.";
import { useTranslation } from "react-i18next";

function FitnessLevelMenu() {
  const { t } = useTranslation();

  return (
    <div className="fitness-level-menu">
      <SelectionButton selected={false}>{t("BEGINNER")}</SelectionButton>
      <SelectionButton selected={true}>{t("INTERMEDIATE")}</SelectionButton>
      <SelectionButton selected={false}>{t("ADVANCED")}</SelectionButton>
    </div>
  );
}

export default FitnessLevelMenu;
