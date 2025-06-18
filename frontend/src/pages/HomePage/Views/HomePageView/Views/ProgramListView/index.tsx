import ProgramCardSkeleton from "@components/atoms/Skeleton/ProgramCardSkeleton";
import { useGetAllPrograms } from "@hooks/usePrograms";
import { useMemo, useState } from "react";
import "./ProgramListView.scss";

import ProgramCard from "@components/atoms/ProgramCard";
import NoResultFound from "@components/organismes/NoResultsFound";
import { FitnessLevel, MuscleGroup, Tags } from "@graphql/__generated__/schema";
import { Pagination, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

type ProgramListViewProps = {
  selectedFilters: string[];
};

const ProgramListView = ({ selectedFilters }: ProgramListViewProps) => {
  const { t } = useTranslation("home");
  const { loading, error, programs } = useGetAllPrograms();
  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(1);
  const [programsPerPage] = useState(ITEMS_PER_PAGE);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skeletonKeys = useMemo(
    () => Array.from({ length: programsPerPage }, (_, i) => `skeleton-${i}`),
    [programsPerPage],
  );

  if (loading) {
    return (
      <div className="program-list-container">
        {skeletonKeys.map((key) => (
          <ProgramCardSkeleton key={key} />
        ))}
      </div>
    );
  }

  if (error) return <p>Error: {error.message}</p>;
  if (!programs) return <p>{t("NO_PROGRAMS_FOUND")}</p>;

  const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, "");

  const normalizedFilters = selectedFilters.map(normalize);

  const durationFilters = selectedFilters
    .filter((f) => /^\d+\s?min$/i.test(f))
    .map((f) => Number.parseInt(f));

  const isDurationInSelectedRange = (duration: number, selected: number[]) => {
    return selected.some((value) => {
      if (value === 5) return duration <= 5 * 60;
      if (value === 10) return duration > 5 * 60 && duration <= 10 * 60;
      if (value === 15) return duration > 10 * 60 && duration <= 15 * 60;
      return false;
    });
  };

  // Normalize enums to string for safe comparison
  const normalizedLevelFilters = Object.values(FitnessLevel)
    .map((level) => normalize(level))
    .filter((level) => normalizedFilters.includes(level));

  const normalizedMuscleFilters = Object.values(MuscleGroup)
    .map((muscle) => normalize(muscle))
    .filter((muscle) => normalizedFilters.includes(muscle));

  const normalizedTagFilters = Object.values(Tags)
    .map((tag) => normalize(tag))
    .filter((tag) => normalizedFilters.includes(tag));

  const filteredPrograms = programs.filter((program) => {
    const level = normalize(program.level ?? "");
    const programMuscles =
      program.exercises?.map((e) => normalize(e.muscle)).filter(Boolean) ?? [];
    const programTags =
      program.tags?.map((t) => normalize(t.name)).filter(Boolean) ?? [];
    const duration = program.total_duration ?? 0;

    const levelMatch =
      normalizedLevelFilters.length === 0 ||
      normalizedLevelFilters.includes(level);

    const muscleMatch =
      normalizedMuscleFilters.length === 0 ||
      normalizedMuscleFilters.every((mf) => programMuscles.includes(mf));

    const tagMatch =
      normalizedTagFilters.length === 0 ||
      normalizedTagFilters.every((tf) => programTags.includes(tf));

    const timeMatch =
      durationFilters.length === 0 ||
      isDurationInSelectedRange(duration, durationFilters);

    return levelMatch && muscleMatch && tagMatch && timeMatch;
  });

  const pageCount = Math.ceil(filteredPrograms.length / programsPerPage);
  const startIndex = (page - 1) * programsPerPage;
  const paginatedPrograms = filteredPrograms.slice(
    startIndex,
    startIndex + programsPerPage,
  );

  return (
    <div className="program-list-wrapper">
      {filteredPrograms.length === 0 ? (
        <NoResultFound />
      ) : (
        <>
          <div className="program-list-container">
            {paginatedPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          {pageCount > 1 && (
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
        </>
      )}
    </div>
  );
};

export default ProgramListView;
