import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the App component", () => {
    const tree = render(<App />);

    expect(tree).toMatchSnapshot();
  });
});
