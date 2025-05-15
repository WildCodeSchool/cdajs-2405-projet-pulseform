import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import "./i18n";
import router from "./routes";
import "./index.css";
import { HomeMobileViewProvider } from "@context/MobileHomeViewContext";

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_URL_BACK}`,
  credentials: "include",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <HomeMobileViewProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </HomeMobileViewProvider>
    </ApolloProvider>
  </StrictMode>,
);
