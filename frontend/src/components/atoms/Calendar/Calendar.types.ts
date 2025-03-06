export interface CalendarEvent {
  title: string;
  start: string;
  end?: string;
}

export interface CalendarProps {
  events?: CalendarEvent[];
}
