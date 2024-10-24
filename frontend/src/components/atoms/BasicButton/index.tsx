import type { BasicButtonProps } from "./BasicButton.type";
import "./BasicButton.scss";

function BasicButton({ children, width = 300, ...props }: BasicButtonProps) {
  return (
    <button
      className="basic-button"
      type="button"
      style={{ width: width }}
      {...props}
    >
      {children}
    </button>
  );
}

export default BasicButton;
