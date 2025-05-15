import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import BasicButton from "@components/atoms/BasicButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import ExitSignUpStep from "@components/molecules/ExitSignUpStep";

import { useUser } from "@context/UserContext";
import { FitnessLevel, MemberRole } from "@graphql/__generated__/schema";
import { UPDATE_USER_MUTATION } from "@graphql/mutations/user";

import "./FitnessLevelSelectView.scss";
import CompleteLaterButton from "../CompleteLaterButton/CompleteLaterButton";

function FitnessLevelSelectView() {
  const [isExit, setIsExit] = useState(false);
  const [isNextStep, setIsNextStep] = useState(false);
  const [lvl, setLvl] = useState<number | null>(null);

  const { t } = useTranslation();
  const { user } = useUser();

  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    refetchQueries: ["Me"],
  });

  const handleExit = () => setIsExit(true);

  const handleLevelSelection = (level: number) => {
    setLvl(level);
  };

  const handleNextStep = async () => {
    if (!user || lvl === null) return;

    const levelMap: Record<number, FitnessLevel> = {
      1: FitnessLevel.Beginner,
      2: FitnessLevel.Intermediate,
      3: FitnessLevel.Advanced,
    };

    const selectedLevel = levelMap[lvl];
    const sanitizedWeights =
      user.weights?.map(({ month, weight }) => ({
        month,
        weight,
      })) ?? [];

    try {
      await updateUser({
        variables: {
          data: {
            id: Number(user.id),
            username: user.username,
            email: user.email,
            password: "",
            description: user.description ?? "",
            image: user.image ?? "",
            role: user.role ?? MemberRole.User,
            created_at: new Date(user.created_at),
            birthday: user.birthday ? new Date(user.birthday) : new Date(),
            height: user.height ?? 170,
            weights: sanitizedWeights,
            gender: user.gender ?? "NOT_WISH_TO_ANSWER",
            level: selectedLevel,
          },
        },
      });

      setIsNextStep(true);
    } catch (err) {
      console.error("❌ Erreur lors de la mise à jour du niveau :", err);
    }
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
              onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
              }}
            >
              <BasicButton
                typeButton="white"
                className="fitness-level-select-view__container__form__btn"
                type="button"
                onClick={() => handleLevelSelection(1)}
                hasFocus
              >
                {t("BEGINNER")}
              </BasicButton>
              <BasicButton
                typeButton="white"
                className="fitness-level-select-view__container__form__btn"
                type="button"
                onClick={() => handleLevelSelection(2)}
                hasFocus
              >
                {t("INTERMEDIATE")}
              </BasicButton>
              <BasicButton
                typeButton="white"
                className="fitness-level-select-view__container__form__btn"
                type="button"
                onClick={() => handleLevelSelection(3)}
                hasFocus
              >
                {t("ADVANCED")}
              </BasicButton>
              <BasicButton
                className="fitness-level-select-view__container__form__btn"
                type="submit"
                disabled={lvl === null}
              >
                {t("NEXT")}
              </BasicButton>
              <CompleteLaterButton />
            </form>
          </BodyStepQuestions>
        </section>
      )}
      {isExit && !isNextStep && <ExitSignUpStep />}
      {!isExit && isNextStep && <ExitSignUpStep isCompleted />}
    </>
  );
}

export default FitnessLevelSelectView;
