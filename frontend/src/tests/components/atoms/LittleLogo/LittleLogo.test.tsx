import LittleLogo from "@components/atoms/LittleLogo";
import { render } from "@testing-library/react";

describe("LittleLogo Component", () => {
	it("renders the LittleLogo component without label", () => {
		const tree = render(<LittleLogo />);
		expect(tree).toMatchSnapshot();
	});

	it("renders the LittleLogo component with a label", () => {
		const tree = render(<LittleLogo hasLabel={true} />);
		expect(tree).toMatchSnapshot();
	});

	it("renders the LittleLogo giant component with a label", () => {
		const tree = render(<LittleLogo hasLabel={true} size="giant" />);
		expect(tree).toMatchSnapshot();
	});

	it("renders the LittleLogo mobile component with a label", () => {
		const tree = render(<LittleLogo hasLabel={true} size="mobile" />);
		expect(tree).toMatchSnapshot();
	});

	it("renders the LittleLogo giant component without label ", () => {
		const tree = render(<LittleLogo size="giant" />);
		expect(tree).toMatchSnapshot();
	});

	it("renders the LittleLogo mobile component without label", () => {
		const tree = render(<LittleLogo size="mobile" />);
		expect(tree).toMatchSnapshot();
	});
});
