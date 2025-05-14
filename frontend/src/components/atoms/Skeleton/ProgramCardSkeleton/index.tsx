import { Skeleton } from "@mui/material";
import "../../ProgramCard/ProgramCard.scss";

const ProgramCardSkeleton = () => {
  return (
    <div className="program-card">
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};

export default ProgramCardSkeleton;
