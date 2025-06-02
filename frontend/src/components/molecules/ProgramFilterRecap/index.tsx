import { Chip } from "@mui/material";

import "./ProgramFilterRecap.scss";

type ProgramFilterRecapProp = {
  filters: Array<string>;
  onDelete: (filter: string) => void;
};

const ProgramFilterRecap = ({ filters, onDelete }: ProgramFilterRecapProp) => {
  return (
    <div className="program-chip-list-container">
      {filters.map((filter) => (
        <Chip key={filter} label={filter} onDelete={() => onDelete(filter)} />
      ))}
    </div>
  );
};

export default ProgramFilterRecap;
