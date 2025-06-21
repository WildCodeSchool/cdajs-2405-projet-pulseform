import ProgramFilterRecap from "@components/molecules/ProgramFilterRecap";
import "./ProgrammSearchButton.scss";

import { useTranslation } from "react-i18next";
import type { ProgrammSearchButtonProps } from "./ProgrammSearchButton.type";

function ProgrammSearchButton({
  className,
  typeButton = "basic",
  hasFocus,
  selectedFilters,
  onDelete,
  ...props
}: ProgrammSearchButtonProps) {
  const { t } = useTranslation();

  return (
    <div className="zoneButtonClass">
      <div className="search-button-container">
        <button className="buttonClass" type="button" {...props}>
          <p>{t("ADD_FILTERS")}</p>
        </button>
      </div>
      <ProgramFilterRecap filters={selectedFilters} onDelete={onDelete} />
    </div>
  );
}

export default ProgrammSearchButton;
