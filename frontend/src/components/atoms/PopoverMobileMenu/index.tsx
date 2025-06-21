import { useEffect, useState } from "react";
import "./PopoverMobileMenu.scss";

type PopoverMobileMenuType = {
  children?: React.ReactNode;
  onClose?: () => void;
  show?: boolean;
  background: "tertiary" | "white";
};

const PopoverMobileMenu = ({
  children,
  onClose,
  show,
  background,
}: PopoverMobileMenuType) => {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      setTimeout(() => setAnimateIn(true), 10); // triggers slide-up
      document.body.style.overflow = "hidden";
    } else {
      setAnimateIn(false); // triggers slide-down
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const handleTransitionEnd = () => {
    if (!animateIn) {
      setVisible(false); // unmount only after slide-down ends
    }
  };

  const handleKeyboardModal = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose?.();
    }
  };

  if (!visible) return null;

  return (
    <button className="mobile-modal-overlay" type="button" onClick={onClose}>
      <div
        className={`mobile-modal-container ${
          animateIn ? "slide-up" : "slide-down"
        } ${background === "tertiary" ? "bg-tertiary" : "bg-white"}`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyboardModal}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="modal-handle" />
        {children}
      </div>
    </button>
  );
};

export default PopoverMobileMenu;
