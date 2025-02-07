import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  it("renders the App component", () => {
    const tree = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(tree).toMatchSnapshot();
  });
});
