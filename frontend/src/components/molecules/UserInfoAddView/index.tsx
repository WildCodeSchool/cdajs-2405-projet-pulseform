import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import BasicButton from "@components/atoms/BasicButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import CompleteLaterButton from "@components/molecules/CompleteLaterButton/CompleteLaterButton";
import ExitSignUpStep from "@components/molecules/ExitSignUpStep";
import GenderSelectView from "@components/molecules/GenderSelectView";

import { useUser } from "@context/UserContext";
import { FitnessLevel, MemberRole } from "@graphql/__generated__/schema";
import { UPDATE_USER_MUTATION } from "@graphql/mutations/user";

import "./UserInfoAddView.scss";

function UserInfoAddView() {
  const { t } = useTranslation();
  const { user } = useUser();

  const [birthday, setBirthday] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isExit, setIsExit] = useState(false);
  const [isNextStep, setIsNextStep] = useState(false);
  const [formError, setFormError] = useState("");

  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    refetchQueries: ["Me"],
  });

  const handleExit = () => setIsExit(true);
  const handleNextStep = () => setIsNextStep(true);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!birthday || !weight || !height) {
      setFormError("Veuillez remplir tous les champs.");
      return;
    }

    const birthdayDate = new Date(birthday);
    if (Number.isNaN(birthdayDate.getTime())) {
      setFormError("Date de naissance invalide.");
      return;
    }

    if (!user) return;

    const today = new Date();
    const month = today.toLocaleString("en-US", { month: "short" });

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
            level: user.level ?? FitnessLevel.Beginner,
            birthday: birthdayDate,
            height: Number(height),
            weights: [
              {
                month,
                weight: Number(weight),
              },
            ],
          },
        },
      });

      handleNextStep();
    } catch (err) {
      console.error("❌ Erreur lors de l'envoi :", err);
      setFormError("Une erreur est survenue.");
    }
  };

  return (
    <>
      {!isExit && !isNextStep && (
        <section className="user-info-add-view">
          <BodyStepQuestions
            ctaExit={handleExit}
            questionLabel={t("MORE_ABOUT_YOU")}
          >
            <form
              className="user-info-add-view__container__form"
              onSubmit={onSubmit}
            >
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                placeholder="JJ/MM/AAAA"
              />

              <div className="user-info-add-view__container__form__container">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Poids"
                />
                <p className="user-info-add-view__container__form__container__value-name">
                  KG
                </p>
              </div>

              <div className="user-info-add-view__container__form__container">
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Taille"
                />
                <p className="user-info-add-view__container__form__container__value-name">
                  CM
                </p>
              </div>

              {formError && (
                <p style={{ color: "red", fontSize: "0.8rem" }}>{formError}</p>
              )}

              <BasicButton
                className="user-info-add-view__container__form__btn"
                type="submit"
              >
                {t("NEXT")}
              </BasicButton>

              <CompleteLaterButton />
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
