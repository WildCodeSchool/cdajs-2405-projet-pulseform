import ExerciseListDesktopView from "./ExerciseListDesktopView/ExerciseListDesktopView";
import ExerciseListMobileView from "./ExerciseListMobileView/ExerciseListMobileView";
import "./ExerciseListView.scss";

const ExerciseListView = () => {
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

export default ExerciseListView;
