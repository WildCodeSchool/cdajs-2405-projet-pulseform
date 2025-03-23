import { Avatar } from "flowbite-react";

type AvatarProps = {
  imageSrc: string;
};

const UserAvatar = ({ imageSrc }: AvatarProps) => {
  return (
    <div className="avatar-container">
      <div className="flex flex-wrap gap-2">
        <Avatar
          img={imageSrc}
          alt="User avatar"
          className="rounded-full w-24 h-24"
        />
      </div>
    </div>
  );
};

export default UserAvatar;
