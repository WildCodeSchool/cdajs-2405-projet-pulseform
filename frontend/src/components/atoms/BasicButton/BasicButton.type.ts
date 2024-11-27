export interface BasicButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	width?: number;
	height?: number;
	fontSize?: number;
}
