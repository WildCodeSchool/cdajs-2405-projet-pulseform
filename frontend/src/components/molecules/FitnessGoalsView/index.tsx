import { useState } from "react";

import BasicButton from "@components/atoms/BasicButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import ExitSignUpStep from "@components/molecules/ExitSignUpStep";

import { useTranslation } from "react-i18next";
import "./FitnessGoalsView.scss";

function FitnessGoalsView() {
  type ExerciseType =
    | "weight_Loss"
    | "flexibility"
    | "strengthening_Muscles"
    | "relaxation";

  const [isExit, setIsExit] = useState(false);
  const [isNextStep, setIsNextStep] = useState(false);

  const [typeExercise, setTypeExercise] = useState<
    Record<ExerciseType, boolean>
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

  const handleSelectExercise = (type: ExerciseType) => {
    setTypeExercise((prevState) => ({
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
              {Object.keys(typeExercise).map((type) => (
                <BasicButton
                  typeButton="white"
                  key={type}
                  type="button"
                  onClick={() => handleSelectExercise(type as ExerciseType)}
                  aria-pressed={typeExercise[type as ExerciseType]}
                >
                  {t(type.toUpperCase())}
                </BasicButton>
              ))}
              <BasicButton
                className="fitness-goals-view__container__form__btn"
                type="submit"
                onClick={handleNextStep}
                disabled={Object.values(typeExercise).every((value) => !value)}
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
