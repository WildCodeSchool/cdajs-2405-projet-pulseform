import { ProgramListView } from "@pages/HomePage/Views/HomePageView/Views";
import { useEffect, useState } from "react";

import FitnessLevelMenu from "../FitnessLevelMenu";

import "./ProgramListWithToggle.scss";
import ProgrammSearchButton from "@components/atoms/ProgrammSearchButton";
import SearchModal from "@components/molecules/SearchModal";

const ProgramListWithToggle = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "beginner",
  ]);

  useEffect(() => {
    setSelectedFilters(["beginner"]);
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="program-list-view-with-toggle">
      <FitnessLevelMenu setSelectedFilters={setSelectedFilters} />
      <ProgrammSearchButton onClick={openModal} />
      <ProgramListView selectedFilters={selectedFilters} />
      <SearchModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSearch={(filters) => setSelectedFilters(filters)}
      />
    </div>
  );
};

export default ProgramListWithToggle;
