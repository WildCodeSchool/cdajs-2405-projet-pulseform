import { SelectionButtonProps } from "../SelectionButton/SelectionButton.type";
import "./SelectionButton.scss";

export function SelectionButton({
  //selected,
  children,
  isActive,
  onClick,
  ...props
}: SelectionButtonProps) {
  return (
    <div className={`selection-button`}>
      <button
        className={`selection-button ${
          isActive ? "selection-button-active" : ""
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
