import BasicButton from "@components/atoms/BasicButton";
import LittleLogo from "@components/atoms/LittleLogo";

import "./LandingPage.scss";
import globFirstView from "@assets/globs/glob.svg";
import globSecondView from "@assets/globs/glob2.svg";
import girldImage from "@assets/images/girl.svg";
import { useTranslation } from "react-i18next";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <section className="landing-page">
      <div className="landing-page__first-view landing-page__scroll">
        <div className="landing-page__first-view__glob">
          <img
            className="landing-page__first-view__glob__img"
            src={globFirstView}
            alt="glob"
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
          <div className="landing-page__first-view__header__logo">
            <LittleLogo />
          </div>
          <p className="landing-page__first-view__header__connect">
            {t("CONNECT_MY")}
          </p>
        </div>
        <p className="landing-page__first-view__description">
          {t("LANDING_DESCRIPTION")}
        </p>
        <div className="landing-page__first-view__buttom">
          <BasicButton>{t("CREATE_ACCOUNT")}</BasicButton>
        </div>
      </div>
      <div className="landing-page__second-view landing-page__scroll">
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
        <div className="landing-page__second-view__glob">
          <img
            className="landing-page__second-view__glob__img"
            src={globSecondView}
            alt="glob"
          />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
