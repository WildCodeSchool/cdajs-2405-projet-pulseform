import { useTranslation } from "react-i18next";

import MobileHeaderLayout from "@components/atoms/Layout/MobileHeader";
import Ribbon from "@components/atoms/Ribbon";

import "./DashBoardHeaderView.scss";
import { GetHistoryEndDateProgramByUserId } from "@hooks/useUsers";
import type { DashBoardHeaderViewProps } from "./DashBoardHeaderView.type";

// Existe seulement en phone
const DashBoardHeaderView = ({ isDesktop, user }: DashBoardHeaderViewProps) => {
  const { t } = useTranslation();

  const userId = Number(user?.id);

  const { historyEndDateProgram } = GetHistoryEndDateProgramByUserId(userId);

  return (
    <div className="dash-board-header-view-container">
      {isDesktop ? (
        <>
          {/* <LittleLogo hasLabel className="little-logo--static" /> */}
          <span>Hello {user?.username} !</span>
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
            <Ribbon endDate={historyEndDateProgram} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoardHeaderView;
