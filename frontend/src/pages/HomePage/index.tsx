import NavBar from "@components/molecules/NavBar";
import {
  ProgramDoneCard,
  ProgramDoneCardType,
} from "@components/molecules/ProgramDoneCard";
import DoubleScreenLayout from "@components/atoms/DoubleScreenLayout";
import { HomePageView, UserProfileView } from "./Views";
import { useEffect, useState } from "react";

import { useGetAllProgramsQuery } from "@graphql/__generated__/schema";

import "./HomePage.scss";

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

  // get programs
  const { loading, error, data } = useGetAllProgramsQuery();
  // Faire un dico pour recréer avec les bonnes infos : il nous faut quand ça a été fait
  // Il faut une requête sur notre historique en fait, incluant les programs
  // entité history avec id, start_date, includes program, where user: user.id
  // ligne 375 de schema : getHistoryByUserId: Array<History>;

  // A VIRER Après avoir récupéré la requête
  const programs: ProgramDoneCardType[] = [
    {
      id: 1,
      name: "Body Sculpt",
      date: "13/09/2024",
      total_duration: 60,
    },
    {
      id: 2,
      name: "Leg day",
      date: "14/09/2024",
      total_duration: 60,
    },
  ];

  return (
    <>
      <section className={isDesktop ? "desktop" : "mobile"}>
        {isDesktop ? (
          <>
            {programs.map((program) => (
              <ProgramDoneCard program={program} />
            ))}
            {/* <DoubleScreenLayout>
              {programs.map((program) => (
                <ProgramDoneCard program={program} />
              ))}
              <UserProfileView isDesktop={isDesktop} />{" "}
              {/* Left column with user profile */}
            {/* <HomePageView /> {/* Right column with the list of programs */}
            {/* </DoubleScreenLayout>
            <DoubleScreenLayout>
              <p>Test</p>
              <UserProfileView isDesktop={isDesktop} />{" "}
              {/* Left column with user profile */}
            {/*   <HomePageView /> {/* Right column with the list of programs */}
            {/*  </DoubleScreenLayout> */}
          </>
        ) : (
          <>
            {programs.map((program) => (
              <ProgramDoneCard program={program} />
            ))}
            <NavBar />
          </>
        )}
      </section>
    </>
  );
};

export default HomePage;
