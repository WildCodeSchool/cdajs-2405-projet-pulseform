import { useGetProgramById } from "@hooks/usePrograms";
import { useParams } from "react-router-dom";
import ProgramSummaryDesktopView from "./ProgramSummaryDesktopView";
import ProgramSummaryMobileView from "./ProgramSummaryMobileView";

import "./ProgramSummaryView.scss";

type ProgramSummaryViewType = {
  isDesktop: boolean;
};

const ProgramSummaryView = ({ isDesktop }: ProgramSummaryViewType) => {
  const { id } = useParams<{ id: string }>();
  const programId = Number(id);
  const { loading, error, program } = useGetProgramById(programId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!program) return <p>No program found</p>;

  return (
    <>
      {isDesktop ? (
        <div>
          <ProgramSummaryDesktopView />
        </div>
      ) : (
        <div>
          <ProgramSummaryMobileView program={program} />
        </div>
      )}
    </>
  );
};

export default ProgramSummaryView;
