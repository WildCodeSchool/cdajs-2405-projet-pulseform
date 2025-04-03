import { useTranslation } from "react-i18next";

import LittleLogo from "@components/atoms/LittleLogo";
import MobileHeaderLayout from "@components/atoms/MobileHeaderLayout";
import Ruban from "@components/atoms/Ruban/Ruban";

import "./DashBoardHeaderView.scss";

type DashBoardHeaderViewType = {
  isDesktop: boolean;
};

// Existe seulement en phone
const DashBoardHeaderView = ({ isDesktop }: DashBoardHeaderViewType) => {
  const { t } = useTranslation();

  return (
    <div className="dash-board-header-view-container">
      {isDesktop ? (
        <>
          <LittleLogo hasLabel className="little-logo--static" />
          <h1>{t("PROGRAMS")}</h1>
        </>
      ) : (
        <div className="dash-board-upper-header-weekly-container">
          <MobileHeaderLayout hasLogo headerLabel={t("PROGRAMS")} />
          <div className="dash-board-weekly-achievement-container">
            <div className="dash-board-weekly-achievement-title-container">
              <h2 className="dash-board-weekly-achievement-title">
                {t("WEEKLY_RECAP")}
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
