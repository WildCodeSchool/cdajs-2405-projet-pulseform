import { useGetUserByIdQuery } from "@graphql/__generated__/schema";
import "./DashBoardView.scss";
import UserAvatarAndUsername from "@components/atoms/UserAvatarAndUsername";

const DashBoardView = () => {
  const { loading, error, data } = useGetUserByIdQuery({
    variables: { id: 2 },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  const user = data?.getUserById;

  console.log(user);

  return (
    <div>
      <p>DashBoardView</p>
      <UserAvatarAndUsername user={user} />
    </div>
  );
};

export default DashBoardView;
