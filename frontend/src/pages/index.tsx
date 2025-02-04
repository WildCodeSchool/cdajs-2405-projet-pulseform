import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import InputField from "../components/atoms/ImputField/ImputField";
import LittleLogo from "../components/atoms/LittleLogo/index";
import LoginImage from "../components/atoms/LoginImage";

import "./LoginPage.scss";
import blopLoginPage from "../assets/icons/blob/blob3.svg";

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
      <LittleLogo size="desktop" hasLabel={true} />

      <img
        className="blob_login_page"
        src={blopLoginPage}
        alt={t("BLOB_ALT_TEXT")}
      />

      <section className="form_section">
        <div className="test-program-container">
          <button type="button" className="test-program-button">
            {t("TEST_PROGRAM")}
          </button>
        </div>

        <div className="image-side">
          <LoginImage size="desktop" />
        </div>

        <div className="bloc__desktop">
          <h1 className="login-title">{t("READY")}</h1>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
            <button className="login-connect" type="submit">
              {t("CONNECT")}
            </button>
          </form>

          <section className="loginSection">
            <div className="align__loginPage">
              <div className="motivation-block">
                <p className="motivationTitle">{t("MOTIVATED")}</p>
                <div className="primary-trait" />
              </div>
              <div className="create-account-block">
                <button className="created__button" type="button">
                  {t("CREATE_ACCOUNT")}
                </button>
                <div className="secondary-trait" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
