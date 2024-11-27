import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { FitnessLevel, MuscleGroup } from "./Enums";
import { Program } from "./Program";

@ObjectType()
@Entity()
export class Exercice extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column({ length: 50 })
  @Field()
  name: string;

  @Column({ length: 250, nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column()
  @Field((type) => Int)
  duration: number;

  @Column()
  @Field((type) => Int)
  kcal_loss: number;

  @Column({ type: "enum", enum: MuscleGroup })
  @Field((type) => MuscleGroup)
  muscle: MuscleGroup;

  @Column({ type: "enum", enum: FitnessLevel })
  @Field((type) => FitnessLevel)
  level: FitnessLevel;

  @Column({ nullable: true })
  @Field({ nullable: true })
  img_src: string;

  @ManyToMany(() => Program, (program) => program.exercices)
  @Field(() => [Program], { nullable: true })
  programs?: Program[];

  constructor(name: string, description: string, duration: number, kcal_loss: number, muscle: MuscleGroup, level: FitnessLevel, img_src: string) {
    super();
    this.name = name;
    this.description = description;
    this.duration = duration;
    this.kcal_loss = kcal_loss;
    this.muscle = muscle;
    this.level = level;
    this.img_src = img_src;
  }
}
