import { Chip } from "@mui/material";

import "./ProgramFilterRecap.scss";
import { useTranslation } from "react-i18next";

type ProgramFilterRecapProp = {
  filters: Array<string>;
  onDelete: (filter: string) => void;
};

const ProgramFilterRecap = ({ filters, onDelete }: ProgramFilterRecapProp) => {
  const { t } = useTranslation();
  return (
    <div className="program-chip-list-container">
      {filters.map((filter) => (
        <Chip
          key={filter}
          label={t(filter)}
          onDelete={() => onDelete(filter)}
        />
      ))}
    </div>
  );
};

export default ProgramFilterRecap;
