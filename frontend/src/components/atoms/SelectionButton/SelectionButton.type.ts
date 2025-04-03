export interface SelectionButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    label: string;
}
