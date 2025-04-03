export interface SelectionButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    children: React.ReactNode;
}
