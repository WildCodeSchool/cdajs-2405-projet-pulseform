import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { FitnessLevelEnum, MuscleGroupEnum } from "./Enums";
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

  @Column({ type: "enum", enum: MuscleGroupEnum })
  @Field((type) => MuscleGroupEnum)
  muscle: MuscleGroupEnum;

  @Column({ type: "enum", enum: FitnessLevelEnum })
  @Field((type) => FitnessLevelEnum)
  level: FitnessLevelEnum;

  @Column({ nullable: true })
  @Field({ nullable: true })
  img_src?: string;

  @ManyToMany(() => Program, (program) => program.exercices)
  @Field((type) => [Program], { nullable: true })
  programs?: Program[];

  constructor(name: string, description: string, duration: number, kcal_loss: number, muscle: MuscleGroupEnum, level: FitnessLevelEnum, img_src: string) {
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
