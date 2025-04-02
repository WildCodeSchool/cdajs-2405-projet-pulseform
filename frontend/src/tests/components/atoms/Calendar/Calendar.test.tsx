import Calendar from "@components/atoms/Calendar/Calendar";
import type { CalendarEvent } from "@components/atoms/Calendar/Calendar.types";
import { render } from "@testing-library/react";
describe("Calendar", () => {
  const fixedDate = new Date("2025-03-01T12:00:00Z");
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(fixedDate);
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it("renders the Calendar component with no events", () => {
    const tree = render(<Calendar initialDate="2025-03-01" />);
    expect(tree).toMatchSnapshot();
  });
  it("renders the Calendar component with events", () => {
    const testEvents: CalendarEvent[] = [
      { title: "Single Day Event", start: "2024-10-01" },
      { title: "Multi-Day Event", start: "2024-10-05", end: "2024-10-07" },
      { title: "Event at Month Start", start: "2024-10-01" },
      { title: "Event at Month End", start: "2024-10-31" },
      {
        title: "Event Spanning Two Months",
        start: "2024-09-29",
        end: "2024-10-02",
      },
      { title: "Event in Future", start: "2025-03-15" },
      { title: "Event on Leap Year", start: "2024-02-29" },
      { title: "Event on Christmas", start: "2024-12-25" },
    ];
    const tree = render(
      <Calendar events={testEvents} initialDate="2025-03-01" />,
    );
    expect(tree).toMatchSnapshot();
  });
});
