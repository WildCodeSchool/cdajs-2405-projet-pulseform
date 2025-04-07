import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import blopLoginPage from "@assets/icons/blob/blob3.svg";
import BasicButton from "@components/atoms/BasicButton";
import InputField from "@components/atoms/ImputField/ImputField";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import UserInfoAddView from "@components/molecules/UserInfoAddView";

import "./UserCredentialsView.scss";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

function UserCredentialsView() {
  const { register, handleSubmit, setError, formState } = useForm<FormData>();
  const { t } = useTranslation();
  const [isNextStep, setIsNextStep] = useState(false);

  const onSubmit = (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: t("PASSWORDS_NOT_MATCHING"),
      });
      return;
    }

    setIsNextStep(true);
  };

  if (isNextStep) return <UserInfoAddView />;

  return (
    <div className="signup-page">
      <section className="signup-page__form-section signup-page__mobile">
        <img
          className="signup-page__blob"
          src={blopLoginPage}
          alt={t("BLOB_ALT_TEXT")}
        />

        <div className="signup-page__form-container">
          <h1 className="signup-page__title">{t("CREATE_ACCOUNT")}</h1>

          <form className="signup-page__form" onSubmit={handleSubmit(onSubmit)}>
            <InputField<FormData>
              name="email"
              type="email"
              placeholderKey="EMAIL"
              register={register}
              required
              ariaLabel="EMAIL"
            />
            <InputField<FormData>
              name="password"
              type="password"
              placeholderKey="PASSWORD"
              register={register}
              required
              ariaLabel="PASSWORD"
            />
            <InputField<FormData>
              name="confirmPassword"
              type="password"
              placeholderKey="CONFIRM_PASSWORD"
              register={register}
              required
              ariaLabel="CONFIRM_PASSWORD"
            />
            {formState.errors.confirmPassword && (
              <p className="signup-page__error-message">
                {formState.errors.confirmPassword.message as string}
              </p>
            )}

            <BasicButton
              typeButton="orange"
              type="submit"
              className="signup-page__connect-button"
            >
              {t("CREATE_ACCOUNT")}
            </BasicButton>
          </form>
        </div>

        <section className="signup-page__section">
          <div className="signup-page__align">
            <div className="signup-page__motivation-block">
              <p className="signup-page__motivation-title">
                {t("ALREADY_HAVE_ACCOUNT")}
              </p>
              <div className="signup-page__primary-trait" />
            </div>
            <div className="signup-page__create-account-block">
              <Link to="/login" className="signup-page__create-account-button">
                {t("CONNECT")}
              </Link>
              <div className="signup-page__secondary-trait" />
            </div>
          </div>
        </section>
      </section>

      <section className="signup-page__desktop">
        <BodyStepQuestions
          questionLabel={t("CREATE_ACCOUNT")}
          ctaExit={() => {}}
        >
          <form
            className="user-credentials-view__container__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField<FormData>
              name="email"
              type="email"
              placeholderKey="EMAIL"
              register={register}
              required
              ariaLabel="EMAIL"
            />
            <InputField<FormData>
              name="password"
              type="password"
              placeholderKey="PASSWORD"
              register={register}
              required
              ariaLabel="PASSWORD"
            />
            <InputField<FormData>
              name="confirmPassword"
              type="password"
              placeholderKey="CONFIRM_PASSWORD"
              register={register}
              required
              ariaLabel="CONFIRM_PASSWORD"
            />
            {formState.errors.confirmPassword && (
              <p className="signup-page__error-message">
                {formState.errors.confirmPassword.message as string}
              </p>
            )}
            <BasicButton
              className="user-credentials-view__container__form__btn"
              type="submit"
              typeButton="orange"
            >
              {t("CREATE_ACCOUNT")}
            </BasicButton>
          </form>
        </BodyStepQuestions>
      </section>
    </div>
  );
}

export default UserCredentialsView;
