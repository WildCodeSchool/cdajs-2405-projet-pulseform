import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Program } from "./Program";
import { User } from "./User";

@ObjectType()
@Entity()
export class History extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @ManyToOne(
    () => User,
    (user) => user.histories,
  )
  @JoinColumn({ name: "user_id" })
  @Field(() => User)
  user!: User;

  @ManyToOne(
    () => Program,
    (program) => program.histories,
  )
  @JoinColumn({ name: "program_id" })
  @Field(() => Program)
  program!: Program;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  total_kcal_loss?: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  total_completed_exercises?: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  total_time_spent?: number;

  @Column({
    nullable: true,
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  @Field(() => Date, { nullable: true })
  start_date?: Date;

  @Column({
    nullable: true,
    type: "timestamp",
    default: null,
  })
  @Field(() => Date, { nullable: true })
  end_date?: Date;

  constructor(
    user: User,
    program: Program,
    total_kcal_loss?: number | null | undefined,
    start_date?: Date,
    end_date?: Date,
    total_completed_exercises?: number,
    total_time_spent?: number,
  ) {
    super();
    this.user = user;
    this.program = program;
    this.total_kcal_loss = total_kcal_loss || 0;
    this.start_date = start_date ?? new Date();
    this.end_date = end_date;
    this.total_completed_exercises = total_completed_exercises;
    this.total_time_spent = total_time_spent;
  }
}
