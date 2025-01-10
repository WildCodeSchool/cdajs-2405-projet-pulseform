import { useState } from "react";

import BasicButton from "@components/atoms/BasicButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import ExitSignUpStep from "../ExitSignUpStep";

import "./SignUpStep1.scss";
import { useTranslation } from "react-i18next";
import SignUpStep2 from "../SignUpStep2";

function SignUpStep1() {
  const [isExit, setIsExit] = useState(false);
  const [isNextStep, setIsNextStep] = useState(false);

  const { t } = useTranslation();

  function handleExit() {
    setIsExit(true);
  }

  function handleNextStep() {
    setIsNextStep(true);
  }

  return (
    <>
      {!isExit && !isNextStep && (
        <section className="sign-up-step-1">
          <BodyStepQuestions
            ctaExit={handleExit}
            questionLabel={t("MORE_ABOUT_YOU")}
          >
            <form className="sign-up-step-1__container__form" action="">
              <input type="date" />
              <div className="sign-up-step-1__container__form__container">
                <input type="number" />
                <p className="sign-up-step-1__container__form__container__value-name">
                  KG
                </p>
              </div>
              <div className="sign-up-step-1__container__form__container">
                <input type="number" />
                <p className="sign-up-step-1__container__form__container__value-name">
                  CM
                </p>
              </div>
              <BasicButton
                className="sign-up-step-1__container__form__btn"
                type="submit"
                onClick={handleNextStep}
              >
                {t("NEXT")}
              </BasicButton>
            </form>
          </BodyStepQuestions>
        </section>
      )}
      {isExit && !isNextStep && <ExitSignUpStep />}
      {!isExit && isNextStep && <SignUpStep2 />}
    </>
  );
}

export default SignUpStep1;
