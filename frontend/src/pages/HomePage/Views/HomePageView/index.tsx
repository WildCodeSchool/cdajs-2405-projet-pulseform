import ProgramListWithToggle from "@components/molecules/ProgramListWithToggle";
import { DashBoardHeaderView } from "./Views";

import "./HomePageView.scss";
import type { HomePageViewProps } from "./HomePageView.type";

const HomePageView = ({ isDesktop, user }: HomePageViewProps) => {
  return (
    <div className="home-page-view">
      <DashBoardHeaderView isDesktop={isDesktop} user={user} />
      <ProgramListWithToggle />
    </div>
  );
};

export default HomePageView;
