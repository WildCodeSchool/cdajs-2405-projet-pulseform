import type { User } from "../entities/User";

export interface MyContext {
	user?: User | null;
	models: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		User: any;
	};
}
