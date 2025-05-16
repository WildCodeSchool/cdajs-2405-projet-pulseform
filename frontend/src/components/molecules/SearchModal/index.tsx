import blueCross from "@assets/icons/blue-cross.svg";
import BasicButton from "../../atoms/BasicButton";
import Chip from "../../atoms/Chip";
import "./SearchModal.scss";
import { useState } from "react";

import { FitnessLevel, MuscleGroup, Tags } from "@graphql/__generated__/schema";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (selected: string[]) => void;
};

const SearchModal = ({ isOpen, onClose, onSearch }: SearchModalProps) => {
  if (!isOpen) return null;

  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const handleChipClick = (label: string) => {
    setSelectedChips((prev) =>
      prev.includes(label)
        ? prev.filter((chip) => chip !== label)
        : [...prev, label],
    );
  };

  const formatLabel = (str: string) => {
    return str
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
  };

  const enumToArray = (enumObj: Record<string, string>): string[] =>
    Object.values(enumObj);
  const durations = ["5 min", "10 min", "15 min"];

  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
        <button className="close-button" type="button" onClick={onClose}>
          <img src={blueCross} alt="closeModal" />
        </button>

        <h2 className="modal-title">Rechercher et filtrer</h2>

        <div className="modal-filters-wrapper">
          {/* Niveau */}
          <div className="filter-block">
            <h3>Niveau</h3>
            <div className="chip-list">
              {enumToArray(FitnessLevel).map((level) => (
                <Chip
                  key={level}
                  label={formatLabel(level)}
                  onClick={() => handleChipClick(level)}
                  selected={selectedChips.includes(level)}
                />
              ))}
            </div>
          </div>

          {/* Objectifs */}
          <div className="filter-block">
            <h3>Objectifs</h3>
            <div className="chip-list">
              {enumToArray(Tags).map((tag) => (
                <Chip
                  key={tag}
                  label={formatLabel(tag)}
                  onClick={() => handleChipClick(tag)}
                  selected={selectedChips.includes(tag)}
                />
              ))}
            </div>
          </div>

          {/* Zones corporelles */}
          <div className="filter-block">
            <h3>Zones corporelles</h3>
            <div className="chip-list">
              {enumToArray(MuscleGroup).map((muscle) => (
                <Chip
                  key={muscle}
                  label={formatLabel(muscle)}
                  onClick={() => handleChipClick(muscle)}
                  selected={selectedChips.includes(muscle)}
                />
              ))}
            </div>
          </div>

          {/* Durées */}
          <div className="filter-block">
            <h3>Durées</h3>
            <div className="chip-list">
              {durations.map((duration) => (
                <Chip
                  key={duration}
                  label={duration}
                  onClick={() => handleChipClick(duration)}
                  selected={selectedChips.includes(duration)}
                />
              ))}
            </div>
          </div>
        </div>

        {selectedChips.length > 0 && (
          <button type="button" onClick={() => setSelectedChips([])}>
            Réinitialiser les filtres
          </button>
        )}

        <BasicButton
          onClick={() => {
            onSearch(selectedChips);
            onClose();
          }}
        >
          Rechercher
        </BasicButton>
      </form>
    </div>
  );
};

export default SearchModal;
