import SignUpPage from "@pages/SignUpPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SignUpPage", () => {
  it("renders the SignUp Page", () => {
    const tree = render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
