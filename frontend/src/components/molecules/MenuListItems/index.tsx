import { useLogoutMutation } from "@graphql/__generated__/schema";

import { useNavigate } from "react-router-dom";

import "./MenuListItems.scss";

const MenuListItems = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout();
    navigate("/");
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
