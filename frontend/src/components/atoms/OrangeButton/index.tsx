import type { OrangeButtonProps } from "./OrangeButton.type";
import "./OrangeButton.scss";
import classNames from "classnames";

function OrangeButton({
	children,
	className,
	hasFocus,
	...props
}: OrangeButtonProps) {
	const buttonClass = classNames("orange-button", className, {
		"orange-button--focus": hasFocus,
	});

	return (
		<button className={buttonClass} type="button" {...props}>
			{children}
		</button>
	);
}

export default OrangeButton;
