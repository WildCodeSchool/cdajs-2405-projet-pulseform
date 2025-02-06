import BodyStepQuestions from "@components/molecules/BodyStepQuestions";
import { render } from "@testing-library/react";

describe("BodyStepQuestions Component", () => {
  it("renders the BodyStepQuestions component", () => {
    const tree = render(
      <BodyStepQuestions {...defaultProps}> test </BodyStepQuestions>,
    );
    expect(tree).toMatchSnapshot();
  });
});

const defaultProps = {
  ctaExit: () => {},
  questionLabel: "Question",
};
