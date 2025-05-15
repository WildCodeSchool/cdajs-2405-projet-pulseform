import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./CompleteLaterButton.scss";

interface CompleteLaterButtonProps {
  to?: string;
}

function CompleteLaterButton({ to = "/home" }: CompleteLaterButtonProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className="complete-later-button desktop-only"
      onClick={() => navigate(to)}
    >
      {t("COMPLETE_LATER")}
    </button>
  );
}

export default CompleteLaterButton;
