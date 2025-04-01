import UserAvatar from "../UserAvatar";
import "./UserAvatarAndUsername.scss";
import type { User } from "@graphql/__generated__/schema";

type UserAvatarAndUsernameProps = {
  user: User;
};
const UserAvatarAndUsername = ({ user }: UserAvatarAndUsernameProps) => {
  return (
    <div className="user-avatar-and-username">
      <div className="user-avatar-container">
        <UserAvatar imageSrc={user.image || ""} />
      </div>
      <div className="user-username-container">
        <h2 className="user-username">{user.username}</h2>
      </div>
    </div>
  );
};

export default UserAvatarAndUsername;
