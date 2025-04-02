import ProgramCard from "@components/atoms/ProgramCard";
import "./ProgramListView.scss";
import { ClockIcon } from "@assets/icons/icon-list/iconList";
import {
  type GetAllProgramsQuery,
  useGetAllProgramsQuery,
} from "@graphql/__generated__/schema";

const ProgramListView = () => {
  const { loading, error, data } = useGetAllProgramsQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div className="program-list-container">
      {/* <p>We have {programs.getAllPrograms.length} programs</p> */}
      {data.getAllPrograms.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default ProgramListView;
