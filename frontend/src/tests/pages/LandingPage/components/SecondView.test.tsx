import SecondView from "@pages/LandingPage/components/SecondView";
import { render } from "@testing-library/react";

describe("SecondView", () => {
  it("renders the SecondView component", () => {
    const tree = render(<SecondView />);
    expect(tree).toMatchSnapshot();
  });
});
