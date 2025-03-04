import BasicButtom from "@components/atoms/BasicButton";
import { render } from "@testing-library/react";

describe("BasicButtom Component", () => {
  it("renders the BasicButtom component", () => {
    const tree = render(<BasicButtom {...defaultProps}>Button</BasicButtom>);
    expect(tree).toMatchSnapshot();
  });

  it("renders the BasicButtom component with a white button", () => {
    const tree = render(
      <BasicButtom {...defaultProps} typeButton="white">
        Button
      </BasicButtom>,
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders the BasicButtom component with a white button and focus", () => {
    const tree = render(
      <BasicButtom {...defaultProps} typeButton="white" hasFocus>
        Button
      </BasicButtom>,
    );

    expect(tree).toMatchSnapshot();
  });
});

const defaultProps = {
  onclick: () => {},
};
