import FirstView from "./components/FirstView";
import SecondView from "./components/SecondView";
import "./LandingPage.scss";

function LandingPage() {
	const testUnusedVariable = "testUnusedVariable";

	return (
		<section className="landing-page">
			<FirstView />
			<SecondView />
		</section>
	);
}

export default LandingPage;
