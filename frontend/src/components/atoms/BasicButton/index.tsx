import classNames from "classnames";

import "./BasicButton.scss";
import type { BasicButtonProps } from "./BasicButton.type";

function BasicButton({
  children,
  className,
  typeButton = "basic",
  hasFocus,
  ...props
}: BasicButtonProps) {
  const buttonClass = classNames("basic-button", className, {
    "basic-button--basic": typeButton === "basic",
    "basic-button--white": typeButton === "white",
    "basic-button--orange": typeButton === "orange",
    "basic-button--white--focus": typeButton === "white" && hasFocus,
    "basic-button--orange--focus": typeButton === "orange" && hasFocus,
  });

  return (
    <button className={buttonClass} type="button" {...props}>
      {children}
    </button>
  );
}

export default BasicButton;
