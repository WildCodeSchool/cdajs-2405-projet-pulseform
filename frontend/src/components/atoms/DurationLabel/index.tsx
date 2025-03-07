import { ClockIcon } from "@assets/icons/icon-list/iconList";
import "./DurationLabel.scss";

type DurationLabelProps = {
  duration: number | undefined;
};

const DurationLabel = ({ duration }: DurationLabelProps) => {
  return (
    <div className="duration-label">
      <ClockIcon />
      <span>{duration} min</span>
    </div>
  );
};

export default DurationLabel;
