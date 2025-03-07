import WeightChart from "@components/molecules/WeightChart";
import { render } from "@testing-library/react";
import { vi } from "vitest";

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("WeightChart", () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-03-07T12:00:00Z"));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("renders the WeightChart for require props", () => {
    const tree = render(<WeightChart {...requireProps} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders the WeightChart has not data", () => {
    const tree = render(<WeightChart weightChartData={[]} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders the WeightChart has not full data", () => {
    const tree = render(<WeightChart {...dataNotFullProps} />);
    expect(tree).toMatchSnapshot();
  });
});

const dataNotFullProps = {
  weightChartData: [
    { month: "May", poids: 65 },
    { month: "Jun", poids: null },
    { month: "Jul", poids: 64 },
    { month: "Aug", poids: 66 },
    { month: "Sep", poids: null },
    { month: "Oct", poids: 71 },
    { month: "Nov", poids: 70 },
    { month: "Dec", poids: null },
  ],
};

const requireProps = {
  weightChartData: [
    { month: "May", poids: 65 },
    { month: "Jun", poids: 68 },
    { month: "Jul", poids: 64 },
    { month: "Aug", poids: 66 },
    { month: "Sep", poids: 69 },
    { month: "Oct", poids: 71 },
    { month: "Nov", poids: 70 },
    { month: "Dec", poids: 50 },
    { month: "Mar", poids: 115 },
  ],
};
