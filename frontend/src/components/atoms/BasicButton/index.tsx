import type { BasicButtonProps } from "./BasicButton.type";
import "./BasicButton.scss";
import classNames from "classnames";

function BasicButton({ children, className, ...props }: BasicButtonProps) {
	const buttonClass = classNames("basic-button", className);

	return (
		<button className={buttonClass} type="button" {...props}>
			{children}
		</button>
	);
}

export default BasicButton;
