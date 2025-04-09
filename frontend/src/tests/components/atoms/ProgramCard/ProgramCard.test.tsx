import ProgramCard from "@components/atoms/ProgramCard";
import { FitnessLevel, type Program } from "@graphql/__generated__/schema";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("ProgramCard Component", () => {
  const mockProgram: Program = {
    id: "1",
    name: "Test Program",
    total_duration: 60,
    level: FitnessLevel.Beginner,
    created_at: new Date(),
    visibility: 0,
  };

  it("matches the snapshot", () => {
    const tree = render(
      <MemoryRouter>
        <ProgramCard program={mockProgram} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
