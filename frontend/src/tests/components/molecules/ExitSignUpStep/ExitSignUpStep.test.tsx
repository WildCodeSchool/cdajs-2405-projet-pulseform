import ExitSignUpStep from "@components/molecules/ExitSignUpStep";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("ExitSignUpStep", () => {
  it("renders the ExitSignUpStep component", () => {
    const tree = render(
      <MemoryRouter>
        <ExitSignUpStep />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it("renders the ExitSignUpStep component with is completed", () => {
    const tree = render(
      <MemoryRouter>
        <ExitSignUpStep isCompleted />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
