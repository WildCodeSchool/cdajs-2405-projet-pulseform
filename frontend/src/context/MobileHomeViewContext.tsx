import { createContext, useContext, useState } from "react";

type HomeMobileViewContextType = {
  homeMobileview: string;
  updateHomeMobileView: ((view: string) => void) | null;
};

const HomeMobileViewContext = createContext<HomeMobileViewContextType>({
  homeMobileview: "home",
  updateHomeMobileView: null,
});

export const useHomeMobileView = () => useContext(HomeMobileViewContext);

export const HomeMobileViewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [homeMobileview, setHomeMobileview] = useState("home");

  function updateHomeMobileView(view: string): void {
    setHomeMobileview(view);
  }
  return (
    <HomeMobileViewContext.Provider
      value={{ homeMobileview, updateHomeMobileView }}
    >
      {children}
    </HomeMobileViewContext.Provider>
  );
};
