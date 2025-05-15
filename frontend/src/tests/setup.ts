import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { vi } from "vitest";
import "./mocks/i18nForTests";

afterEach(() => {
  cleanup();
});

vi.mock("@assets/variables.scss", () => ({}));
