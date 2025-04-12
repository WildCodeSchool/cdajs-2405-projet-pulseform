import { useState } from "react";

import HistoryViewHeader from "@components/atoms/HistoryViewHeader/HistoryViewHeader";
import { useUser } from "@context/UserContext";
import { useGetUserById } from "@hooks/useUsers";
import { DashBoardView, HistoryView } from "./Views";
import ChartsView from "./Views/ChartsView";

import "./UserProfileView.scss";

type UserProfileViewType = {
  isDesktop: boolean;
};

const UserProfileView = ({ isDesktop }: UserProfileViewType) => {
  const { user } = useUser();
  const userId = Number(user?.id);

  const { userById } = useGetUserById(userId);

  const [isHistoryView, setIsHistoryView] = useState(false);

  const handleHistoryView = () => {
    setIsHistoryView(!isHistoryView);
  };

  return (
    <div className="user-profile-view">
      {userById && <DashBoardView user={userById} isDesktop={isDesktop} />}
      <div className="user-profile-view__container">
        <HistoryViewHeader
          isHistoryView={isHistoryView}
          handleHistoryView={handleHistoryView}
        />
        {isHistoryView && <HistoryView />}
        {!isHistoryView && <ChartsView userId={userId} />}
      </div>
    </div>
  );
};

export default UserProfileView;
