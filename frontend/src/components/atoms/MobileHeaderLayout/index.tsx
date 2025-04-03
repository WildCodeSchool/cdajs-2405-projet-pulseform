import LittleLogo from "../LittleLogo";
import "./MobileHeaderLayout.scss";

type MobileHeaderLayoutType = {
  hasLogo: boolean;
  headerLabel: string;
};

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
