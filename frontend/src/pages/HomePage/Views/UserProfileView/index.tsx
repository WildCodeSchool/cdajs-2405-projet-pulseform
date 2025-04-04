import WeightChart from "@components/molecules/WeightChart";
import { DashBoardView, HistoryView } from "./Views";

import "./UserProfileView.scss";
import { useGetUserById } from "@hooks/useUsers";

type UserProfileViewType = {
  isDesktop: boolean;
};

const UserProfileView = ({ isDesktop }: UserProfileViewType) => {
  const { user } = useGetUserById(8);

  const userId = Number(user?.id);

  return (
    <div className="user-profile-view-container">
      {user && <DashBoardView user={user} isDesktop={isDesktop} />}
      <HistoryView /> {/* apparait onClick et remplace DashBoardView */}
      {<WeightChart userId={userId} />}
    </div>
  );
};

export default UserProfileView;
