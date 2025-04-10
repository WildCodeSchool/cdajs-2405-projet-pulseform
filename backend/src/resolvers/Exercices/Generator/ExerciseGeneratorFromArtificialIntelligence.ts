import { Exercice } from "src/entities/Exercice";
import { ExerciseGenerator } from "./ExerciseGenerator";

enum AIExerciseFlavor {
    Random,
    Yoga,
    ClassicStretching,
    Split,
    HIIT,
    LISS,
    All
}

export class ExerciseGeneratorFromArtificialIntelligence implements ExerciseGenerator {

    constructor(private readonly flavor: AIExerciseFlavor) {
    }

    async generateExcercise(): Promise<Exercice> {
        // call Mistral AI to generate a proper exercise description based on flavor

        // generate animation with picsart

        return new Exercice(/*...generated data .*/);
    }
}