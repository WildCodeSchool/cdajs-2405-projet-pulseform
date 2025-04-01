import Ruban from "@components/atoms/Ruban/Ruban";
import type { RubanProps } from "@components/atoms/Ruban/Ruban.type";
import { render } from "@testing-library/react";

describe("Ruban", () => {
  it("renders the Ruban component with a single day", () => {
    const props: RubanProps = { days: 1 };
    const tree = render(<Ruban {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders the Ruban component with multiple days", () => {
    const props: RubanProps = { days: 5 };
    const tree = render(<Ruban {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
