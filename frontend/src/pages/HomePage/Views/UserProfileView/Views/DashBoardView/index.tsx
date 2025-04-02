// import { useGetUserByIdQuery } from "@graphql/__generated__/schema";
import "./DashBoardView.scss";
import UserAvatarAndUsername from "@components/atoms/UserAvatarAndUsername";
import TotalExercicesAndTimeRecap from "@components/molecules/TotalExercicesAndTimeRecap";
import { useGetUserById } from "@hooks/useUsers";

type DashBoardViewType = {
  isDesktop: boolean;
};
// biome-ignore lint/correctness/noUnusedVariables: en cours de dev
const DashBoardView = ({ isDesktop }: DashBoardViewType) => {
  const { loading, error, user } = useGetUserById(2);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="dashboard-view-container">
      <UserAvatarAndUsername user={user} />
      <TotalExercicesAndTimeRecap user={user} />
    </div>
  );
};

export default DashBoardView;
