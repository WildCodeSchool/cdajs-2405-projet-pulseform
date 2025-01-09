import FirstView from "./components/FirstView";
import SecondView from "./components/SecondView";
import "./LandingPage.scss";

function LandingPage() {
	const cat = "cat";

	return (
		<section className="landing-page">
			<FirstView />
			<SecondView />
			<h1>{cat}</h1>
		</section>
	);
}

export default LandingPage;
