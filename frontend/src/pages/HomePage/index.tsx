import DoubleScreenLayout from "@components/atoms/Layout/DoubleScreenLayout";
import MobileBodyLayout from "@components/atoms/Layout/MobileBodyLayout";
import { useHomeMobileView } from "@context/MobileHomeViewContext";
import { useEffect, useState } from "react";
import { HomePageView, UserProfileView } from "./Views";
import "./HomePage.scss";

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const { homeMobileview } = useHomeMobileView();

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
      <section className={isDesktop ? "desktop" : "mobile"}>
        {isDesktop ? (
          <>
            <DoubleScreenLayout noFullDvh>
              <UserProfileView isDesktop={isDesktop} />
              {/* Left column with user profile */}
              <HomePageView isDesktop={isDesktop} />
              {/* Right column with the list of programs */}
            </DoubleScreenLayout>
          </>
        ) : (
          <MobileBodyLayout>
            {homeMobileview === "home" ? (
              <HomePageView isDesktop={isDesktop} />
            ) : (
              <UserProfileView isDesktop={isDesktop} />
            )}
          </MobileBodyLayout>
        )}
      </section>
    </>
  );
};

export default HomePage;
