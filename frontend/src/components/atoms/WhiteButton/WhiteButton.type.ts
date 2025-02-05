export interface WhiteButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	classnames?: string;
	hasFocus?: boolean;
}
