import blueCross from "@assets/icons/blue-cross.svg";
import blobGirl from "@assets/images/blob-girl.svg";
import type { BodyStepQuestionsProps } from "./BodyStepQuestions.type";
import "./BodyStepQuestions.scss";
import stepImg from "@assets/images/step-img.svg";
import LittleLogo from "@components/atoms/LittleLogo";
import { useTranslation } from "react-i18next";

function BodyStepQuestions({
  children,
  ctaExit,
  questionLabel,
}: BodyStepQuestionsProps) {
  const { t } = useTranslation();
  return (
    <div className="body-step-questions">
      <div className="body-step-questions__header-d">
        <div className="body-step-questions__header-d__logo">
          <LittleLogo hasLabel />
        </div>
        <div className="body-step-questions__header-d__container">
          <button
            className="body-step-questions__header-d__container__btn"
            type="button"
          >
            {t("TEST_PROGRAM")}
          </button>
        </div>
      </div>
      <button
        className="body-step-questions__exit"
        type="button"
        onClick={ctaExit}
      >
        <img src={blueCross} alt="Close" />
      </button>
      <h2 className="body-step-questions__question">{questionLabel}</h2>
      <img
        className="body-step-questions__blob-girl"
        src={blobGirl}
        alt="blob-girl"
      />
      {children && (
        <>
          <div className="body-step-questions__container">{children}</div>
          <div className="body-step-questions__container-d">
            <div className="body-step-questions__container-d__question">
              <img
                className="body-step-questions__container-d__question__img"
                src={stepImg}
                alt="sport"
              />
              <div className="body-step-questions__container-d__question__container">
                <p className="body-step-questions__container-d__question__container__label">
                  {t("MOTIVATIONAL_LABEL")}
                </p>
              </div>
            </div>
            <div className="body-step-questions__container-d__children">
              <p className="body-step-questions__container-d__children__label">
                {questionLabel}
              </p>
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BodyStepQuestions;
