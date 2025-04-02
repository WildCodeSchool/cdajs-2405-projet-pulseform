import { useNavigate } from "react-router-dom";
import { LightingIcon, UserIcon } from "@assets/icons/icon-list/iconList";

import "./NavBar.scss";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <LightingIcon
        color="#fffffc"
        fontSize={40}
        onClick={() => {
          navigate("/sign-up");
        }}
      />
      <UserIcon
        color="#fffffc"
        fontSize={40}
        onClick={() => {
          navigate("/sign-up");
        }}
      />
    </div>
  );
}

export default NavBar;
