import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import blopLoginPage from "@assets/icons/blob/blob3.svg";
import BasicButton from "@components/atoms/BasicButton";
import InputField from "@components/atoms/ImputField/ImputField";
import LittleLogo from "@components/atoms/LittleLogo/index";
import LoginImage from "@components/atoms/LoginImage";

import "./LoginPage.scss";

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginPage() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form Data: ", data);
  };

  return (
    <>
      <LittleLogo className="login-page__logo" size="desktop" hasLabel={true} />
      <img
        className="login-page__blob"
        src={blopLoginPage}
        alt={t("BLOB_ALT_TEXT")}
      />
      <section className="login-page__form-section">
        <div className="login-page__test-program-container">
          <button type="button" className="login-page__test-program-button">
            {t("TEST_PROGRAM")}
          </button>
        </div>
        <div className="login-page__image-side">
          <LoginImage size="desktop" />
        </div>
        <div className="login-page__form-container">
          <h1 className="login-page__title">{t("READY")}</h1>
          <form className="login-page__form" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              name="email"
              type="email"
              placeholderKey="EMAIL_PLACEHOLDER"
              register={register}
              required
              ariaLabel="EMAIL_ARIA_LABEL"
            />
            <InputField
              name="password"
              type="password"
              placeholderKey="PASSWORD_PLACEHOLDER"
              register={register}
              required
              ariaLabel="PASSWORD_ARIA_LABEL"
            />
            <BasicButton
              typeButton="orange"
              type="submit"
              className="login-page__connect-button"
            >
              {t("CONNECT")}
            </BasicButton>
          </form>
          <section className="login-page__section">
            <div className="login-page__align">
              <div className="login-page__motivation-block">
                <p className="login-page__motivation-title">{t("MOTIVATED")}</p>
                <div className="login-page__primary-trait" />
              </div>
              <div className="login-page__create-account-block">
                <button
                  className="login-page__create-account-button"
                  type="button"
                >
                  {t("CREATE_ACCOUNT")}
                </button>
                <div className="login-page__secondary-trait" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
