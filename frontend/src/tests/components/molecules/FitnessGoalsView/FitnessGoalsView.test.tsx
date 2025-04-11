import { MockedProvider } from "@apollo/client/testing";
import FitnessGoalsView from "@components/molecules/FitnessGoalsView";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders the FitnessGoalsView component", () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <MemoryRouter>
        <FitnessGoalsView />
      </MemoryRouter>
    </MockedProvider>,
  );
});
