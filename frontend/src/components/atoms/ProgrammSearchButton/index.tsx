import "./ProgrammSearchButton.scss";
import type { ProgrammSearchButtonProps } from "./ProgrammSearchButton.type";

function ProgrammSearchButton({
  className,
  typeButton = "basic",
  hasFocus,
  ...props
}: ProgrammSearchButtonProps) {
  return (
    <div className="zoneButtonClass">
      <button className="buttonClass" type="button" {...props}>
        <p>Affiner la recherche</p>
      </button>
    </div>
  );
}

export default ProgrammSearchButton;
