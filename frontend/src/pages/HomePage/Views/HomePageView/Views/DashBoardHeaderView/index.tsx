import LittleLogo from "@components/atoms/LittleLogo";
import "./DashBoardHeaderView.scss";
import MobileHeaderLayout from "@components/atoms/MobileHeaderLayout";
import Ruban from "@components/atoms/Ruban/Ruban";

type DashBoardHeaderViewType = {
  isDesktop: boolean;
};

// Existe seulement en phone
const DashBoardHeaderView = ({ isDesktop }: DashBoardHeaderViewType) => {
  return (
    <div className="dash-board-header-view-container">
      {isDesktop ? (
        <>
          <LittleLogo hasLabel className="little-logo--static" />
          <h1>Programmes</h1>
        </>
      ) : (
        <div className="dash-board-upper-header-weekly-container">
          <MobileHeaderLayout hasLogo headerLabel="Programmes" />
          <div className="dash-board-weekly-achievement-container">
            <div className="dash-board-weekly-achievement-title-container">
              <h2 className="dash-board-weekly-achievement-title">
                Récapitulatif hebdomadaire
              </h2>
            </div>
            <Ruban days={3} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoardHeaderView;
