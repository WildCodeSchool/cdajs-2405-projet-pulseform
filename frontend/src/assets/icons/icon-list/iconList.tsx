import "@assets/_variables.scss";
import { Icon, type IconProps } from "@iconify/react";
// 1.5 em = 24px

export const BackIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ooui:next-rtl" color={color} fontSize={fontSize} {...props} />
);

export const ClockIcon = ({
  color = "$secondary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ph:clock" color={color} fontSize={fontSize} {...props} />
);

export const CrossIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon
    icon="icomoon-free:cross"
    color={color}
    fontSize={fontSize}
    {...props}
  />
);

export const EyeOffIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon
    icon="fluent:eye-off-16-filled"
    color={color}
    fontSize={fontSize}
    {...props}
  />
);

export const EyeOnIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon
    icon="fluent:eye-16-filled"
    color={color}
    fontSize={fontSize}
    {...props}
  />
);

export const FlameIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="mdi:fire" color={color} fontSize={fontSize} {...props} />
);

export const LeftSkipIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ri:skip-left-line" color={color} fontSize={fontSize} {...props} />
);

export const LightingIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ph:lightning" color={color} fontSize={fontSize} {...props} />
);

export const MenuBurgerIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon
    icon="iconamoon:menu-burger-horizontal"
    color={color}
    fontSize={fontSize}
    {...props}
  />
);

export const NextIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ooui:next-ltr" color={color} fontSize={fontSize} {...props} />
);

export const PauseIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon
    icon="material-symbols:pause"
    color={color}
    fontSize={fontSize}
    {...props}
  />
);

export const RibbonIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon
    icon="solar:medal-ribbons-star-outline"
    color={color}
    fontSize={fontSize}
    {...props}
  />
);

export const RightSkipIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon
    icon="ri:skip-right-line"
    color={color}
    fontSize={fontSize}
    {...props}
  />
);

export const SettingsIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ic:round-settings" color={color} fontSize={fontSize} {...props} />
);

export const UserIcon = ({
  color = "$primary",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ph:user" color={color} fontSize={fontSize} {...props} />
);
