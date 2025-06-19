export interface ProgrammSearchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classnames?: string;
  typeButton?: "basic";
  hasFocus?: boolean;
  selectedFilters: Array<string>;
  onDelete: (filter: string) => void;
}
