import { ExerciseGenerator } from "./ExerciseGenerator";
import { ExerciseGeneratorFromArtificialIntelligence } from "./ExerciseGeneratorFromArtificialIntelligence";
import { ExerciseGeneratorFromExternalDatabase } from "./ExerciseGeneratorFromExternalDatabase";

export class ExerciseGeneratorFactory {



    static getExerciseGenerator(useAI: boolean): ExerciseGenerator {
        if (useAI) {
            return new ExerciseGeneratorFromArtificialIntelligence(/** */);
        }

        return new ExerciseGeneratorFromExternalDatabase(/**... */);
    }
}