import FirstView from "@pages/LandingPage/components/FirstView";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("FirstView", () => {
  it("renders the FirstView component", () => {
    const tree = render(
      <MemoryRouter>
        <FirstView />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
