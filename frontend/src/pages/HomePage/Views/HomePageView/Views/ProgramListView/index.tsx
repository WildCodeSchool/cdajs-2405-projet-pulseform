import { useGetAllPrograms } from "@hooks/usePrograms";

import "./ProgramListView.scss";
import ProgramCard from "@components/atoms/ProgramCard";
import ProgramCardSkeleton from "@components/atoms/Skeleton/ProgramCardSkeleton";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

type ProgramListViewProps = {
  selectedFilters: string[];
};

const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, "");

const ProgramListView = ({ selectedFilters }: ProgramListViewProps) => {
  const { loading, error, programs } = useGetAllPrograms();
  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(1);
  const [programsPerPage, _setProgramPerPage] = useState(ITEMS_PER_PAGE);

  const pageCount = Math.ceil(programs.length / programsPerPage);
  const startIndex = (page - 1) * programsPerPage;
  const paginatedPrograms = programs.slice(
    startIndex,
    startIndex + programsPerPage,
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <div className="program-list-wrapper">
      <div className="program-list-container">
        {loading
          ? Array.from({
              length: programsPerPage,
            }).map((_) => <ProgramCardSkeleton key={crypto.randomUUID()} />)
          : paginatedPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
      </div>
      {!loading && (
        <Stack spacing={2} alignItems="center" marginTop={4}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
            color="primary"
            showFirstButton
            showLastButton
          />
        </Stack>
      )}
    </div>
  );
};

export default ProgramListView;
