import blueCross from "@assets/icons/blue-cross.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BasicButton from "../../atoms/BasicButton";
import Chip from "../../atoms/Chip";
import "./SearchModal.scss";

import { MuscleGroup, Tags } from "@graphql/__generated__/schema";
import { fitnessLevelOrder } from "@utils/constants/fitnessLevelOrder";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (selected: string[]) => void;
  initialSelectedChips: string[];
};

const SearchModal = ({
  isOpen,
  onClose,
  onSearch,
  initialSelectedChips,
}: SearchModalProps) => {
  const { t } = useTranslation();
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  // Reset internal selection when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedChips(initialSelectedChips);
    }
  }, [isOpen, initialSelectedChips]);

  const handleChipClick = (label: string) => {
    setSelectedChips((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label],
    );
  };

  const formatLabel = (str: string) =>
    str
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());

  const enumToArray = (enumObj: Record<string, string>): string[] =>
    Object.values(enumObj);

  const durations = ["5 min", "10 min", "15 min"];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
        <div className="modal-header">
          <button className="close-button" type="button" onClick={onClose}>
            <img src={blueCross} alt="closeModal" />
          </button>
          <h2 className="modal-title">{t("DISCOVER_NEXT_WORKOUT")}</h2>
        </div>
        <div className="modal-body">
          <div className="modal-filters-wrapper">
            <div className="filter-block">
              <h3>{t("LEVEL")}</h3>
              <div className="chip-list">
                {fitnessLevelOrder.map((level) => (
                  <Chip
                    key={level}
                    label={t(level.toUpperCase())}
                    onClick={() => handleChipClick(level)}
                    selected={selectedChips.includes(level)}
                  />
                ))}
              </div>
            </div>
            <div className="filter-block">
              <h3>{t("GOAL")}</h3>
              <div className="chip-list">
                {enumToArray(Tags).map((tag) => (
                  <Chip
                    key={tag}
                    label={formatLabel(t(tag))}
                    onClick={() => handleChipClick(tag)}
                    selected={selectedChips.includes(tag)}
                  />
                ))}
              </div>
            </div>
            <div className="filter-block">
              <h3>{t("TARGET_AREA")}</h3>
              <div className="chip-list">
                {enumToArray(MuscleGroup).map((muscle) => (
                  <Chip
                    key={muscle}
                    label={formatLabel(t(muscle))}
                    onClick={() => handleChipClick(muscle)}
                    selected={selectedChips.includes(muscle)}
                  />
                ))}
              </div>
            </div>
            <div className="filter-block">
              <h3>{t("DURATION")}</h3>
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
        </div>
        <div className="modal-footer">
          {selectedChips.length > 0 && (
            <BasicButton
              typeButton="white"
              hasFocus
              hasOutline
              onClick={() => setSelectedChips([])}
            >
              {t("CLEAR_FILTERS")}
            </BasicButton>
          )}
          <BasicButton
            onClick={() => {
              onSearch(selectedChips);
              onClose();
            }}
          >
            {t("SEARCH_PROGRAMS")}
          </BasicButton>
        </div>
      </form>
    </div>
  );
};

export default SearchModal;
