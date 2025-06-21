import ProgramListWithToggle from "@components/molecules/ProgramListWithToggle";
import { useState } from "react";
import { DashBoardHeaderView } from "./Views";

import "./HomePageView.scss";

type HomePageViewType = {
  isDesktop: boolean;
};

const HomePageView = ({ isDesktop }: HomePageViewType) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const _handleMenuParameters = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <div className="home-page-view">
      <DashBoardHeaderView isDesktop={isDesktop} />
      <ProgramListWithToggle />
    </div>
  );
};

export default HomePageView;
