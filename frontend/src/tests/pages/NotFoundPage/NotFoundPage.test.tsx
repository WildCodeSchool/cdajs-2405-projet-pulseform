import NotFoundPage from "@pages/NotFoundPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("NotFoundPage", () => {
  it("renders the NotFoundPage", () => {
    const tree = render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
