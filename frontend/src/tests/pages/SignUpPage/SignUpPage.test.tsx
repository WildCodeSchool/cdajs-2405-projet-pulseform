import SignUpPage from "@pages/SignUpPage";
import { render } from "@testing-library/react";

describe("SignUpPage", () => {
  it("renders the SignUp Page", () => {
    const tree = render(<SignUpPage />);
    expect(tree).toMatchSnapshot();
  });
});
