import React from "react";
import classNames from "classnames";

import "./MenuBurger.scss";
import whiteCrossIcon from "@assets/icons/white-cross.svg";

type MenuBurgerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const MenuBurger: React.FC<MenuBurgerProps> = ({ children, isOpen, onClose }) => {
  return (
    <>
      {/* Menu coulissant */}
      <nav
        id="menu-burger"
        className={classNames("menu-burger", { "menu-burger--open": isOpen })}
        role="menu"
      >
        {/* Bouton fermeture */}
        <button
          type="button"
          className="menu-burger__close-btn"
          onClick={onClose}
          aria-label="Fermer le menu"
        >
          <img
            src={whiteCrossIcon}
            alt="Fermer le menu"
            className="menu-burger__icon"
          />
        </button>

        {/* Contenu */}
        {children}
      </nav>

      {/* Clic sur backdrop ferme aussi */}
      {isOpen && (
        <div
          className="menu-burger__backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default MenuBurger;