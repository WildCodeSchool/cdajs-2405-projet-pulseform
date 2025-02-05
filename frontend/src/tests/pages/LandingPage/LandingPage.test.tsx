import LandingPage from "@pages/LandingPage";
import { render } from "@testing-library/react";

describe("LandingPage", () => {
  it("renders the Landing Page", () => {
    const tree = render(<LandingPage />);
    expect(tree).toMatchSnapshot();
  });
});
