import ChartSlider from "@components/atoms/ChartSlider";
import MobileBodyLayout from "@components/atoms/Layout/MobileBodyLayout";
import ExercicesChart from "@components/molecules/ExercicesChart";
import WeightChart from "@components/molecules/WeightChart";
import { DashBoardView, HistoryView } from "./Views";

import "./UserProfileView.scss";
import { useUser } from "@context/UserContext";
import { useGetUserById } from "@hooks/useUsers";

type UserProfileViewType = {
  isDesktop: boolean;
};

const UserProfileView = ({ isDesktop }: UserProfileViewType) => {
  const { user } = useUser();
  const userId = Number(user?.id);

  const { userById } = useGetUserById(userId);

  return (
    <div className="user-profile-view-container">
      {userById && <DashBoardView user={userById} isDesktop={isDesktop} />}
      <MobileBodyLayout>
        <HistoryView /> {/* apparait onClick et remplace DashBoardView */}
        <ChartSlider
          charts={[
            <WeightChart key="weight-chart" userId={userId} />,
            <ExercicesChart key="exercices-chart" userId={userId} />,
          ]}
        />
      </MobileBodyLayout>
    </div>
  );
};

export default UserProfileView;
