import { CrossIcon } from "@utils/icon-list/iconList";
import { useTranslation } from "react-i18next";

type MenuParametersType = {
  setIsActiveMenu: () => void;
};

function MenuParameters({ setIsActiveMenu }: MenuParametersType) {
  const { t } = useTranslation();
  return (
    <section className="parameters-menu">
      <div className="parametres-menu__header">
        <CrossIcon color="white" fontSize="18px" onClick={setIsActiveMenu} />
      </div>
      <div>
        <button type="button" className="parameters-menu__button">
          {t("LOGOUT")}
        </button>
        <button type="button" className="parameters-menu__button">
          {t("PARAMETERS")}
        </button>
      </div>
    </section>
  );
}

export default MenuParameters;
