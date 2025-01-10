import { useState } from "react";

import BasicButton from "@components/atoms/BasicButton";
import WhiteButton from "@components/atoms/WhiteButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import ExitSignUpStep from "../ExitSignUpStep";
import SignUpStep4 from "../SignUpStep4";

import { useTranslation } from "react-i18next";
import "./SignUpStep3.scss";

function SignUpStep3() {
  const [isExit, setIsExit] = useState(false);
  const [isNextStep, setIsNextStep] = useState(false);
  const [lvl, setLvl] = useState(0);

  const { t } = useTranslation();

  const handleExit = () => {
    setIsExit(true);
  };

  const handleNextStep = () => {
    setIsNextStep(true);
  };

  const handleLvl = (lvl: number) => {
    setLvl(lvl);
  };

  console.log(lvl);

  return (
    <>
      {!isExit && !isNextStep && (
        <section className="sign-up-step-3">
          <BodyStepQuestions
            questionLabel={t("DESCRIBE_YOUR_LEVEL")}
            ctaExit={handleExit}
          >
            <form className="sign-up-step-3__container__form" action="">
              <WhiteButton
                className="sign-up-step-3__container__form__btn"
                type="button"
                onClick={() => handleLvl(1)}
                hasFocus
              >
                {t("BEGINNER")}
              </WhiteButton>
              <WhiteButton
                className="sign-up-step-3__container__form__btn"
                type="button"
                onClick={() => handleLvl(2)}
                hasFocus
              >
                {t("INTERMEDIATE")}
              </WhiteButton>
              <WhiteButton
                className="sign-up-step-3__container__form__btn"
                type="button"
                onClick={() => handleLvl(3)}
                hasFocus
              >
                {t("ADVANCED")}
              </WhiteButton>
              <BasicButton
                className="sign-up-step-3__container__form__btn"
                type="submit"
                onClick={handleNextStep}
                disabled={lvl === 0}
              >
                {t("NEXT")}
              </BasicButton>
            </form>
          </BodyStepQuestions>
        </section>
      )}
      {isExit && !isNextStep && <ExitSignUpStep />}
      {!isExit && isNextStep && <SignUpStep4 />}
    </>
  );
}

export default SignUpStep3;
