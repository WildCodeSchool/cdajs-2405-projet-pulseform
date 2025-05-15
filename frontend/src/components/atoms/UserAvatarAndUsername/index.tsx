import type { GetUserByIdQuery } from "@graphql/__generated__/schema";
import { SettingsIcon } from "@utils/icon-list/iconList";
import { useState } from "react";
import PopoverMobileMenu from "../PopoverMobileMenu";
import UserAvatar from "../UserAvatar";
import "./UserAvatarAndUsername.scss";
import MenuListItems from "@components/molecules/MenuListItems";

type UserAvatarAndUsernameProps = {
  user: GetUserByIdQuery["getUserById"];
  isDesktop: boolean;
};

const UserAvatarAndUsername = ({
  user,
  isDesktop,
}: UserAvatarAndUsernameProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handlePopoverToggle = () => {
    setPopoverOpen((prev) => !prev);
  };

  const closePopover = () => {
    setPopoverOpen(false);
  };

  return (
    <div className="user-avatar-and-username">
      <div className="user-avatar-container">
        <UserAvatar imageSrc={user?.image || ""} />
        {!isDesktop && (
          <div className="user-avatar-settings">
            <SettingsIcon onClick={handlePopoverToggle} />
          </div>
        )}
      </div>
      <div className="user-username-container">
        <h2 className="user-username">{user?.username}</h2>
      </div>

      <PopoverMobileMenu
        show={popoverOpen}
        onClose={closePopover}
        background="tertiary"
      >
        <div>
          <MenuListItems />
        </div>
      </PopoverMobileMenu>
    </div>
  );
};

export default UserAvatarAndUsername;
