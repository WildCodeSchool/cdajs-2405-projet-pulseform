import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import { Group } from "./Group";

@ObjectType()
@Entity()
export class GroupList extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column({ type: "int" })
  @Field((type) => Int)
  user_id: number;

  @Column({ type: "int" })
  @Field((type) => Int)
  group_Id: number;

  @Column({ default: false, type: "boolean" })
  @Field((type) => Boolean)
  user_accept: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field((type) => Date)
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.groupLists, { nullable: false })
  @JoinColumn({ name: "user_id" }) // 'user_id' is the foreign key in 'GroupList' referencing 'Group.id'
  @Field((type) => User)
  user!: User;

  @ManyToOne(() => Group, (group) => group.groupLists, { nullable: false })
  @JoinColumn({ name: "group_id" }) // 'group_id' is the foreign key in 'GroupList' referencing 'Group.id'
  @Field((type) => Group)
  group!: Group;

  constructor(
    user_id: number,
    group_Id: number,
    user_accept: boolean = false,
    createdAt: Date
  ) {
    super();
    this.user_id = user_id;
    this.group_Id = group_Id;
    this.user_accept = user_accept;
    this.createdAt = createdAt;
  }
}
