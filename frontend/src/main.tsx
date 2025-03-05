import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./i18n";
import { setContext } from "@apollo/client/link/context";
import router from "./routes";
import "./index.css";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
);
