import { Icon, type IconProps } from "@iconify/react";
// 1.5 em = 24px

export const ClockIcon = ({
  color = "var(--primary)",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ph:clock" color={color} fontSize={fontSize} {...props} />
);

export const CrossIcon = ({
  color = "var(--primary)",
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

export const FlameIcon = ({
  color = "var(--primary)",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="midi:fire" color={color} fontSize={fontSize} {...props} />
);

export const LeftSkipIcon = ({
  color = "var(--primary)",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ri:skip-left-line" color={color} fontSize={fontSize} {...props} />
);

export const LightingIcon = ({
  color = "var(--primary)",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ph:lightning" color={color} fontSize={fontSize} {...props} />
);

export const MenuIcon = ({
  color = "var(--primary)",
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

export const PauseIcon = ({
  color = "var(--primary)",
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
  color = "var(--primary)",
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
  color = "var(--primary)",
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
  color = "var(--primary)",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ic:round-settings" color={color} fontSize={fontSize} {...props} />
);

export const UserIcon = ({
  color = "var(--white)",
  fontSize = "1.5em",
  ...props
}: Omit<IconProps, "icon">) => (
  <Icon icon="ph:user" color={color} fontSize={fontSize} {...props} />
);
