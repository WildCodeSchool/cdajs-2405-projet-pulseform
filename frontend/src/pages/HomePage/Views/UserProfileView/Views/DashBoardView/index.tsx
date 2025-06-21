import UserAvatarAndUsername from "@components/atoms/UserAvatarAndUsername";
import TotalExercicesAndTimeRecap from "@components/molecules/TotalExercicesAndTimeRecap";

import type { User } from "@graphql/__generated__/schema";
import "./DashBoardView.scss";

type DashBoardViewType = {
  user: User;
  isDesktop: boolean;
};

const DashBoardView = ({ user, isDesktop }: DashBoardViewType) => {
  return (
    <div className="dashboard-view-container">
      <UserAvatarAndUsername user={user} isDesktop={isDesktop} />
      <TotalExercicesAndTimeRecap user={user} />
    </div>
  );
};

export default DashBoardView;
