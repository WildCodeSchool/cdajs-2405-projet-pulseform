import blueCross from "@assets/icons/blue-cross.svg";
import BasicButton from "../../atoms/BasicButton";
import Chip from "../../atoms/Chip";
import "./SearchModal.scss";
import { useState } from "react";
import type { SearchModalProps } from "./SearchModal.type";

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  if (!isOpen) return null;

  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const handleChipClick = (label: string) => {
    setSelectedChip(label === selectedChip ? null : label); // toggle la sélection
  };

  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
        <button className="close-button" type="button" onClick={onClose}>
          <img src={blueCross} alt="closeModal" />
        </button>

        <h2 className="modal-title">Rechercher et filtrer</h2>

        <div className="modal-filters-wrapper">
          <div className="filter-block">
            <h3>Niveau</h3>
            <div className="chip-list">
              <Chip
                label="Débutant"
                onClick={() => handleChipClick("Débutant")}
                selected={selectedChip === "Débutant"}
              />
              <Chip
                label="Intermédiaire"
                onClick={() => handleChipClick("Intermédiaire")}
                selected={selectedChip === "Intermédiaire"}
              />
              <Chip
                label="Avancé"
                onClick={() => handleChipClick("Avancé")}
                selected={selectedChip === "Avancé"}
              />
            </div>
          </div>

          <div className="filter-block">
            <h3>Objectifs</h3>
            <div className="chip-list">
              <Chip label="Souplesse" />
              <Chip label="Renforcement" />
              <Chip label="Relaxation" />
            </div>
          </div>

          <div className="filter-block">
            <h3>Zones corporelles</h3>
            <div className="chip-list">
              <Chip label="Bras" />
              <Chip label="Jambes" />
              <Chip label="Dos" />
            </div>
          </div>

          <div className="filter-block">
            <h3>Durées</h3>
            <div className="chip-list">
              <Chip label="5 min" />
              <Chip label="10 min" />
              <Chip label="15 mn" />
            </div>
          </div>
        </div>

        <BasicButton children={"Rechercher"} />
      </form>
    </div>
  );
};

export default SearchModal;
