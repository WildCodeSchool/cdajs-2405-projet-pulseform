import ExerciseListDesktopView from "./ExerciseListDesktopView/ExerciseListDesktopView";
import ExerciseListMobileView from "./ExerciseListMobileView/ExerciseListMobileView";
import "./ExerciceListView.scss";

const ExerciceListView = () => {
	return (
		<>
			{/* if phone size  */}
			<div>
				<ExerciseListMobileView />
			</div>
			{/* if desktop size  */}
			<div>
				<ExerciseListDesktopView />
			</div>
		</>
	);
};

export default ExerciceListView;
