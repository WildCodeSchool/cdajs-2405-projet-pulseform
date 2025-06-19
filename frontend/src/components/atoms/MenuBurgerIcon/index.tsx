import React from "react";
import classNames from "classnames";
import "./MenuBurgerIcon.scss";
import type { MenuBurgerIconProps } from "./MenuBurgerIcon.type";

const MenuBurgerIcon: React.FC<MenuBurgerIconProps> = ({
  onClick,
  className,
  color = "currentColor",
  fontSize = 24,
  ariaLabel = "Toggle menu",
}) => {
  const burgerClassName = classNames("menu-burger-icon", className);

  return (
    <button
      type="button"
      className={burgerClassName}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{ cursor: "pointer", color, fontSize }}
    >
      {/* Ici, on met le SVG burger ou icône */}
      <svg
        width={fontSize}
        height={fontSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect y="4" width="24" height="2" fill={color} />
        <rect y="11" width="24" height="2" fill={color} />
        <rect y="18" width="24" height="2" fill={color} />
      </svg>
    </button>
  );
};

export default MenuBurgerIcon;
