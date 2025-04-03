import { useGetAllPrograms } from "@hooks/usePrograms";

import ProgramCard from "@components/atoms/ProgramCard";

import "./ProgramListView.scss";

const ProgramListView = () => {
  const { loading, error, programs } = useGetAllPrograms();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!programs) return <p>No programs available</p>;

  return (
    <div className="program-list-container">
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default ProgramListView;
