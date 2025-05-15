import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useMemo } from "react";

import type { CalendarProps } from "./Calendar.types";
import "./Calendar.scss";

const Calendar = ({ events = [], initialDate }: CalendarProps) => {
  const datesToHighlight = useMemo(
    () => events.map((e) => new Date(e.start).toISOString().slice(0, 10)),
    [events],
  );

  const dayCellClassNames = (arg: { date: Date }) => {
    const isoDate = arg.date.toISOString().slice(0, 10);
    return datesToHighlight.includes(isoDate) ? ["highlighted-date-cell"] : [];
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate={initialDate}
        locale={frLocale}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        titleFormat={{ year: "numeric", month: "2-digit" }}
        buttonText={{
          prev: "<",
          next: ">",
        }}
        events={events}
        editable={false}
        droppable={false}
        dayCellClassNames={dayCellClassNames}
        eventContent={() => null}
      />
    </div>
  );
};

export default Calendar;
