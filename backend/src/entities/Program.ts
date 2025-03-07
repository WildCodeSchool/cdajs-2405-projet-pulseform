import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FitnessLevelEnum } from "./Enums";
import { Exercise } from "./Exercise";
import { History } from "./History";
import { SharedProgramList } from "./SharedProgramList";
import { Tag } from "./Tag";

@ObjectType()
@Entity()
export class Program extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @Column({ length: 50 })
  @Field()
  name: string;

  @Column({ length: 250, nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  total_duration?: number;

  @Column({ type: "enum", enum: FitnessLevelEnum })
  @Field(() => FitnessLevelEnum)
  level: FitnessLevelEnum;

  @Column({ length: 250, nullable: true })
  @Field({ nullable: true })
  image: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field(() => Date)
  created_at: Date;

  @Column({ default: 0 })
  @Field(() => Int)
  visibility: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  like?: number;

  @ManyToMany(
    () => Exercise,
    (exercise) => exercise.programs,
    {
      cascade: true,
    },
  )
  @Field(() => [Exercise], { nullable: true })
  @JoinTable({
    name: "exercise_list",
    joinColumn: {
      name: "program_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "exercise_id",
      referencedColumnName: "id",
    },
  })
  exercises?: Exercise[];

  @ManyToMany(
    () => Tag,
    (tag) => tag.programs,
  )
  @Field(() => [Tag], { nullable: true })
  @JoinTable({
    name: "tag_list",
    joinColumn: {
      name: "program_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "tag_id",
      referencedColumnName: "id",
    },
  })
  tags?: Tag[];

  @OneToMany(
    () => History,
    (histories) => histories.program,
  )
  histories: History[] | undefined;

  @OneToMany(
    () => SharedProgramList,
    (sharedProgram) => sharedProgram.program,
  )
  sharedPrograms!: SharedProgramList[];

  constructor(
    name: string,
    description: string,
    total_duration: number,
    level: FitnessLevelEnum,
    image: string,
    created_at: Date,
    visibility: number,
    like?: number,
    exercises?: Exercise[],
    tags?: Tag[],
  ) {
    super();
    this.name = name;
    this.description = description;
    this.total_duration = total_duration;
    this.level = level;
    this.image = image;
    this.created_at = created_at;
    this.visibility = visibility;
    this.like = like;
    this.exercises = exercises;
    this.tags = tags;
  }
}
