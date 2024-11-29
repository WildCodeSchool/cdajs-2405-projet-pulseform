import classNames from "classnames";

import "./LittleLogo.scss";
import logoMobile from "@assets/icons/mobile-logo.svg";
import type { LittleLogoProps } from "./LittleLogo.type";

function LittleLogo({ hasLabel = false, size = "desktop" }: LittleLogoProps) {
  const littleLogoClassName = classNames("little-logo", {
    "little-logo--mobile": size === "mobile",
    "little-logo--giant": size === "giant",
    "little-logo--desktop": size === "desktop",
  });

  const littleLogoTitleClassName = classNames("little-logo__title", {
    "little-logo__title--mobile": size === "mobile",
    "little-logo__title--giant": size === "giant",
    "little-logo__title--desktop": size === "desktop",
  });

  return (
    <div className={littleLogoClassName}>
      <img
        className="little-logo__img"
        src={logoMobile}
        alt="Logo Pulse Form"
      />
      {hasLabel && <p className={littleLogoTitleClassName}>{"Pulse Form"}</p>}
    </div>
  );
}

export default LittleLogo;
