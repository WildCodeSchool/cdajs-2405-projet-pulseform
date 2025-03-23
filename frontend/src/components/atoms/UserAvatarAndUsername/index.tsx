import UserAvatar from "../UserAvatar";
import "./UserAvatarAndUsername.scss";
import type { User } from "@graphql/__generated__/schema";

type UserAvatarAndUsernameProps = {
  user: User;
};
const UserAvatarAndUsername = ({ user }: UserAvatarAndUsernameProps) => {
  return (
    <div>
      <UserAvatar imageSrc={user.image || ""} />
    </div>
  );
};

export default UserAvatarAndUsername;
