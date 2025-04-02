import { RibbonIcon } from "../../../assets/icons/icon-list/iconList";
import type { RubanProps } from "./Ruban.type";
import "./Ruban.scss";

const Ruban = ({ days }: RubanProps) => {
  return (
    <div className="ruban">
      <div className="ruban__triangle ruban__triangle--left" />
      <div className="ruban__content">
        <RibbonIcon className="ruban__icon" />
        <span>
          {days} jour{days > 1 ? "s" : ""} d'affilée ! Continue sur ta lancée !
        </span>
      </div>
      <div className="ruban__triangle ruban__triangle--right" />
    </div>
  );
};

export default Ruban;
