import { LightingIcon, UserIcon } from "@assets/icons/icon-list/iconList";

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
          // navigate("/sign-up");
        }}
      />
      <UserIcon
        color="#fffffc"
        fontSize={40}
        onClick={() => {
          onProfileClick();
          // navigate("/sign-up");
        }}
      />
    </div>
  );
}

export default NavBar;
