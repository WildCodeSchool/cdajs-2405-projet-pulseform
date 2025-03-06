import Calendar from "@components/atoms/Calendar/Calendar";
import { render } from "@testing-library/react";

describe("Calendar", () => {
  it("renders the Calendar component with no events", () => {
    const tree = render(<Calendar />);
    expect(tree).toMatchSnapshot();
  });

  it("renders the Calendar component with events", () => {
    const testEvents = [
      { title: "Test Event 1", start: "2024-10-01" },
      { title: "Test Event 2", start: "2024-10-05", end: "2024-10-07" },
    ];

    const tree = render(<Calendar events={testEvents} />);
    expect(tree).toMatchSnapshot();
  });
});
