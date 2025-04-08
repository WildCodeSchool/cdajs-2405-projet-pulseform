import LittleLogo from "@components/atoms/LittleLogo";
import type { MobileHeaderType } from "./MobileHeader.type";

import "./MobileHeader.scss";

const MobileHeader = ({
  hasLogo,
  headerLabel,
  classname = "",
}: MobileHeaderType) => {
  return (
    <header
      className={`mobile-header-layout ${
        hasLogo ? "with-logo" : ""
      } ${classname}`}
    >
      <h1 className="mobile-header-layout__header__title">{headerLabel}</h1>
      {hasLogo && <LittleLogo size="mobile" />}
    </header>
  );
};

export default MobileHeader;
