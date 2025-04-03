import FitnessLevelMenu from "@components/molecules/FitnessLevelMenu";
import { render } from "@testing-library/react";

describe("FitnessLevelMenu", () => {
  it("renders the FitnessLevelMenu component", () => {
    const tree = render(<FitnessLevelMenu />);
    expect(tree).toMatchSnapshot();
  });
});
