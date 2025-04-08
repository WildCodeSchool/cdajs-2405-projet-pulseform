import { DashBoardView, HistoryView } from "./Views";
import "./UserProfileView.scss";
import MobileBodyLayout from "@components/atoms/MobileBodyLayout";

type UserProfileViewType = {
  isDesktop: boolean;
};

const UserProfileView = ({ isDesktop }: UserProfileViewType) => {
  return (
    <div className="user-profile-view-container">
      <DashBoardView isDesktop={isDesktop} />
      <MobileBodyLayout>
        <HistoryView /> {/* apparait onClick et remplace DashBoardView */}
      </MobileBodyLayout>
    </div>
  );
};

export default UserProfileView;
