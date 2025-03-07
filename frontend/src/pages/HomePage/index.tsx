import { HomePageView, UserProfileView } from "./Views";
import "./HomePage.scss";
import { ProgramDoneCard } from "@components/molecules/ProgramDoneCard";
const HomePage = () => {
  const program = {
    title: "Body Sculpt",
    date: "13/09/2024",
    time: "60min",
  };
  return (
    <>
      {/*if screen size = phone */}
      <section>
        <HomePageView />{" "}
        {/* même URL mais on fait toggle entre les 2 vues HomePageView et UserProfilView */}
        <UserProfileView />
      </section>

      {/*if screen size = desktop */}
      <section>
        <UserProfileView />{" "}
        {/* colonne de gauche avec le dashboard de l'utilisateur toujours visible */}
      </section>
      <section>
        <HomePageView /> {/* colonne de droite avec la liste des programmes*/}
      </section>

      <ProgramDoneCard program={program}></ProgramDoneCard>
    </>
  );
};

export default HomePage;
