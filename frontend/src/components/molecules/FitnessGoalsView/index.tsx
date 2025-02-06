import { useState } from "react";

import BasicButton from "@components/atoms/BasicButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import ExitSignUpStep from "@components/molecules/ExitSignUpStep";

import { useTranslation } from "react-i18next";
import "./FitnessGoalsView.scss";

function FitnessGoalsView() {
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

  return (
    <>
      {!isExit && !isNextStep && (
        <section className="fitness-goals-view">
          <BodyStepQuestions
            questionLabel={t("ANY_PARTICULAR_GOAL")}
            ctaExit={handleExit}
          >
            <form className="fitness-goals-view__container__form" action="">
              {Object.keys(typeExercice).map((type) => (
                <BasicButton
                  typeButton="white"
                  key={type}
                  type="button"
                  onClick={() => handleSelectExercice(type as ExerciceType)}
                  aria-pressed={typeExercice[type as ExerciceType]}
                >
                  {t(type.toUpperCase())}
                </BasicButton>
              ))}
              <BasicButton
                className="fitness-goals-view__container__form__btn"
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

export default FitnessGoalsView;
