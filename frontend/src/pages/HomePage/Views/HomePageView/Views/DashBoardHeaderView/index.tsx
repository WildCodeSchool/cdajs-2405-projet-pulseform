import { useTranslation } from "react-i18next";

import MobileHeaderLayout from "@components/atoms/Layout/MobileHeader";
import Ribbon from "@components/atoms/Ribbon";

import "./DashBoardHeaderView.scss";

import { useUser } from "@context/UserContext";
import { useGetUserById } from "@hooks/useUsers";
import { GetHistoryEndDateProgramByUserId } from "@hooks/useUsers";

type DashBoardHeaderViewType = {
  isDesktop: boolean;
};

// Existe seulement en phone
const DashBoardHeaderView = ({ isDesktop }: DashBoardHeaderViewType) => {
  const { t } = useTranslation();
  const { user } = useUser();

  const userId = Number(user?.id);

  const { userById } = useGetUserById(userId);

  const { historyEndDateProgram } = GetHistoryEndDateProgramByUserId(userId);

  return (
    <div className="dash-board-header-view-container">
      {isDesktop ? (
        <>
          <div className="dash-board-header-view-container-title">
            <span>Hello {userById?.username} ! 👋</span>
            <span
              className="dash-board-header-view-container-subtitle"
              style={{ marginLeft: "1rem" }}
            >
              {t("READY_NEXT_PROGRAM")}
            </span>
          </div>
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
