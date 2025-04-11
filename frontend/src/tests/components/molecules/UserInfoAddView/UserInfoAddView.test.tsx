import { MockedProvider } from "@apollo/client/testing";
import UserInfoAddView from "@components/molecules/UserInfoAddView";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders the UserInfoAddView component", () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <MemoryRouter>
        <UserInfoAddView />
      </MemoryRouter>
    </MockedProvider>,
  );
});
