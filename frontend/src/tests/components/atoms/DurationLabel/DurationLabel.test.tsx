import DurationLabel from "@components/atoms/DurationLabel";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("DurationLabel Component", () => {
  it("matches the snapshot", () => {
    const tree = render(<DurationLabel duration={60} />);
    expect(tree).toMatchSnapshot();
  });
});
