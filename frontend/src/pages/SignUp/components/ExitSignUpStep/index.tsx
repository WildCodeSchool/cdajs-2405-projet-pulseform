import blobMenGirl from "@assets/images/blob-men-girl.svg";
import BasicButton from "@components/atoms/BasicButton";
import { useTranslation } from "react-i18next";
import "./ExitSignUpStep.scss";
import type { ExitSignUpStepProps } from "./ExitSignUpStep.type";

function ExitSignUpStep({ isCompleted = false }: ExitSignUpStepProps) {
  const { t } = useTranslation();

  return (
    <section className="exit-sign-up-step">
      <img
        className="exit-sign-up-step__img"
        src={blobMenGirl}
        alt="blob men girl"
      />
      <p className="exit-sign-up-step__label">{t("WELCOME")}</p>
      <p className="exit-sign-up-step__label-first">
        {t("START_YOUR_FIRST_PROGRAM")}
      </p>
      {!isCompleted && (
        <p className="exit-sign-up-step__label-profile">
          {t("COMPLITED_NEXT_TIME_PROFILE")}
        </p>
      )}
      <BasicButton className="exit-sign-up-step__btn">
        {t("DISCOVERY_PROGRAMS")}
      </BasicButton>
    </section>
  );
}

export default ExitSignUpStep;
