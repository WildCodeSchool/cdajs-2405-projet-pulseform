import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
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
	{
		path: "/program/:id",
		element: <ProgramPage />,
	},
	{
		path: "/home",
		element: <HomePage />,
	},
	// Page 404 à faire
	{
		path: "*",
		element: <div>404 - Page Not Found</div>,
	},
]);

export default router;
