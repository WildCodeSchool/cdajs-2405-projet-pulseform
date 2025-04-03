import { ProgramListView } from "@pages/HomePage/Views/HomePageView/Views";
import FitnessLevelMenu from "../FitnessLevelMenu";
import "./ProgramListWithToggle.scss";

const ProgramListWithToggle = () => {
  return (
    <div className="program-list-view-with-toggle">
      <FitnessLevelMenu />
      <ProgramListView />
    </div>
  );
};

export default ProgramListWithToggle;
