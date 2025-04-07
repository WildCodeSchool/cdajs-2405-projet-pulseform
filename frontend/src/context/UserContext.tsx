import { useQuery } from "@apollo/client";
import { createContext, useContext } from "react";
import { ME_QUERY } from "@graphql/queries/user";
import { MeQuery, MeQueryVariables } from "@graphql/__generated__/schema";

type User = MeQuery["me"];

type UserContextType = {
  user: User | null;
  loading: boolean;
};

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading } = useQuery<MeQuery, MeQueryVariables>(ME_QUERY);
  const user = data?.me ?? null;

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
