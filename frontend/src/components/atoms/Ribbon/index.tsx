import { useTranslation } from "react-i18next";

import { RibbonIcon } from "@utils/icon-list/iconList";
import "./Ribbon.scss";
import type { HistoryItem, RibbonProps } from "./Ribbon.type";

const Ribbon = ({ endDate }: RibbonProps) => {
  const { t } = useTranslation();

  if (!endDate || endDate.length === 0) return null;

  const getStreakFromToday = (history: HistoryItem[]): number | null => {
    if (!history || history.length === 0) return null;
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const uniqueDates = Array.from(
      new Set(
        history
          .map((item) => {
            const raw = item.end_date;
            if (!raw) return null;
            const date = raw instanceof Date ? raw : new Date(raw);
            if (Number.isNaN(date.getTime())) return null;
            date.setUTCHours(0, 0, 0, 0);
            return date.getTime();
          })
          .filter((t): t is number => t !== null),
      ),
    ).map((t) => new Date(t));

    uniqueDates.sort((a, b) => b.getTime() - a.getTime());

    const hasToday = uniqueDates.some((d) => d.getTime() === today.getTime());
    const startDate = new Date(today);

    if (!hasToday) {
      startDate.setUTCDate(startDate.getUTCDate() - 1);

      const hasYesterday = uniqueDates.some(
        (d) => d.getTime() === startDate.getTime(),
      );

      if (!hasYesterday) return null;
    }

    let streak = 0;
    while (true) {
      const match = uniqueDates.some(
        (d) => d.getTime() === startDate.getTime(),
      );

      if (match) {
        streak++;
        startDate.setUTCDate(startDate.getUTCDate() - 1);
      } else {
        break;
      }
    }

    return streak >= 2 ? streak : null;
  };

  const streakDay: number | null = getStreakFromToday(endDate);

  if (streakDay === null) return null;

  return (
    <div className="ribbon">
      <div className="ribbon__triangle ribbon__triangle--left" />
      <div className="ribbon__content">
        <RibbonIcon className="ribbon__icon" />
        <span>{t("XXX_DAYS_IN_A_ROW", { nb: streakDay })}</span>
      </div>
      <div className="ribbon__triangle ribbon__triangle--right" />
    </div>
  );
};

export default Ribbon;
