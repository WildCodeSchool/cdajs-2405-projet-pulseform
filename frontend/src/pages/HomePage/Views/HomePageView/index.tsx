import FitnessLevelMenu from "@components/molecules/FitnessLevelMenu";
import { DashBoardHeaderView, ProgramListView } from "./Views";

import "./HomePageView.scss";

type HomePageViewType = {
  isDesktop: boolean;
};

const HomePageView = ({ isDesktop }: HomePageViewType) => {
  return (
    <div className="home-page-view">
      <FitnessLevelMenu />
      <DashBoardHeaderView isDesktop={isDesktop} />
      <ProgramListView />
    </div>
  );
};

export default HomePageView;
