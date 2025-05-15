import { MockedProvider } from "@apollo/client/testing";
import FitnessLevelSelectView from "@components/molecules/FitnessLevelSelectView";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders the FitnessLevelSelectView component", () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <MemoryRouter>
        <FitnessLevelSelectView />
      </MemoryRouter>
    </MockedProvider>,
  );
});
