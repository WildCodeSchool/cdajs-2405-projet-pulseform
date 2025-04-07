import { gql, useQuery } from "@apollo/client";
import { createContext, useContext } from "react";

const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      role
    }
  }
`;

type User = {
  id: number;
  email: string;
  role: string;
};

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
  const { data, loading } = useQuery(ME_QUERY);
  const user = data?.me ?? null;

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
