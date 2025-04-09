import AlreadyMemberBlock from "@components/molecules/AlreadyMemberBlock/AlreadyMemberBlock";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("AlreadyMemberBlock", () => {
  it("renders the AlreadyMemberBlock component", () => {
    const tree = render(
      <MemoryRouter>
        <AlreadyMemberBlock />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
