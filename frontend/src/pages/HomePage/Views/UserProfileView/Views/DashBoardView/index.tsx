import UserAvatarAndUsername from "@components/atoms/UserAvatarAndUsername";

import "./DashBoardView.scss";
import type { GetUserByIdQuery } from "@graphql/__generated__/schema";

type DashBoardViewType = {
  isDesktop: boolean;
  user: GetUserByIdQuery["getUserById"];
};
// biome-ignore lint/correctness/noUnusedVariables: en cours de dev
const DashBoardView = ({ isDesktop, user }: DashBoardViewType) => {
  return (
    <div className="dashboard-view-container">
      <UserAvatarAndUsername user={user} />
      {/* todo finir le composent en dessous */}
      {/* <TotalExercicesAndTimeRecap  /> */}
    </div>
  );
};

export default DashBoardView;
