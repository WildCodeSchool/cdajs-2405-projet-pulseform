import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
]);

export default router;
