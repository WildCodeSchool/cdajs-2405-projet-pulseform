import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import BasicButton from "@components/atoms/BasicButton";

import "./ErrorBodyPage.scss";
import type { ErrorBodyPageProps } from "./ErrorBodyPage.type";

function ErrorBodyPage({ picture, altPicture, textError }: ErrorBodyPageProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
    <section className="error-body-page">
      <div className="error-body-page__main">
        <img
          className="error-body-page__main__img"
          src={picture}
          alt={altPicture}
        />
        <div className="error-body-page__main__content">
          <div>
            <p>{t("OOPS")}</p>
            <p>{textError}</p>
            <p>{t("TRY_TO_GO_BACK")}</p>
          </div>
          <BasicButton
            className="error-body-page__main__content__button"
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

export default ErrorBodyPage;
