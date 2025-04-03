import Calendar from "@components/atoms/Calendar/Calendar";
import type { CalendarEvent } from "@components/atoms/Calendar/Calendar.types";
import { render } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

describe("Calendar", () => {
  const fixedDate = new Date("2025-03-01T12:00:00Z");

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(fixedDate);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("renders the Calendar and includes event day cells", () => {
    const testEvents: CalendarEvent[] = [
      { title: "Test Event", start: "2025-03-15" },
      { title: "Second Event", start: "2025-03-16" },
    ];

    const { container } = render(
      <Calendar events={testEvents} initialDate="2025-03-01" />,
    );

    const day15 = container.querySelector('[data-date="2025-03-15"]');
    const day16 = container.querySelector('[data-date="2025-03-16"]');

    expect(day15).toBeTruthy();
    expect(day16).toBeTruthy();
  });
});
