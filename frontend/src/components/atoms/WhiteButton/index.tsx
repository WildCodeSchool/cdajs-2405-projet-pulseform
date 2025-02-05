import type { WhiteButtonProps } from "./WhiteButton.type";
import "./WhiteButton.scss";
import classNames from "classnames";

function WhiteButton({
  children,
  className,
  hasFocus,
  ...props
}: WhiteButtonProps) {
  const buttonClass = classNames("white-button", className, {
    "white-button--focus": hasFocus,
  });

  return (
    <button className={buttonClass} type="button" {...props}>
      {children}
    </button>
  );
}

export default WhiteButton;
