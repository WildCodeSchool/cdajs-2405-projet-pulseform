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

export enum TagsEnum {
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
