import { ReturnIcon } from "@utils/icon-list/iconList";
import "./HeaderWithReturnButton.scss";

type HeaderWithReturnButtonType = {
  label: string;
  onReturnClick: () => void;
};

const HeaderWithReturnButton = ({
  label,
  onReturnClick,
}: HeaderWithReturnButtonType) => {
  return (
    <div className="header-with-return">
      <button
        type="button"
        className="header-with-return__back-btn"
        onClick={onReturnClick}
        aria-label="Go back"
      >
        <ReturnIcon />
        <span className="header-with-return__back-btn-text">{label}</span>
      </button>
    </div>
  );
};

export default HeaderWithReturnButton;
