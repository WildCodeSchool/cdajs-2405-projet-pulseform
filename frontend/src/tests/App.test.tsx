import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { ME_QUERY } from "../graphql/queries";

const mocks = [
  {
    request: { query: ME_QUERY },
    result: { data: { me: { id: "2", name: "Gael" } } },
  },
];

describe("App", () => {
  it("renders the App component", async () => {
    const tree = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </MockedProvider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
