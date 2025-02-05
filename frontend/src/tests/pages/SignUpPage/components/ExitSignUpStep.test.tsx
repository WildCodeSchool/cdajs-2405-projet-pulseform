import ExitSignUpStep from "@pages/SignUpPage/components/ExitSignUpStep";
import { render } from "@testing-library/react";

describe("ExitSignUpStep", () => {
  it("renders the ExitSignUpStep component", () => {
    const tree = render(<ExitSignUpStep />);
    expect(tree).toMatchSnapshot();
  });

  it("renders the ExitSignUpStep component with is completed", () => {
    const tree = render(<ExitSignUpStep isCompleted />);
    expect(tree).toMatchSnapshot();
  });
});
