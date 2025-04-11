import CompleteLaterButton from "@components/molecules/CompleteLaterButton/CompleteLaterButton";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("CompleteLaterButton", () => {
  it("renders the CompleteLaterButton component with default route", () => {
    const tree = render(
      <MemoryRouter>
        <CompleteLaterButton />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it("renders the CompleteLaterButton component with custom route", () => {
    const tree = render(
      <MemoryRouter>
        <CompleteLaterButton to="/custom" />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
