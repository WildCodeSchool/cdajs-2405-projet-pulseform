import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Group } from "./Group";
import { Program } from "./Program";
import { User } from "./User";

@ObjectType()
@Entity()
export class SharedProgramList extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  // Relation avec l'utilisateur qui partage
  @ManyToOne(
    () => User,
    (user) => user.sharedPrograms,
    { eager: true },
  )
  @JoinColumn({ name: "user_id" })
  @Field(() => User)
  user: User;

  @ManyToOne(
    () => Program,
    (program) => program.sharedPrograms,
    { eager: true },
  )
  @JoinColumn({ name: "program_id" })
  @Field(() => Program)
  program: Program;

  @ManyToOne(() => Group, { nullable: true, eager: true })
  @JoinColumn({ name: "group_list_id" })
  @Field(() => Group, { nullable: true })
  group?: Group;

  @ManyToOne(
    () => User,
    (user) => user.sharedProgramsAsFriend,
    { nullable: true },
  )
  @JoinColumn({ name: "friend_id" })
  @Field(() => User, { nullable: true })
  friend?: User;

  constructor(user: User, program: Program, group: Group, friend?: User) {
    super();
    this.user = user || null;
    this.program = program || null;
    this.group = group || null;
    this.friend = friend;
  }
}
