import { useState } from "react";
import { useTranslation } from "react-i18next";

import BasicButton from "@components/atoms/BasicButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import ExitSignUpStep from "../ExitSignUpStep";
import GenderSelectView from "../GenderSelectView";

import "./UserInfoAddView.scss";

function UserInfoAddView() {
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
        <section className="user-info-add-view">
          <BodyStepQuestions
            ctaExit={handleExit}
            questionLabel={t("MORE_ABOUT_YOU")}
          >
            <form className="user-info-add-view__container__form" action="">
              <input type="date" />
              <div className="user-info-add-view__container__form__container">
                <input type="number" />
                <p className="user-info-add-view__container__form__container__value-name">
                  KG
                </p>
              </div>
              <div className="user-info-add-view__container__form__container">
                <input type="number" />
                <p className="user-info-add-view__container__form__container__value-name">
                  CM
                </p>
              </div>
              <BasicButton
                className="user-info-add-view__container__form__btn"
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
      {!isExit && isNextStep && <GenderSelectView />}
    </>
  );
}

export default UserInfoAddView;
