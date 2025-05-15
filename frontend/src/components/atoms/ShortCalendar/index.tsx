import classNames from "classnames";

import "./ShortCalendar.scss";

import type { ShortCalendarProps } from "./ShortCalendar.type";

const ShortCalendar = ({ endDate }: ShortCalendarProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dayOfWeek = today.getDay();
  const daysFromMonday = (dayOfWeek + 6) % 7;
  const monday = new Date(today);
  monday.setDate(today.getDate() - daysFromMonday);

  const currentWeekDays = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
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
    const currentKey = currentWeekDays[index].toISOString();
    const prevKey = currentWeekDays[index - 1]?.toISOString();
    const nextKey = currentWeekDays[index + 1]?.toISOString();

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
      {currentWeekDays.map((date, index) => {
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
