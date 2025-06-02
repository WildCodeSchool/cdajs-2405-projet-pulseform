import ProgramFilterRecap from "@components/molecules/ProgramFilterRecap";
import "./ProgrammSearchButton.scss";
import type { ProgrammSearchButtonProps } from "./ProgrammSearchButton.type";

function ProgrammSearchButton({
  className,
  typeButton = "basic",
  hasFocus,
  selectedFilters,
  onDelete,
  ...props
}: ProgrammSearchButtonProps) {
  return (
    <div className="zoneButtonClass">
      <div className="search-button-container">
        <button className="buttonClass" type="button" {...props}>
          <p>Affiner la recherche</p>
        </button>
      </div>
      <ProgramFilterRecap filters={selectedFilters} onDelete={onDelete} />
    </div>
  );
}

export default ProgrammSearchButton;
