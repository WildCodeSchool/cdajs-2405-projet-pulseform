import NavBar from "@components/molecules/NavBar";
import { useHomeMobileView } from "@context/MobileHomeViewContext";
import { useNavigate } from "react-router-dom";
import "./MobileBodyLayout.scss";

type MobileBodyLayoutType = {
  children: React.ReactNode;
};

const MobileBodyLayout = ({ children }: MobileBodyLayoutType) => {
  const navigate = useNavigate();
  const { homeMobileview, updateHomeMobileView } = useHomeMobileView();

  return (
    <>
      <div className="mobile-body-layout">{children}</div>
      <NavBar
        onProfileClick={() => {
          if (
            updateHomeMobileView &&
            (location.pathname !== "/home" || homeMobileview !== "profile")
          ) {
            updateHomeMobileView("profile");
          }
          navigate("/home");
        }}
        onActivityClick={() => {
          if (
            updateHomeMobileView &&
            (location.pathname !== "/home" || homeMobileview !== "home")
          ) {
            updateHomeMobileView("home");
          }
          navigate("/home");
        }}
      />
    </>
  );
};

export default MobileBodyLayout;
