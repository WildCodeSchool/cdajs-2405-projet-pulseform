import MobileHeaderLayout from "@components/atoms/MobileHeaderLayout";
import type { Program } from "@graphql/__generated__/schema";
import ExerciseListView from "../../ExerciseListView";
import ProgramHeaderMobileView from "../../ExerciseListView/ExerciseListMobileView/Views/ProgramHeaderMobileView";

import "./ProgramSummaryMobileView.scss";

type ProgramSummaryMobileViewType = {
  program: Program;
};

const ProgramSummaryMobileView = ({
  program,
}: ProgramSummaryMobileViewType) => {
  return (
    <div className="program-summary-view">
      <div className="program-summary-view-header">
        <img
          src={program.image || ""}
          alt={program.name}
          className="program-summary-view-header__image"
        />
        <div className="program-summary-view-header__overlay">
          <div className="program-summary-view-header__overlay__content">
            <MobileHeaderLayout classname="white" headerLabel={program.name} />
            <ProgramHeaderMobileView program={program} />
          </div>
        </div>
      </div>
      <ExerciseListView exercises={program.exercises || []} isDesktop />
    </div>
  );
};

export default ProgramSummaryMobileView;
