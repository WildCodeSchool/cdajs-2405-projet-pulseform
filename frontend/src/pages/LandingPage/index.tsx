import FirstView from "./components/FirstView";
import SecondView from "./components/SecondView";
import "./LandingPage.scss";
import BasicButton from "@components/atoms/BasicButton";

function LandingPage() {
  console.log("test");

  return (


		
    <section className="landing-page">
      <FirstView />
      <SecondView />
    </section>
  );
}

export default LandingPage;
