import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class ExerciceList extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column()
  @Field((type) => Int)
  program_id: number;

  @Column()
  @Field((type) => Int)
  exercice_id: number;

  constructor(program_id: number, exercice_id: number) {
    super();
    this.program_id = program_id;
    this.exercice_id = exercice_id;
  }
}
