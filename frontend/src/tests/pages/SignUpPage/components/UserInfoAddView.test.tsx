import UserInfoAddView from "@pages/SignUpPage/components/UserInfoAddView";
import { render } from "@testing-library/react";

describe("UserInfoAddView", () => {
  it("renders the UserInfoAddView component", () => {
    const tree = render(<UserInfoAddView />);
    expect(tree).toMatchSnapshot();
  });
});
