import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import blopLoginPage from "@assets/icons/blob/blob3.svg";
import BasicButton from "@components/atoms/BasicButton";
import InputField from "@components/atoms/ImputField/ImputField";
import LittleLogo from "@components/atoms/LittleLogo/index";
import LoginImage from "@components/atoms/LoginImage";

import { LOGIN_MUTATION } from "../../graphql/mutations";
import "./LoginPage.scss";
import { Link } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginPage() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const onSubmit = async (formData: LoginFormValues) => {
    try {
      const response = await login({ variables: formData });

      if (response.data?.login.token) {
        localStorage.setItem("token", response.data.login.token);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
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
              disabled={loading}
            >
              {loading ? t("LOADING") : t("CONNECT")}
            </BasicButton>
            {loading && <p>Logging in...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <p>Welcome {data.login.user.username}!</p>}
          </form>

          {error && <p className="login-error">{t("LOGIN_ERROR")}</p>}

          <section className="login-page__section">
            <div className="login-page__align">
              <div className="login-page__motivation-block">
                <p className="login-page__motivation-title">{t("MOTIVATED")}</p>
                <div className="login-page__primary-trait" />
              </div>
              <div className="login-page__create-account-block">
                <Link
                  to="/sign-up"
                  className="login-page__create-account-button"
                >
                  {t("CREATE_ACCOUNT")}
                </Link>
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
