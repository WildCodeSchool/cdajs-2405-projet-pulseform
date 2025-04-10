import { Exercice } from "src/entities/Exercice";

export interface ExerciseGenerator {
 
    generateExcercise(): Promise<Exercice>;
}