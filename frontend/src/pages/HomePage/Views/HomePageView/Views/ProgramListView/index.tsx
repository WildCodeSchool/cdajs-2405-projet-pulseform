import ProgramCard from "@components/atoms/ProgramCard";
import { useGetAllPrograms } from "@hooks/usePrograms";
import "./ProgramListView.scss";

type ProgramListViewProps = {
  selectedFilters: string[];
};

const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, "");

const ProgramListView = ({ selectedFilters }: ProgramListViewProps) => {
  const { loading, error, programs } = useGetAllPrograms();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!programs) return <p>No programs available</p>;

  const filteredPrograms = programs.filter((program) => {
    if (selectedFilters.length === 0) return true;

    const level = program.level ?? "";
    const tags = program.tags?.map((tag) => tag.name).join(" ") ?? "";
    const duration = `${program.total_duration ?? 0} min`;

    const combined = normalize([level, tags, duration].join(" "));

    return selectedFilters.some((filter) =>
      combined.includes(normalize(filter)),
    );
  });

  return (
    <div className="program-list-container">
      {filteredPrograms.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default ProgramListView;
