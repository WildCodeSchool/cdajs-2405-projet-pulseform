import { useEffect, useState } from "react";
import { HomePageView, UserProfileView } from "./Views";

import "./HomePage.scss";
import NavBar from "@components/molecules/NavBar";

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* If screen size is phone */}
      <section className={isDesktop ? "desktop" : "mobile"}>
        {isDesktop ? (
          <>
            <UserProfileView /> {/* Left column with user profile */}
            <HomePageView /> {/* Right column with the list of programs */}
          </>
        ) : (
          <>
            <HomePageView />
            {/* First view for mobile : we toggle between HomePageView and UserProfileView */}
            <UserProfileView /> {/* Second view for mobile */}
            <NavBar />
          </>
        )}
      </section>
    </>
  );
};

export default HomePage;
