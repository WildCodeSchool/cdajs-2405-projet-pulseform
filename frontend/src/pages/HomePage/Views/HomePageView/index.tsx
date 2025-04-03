import { DashBoardHeaderView, ProgramListView } from "./Views";
import FitnessLevelMenu from "@components/molecules/FitnessLevelMenu";

import "./HomePageView.scss";

const HomePageView = () => {
  return (
    <div>
      <FitnessLevelMenu />
      <DashBoardHeaderView />
      <ProgramListView />
    </div>
  );
};

export default HomePageView;
