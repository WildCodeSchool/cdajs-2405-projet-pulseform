import { MockedProvider } from "@apollo/client/testing";
import LandingPage from "@pages/LandingPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("LandingPage", () => {
  it("renders the Landing Page", () => {
    const tree = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </MockedProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
