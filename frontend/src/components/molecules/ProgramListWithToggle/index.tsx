import { ProgramListView } from "@pages/HomePage/Views/HomePageView/Views";
import { useState } from "react";

import "./ProgramListWithToggle.scss";
import ProgrammSearchButton from "@components/atoms/ProgrammSearchButton";
import SearchModal from "@components/molecules/SearchModal";

const ProgramListWithToggle = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleDelete = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.filter((f) => f !== filter),
    );
  };

  return (
    <div className="program-list-view-with-toggle">
      <ProgrammSearchButton
        onClick={openModal}
        selectedFilters={selectedFilters}
        onDelete={handleDelete}
      />
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
