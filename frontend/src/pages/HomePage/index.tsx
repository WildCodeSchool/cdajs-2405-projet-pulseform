import NavBar from "@components/molecules/NavBar";
import {
  ProgramDoneCard,
  ProgramDoneCardType,
} from "@components/molecules/ProgramDoneCard";
import { useEffect, useState } from "react";
import { HomePageView, UserProfileView } from "./Views";

import "./HomePage.scss";
import DoubleScreenLayout from "@components/atoms/DoubleScreenLayout";

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

  const program: ProgramDoneCardType = {
    name: "Body Sculpt",
    date: "13/09/2024",
    total_duration: 60,
  };

  return (
    <>
      <section className={isDesktop ? "desktop" : "mobile"}>
        {isDesktop ? (
          <>
            <DoubleScreenLayout>
              <UserProfileView isDesktop={isDesktop} />{" "}
              {/* Left column with user profile */}
              <HomePageView /> {/* Right column with the list of programs */}
            </DoubleScreenLayout>
            <DoubleScreenLayout>
              <UserProfileView isDesktop={isDesktop} />{" "}
              {/* Left column with user profile */}
              <HomePageView /> {/* Right column with the list of programs */}
              <ProgramDoneCard program={program}></ProgramDoneCard>
            </DoubleScreenLayout>
          </>
        ) : (
          <>
            <HomePageView />
            {/* First view for mobile : we toggle between HomePageView and UserProfileView */}
            <UserProfileView isDesktop={isDesktop} />{" "}
            {/* Second view for mobile */}
            <NavBar />
          </>
        )}
      </section>
    </>
  );
};

export default HomePage;
