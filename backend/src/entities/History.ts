import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import { Program } from "./Program";

@ObjectType()
@Entity()
export class History extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @ManyToOne(() => User, (user) => user.histories, { onDelete: "CASCADE" })
  @Field(() => User)
  user_id: User;

  @ManyToOne(() => Program, (program) => program.histories, { onDelete: "CASCADE" })
  @Field(() => Program)
  program_id: Program;

  @Column({ nullable: true })
  @Field((type) => Int, { nullable: true })
  total_kcal_loss?: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  start_date?: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  end_date?: Date;

  constructor(user_id: User, program_id: Program, total_kcal_loss?: number, start_date?: Date, end_date?: Date) {
    super();
    this.user_id = user_id;
    this.program_id = program_id;
    this.total_kcal_loss = total_kcal_loss;
    this.start_date = start_date;
    this.end_date = end_date;
  }
}
