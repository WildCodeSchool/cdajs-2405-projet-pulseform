import type { BasicButtonProps } from "./BasicButton.type";
import "./BasicButton.scss";
import classNames from "classnames";

function BasicButton({
	children,
	className,
	typeButton = "basic",
	hasFocus,
	...props
}: BasicButtonProps) {
	const buttonClass = classNames("basic-button", className, {
		"basic-button--basic": typeButton === "basic",
		"basic-button--white": typeButton === "white",
		"basic-button--white--focus": hasFocus,
	});

	return (
		<button className={buttonClass} type="button" {...props}>
			{children}
		</button>
	);
}

export default BasicButton;
