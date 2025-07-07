import UserAvatarAndUsername from "@components/atoms/UserAvatarAndUsername";
import TotalExercicesAndTimeRecap from "@components/molecules/TotalExercicesAndTimeRecap";

import "./DashBoardView.scss";
import type { DashBoardViewprops } from "./DashBoardView.type";

const DashBoardView = ({ user, isDesktop }: DashBoardViewprops) => {
  if (!user) return <p>User not found.</p>;
  return (
    <div className="dashboard-view-container">
      {user && (
        <>
          <UserAvatarAndUsername user={user} isDesktop={isDesktop} />
          <TotalExercicesAndTimeRecap user={user} />
        </>
      )}
    </div>
  );
};

export default DashBoardView;
