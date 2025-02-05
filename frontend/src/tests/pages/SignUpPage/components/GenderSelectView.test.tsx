import GenderSelectView from "@pages/SignUpPage/components/GenderSelectView";
import { render } from "@testing-library/react";

describe("GenderSelectView", () => {
  it("renders the GenderSelectView component", () => {
    const tree = render(<GenderSelectView />);
    expect(tree).toMatchSnapshot();
  });
});
