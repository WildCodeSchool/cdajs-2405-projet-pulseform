import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BasicButton from "@components/atoms/BasicButton";
import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import ExitSignUpStep from "@components/molecules/ExitSignUpStep";
import FitnessLevelSelectView from "@components/molecules/FitnessLevelSelectView";

import { useUser } from "@context/UserContext";
import { FitnessLevel, MemberRole } from "@graphql/__generated__/schema";
import { UPDATE_USER_MUTATION } from "@graphql/mutations/user";

import "./GenderSelectView.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";

import blueCross from "@assets/icons/blue-cross.svg";
import girl2 from "@assets/images/girl2.svg";
import men from "@assets/images/men.svg";
import noAnswerSex from "@assets/images/no-answer-sex.svg";
import otherSex from "@assets/images/other-sex.svg";

function GenderSelectView() {
  const [isExit, setIsExit] = useState(false);
  const [spaceBetween, setSpaceBetween] = useState(130);
  const [currentSlideId, setCurrentSlideId] = useState<number | null>(null);
  const [isNextStep, setIsNextStep] = useState(false);

  const { t } = useTranslation();
  const { user } = useUser();
  const [updateUser] = useMutation(UPDATE_USER_MUTATION);

  const slides = [
    { id: 1, content: "GIRL", src: girl2 },
    { id: 2, content: "MEN", src: men },
    { id: 3, content: "OTHER", src: otherSex },
    { id: 4, content: "NOT_WISH_TO_ANSWER", src: noAnswerSex },
  ];

  type SwiperType = {
    activeIndex: number;
  };

  const handleSlideChange = (swiper: SwiperType): void => {
    const activeIndex = swiper.activeIndex;
    const activeSlideId = slides[activeIndex]?.id || null;
    setCurrentSlideId(activeSlideId);
  };

  function handleExit() {
    setIsExit(true);
  }

  async function handleNextStep() {
    if (!user || currentSlideId === null) return;

    const genderMap = {
      1: "FEMALE",
      2: "MALE",
      3: "OTHER",
      4: "NOT_WISH_TO_ANSWER",
    };

    const gender = genderMap[currentSlideId as keyof typeof genderMap];

    try {
      const weights =
        user.weights?.map(({ month, weight }) => ({
          month,
          weight,
        })) ?? [];

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
            gender,
            birthday: user.birthday ?? new Date(),
            height: user.height ?? 170,
            weights,
          },
        },
      });

      setIsNextStep(true);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du genre :", error);
    }
  }

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth > 950) {
        setSpaceBetween(-200);
      } else if (screenWidth > 700) {
        setSpaceBetween(60);
      } else {
        setSpaceBetween(130);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isExit && !isNextStep && (
        <>
          <section className="gender-select-view">
            <button
              className="gender-select-view__exit"
              type="button"
              onClick={handleExit}
            >
              <img src={blueCross} alt="Close" />
            </button>
            <p className="gender-select-view__question">{t("YOUR_ARE")}</p>
            <Swiper
              className="gender-select-view__swiper-container"
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={2}
              spaceBetween={spaceBetween}
              onSlideChange={handleSlideChange}
              style={{ height: "70vh" }}
              coverflowEffect={{
                rotate: 30,
                stretch: 10,
                depth: 150,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow]}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} style={{ height: "100%" }}>
                  <img
                    className="gender-select-view__swiper-container__img"
                    src={slide.src}
                    alt={slide.content}
                    style={{ height: "100%", objectFit: "contain" }}
                  />
                  <p className="gender-select-view__swiper-container__content">
                    {t(slide.content)}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
            <BasicButton
              className="gender-select-view__btn"
              type="button"
              onClick={handleNextStep}
              disabled={currentSlideId === null}
            >
              {t("NEXT")}
            </BasicButton>
            <p>Diapositive active : {currentSlideId || 1}</p>
          </section>
          <section className="gender-select-view-d">
            <BodyStepQuestions
              questionLabel={t("YOUR_ARE")}
              ctaExit={handleExit}
            >
              <form
                className="gender-select-view-d__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleNextStep();
                }}
              >
                {slides.map((slide) => (
                  <BasicButton
                    key={slide.id}
                    typeButton="white"
                    type="button"
                    onClick={() => setCurrentSlideId(slide.id)}
                    hasFocus
                  >
                    {t(slide.content)}
                  </BasicButton>
                ))}
                <BasicButton type="submit" disabled={currentSlideId === null}>
                  {t("NEXT")}
                </BasicButton>
              </form>
            </BodyStepQuestions>
          </section>
        </>
      )}
      {isExit && <ExitSignUpStep />}
      {!isExit && isNextStep && <FitnessLevelSelectView />}
    </>
  );
}

export default GenderSelectView;
