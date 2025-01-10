import { useState } from "react";

import BasicButton from "@components/atoms/BasicButton";
import WhiteButton from "@components/atoms/WhiteButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";

import { useTranslation } from "react-i18next";
import ExitSignUpStep from "../ExitSignUpStep";
import "./SignUpStep4.scss";

function SignUpStep4() {
  type ExerciceType =
    | "weight_Loss"
    | "flexibility"
    | "strengthening_Muscles"
    | "relaxation";

  const [isExit, setIsExit] = useState(false);
  const [isNextStep, setIsNextStep] = useState(false);

  const [typeExercice, setTypeExercice] = useState<
    Record<ExerciceType, boolean>
  >({
    weight_Loss: false,
    flexibility: false,
    strengthening_Muscles: false,
    relaxation: false,
  });

  const { t } = useTranslation();

  const handleExit = () => {
    setIsExit(true);
  };

  const handleNextStep = () => {
    setIsNextStep(true);
  };

  const handleSelectExercice = (type: ExerciceType) => {
    setTypeExercice((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  console.log(typeExercice);

  return (
    <>
      {!isExit && !isNextStep && (
        <section className="sign-up-step-4">
          <BodyStepQuestions
            questionLabel={t("ANY_PARTICULAR_GOAL")}
            ctaExit={handleExit}
          >
            <form className="sign-up-step-4__container__form" action="">
              {Object.keys(typeExercice).map((type) => (
                <WhiteButton
                  key={type}
                  type="button"
                  onClick={() => handleSelectExercice(type as ExerciceType)}
                  aria-pressed={typeExercice[type as ExerciceType]}
                >
                  {t(type.toUpperCase())}
                </WhiteButton>
              ))}
              <BasicButton
                className="sign-up-step-4__container__form__btn"
                type="submit"
                onClick={handleNextStep}
                disabled={Object.values(typeExercice).every((value) => !value)}
              >
                {t("NEXT")}
              </BasicButton>
            </form>
          </BodyStepQuestions>
        </section>
      )}
      {isExit && !isNextStep && <ExitSignUpStep />}
      {!isExit && isNextStep && <ExitSignUpStep isCompleted={true} />}
    </>
  );
}

export default SignUpStep4;
