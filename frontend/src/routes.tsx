import { createBrowserRouter } from "react-router-dom";

import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import ProgramPage from "@pages/ProgramPage";
import SignUpPage from "@pages/SignUpPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
