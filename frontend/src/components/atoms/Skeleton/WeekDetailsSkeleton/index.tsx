import { Skeleton, Stack } from "@mui/material";
import "../../../molecules/WeekDetails/WeekDetails.scss";

const WeekDetailsSkeleton = () => {
  return (
    <div className="week-details">
      <div className="week-details__header">
        <Skeleton
          variant="text"
          width={120}
          height={30}
          animation="wave"
          className="week-details__header__dates"
        />
        <div className="week-details__header__details">
          <div className="week-details__header__details__duration">
            <Skeleton variant="text" width={60} height={25} animation="wave" />
          </div>
          <Skeleton variant="text" width={80} height={20} animation="wave" />
        </div>
      </div>
      <div className="week-details__programs">
        <Stack spacing={2}>
          {Array.from({ length: 3 }).map(() => (
            <Skeleton
              key={crypto.randomUUID()}
              variant="rectangular"
              height={48}
              animation="wave"
              style={{ borderRadius: 10 }}
            />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default WeekDetailsSkeleton;
