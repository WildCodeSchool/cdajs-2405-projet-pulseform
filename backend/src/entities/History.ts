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
    { eager: true },
  )
  @JoinColumn({ name: "user_id" })
  @Field(() => User)
  user!: User;

  @ManyToOne(
    () => Program,
    (program) => program.histories,
    { eager: true },
  )
  @JoinColumn({ name: "program_id" })
  program!: Program;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  total_kcal_loss?: number;

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
    total_kcal_loss?: number,
    start_date?: Date,
    end_date?: Date,
  ) {
    super();
    this.user = user;
    this.program = program;
    this.total_kcal_loss = total_kcal_loss;
    this.start_date = start_date ?? new Date();
    this.end_date = end_date;
  }
}
