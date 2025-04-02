import { Avatar } from "@mui/material";

type AvatarPropType = {
  imageSrc: string;
};

const UserAvatar = ({ imageSrc }: AvatarPropType) => {
  return (
    <div className="avatar-container">
      <div className="flex flex-wrap gap-2">
        <Avatar
          alt="User Avatar"
          sx={{ width: 176, height: 176 }}
          src={imageSrc}
        />
      </div>
    </div>
  );
};

export default UserAvatar;
