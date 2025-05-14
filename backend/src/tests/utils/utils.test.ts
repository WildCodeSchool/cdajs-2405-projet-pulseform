import { describe, expect, it } from "@jest/globals";
import { isStrongPassword, isValidEmail } from "../../utils/validators";

describe("Validators", () => {
  describe("isStrongPassword", () => {
    it("should return true for a strong password", () => {
      const password = "StrongP@ssw0rd!";
      const result = isStrongPassword(password);
      expect(result).toBe(true);
    });

    it("should return false for a weak password", () => {
      const password = "weakpassword";
      const result = isStrongPassword(password);
      expect(result).toBe(false);
    });
  });

  describe("isValidEmail", () => {
    it("should return true for a valid email", () => {
      const email = "test@gmail.com";
      const result = isValidEmail(email);
      expect(result).toBe(true);
    });

    it("should return false for an invalid email", () => {
      const email = "invalid-email";
      const result = isValidEmail(email);
      expect(result).toBe(false);
    });
  });
});
