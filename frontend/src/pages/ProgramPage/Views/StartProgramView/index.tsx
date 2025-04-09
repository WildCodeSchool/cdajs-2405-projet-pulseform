import blobMenGirl from "@assets/images/blob-men-girl.svg";
import BasicButton from "@components/atoms/BasicButton";
import ExerciseStepsLayout from "@components/atoms/ExerciseStepsLayout";
import { useTranslation } from "react-i18next";

import "./StartProgramView.scss";

//EXISTE UNIQUEMENT EN VERSION DESKTOP (C'EST L'IMAGE AU CENTRE DU FRAME 'Exercise List - Desktop' + texte 'Démarre ta séance' + bouton 'Démarrer' SUR FIGMA)

type StartProgramViewType = {
  onStart: () => void;
};
const StartProgramView = ({ onStart }: StartProgramViewType) => {
  const { t } = useTranslation();

  return (
    <div>
      <ExerciseStepsLayout
        header={
          <div className="start-program-view__header">
            <span>Démarre ta séance</span>
          </div>
        }
        body={
          <div className="start-program-view__body">
            <img
              src={blobMenGirl || ""}
              alt="Start Program"
              className="start-program-view-image"
            />
          </div>
        }
        footer={
          <div className="start-program-view__footer">
            <BasicButton onClick={onStart}>{t("START_PROGRAM")}</BasicButton>
          </div>
        }
      />
    </div>
  );
};

export default StartProgramView;
