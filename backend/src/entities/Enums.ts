import { registerEnumType } from "type-graphql";

export enum MemberRole {
  USER = "user",
  ADMIN = "admin",
}

export enum FitnessLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
}

export enum MuscleGroup {
  SHOULDERS = "Shoulders",
  BACK = "Back",
  CHEST = "Chest",
  ABDOMINALS = "Abdominals",
  ARMS = "Arms",
  LEGS = "Legs",
  GLUTES = "Glutes",
  CALVES = "Calves",
  FOREARMS = "Forearms",
  TRAPEZIUS = "Trapezius",
  LOWER_BACK = "Lower Back",
  OBLIQUES = "Obliques",
  NECK = "Neck",
  CARDIO = "Cardio",
}

export enum Tags {
  WEIGHT_LOSS = "Weight Loss",
  MUSCLE_GAIN = "Muscle Gain",
  ENDURANCE_IMPROVEMENT = "Endurance Improvement",
  FLEXIBILITY_ENHANCEMENT = "Flexibility Enhancement",
  STRENGTH_BUILDING = "Strength Building",
  CARDIOVASCULAR_HEALTH = "Cardiovascular Health",
  GENERAL_FITNESS = "General Fitness",
  REHABILITATION = "Rehabilitation",
  STRESS_RELIEF = "Stress Relief",
  BALANCE_AND_STABILITY = "Balance and Stability",
  ATHLETIC_PERFORMANCE = "Athletic Performance",
  TONING_AND_DEFINITION = "Toning and Definition",
}

// Enregistrement des énumérations
registerEnumType(MemberRole, {
  name: "MemberRole",
  description: "Roles of a member in the system", // Optionnel
});

registerEnumType(FitnessLevel, {
  name: "FitnessLevel",
  description: "Levels of fitness suitable for exercises",
});

registerEnumType(MuscleGroup, {
  name: "MuscleGroup",
  description: "Muscle groups targeted by exercises",
});

registerEnumType(Tags, {
  name: "Tags",
  description: "Tags describing the purpose or benefits of exercises",
});