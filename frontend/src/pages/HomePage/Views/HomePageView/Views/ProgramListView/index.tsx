import ProgramCard from "@components/atoms/ProgramCard";

import { useGetAllProgramsQuery } from "@graphql/__generated__/schema";

import "./ProgramListView.scss";

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

  // const programs: GetAllProgramsQuery = data;

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
