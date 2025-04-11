import "./ExerciseStepsLayout.scss";

type ExerciseStepsLayoutType = {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
};

const ExerciseStepsLayout = ({
  header,
  body,
  footer,
}: ExerciseStepsLayoutType) => {
  return (
    <div className="exercise-steps-layout">
      <div className="exercise-steps-layout__header">{header}</div>
      <div className="exercise-steps-layout__body">{body}</div>
      <div className="exercise-steps-layout__footer">{footer}</div>
    </div>
  );
};

export default ExerciseStepsLayout;
