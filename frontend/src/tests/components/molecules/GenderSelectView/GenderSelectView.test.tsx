import { MockedProvider } from "@apollo/client/testing";
import GenderSelectView from "@components/molecules/GenderSelectView";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders the GenderSelectView component", () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <MemoryRouter>
        <GenderSelectView />
      </MemoryRouter>
    </MockedProvider>,
  );
});
