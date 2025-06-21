import { useLogoutMutation } from "@graphql/__generated__/schema";

import { useNavigate } from "react-router-dom";

import { useUser } from "@context/UserContext";

import "./MenuListItems.scss";

const MenuListItems = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { refetchUser } = useUser();

  const handleLogout = async () => {
    try {
      await logout();
      await refetchUser();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const MenuItems = [
    {
      label: "Se déconnecter",
      onClick: () => handleLogout(),
    },
    {
      label: "Modifier mes données",
      onClick: () => console.log("Menu Item 2 clicked"),
    },
  ];

  return (
    <div className="menu-list-items-container">
      {MenuItems.map((item) => (
        <button
          type={"button"}
          key={item.label}
          className="menu-list-item"
          onClick={item.onClick}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default MenuListItems;
