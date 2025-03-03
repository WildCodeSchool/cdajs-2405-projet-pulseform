import AccessDeniedPage from "@pages/AccessDeniedPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("AccessDeniedPage", () => {
  it("renders the AccessDeniedPage", () => {
    const tree = render(
      <MemoryRouter>
        <AccessDeniedPage />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
