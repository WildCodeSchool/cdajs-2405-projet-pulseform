import DoubleScreenLayout from "@components/atoms/DoubleScreenLayout";
import MobileBodyLayout from "@components/atoms/MobileBodyLayout";
import NavBar from "@components/molecules/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomePageView, UserProfileView } from "./Views";

import "./HomePage.scss";

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [currenMobiletView, setCurrentMobileView] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleProfileClick = () => {
    if (location.pathname === "/home") {
      setCurrentMobileView("profile");
    } else {
      navigate("/home");
    }
  };

  const handleActivityClick = () => {
    if (location.pathname === "/home") {
      setCurrentMobileView("home");
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <section className={isDesktop ? "desktop" : "mobile"}>
        {isDesktop ? (
          <>
            <DoubleScreenLayout>
              <UserProfileView isDesktop={isDesktop} />
              <UserProfileView isDesktop={isDesktop} />
              {/* Left column with user profile */}
              <HomePageView isDesktop={isDesktop} />
              {/* Right column with the list of programs */}
            </DoubleScreenLayout>
          </>
        ) : (
          <MobileBodyLayout>
            {currenMobiletView === "home" ? (
              <HomePageView isDesktop={isDesktop} />
            ) : (
              <UserProfileView isDesktop={isDesktop} />
            )}
            <NavBar
              onProfileClick={handleProfileClick}
              onActivityClick={handleActivityClick}
            />
          </MobileBodyLayout>
        )}
      </section>
    </>
  );
};

export default HomePage;
