export interface BasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classnames?: string;
  typeButton?: "basic" | "white" | "orange";
  hasFocus?: boolean;
}
