import "./TotalExercicesAndTimeRecap.scss";

type TotalExercicesAndTimeRecapType = {
  exercises: number;
  duration: string;
};

const TotalExercicesAndTimeRecap: React.FC<TotalExercicesAndTimeRecapType> = ({
  exercises,
  duration,
}) => {
  return (
    <div className="recap-container">
      <div className="block-container">
        <div className="block__left" />
      </div>
      <div className="recap-content-container-first-background">
        <div className="recap-content-container">
          <div className="recap-content">
            <div className="recap-item">
              <span className="recap-value">{exercises || 0}</span>
              <span className="recap-label">Exercices</span>
            </div>
            <div className="recap-item">
              <span className="recap-value">{duration || "0H00"}</span>
              <span className="recap-label">Durée</span>
            </div>
          </div>
        </div>
      </div>
      <div className="block-container">
        <div className="block__right" />
      </div>
    </div>
  );
};

export default TotalExercicesAndTimeRecap;
