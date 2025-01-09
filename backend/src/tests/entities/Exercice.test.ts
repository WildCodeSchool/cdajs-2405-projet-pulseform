import { Exercice } from "../../entities/Exercice";
import { FitnessLevelEnum, MuscleGroupEnum } from "../../entities/Enums";
import { describe, it, expect } from "@jest/globals";
import { validate } from "class-validator";

const EXERCICE_NAME = "Superman";
const EXERCICE_DESCRIPTION = "une description lambda";
const EXERCICE_DURATION = 30;
const EXERCICE_KCAL_LOSS = 90;
const EXERCICE_MUSCLE = MuscleGroupEnum.BACK;
const EXERCICE_LEVEL = FitnessLevelEnum.BEGINNER;
const EXERCICE_IMG_SRC = "http://example.com/superman.jpg";

const validExercice = new Exercice(
  EXERCICE_NAME,
  EXERCICE_DESCRIPTION,
  EXERCICE_DURATION,
  EXERCICE_KCAL_LOSS,
  EXERCICE_MUSCLE,
  EXERCICE_LEVEL,
  EXERCICE_IMG_SRC
);

const INVALID_NAME = "";
const INVALID_DURATION = -5;
const INVALID_KCAL_LOSS = 0;
const INVALID_LEVEL = "INVALID_LEVEL" as unknown as FitnessLevelEnum;
const INVALID_MUSCLE = "INVALID_MUSCLE" as unknown as MuscleGroupEnum;
const INVALID_URL = "invalid-url";

const invalidExercice = new Exercice(
  INVALID_NAME,
  EXERCICE_DESCRIPTION,
  INVALID_DURATION,
  INVALID_KCAL_LOSS,
  INVALID_MUSCLE,
  INVALID_LEVEL,
  INVALID_URL
);

describe("Exercice class", () => {
  it("should create an Exercice instance correctly", () => {
    expect(validExercice).toBeDefined();
    expect(validExercice.name === EXERCICE_NAME).toBeTruthy();
    expect(validExercice.description === EXERCICE_DESCRIPTION).toBeTruthy();
    expect(validExercice.duration === EXERCICE_DURATION).toBeTruthy();
    expect(validExercice.kcal_loss === EXERCICE_KCAL_LOSS).toBeTruthy();
    expect(validExercice.muscle === EXERCICE_MUSCLE).toBeTruthy();
    expect(validExercice.level === EXERCICE_LEVEL).toBeTruthy();
    expect(validExercice.img_src === EXERCICE_IMG_SRC).toBeTruthy();
  });

  it("should handle invalid input", async () => {
    const errors = await validate(invalidExercice);

    // Check for specific error messages
    const errorMessages = errors
      .map((err) => Object.values(err.constraints || {}).flat())
      .flat();

    expect(errorMessages).toContain("The 'name' field is required.");
    expect(errorMessages).toContain("'duration' must be greater than 0.");
    expect(errorMessages).toContain("'kcal_loss' must be greater than 0.");
    expect(errorMessages).toContain("'img_src' must be a valid URL.");
  });
});
