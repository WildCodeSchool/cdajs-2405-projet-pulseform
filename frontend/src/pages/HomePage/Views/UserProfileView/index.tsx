import { DashBoardView, HistoryView } from "./Views";
import "./UserProfileView.scss";

type UserProfileViewType = {
  isDesktop: boolean;
};

const UserProfileView = ({ isDesktop }: UserProfileViewType) => {
  return (
    <div className="user-profile-view-container">
      <DashBoardView isDesktop={isDesktop} />
      <HistoryView /> {/* apparait onClick et remplace DashBoardView */}
    </div>
  );
};

export default UserProfileView;
