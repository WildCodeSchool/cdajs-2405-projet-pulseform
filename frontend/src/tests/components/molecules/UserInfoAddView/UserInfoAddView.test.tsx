import UserInfoAddView from "@components/molecules/UserInfoAddView";
import { render } from "@testing-library/react";

describe("UserInfoAddView", () => {
  it("renders the UserInfoAddView component", () => {
    const tree = render(<UserInfoAddView />);
    expect(tree).toMatchSnapshot();
  });
});
