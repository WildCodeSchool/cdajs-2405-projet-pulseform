import BasicButtom from "@components/atoms/BasicButton";
import { render } from "@testing-library/react";

describe("BasicButtom Component", () => {
	it("renders the BasicButtom component", () => {
		const tree = render(<BasicButtom>Button</BasicButtom>);
		expect(tree).toMatchSnapshot();
	});
});
