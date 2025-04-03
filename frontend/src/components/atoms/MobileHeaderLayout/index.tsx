import LittleLogo from "@components/atoms/LittleLogo";
import type { MobileHeaderLayoutType } from "./MobileHeaderLayout.type";

import "./MobileHeaderLayout.scss";

const MobileHeaderLayout = ({
  hasLogo,
  headerLabel,
}: MobileHeaderLayoutType) => {
  return (
    <div className={`mobile-header-layout ${hasLogo ? "with-logo" : ""}`}>
      <h1 className="mobile-header-layout__header__title">{headerLabel}</h1>
      {hasLogo && <LittleLogo size="mobile" />}
    </div>
  );
};

export default MobileHeaderLayout;
