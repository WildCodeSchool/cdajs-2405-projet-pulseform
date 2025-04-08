import HeaderWithReturnButton from "@components/atoms/HeaderWithReturnButton";
import MobileHeaderLayout from "@components/atoms/Layout/MobileHeader";
import type { Program } from "@graphql/__generated__/schema";
import { useTranslation } from "react-i18next";
import ExerciseListView from "../../ExerciseListView";
import ProgramHeaderMobileView from "../ProgramHeaderMobileView";

import "./ProgramSummaryDesktopView.scss";
import { useNavigate } from "react-router-dom";

type ProgramSummaryDesktopViewType = {
  program: Program;
};

const ProgramSummaryDesktopView = ({
  program,
}: ProgramSummaryDesktopViewType) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      className="program-summary-desktop-view"
      style={{ backgroundImage: `url(${program.image})` }}
    >
      <div className="program-summary-desktop-view__overlay">
        <header className="program-summary-desktop-view__header">
          <HeaderWithReturnButton
            label={t("CHECK_ANOTHER_PROGRAM")}
            onReturnClick={() => navigate("/home")}
          />
          <MobileHeaderLayout classname="white" headerLabel={program.name} />
          <ProgramHeaderMobileView program={program} />
        </header>

        <section className="program-summary-desktop-view__scrollable-content">
          <ExerciseListView exercises={program.exercises || []} />
        </section>
      </div>
    </div>
  );
};

export default ProgramSummaryDesktopView;
