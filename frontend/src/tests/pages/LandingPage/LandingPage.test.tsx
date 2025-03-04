import LandingPage from "@pages/LandingPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("LandingPage", () => {
  it("renders the Landing Page", () => {
    const tree = render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
