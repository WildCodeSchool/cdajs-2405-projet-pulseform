import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import BasicButton from "@components/atoms/BasicButton";
import InputField from "@components/atoms/ImputField/ImputField";
import LittleLogo from "@components/atoms/LittleLogo";
import AlreadyMemberBlock from "@components/molecules/AlreadyMemberBlock/AlreadyMemberBlock";
import UserInfoAddView from "@components/molecules/UserInfoAddView";

import {
  CREATE_ACCOUNT_MUTATION,
  LOGIN_MUTATION,
} from "@graphql/mutations/user";
import { isStrongPassword, isValidEmail } from "@utils/validators";

import blopLoginPage from "@assets/icons/blob/blob3.svg";
import stepImage from "@assets/images/step-img.svg";

import "./UserCredentialsView.scss";

interface FormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

function UserCredentialsView() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onTouched",
  });

  const { t } = useTranslation();
  const [isNextStep, setIsNextStep] = useState(false);

  const [createAccount, { loading: creating }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
  );
  const [login, { loading: loggingIn }] = useMutation(LOGIN_MUTATION, {
    refetchQueries: ["Me"],
  });

  const onSubmit = async (data: FormData) => {
    if (!isValidEmail(data.email)) {
      setError("email", {
        type: "manual",
        message: t("INVALID_EMAIL"),
      });
      return;
    }

    if (!isStrongPassword(data.password)) {
      setError("password", {
        type: "manual",
        message: t("WEAK_PASSWORD"),
      });
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: t("PASSWORDS_NOT_MATCHING"),
      });
      return;
    }

    try {
      await createAccount({
        variables: {
          data: {
            email: data.email,
            username: data.username,
            password: data.password,
          },
        },
      });

      await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      setIsNextStep(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Signup failed";
      setError("email", {
        type: "manual",
        message,
      });
    }
  };

  if (isNextStep) return <UserInfoAddView />;

  return (
    <>
      <LittleLogo
        className="signup-page__logo"
        size="desktop"
        hasLabel={true}
      />
      <img
        className="signup-page__blob"
        src={blopLoginPage}
        alt={t("BLOB_ALT_TEXT")}
        aria-hidden="true"
      />
      <section className="signup-page__form-section">
        <div className="signup-page__image-side desktop-only">
          <img
            src={stepImage}
            alt={t("STEP_IMAGE_ALT")}
            className="signup-page__step-image"
          />
        </div>
        <div className="signup-page__form-container">
          <h1 className="login-page__title signup-page__ready-title mobile-only">
            {t("CREATE_ACCOUNT")}
          </h1>
          <h1 className="signup-page__title">{t("CREATE_ACCOUNT")}</h1>
          <form className="signup-page__form" onSubmit={handleSubmit(onSubmit)}>
            <InputField<FormData>
              name="email"
              type="email"
              placeholderKey="EMAIL"
              register={register}
              required
              ariaLabel={t("EMAIL")}
            />
            {errors.email && (
              <p className="signup-page__error-message" role="alert">
                {errors.email.message}
              </p>
            )}
            <InputField<FormData>
              name="username"
              type="text"
              placeholderKey="USERNAME"
              register={register}
              required
              ariaLabel={t("USERNAME")}
            />
            <InputField<FormData>
              name="password"
              type="password"
              placeholderKey="PASSWORD"
              register={register}
              required
              ariaLabel={t("PASSWORD")}
            />
            <InputField<FormData>
              name="confirmPassword"
              type="password"
              placeholderKey="CONFIRM_PASSWORD"
              register={register}
              required
              ariaLabel={t("CONFIRM_PASSWORD")}
            />
            {errors.confirmPassword && (
              <p className="signup-page__error-message" role="alert">
                {errors.confirmPassword.message}
              </p>
            )}
            {errors.password && (
              <p className="signup-page__error-message" role="alert">
                {errors.password.message}
              </p>
            )}
            <BasicButton
              typeButton="orange"
              type="submit"
              className="signup-page__connect-button"
              aria-label={t("CREATE_ACCOUNT")}
              disabled={creating || loggingIn}
            >
              {creating || loggingIn ? t("LOADING") : t("CREATE_ACCOUNT")}
            </BasicButton>
          </form>
          <AlreadyMemberBlock />
        </div>
      </section>
    </>
  );
}

export default UserCredentialsView;
