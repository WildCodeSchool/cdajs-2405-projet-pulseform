import { Exercice } from "src/entities/Exercice";
import { ExerciseGenerator } from "./ExerciseGenerator";


export class ExerciseGeneratorFake implements ExerciseGenerator {

    async generateExcercise(): Promise<Exercice> {
        return new Exercice(/*...always the same .*/);
    }
}