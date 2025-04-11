import { MockedProvider } from "@apollo/client/testing";
import FirstView from "@pages/LandingPage/components/FirstView";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("FirstView", () => {
  it("renders the FirstView component", () => {
    const tree = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <MemoryRouter>
          <FirstView />
        </MemoryRouter>
      </MockedProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
