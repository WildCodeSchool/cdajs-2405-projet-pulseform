import type { BasicButtonProps } from "./BasicButton.type";
import "./BasicButton.scss";

function BasicButton({
  children,
  width = 300,
  height = 50,
  fontSize = 18,
  ...props
}: BasicButtonProps) {
  return (
    <button
      className="basic-button"
      type="button"
      style={{ width: width, height: height, fontSize: fontSize }}
      {...props}
    >
      {children}
    </button>
  );
}

export default BasicButton;
