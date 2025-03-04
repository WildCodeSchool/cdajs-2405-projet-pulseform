import ErrorBodyPage from "@components/organismes/ErrorBodyPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("ErrorBodyPage", () => {
  it("renders the require props on ErrorBodyPage", () => {
    const tree = render(
      <MemoryRouter>
        <ErrorBodyPage {...requireProps} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});

const requireProps = {
  picture:
    "https://fastly.picsum.photos/id/250/200/300.jpg?hmac=igVdxs-AgITpHwPAZ80mpAfmhrGBvN_xThJlhp7vOqE",
  altPicture: "string",
  textError: "string",
};
