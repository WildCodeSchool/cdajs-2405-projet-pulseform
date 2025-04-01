import NavBar from "@components/molecules/NavBar";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("NavBar Component", () => {
  it("renders the NavBar component", () => {
    const tree = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
