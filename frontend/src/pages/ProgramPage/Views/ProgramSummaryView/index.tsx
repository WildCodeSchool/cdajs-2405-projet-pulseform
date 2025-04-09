import { useParams } from "react-router-dom";

import ProgramSummaryDesktopView from "./ProgramSummaryDesktopView";
import ProgramSummaryMobileView from "./ProgramSummaryMobileView";

import { useGetProgramById } from "@hooks/usePrograms";
import "./ProgramSummaryView.scss";

type ProgramSummaryViewType = {
  isDesktop: boolean;
  onStartProgram?: () => void;
};

const ProgramSummaryView = ({
  isDesktop,
  onStartProgram,
}: ProgramSummaryViewType) => {
  const { id } = useParams<{ id: string }>();
  const programId = Number(id);
  const { loading, error, program } = useGetProgramById(programId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!program) return <p>No program found</p>;

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
