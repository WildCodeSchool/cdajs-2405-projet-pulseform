import { ProgramListView } from "@pages/HomePage/Views/HomePageView/Views";
import { useState } from "react";

import FitnessLevelMenu from "../FitnessLevelMenu";

import "./ProgramListWithToggle.scss";
import ProgrammSearchButton from "@components/atoms/ProgrammSearchButton";
import SearchModal from "@components/molecules/SearchModal";

const ProgramListWithToggle = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="program-list-view-with-toggle">
      <FitnessLevelMenu />
      <ProgrammSearchButton onClick={openModal} />
      <ProgramListView />
      <SearchModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ProgramListWithToggle;
