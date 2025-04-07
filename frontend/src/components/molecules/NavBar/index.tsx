import { LightingIcon, UserIcon } from "@utils/icon-list/iconList";
import { useNavigate } from "react-router-dom";

import "./NavBar.scss";

type NavBarType = {
  onProfileClick: () => void;
  onActivityClick: () => void;
};

function NavBar({ onProfileClick, onActivityClick }: NavBarType) {
  return (
    <div className="nav-bar">
      <LightingIcon
        color="#fffffc"
        fontSize={40}
        onClick={() => {
          onActivityClick();
        }}
      />
      <UserIcon
        color="#fffffc"
        fontSize={40}
        onClick={() => {
          onProfileClick();
        }}
      />
    </div>
  );
}

export default NavBar;
