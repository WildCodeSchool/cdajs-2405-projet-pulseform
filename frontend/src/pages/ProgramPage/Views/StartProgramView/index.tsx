import "./StartProgramView.scss";

//EXISTE UNIQUEMENT EN VERSION DESKTOP (C'EST L'IMAGE AU CENTRE DU FRAME 'Exercise List - Desktop' + texte 'Démarre ta séance' + bouton 'Démarrer' SUR FIGMA)

type StartProgramViewType = {
  onStart: () => void;
};
const StartProgramView = ({ onStart }: StartProgramViewType) => {
  return (
    <div>
      <p>StartProgramView</p>
      <button type="button" onClick={onStart}>
        start
      </button>
    </div>
  );
};

export default StartProgramView;
