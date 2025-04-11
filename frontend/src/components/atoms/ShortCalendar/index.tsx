import classNames from "classnames";

import "./ShortCalendar.scss";

import type { ShortCalendarProps } from "./ShortCalendar.type";

const ShortCalendar = ({ endDate }: ShortCalendarProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const last8Days = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - (6 - i));
    date.setHours(0, 0, 0, 0);
    return date;
  });

  const historyMap = (endDate ?? []).reduce<Record<string, string[]>>(
    (acc, item) => {
      const date = new Date(item?.end_date || "");
      date.setHours(0, 0, 0, 0);
      const key = date.toISOString();
      if (!acc[key]) acc[key] = [];
      if (item?.end_date) {
        acc[key].push(item.end_date.toString());
      }
      return acc;
    },
    {},
  );

  const getStreakClass = (index: number): string | null => {
    const currentKey = last8Days[index].toISOString();
    const prevKey = last8Days[index - 1]?.toISOString();
    const nextKey = last8Days[index + 1]?.toISOString();

    const isCurrent = historyMap[currentKey];
    const isPrev = historyMap[prevKey];
    const isNext = historyMap[nextKey];

    if (!isCurrent) return null;
    if (!isPrev && isNext) return "short-calendar__streak-left";
    if (isPrev && isNext) return "short-calendar__streak-middle";
    if (isPrev && !isNext) return "short-calendar__streak-right";
    return null;
  };

  return (
    <div className="short-calendar">
      {last8Days.map((date, index) => {
        const key = date.toISOString();
        const events = historyMap[key] || [];
        const isFilled = events.length > 0;
        const streakClass = getStreakClass(index);

        const dayClass = classNames("short-calendar__day", {
          "short-calendar__day__filled": isFilled && !streakClass,
          ...(streakClass ? { [streakClass]: true } : {}),
        });

        return (
          <div key={key} className={dayClass}>
            {date.getDate()}
          </div>
        );
      })}
    </div>
  );
};

export default ShortCalendar;
