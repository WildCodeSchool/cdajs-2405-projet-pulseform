import { useGetUserByIdQuery } from "@graphql/__generated__/schema";
import "./DashBoardView.scss";
import UserAvatarAndUsername from "@components/atoms/UserAvatarAndUsername";
import TotalExercicesAndTimeRecap from "@components/molecules/TotalExercicesAndTimeRecap";

type DashBoardViewType = {
  isDesktop: boolean;
};
// biome-ignore lint/correctness/noUnusedVariables: en cours de dev
const DashBoardView = ({ isDesktop }: DashBoardViewType) => {
  const { loading, error, data } = useGetUserByIdQuery({
    variables: { id: 2 },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  const user = data?.getUserById;

  console.log(user);

  return (
    <div className="dashboard-view-container">
      <UserAvatarAndUsername user={user} />
      <TotalExercicesAndTimeRecap user={user} />
    </div>
  );
};

export default DashBoardView;
