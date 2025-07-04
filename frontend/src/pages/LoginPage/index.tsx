import { useMutation } from "@apollo/client";
import blopLoginPage from "@assets/icons/blob/blob3.svg";
import BasicButton from "@components/atoms/BasicButton";
import InputField from "@components/atoms/InputField/InputField";
import LittleLogo from "@components/atoms/LittleLogo/index";
import LoginImage from "@components/atoms/LoginImage";
import { LOGIN_MUTATION } from "@graphql/mutations/user";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import "./LoginPage.scss";
import { ME_QUERY } from "@graphql/queries";

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  const onSubmit = async (formData: LoginFormValues) => {
    try {
      const response = await login({ variables: formData });

      if (response.data?.login.user) {
        console.log(
          "Utilisateur connecté :",
          response.data.login.user.username,
        );

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <>
      <Link to="/" className="login-page__logo">
        <LittleLogo size="desktop" hasLabel={true} />
      </Link>
      <img
        className="login-page__blob"
        src={blopLoginPage}
        alt={t("BLOB_ALT_TEXT")}
      />
      <section className="login-page__form-section">
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
