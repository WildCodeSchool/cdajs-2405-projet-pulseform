import FirstView from "./components/FirstView";
import SecondView from "./components/SecondView";
import "./LandingPage.scss";
function LandingPage() {
	console.log("test");
	console.log("test2");

	return (
		<section className="landing-page">
			<FirstView />
			<SecondView />
		</section>
	);
}

export default LandingPage;
