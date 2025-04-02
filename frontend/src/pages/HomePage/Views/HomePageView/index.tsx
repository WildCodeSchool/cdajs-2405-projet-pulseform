import { DashBoardHeaderView, ProgramListView } from "./Views";
import "./HomePageView.scss";

type HomePageViewType = {
  isDesktop: boolean;
};

// biome-ignore lint/correctness/noUnusedVariables: en cours de dev
const HomePageView = ({ isDesktop }: HomePageViewType) => {
  return (
    <div className="home-page-view">
      <DashBoardHeaderView />
      <ProgramListView />
    </div>
  );
};

export default HomePageView;
