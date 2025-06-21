import classNames from "classnames";
import type React from "react";
import { useEffect, useRef } from "react";

import "./MenuBurger.scss";
import { CrossIcon } from "@utils/icon-list/iconList";

type MenuBurgerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const MenuBurger: React.FC<MenuBurgerProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Menu coulissant */}
      <nav
        id="menu-burger"
        className={classNames("menu-burger", { "menu-burger--open": isOpen })}
        role="menu"
        ref={menuRef}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="menu-burger__close-btn"
          onClick={onClose}
          aria-label="Fermer le menu"
        >
          <CrossIcon />
        </button>
        {children}
      </nav>
    </>
  );
};

export default MenuBurger;
