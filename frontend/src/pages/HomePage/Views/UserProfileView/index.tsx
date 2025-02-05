import { DashBoardView, HistoryView } from "./Views";
import "./UserProfileView.scss";

const UserProfileView = () => {
	return (
		<div>
			<DashBoardView />
			<HistoryView /> {/* apparait onClick et remplace DashBoardView */}
		</div>
	);
};

export default UserProfileView;
