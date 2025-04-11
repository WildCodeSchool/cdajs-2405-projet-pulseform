import { type ReactNode, useEffect } from "react";
import {
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useUser } from "@context/UserContext";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import NotFoundPage from "@pages/NotFoundPage";
import ProgramPage from "@pages/ProgramPage";
import SignUpPage from "@pages/SignUpPage";
import App from "./App";

type RouteType = {
  children: ReactNode;
};

function PrivateRoute({ children }: RouteType) {
  const { user, loading } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { state: { from: location } });
    }
  }, [user, loading, navigate, location]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null; // Wait for navigation to complete

  return children;
}

function PublicRoute({ children }: RouteType) {
  const { user, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/home"); // Redirect signed-in user to /home or any other page
    }
  }, [user, loading, navigate]);

  if (loading) return <div>Loading...</div>;
  if (user) return null;

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-up",
    element: (
      <PublicRoute>
        <SignUpPage />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/program/:id",
    element: (
      <PrivateRoute>
        <ProgramPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
