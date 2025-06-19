import boxImage from "@assets/images/empty_box.svg";
import "./NoResultFound.scss";
import { useTranslation } from "react-i18next";

const NoResultFound = () => {
  const { t } = useTranslation();
  return (
    <div className="no-result-found">
      <div className="no-result-found__content">
        <img
          src={boxImage}
          alt="No results found"
          className="no-result-found__image"
        />
        <div className="no-result-found__text-container">
          <span className="no-result-found__title">
            {t("NO_PROGRAMS_FOUND_FIRST")}
          </span>
          <span className="no-result-found__title">
            {t("NO_PROGRAMS_FOUND_SECOND")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoResultFound;
