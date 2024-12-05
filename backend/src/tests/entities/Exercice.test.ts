import { Exercice } from "../../entities/Exercice";
import { FitnessLevel, MuscleGroup } from "../../entities/Enums";
import { describe, it, expect } from "vitest";
import { validate } from "class-validator";

const EXERCICE_NAME = "Superman";
const EXERCICE_DESCRIPTION = "une description lambda";
const EXERCICE_DURATION = 30;
const EXERCICE_KCAL_LOSS = 90;
const EXERCICE_MUSCLE = MuscleGroup.BACK;
const EXERCICE_LEVEL = FitnessLevel.BEGINNER;
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

const invalidExercice = new Exercice(
  "", // Invalid: name is empty
  null, // valid: description is null, but optional
  -5, // Invalid: duration must be positive
  0, // Invalid: kcal_loss must be greater than 0
  null as unknown as MuscleGroup, // Force cast to bypass the type error when creating nouvel exo => sinon erreur de TS ("null no asignable to muscleGroup enum")
  null as any, // Invalid: level is null => same as for muscleGroup => force cast to bypass TS error while creating invalid exercice
  "invalid-url" // Invalid URL format;
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
