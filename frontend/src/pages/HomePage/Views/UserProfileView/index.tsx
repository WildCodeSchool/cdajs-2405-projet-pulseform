import WeightChart from "@components/molecules/WeightChart";
import { DashBoardView, HistoryView } from "./Views";

import "./UserProfileView.scss";
import MobileBodyLayout from "@components/atoms/MobileBodyLayout";
import { useUser } from "@context/UserContext";
import { useGetUserById } from "@hooks/useUsers";

type UserProfileViewType = {
  isDesktop: boolean;
};

const UserProfileView = ({ isDesktop }: UserProfileViewType) => {
  const { user } = useUser();
  const userId = Number(user?.id);

  const { userById } = useGetUserById(userId);
  console.log("userById", userById, user);

  return (
    <div className="user-profile-view-container">
      {userById && <DashBoardView user={userById} isDesktop={isDesktop} />}
      <MobileBodyLayout>
        <HistoryView /> {/* apparait onClick et remplace DashBoardView */}
        <WeightChart userId={userId} />
      </MobileBodyLayout>
    </div>
  );
};

export default UserProfileView;
