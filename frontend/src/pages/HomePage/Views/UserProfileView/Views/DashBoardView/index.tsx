import UserAvatarAndUsername from "@components/atoms/UserAvatarAndUsername";
import TotalExercicesAndTimeRecap from "@components/molecules/TotalExercicesAndTimeRecap";
import { useGetUserById } from "@hooks/useUsers";

import { useUser } from "@context/UserContext";
import "./DashBoardView.scss";

const DashBoardView = () => {
  const { user } = useUser();
  const userId = Number(user?.id);

  const { loading, error, userById } = useGetUserById(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!userById) return <p>User not found.</p>;

  return (
    <div className="dashboard-view-container">
      <UserAvatarAndUsername user={userById} />
      <TotalExercicesAndTimeRecap user={userById} />
    </div>
  );
};

export default DashBoardView;
