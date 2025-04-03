import type { SelectionButtonProps } from "../SelectionButton/SelectionButton.type";
import "./SelectionButton.scss";

export function SelectionButton({
  label,
  isActive,
  onClick,
}: SelectionButtonProps) {
  return (
    <button
      type="button"
      className={`selection-button ${
        isActive ? "selection-button-active" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
