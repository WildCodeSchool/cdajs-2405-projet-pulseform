import { useState } from "react";
import { useTranslation } from "react-i18next";

import BasicButton from "@components/atoms/BasicButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import ExitSignUpStep from "../ExitSignUpStep";
import FitnessGoalsView from "../FitnessGoalsView";

import "./FitnessLevelSelectView.scss";

function FitnessLevelSelectView() {
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

  return (
    <>
      {!isExit && !isNextStep && (
        <section className="fitness-level-select-view">
          <BodyStepQuestions
            questionLabel={t("DESCRIBE_YOUR_LEVEL")}
            ctaExit={handleExit}
          >
            <form
              className="fitness-level-select-view__container__form"
              action=""
            >
              <BasicButton
                typeButton="white"
                className="fitness-level-select-view__container__form__btn"
                type="button"
                onClick={() => handleLvl(1)}
                hasFocus
              >
                {t("BEGINNER")}
              </BasicButton>
              <BasicButton
                typeButton="white"
                className="fitness-level-select-view__container__form__btn"
                type="button"
                onClick={() => handleLvl(2)}
                hasFocus
              >
                {t("INTERMEDIATE")}
              </BasicButton>
              <BasicButton
                typeButton="white"
                className="fitness-level-select-view__container__form__btn"
                type="button"
                onClick={() => handleLvl(3)}
                hasFocus
              >
                {t("ADVANCED")}
              </BasicButton>
              <BasicButton
                className="fitness-level-select-view__container__form__btn"
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
      {!isExit && isNextStep && <FitnessGoalsView />}
    </>
  );
}

export default FitnessLevelSelectView;
