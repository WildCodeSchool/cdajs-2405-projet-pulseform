import { HomePageView, UserProfileView } from "./Views";
import "./HomePage.scss";
const HomePage = () => {
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
		</>
	);
};

export default HomePage;
