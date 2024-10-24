import "./LittleLogo.scss";
import logoMobile from "@assets/icons/mobile-logo.svg";

function LittleLogo() {
  return (
    <div className="little-logo">
      <img
        className="little-logo__img"
        src={logoMobile}
        alt="Logo Pulse Form"
      />
      <p className="little-logo__title">{"Pulse Form"}</p>
    </div>
  );
}

export default LittleLogo;
