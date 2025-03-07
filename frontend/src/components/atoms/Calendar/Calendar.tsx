import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

import type { CalendarProps } from "./Calendar.types";
import "./Calendar.scss";

const Calendar = ({ events = [] }: CalendarProps) => {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
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
        eventContent={(eventInfo) => (
          <div className="fc-event-main">{eventInfo.event.title}</div>
        )}
      />
    </div>
  );
};

export default Calendar;
