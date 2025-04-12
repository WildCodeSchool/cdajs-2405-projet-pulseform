import { useTranslation } from "react-i18next";

import "./HistoryViewHeader.scss";

type HistoryViewHeaderType = {
  isHistoryView: boolean;
  handleHistoryView: () => void;
};

const HistoryViewHeader = ({
  isHistoryView,
  handleHistoryView,
}: HistoryViewHeaderType) => {
  const { t } = useTranslation();

  return (
    <div className="history-view__header">
      <p className="history-view__header__title">
        {isHistoryView ? t("HISTORY") : t("WEEKLY_SUMMARY")}
      </p>
      <button
        type="button"
        onClick={() => {
          handleHistoryView();
        }}
        className="history-view__header__button"
      >
        {isHistoryView ? t("BACK") : t("SEE_MORE")}
      </button>
    </div>
  );
};

export default HistoryViewHeader;
