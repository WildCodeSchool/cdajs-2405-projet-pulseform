import { DashBoardView, HistoryView } from "./Views";
import "./UserProfileView.scss";

type UserProfileViewType = {
  isDesktop: boolean;
};

const UserProfileView = ({ isDesktop }: UserProfileViewType) => {
  return (
    <>
      <DashBoardView isDesktop={isDesktop} />
      <HistoryView /> {/* apparait onClick et remplace DashBoardView */}
    </>
  );
};

export default UserProfileView;
