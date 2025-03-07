import { useQuery } from "@apollo/client";
import { ME_QUERY } from "./graphql/queries";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  const { data, loading } = useQuery(ME_QUERY);

  if (loading) return <p>Loading...</p>;

  return <LandingPage user={data?.me} />;
}

export default App;
