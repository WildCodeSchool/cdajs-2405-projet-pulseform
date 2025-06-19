import { registerEnumType } from "type-graphql";

export enum MemberRoleEnum {
  USER = "user",
  ADMIN = "admin",
}

export enum FitnessLevelEnum {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
}

export enum MuscleGroupEnum {
  BACK = "Back",
  CHEST = "Chest",
  ABDOMINALS = "Abdominals",
  ARMS = "Arms",
  LEGS = "Legs",
  GLUTES = "Glutes",
}

export enum TagsEnum {
  WEIGHT_LOSS = "Weight Loss",
  MUSCLE_GAIN = "Muscle Gain",
  FLEXIBILITY = "Flexibility Enhancement",
  CARDIOVASCULAR_HEALTH = "Cardiovascular Health",
  RELAXATION = "Relaxation",
}

export enum VisibilityEnum {
  PRIVATE = "Private",
  PUBLIC = "Public",
  FRIENDS = "Friends",
}

// Enregistrement des énumérations
registerEnumType(MemberRoleEnum, {
  name: "MemberRole",
  description: "Roles of a member in the system", // Optionnel
});

registerEnumType(FitnessLevelEnum, {
  name: "FitnessLevel",
  description: "Levels of fitness suitable for exercises",
});

registerEnumType(MuscleGroupEnum, {
  name: "MuscleGroup",
  description: "Muscle groups targeted by exercises",
});

registerEnumType(TagsEnum, {
  name: "Tags",
  description: "Tags describing the purpose or benefits of exercises",
});

registerEnumType(VisibilityEnum, {
  name: "Visibility",
  description: "Visibility settings for programs",
});
