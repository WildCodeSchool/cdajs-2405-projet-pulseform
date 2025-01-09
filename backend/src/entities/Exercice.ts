import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsUrl,
  Min,
} from "class-validator";
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
  @IsNotEmpty({ message: "The 'name' field is required." })
  name: string;

  @Column({ length: 250, nullable: true })
  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: "'description' must be a string." })
  description?: string;

  @Column()
  @Field((type) => Int)
  @IsNotEmpty({ message: "The 'duration' field is required." })
  @IsInt({ message: "'duration' must be an integer." })
  @Min(1, { message: "'duration' must be greater than 0." })
  duration: number;

  @Column()
  @Field((type) => Int)
  @IsNotEmpty({ message: "The 'kcal_loss' field is required." })
  @IsInt({ message: "'kcal_loss' must be an integer." })
  @Min(1, { message: "'kcal_loss' must be greater than 0." })
  kcal_loss: number;

  @Column({ type: "enum", enum: MuscleGroupEnum })
  @Field((type) => MuscleGroupEnum)
  @IsNotEmpty({ message: "The 'muscle' field is required." })
  muscle: MuscleGroupEnum;

  @Column({ type: "enum", enum: FitnessLevelEnum })
  @Field((type) => FitnessLevelEnum)
  @IsNotEmpty({ message: "The 'fitness' field is required." })
  level: FitnessLevelEnum;


  @Column({ nullable: true })
  @Field({ nullable: true })
  @IsOptional()
  @IsUrl({}, { message: "'img_src' must be a valid URL." })
  img_src?: string;

  @ManyToMany(() => Program, (program) => program.exercices)
  @Field((type) => [Program], { nullable: true })
  programs?: Program[];

  constructor(
    name: string,
    description: string | null,
    duration: number,
    kcal_loss: number,
    muscle: MuscleGroupEnum,
    level: FitnessLevelEnum,
    img_src: string
  ) {

    super();
    this.name = name;
    this.description = description || undefined;
    this.duration = duration;
    this.kcal_loss = kcal_loss;
    this.muscle = muscle;
    this.level = level;
    this.img_src = img_src;
  }
}
