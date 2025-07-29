import type { MeQuery } from "@graphql/__generated__/schema";
import { useMe } from "@hooks/useUsers";
import { createContext, useContext } from "react";

type User = MeQuery["me"];

type UserContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  refetchUser: () => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  error: null,
  refetchUser: () => {}, // fallback pour éviter une erreur en cas de contexte mal utilisé
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, error, refetch } = useMe(); // ← on récupère refetch ici
  const errorMessage = error?.message ?? null;

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error: errorMessage,
        refetchUser: () => refetch(), // ← expose refetch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
