import type { MouseEventHandler } from "react";

export interface BodyStepQuestionsProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	ctaExit: MouseEventHandler<HTMLButtonElement>;
	questionLabel: string;
	isDesktopView?: boolean;
}
