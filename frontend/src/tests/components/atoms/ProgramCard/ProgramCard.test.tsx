import ProgramCard from "@components/atoms/ProgramCard";
import { FitnessLevel, type Program } from "@graphql/__generated__/schema";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeAll, describe, expect, it, vi } from "vitest";

describe("ProgramCard Component", () => {
  beforeAll(() => {
    vi.stubEnv("VITE_URL_BACK", "http://localhost:4000");
    vi.stubEnv("VITE_IMAGE_PROGRAMME", "programs");
  });

  const mockProgram: Program = {
    id: "1",
    name: "Test Program",
    total_duration: 60,
    level: FitnessLevel.Beginner,
    created_at: new Date(),
    visibility: 0,
    image: "test.jpg",
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
