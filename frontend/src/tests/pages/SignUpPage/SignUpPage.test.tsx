import { MockedProvider } from "@apollo/client/testing";
import SignUpPage from "@pages/SignUpPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SignUpPage", () => {
  it("renders the SignUp Page", () => {
    const tree = render(
      <MemoryRouter>
        <MockedProvider mocks={[]} addTypename={false}>
          <SignUpPage />
        </MockedProvider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
