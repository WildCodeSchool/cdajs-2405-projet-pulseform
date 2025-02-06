import FitnessLevelSelectView from "@components/molecules/FitnessLevelSelectView";
import { render } from "@testing-library/react";

describe("FitnessLevelSelectView", () => {
  it("renders the FitnessLevelSelectView component", () => {
    const tree = render(<FitnessLevelSelectView />);
    expect(tree).toMatchSnapshot();
  });
});
