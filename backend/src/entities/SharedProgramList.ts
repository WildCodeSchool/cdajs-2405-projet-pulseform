import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
@Entity()
export class SharedProgramList extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column()
  @Field((type) => Int)
  user_id: number;

  @Column()
  @Field((type) => Int)
  program_id: number;

  @Column({ nullable: true })
  @Field((type) => Int, { nullable: true })
  group_list_id?: number;

  @ManyToOne(() => User, { nullable: true })
  @Field(() => User, { nullable: true })
  friend?: User;

  constructor(user_id: number, program_id: number, group_list_id?: number, friend?: User) {
    super();
    this.user_id = user_id;
    this.program_id = program_id;
    this.group_list_id = group_list_id;
    if (friend) {
      this.friend = friend;
    }
  }
}
