import { ClockIcon } from "@utils/icon-list/iconList";
import "./DurationLabel.scss";

type DurationLabelProps = {
  duration: string | undefined | null;
};

const DurationLabel = ({ duration }: DurationLabelProps) => {
  return (
    <div className="duration-label">
      <ClockIcon />
      <span>{duration}</span>
    </div>
  );
};

export default DurationLabel;
