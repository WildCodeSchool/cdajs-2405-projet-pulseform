import { DashBoardView, HistoryView } from "./Views";

import WeightChart from "@components/molecules/WeightChart";
import { useUser } from "@context/UserContext";
import { useGetUserById } from "@hooks/useUsers";
import "./UserProfileView.scss";

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
      <div className="user-profile-view-bottom">
        <HistoryView /> {/* apparait onClick et remplace DashBoardView */}
        <WeightChart userId={userId} />
      </div>
    </div>
  );
};

export default UserProfileView;
