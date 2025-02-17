import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import BasicButton from "@components/atoms/BasicButton";
import LittleLogo from "@components/atoms/LittleLogo";

import "./NotFoundPage.scss";
import blob404 from "@assets/images/blob-girl-404.svg";

function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    console.log("Back to home");

    navigate("/home");
  };

  return (
    <section className="not-found-page">
      <div className="not-found-page__top">
        <LittleLogo className="not-found-page__top__logo" size="mobile" />
        <LittleLogo className="not-found-page__top__logo-d" size="desktop" />
      </div>
      <div className="not-found-page__main">
        <img
          className="not-found-page__main__img"
          src={blob404}
          alt="blob 404"
        />
        <div className="not-found-page__main__content">
          <p>{t("OOPS")}</p>
          <p>{t("PAGE_NOT_FOUND")}</p>
          <p>{t("TRY_TO_GO_BACK")}</p>
          <BasicButton
            className="not-found-page__main__content__button"
            typeButton="orange"
            onClick={handleBackToHome}
          >
            {t("BACK_TO_HOME")}
          </BasicButton>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
