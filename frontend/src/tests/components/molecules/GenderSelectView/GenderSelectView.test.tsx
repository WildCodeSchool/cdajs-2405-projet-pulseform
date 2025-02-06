import GenderSelectView from "@components/molecules/GenderSelectView";
import { render } from "@testing-library/react";

describe("GenderSelectView", () => {
  it("renders the GenderSelectView component", () => {
    const tree = render(<GenderSelectView />);
    expect(tree).toMatchSnapshot();
  });
});
