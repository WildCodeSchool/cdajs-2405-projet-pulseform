import NavBar from "@components/molecules/NavBar";
import "./MobileBodyLayout.scss";

type MobileBodyLayoutType = {
  children: React.ReactNode;
  handleProfileClick: () => void;
  handleActivityClick: () => void;
};

const MobileBodyLayout = ({
  children,
  handleActivityClick,
  handleProfileClick,
}: MobileBodyLayoutType) => {
  return (
    <>
      <div className="mobile-body-layout">{children}</div>
      <NavBar
        onProfileClick={handleProfileClick}
        onActivityClick={handleActivityClick}
      />
    </>
  );
};

export default MobileBodyLayout;
