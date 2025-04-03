import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { vi } from "vitest";

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// Mock des fichiers SCSS pour éviter les erreurs dans les tests playwright
vi.mock("@assets/variables.scss", () => ({}));
