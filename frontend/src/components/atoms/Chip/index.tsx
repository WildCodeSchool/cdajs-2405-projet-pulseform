import "./Chip.scss";

interface ChipProps {
  label: string;
  onClick?: () => void;
  selected?: boolean;
  withCross?: boolean;
  onCrossClick?: () => void;
}

const Chip = ({ label, onClick, selected = false }: ChipProps) => {
  return (
    <button
      type="button"
      className={`chip ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Chip;
