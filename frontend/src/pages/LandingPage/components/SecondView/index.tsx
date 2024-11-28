import BasicButton from "@components/atoms/BasicButton";

import blobSecondView from "@assets/blobs/blob2.svg";
import Programs from "@assets/images/programs.svg";
import { useTranslation } from "react-i18next";
import "./SecondView.scss";

function SecondView() {
  const { t } = useTranslation();

  return (
    <div className="second-view">
      <div className="second-view__img-container">
        <img
          className="second-view__img-container__img"
          src={Programs}
          alt="programs"
        />
      </div>
      <p className="second-view__description">{t("LANDING_DESCRIPTION_2")}</p>
      <div className="second-view__step">
        <p className="second-view__step__content">{t("PROGRAMS_TO_DICOVER")}</p>
        <p className="second-view__step__content">
          {t("FOLLOW_YOUR_PROGRESS")}
        </p>
        <p className="second-view__step__content">
          {t("PERSONALIZED_COACHING")}
        </p>
      </div>
      <div className="second-view__buttom">
        <BasicButton>{t("TEST_PROGRAM")}</BasicButton>
      </div>
      <div className="second-view__blob">
        <img
          className="second-view__blob__img"
          src={blobSecondView}
          alt="blob"
        />
      </div>
    </div>
  );
}

export default SecondView;
