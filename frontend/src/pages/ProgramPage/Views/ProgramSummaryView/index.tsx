import ProgramSummaryDesktopView from "./ProgramSummaryDesktopView";
import ProgramSummaryMobileView from "./ProgramSummaryMobileView";

import type { Program } from "@graphql/__generated__/schema";
import "./ProgramSummaryView.scss";

type ProgramSummaryViewType = {
  isDesktop: boolean;
  onStartProgram?: () => void;
  program: Program;
};

const ProgramSummaryView = ({
  isDesktop,
  onStartProgram,
  program,
}: ProgramSummaryViewType) => {
  return (
    <>
      {isDesktop ? (
        <ProgramSummaryDesktopView program={program} />
      ) : (
        <div>
          <ProgramSummaryMobileView
            program={program}
            onStartProgram={onStartProgram}
          />
        </div>
      )}
    </>
  );
};

export default ProgramSummaryView;
