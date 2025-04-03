import ProgramListWithToggle from "@components/molecules/ProgramListWithToggle";
import { DashBoardHeaderView } from "./Views";

import "./HomePageView.scss";

type HomePageViewType = {
  isDesktop: boolean;
};

const HomePageView = ({ isDesktop }: HomePageViewType) => {
  return (
    <div className="home-page-view">
      <DashBoardHeaderView isDesktop={isDesktop} />
      <ProgramListWithToggle />
    </div>
  );
};

export default HomePageView;
