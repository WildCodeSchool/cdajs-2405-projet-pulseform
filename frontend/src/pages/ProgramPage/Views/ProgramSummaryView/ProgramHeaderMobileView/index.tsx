import ProgramSubHeader from "@components/molecules/ProgramSubHeader";
import type { Program } from "@graphql/__generated__/schema";

import "./ProgramHeaderMobileView.scss";

type ProgramHeaderMobileViewType = {
  program: Program;
};

const ProgramHeaderMobileView = ({ program }: ProgramHeaderMobileViewType) => {
  return (
    <>
      <div className="program-header-mobile-view-container">
        <ProgramSubHeader withExercises program={program} />
      </div>
    </>
  );
};

export default ProgramHeaderMobileView;
