import { SelectionButtonProps } from "../SelectionButton/SelectionButton.type";
import "./SelectionButton.scss";
import classNames from "classnames";

export function SelectionButton({
  selected,
  children,
  ...props
}: SelectionButtonProps) {
  return (
    <div>
      <button className="selection-button__button" {...props}>
        {children}
      </button>
      {selected && <div className="selection-button__selected">p</div>}
    </div>
  );
}
