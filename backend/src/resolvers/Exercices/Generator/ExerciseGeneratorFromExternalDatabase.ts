import { Exercice } from "src/entities/Exercice";
import { ExerciseGenerator } from "./ExerciseGenerator";


export class ExerciseGeneratorFromExternalDatabase implements ExerciseGenerator {

    constructor(
        private readonly externalServiceUrl: string,
        private readonly user: string,
        private readonly pass: string) {
    }

    async generateExcercise(): Promise<Exercice> {
        const response = await fetch(this.externalServiceUrl);
        return new Exercice(/*...get exercise from response .*/);
    }
}