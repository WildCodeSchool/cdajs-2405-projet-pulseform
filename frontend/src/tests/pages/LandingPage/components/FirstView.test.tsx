import FirstView from "@pages/LandingPage/components/FirstView";
import { render } from "@testing-library/react";

describe("FirstView", () => {
  it("renders the FirstView component", () => {
    const tree = render(<FirstView />);
    expect(tree).toMatchSnapshot();
  });
});
