import BasicButton from "@components/atoms/BasicButton";
import LittleLogo from "@components/atoms/LittleLogo";

import "./LandingPage.scss";
import blobFirstView from "@assets/blobs/blob.svg";
import blobSecondView from "@assets/blobs/blob2.svg";
import girldImage from "@assets/images/girl.svg";
import Programs from "@assets/images/programs.svg";
import { useTranslation } from "react-i18next";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <section className="landing-page">
      <div className="landing-page__first-view">
        <div className="landing-page__first-view__blob">
          <img
            className="landing-page__first-view__blob__img"
            src={blobFirstView}
            alt="blob"
          />
        </div>
        <div className="landing-page__first-view__girl">
          <img
            className="landing-page__first-view__girl__img"
            src={girldImage}
            alt="girl"
          />
        </div>
        <div className="landing-page__first-view__header">
          <div className="landing-page__first-view__header__logo-m">
            <LittleLogo hasLabel size="mobile" />
          </div>
          <div className="landing-page__first-view__header__logo-d">
            <LittleLogo hasLabel />
          </div>
          <div className="landing-page__first-view__header__container">
            <div className="landing-page__first-view__header__container__buttom">
              <BasicButton width={200}>{t("CREATE_ACCOUNT")}</BasicButton>
            </div>
            <p className="landing-page__first-view__header__container__connect">
              {t("CONNECT_MY")}
            </p>
          </div>
        </div>
        <p className="landing-page__first-view__description">
          {t("LANDING_DESCRIPTION")}
        </p>
        <div className="landing-page__first-view__buttom">
          <BasicButton>{t("CREATE_ACCOUNT")}</BasicButton>
        </div>
        <div className="landing-page__first-view__buttom-program">
          <BasicButton height={80} fontSize={24}>
            {t("TEST_PROGRAM")}
          </BasicButton>
        </div>
      </div>
      <div className="landing-page__second-view">
        <div className="landing-page__second-view__img-container">
          <img
            className="landing-page__second-view__img-container__img"
            src={Programs}
            alt="programs"
          />
        </div>
        <p className="landing-page__second-view__description">
          {t("LANDING_DESCRIPTION_2")}
        </p>
        <div className="landing-page__second-view__step">
          <p className="landing-page__second-view__step__content">
            {t("PROGRAMS_TO_DICOVER")}
          </p>
          <p className="landing-page__second-view__step__content">
            {t("FOLLOW_YOUR_PROGRESS")}
          </p>
          <p className="landing-page__second-view__step__content">
            {t("PERSONALIZED_COACHING")}
          </p>
        </div>
        <div className="landing-page__second-view__buttom">
          <BasicButton>{t("TEST_PROGRAM")}</BasicButton>
        </div>
        <div className="landing-page__second-view__blob">
          <img
            className="landing-page__second-view__blob__img"
            src={blobSecondView}
            alt="blob"
          />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
