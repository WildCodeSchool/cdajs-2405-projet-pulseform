import { useEffect, useState } from "react";

import DoubleScreenLayout from "@components/atoms/Layout/DoubleScreenLayout";
import MobileBodyLayout from "@components/atoms/Layout/MobileBodyLayout";
import { useHomeMobileView } from "@context/MobileHomeViewContext";
import { HomePageView, UserProfileView } from "./Views";

import { useUser } from "@context/UserContext";
import "./HomePage.scss";

const HomePage = () => {
  const { homeMobileview } = useHomeMobileView();
  const { user } = useUser();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  if (!user) return <p>User not found.</p>;

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
            <DoubleScreenLayout>
              <UserProfileView isDesktop={isDesktop} user={user} />
              {/* Left column with user profile */}
              <HomePageView isDesktop={isDesktop} user={user} />
              {/* Right column with the list of programs */}
            </DoubleScreenLayout>
          </>
        ) : (
          <MobileBodyLayout>
            {homeMobileview === "home" ? (
              <HomePageView isDesktop={isDesktop} user={user} />
            ) : (
              <UserProfileView isDesktop={isDesktop} user={user} />
            )}
          </MobileBodyLayout>
        )}
      </section>
    </>
  );
};

export default HomePage;
