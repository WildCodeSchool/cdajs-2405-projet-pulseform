import LittleLogo from "@components/atoms/LittleLogo";
import type { MobileHeaderLayoutType } from "./MobileHeaderLayout.type";

import "./MobileHeaderLayout.scss";

const MobileHeaderLayout = ({
  hasLogo,
  headerLabel,
  classname = "",
}: MobileHeaderLayoutType) => {
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

export default MobileHeaderLayout;
