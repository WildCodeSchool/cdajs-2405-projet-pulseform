import FlamesFitnessLevelLabel from "@components/atoms/FlamesFitnessLevelLabel";
import { FitnessLevel } from "@graphql/__generated__/schema";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("@assets/icons/icon-list/iconList", () => ({
  FlameIcon: () => <svg data-testid="flame-icon" />, // Mock as a simple SVG
}));

describe("FlamesFitnessLevelLabel Component", () => {
  it("renders the correct number of flames for Beginner level", () => {
    const { container } = render(
      <FlamesFitnessLevelLabel level={FitnessLevel.Beginner} />,
    );
    const flamesList = container.querySelector(".flames-list");
    expect(flamesList?.children).toHaveLength(1);
  });

  it("renders the correct number of flames for Intermediate level", () => {
    const { container } = render(
      <FlamesFitnessLevelLabel level={FitnessLevel.Intermediate} />,
    );
    const flamesList = container.querySelector(".flames-list");
    expect(flamesList?.children).toHaveLength(2);
  });

  it("renders the correct number of flames for Advanced level", () => {
    const { container } = render(
      <FlamesFitnessLevelLabel level={FitnessLevel.Advanced} />,
    );
    const flamesList = container.querySelector(".flames-list");
    expect(flamesList?.children).toHaveLength(3);
  });

  it("renders the label when withLabel is true", () => {
    render(<FlamesFitnessLevelLabel level={FitnessLevel.Beginner} withLabel />);
    expect(screen.getByText(FitnessLevel.Beginner)).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const tree = render(
      <FlamesFitnessLevelLabel level={FitnessLevel.Intermediate} withLabel />,
    );
    expect(tree).toMatchSnapshot();
  });
});
