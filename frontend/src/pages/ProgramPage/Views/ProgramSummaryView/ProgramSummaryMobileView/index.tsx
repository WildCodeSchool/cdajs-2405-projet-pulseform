import BasicButton from "@components/atoms/BasicButton";
import MobileHeaderLayout from "@components/atoms/Layout/MobileHeader";
import type { Program } from "@graphql/__generated__/schema";
import { useTranslation } from "react-i18next";
import ExerciseListView from "../../ExerciseListView";
import ProgramHeaderMobileView from "../ProgramHeaderMobileView";

import "./ProgramSummaryMobileView.scss";

type ProgramSummaryMobileViewType = {
  program: Program;
  onStartProgram?: () => void;
};

const ProgramSummaryMobileView = ({
  program,
  onStartProgram,
}: ProgramSummaryMobileViewType) => {
  const { t } = useTranslation();

  return (
    <div className="program-summary-view">
      <section className="program-summary-view__fixed-header">
        <div className="program-summary-view-header">
          <img
            src={program.image || ""}
            alt={program.name}
            className="program-summary-view-header__image"
          />
          <div className="program-summary-view-header__overlay">
            <header className="program-summary-view-header__overlay__content">
              <MobileHeaderLayout
                classname="white"
                headerLabel={program.name}
              />
              <ProgramHeaderMobileView program={program} />
            </header>
          </div>
        </div>
        <div className="program-summary-view-header__start-btn">
          <BasicButton onClick={onStartProgram}>
            {t("START_PROGRAM")}
          </BasicButton>
        </div>
      </section>

      <section className="program-summary-view__scrollable-content">
        <ExerciseListView exercises={program.exercises || []} />
      </section>
    </div>
  );
};

export default ProgramSummaryMobileView;
