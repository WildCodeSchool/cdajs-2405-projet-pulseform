import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
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
