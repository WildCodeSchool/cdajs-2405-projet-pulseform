import FitnessGoalsView from "@components/molecules/FitnessGoalsView";
import { render } from "@testing-library/react";

describe("FitnessGoalsView", () => {
  it("renders the FitnessGoalsView component", () => {
    const tree = render(<FitnessGoalsView />);
    expect(tree).toMatchSnapshot();
  });
});
