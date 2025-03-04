import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@ObjectType()
@Entity()
export class GroupList extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @Column({ default: false })
  @Field()
  user_accept: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field(() => Date)
  created_at: Date;

  @ManyToOne(
    () => User,
    (user) => user.groupLists,
    { eager: true },
  )
  @JoinColumn({ name: "user_id" })
  @Field(() => User, { nullable: true })
  user!: User;

  @ManyToOne(
    () => Group,
    (group) => group.groupLists,
    { eager: true },
  )
  @JoinColumn({ name: "group_id" })
  @Field(() => Group, { nullable: true })
  group!: Group;

  constructor(
    user: User,
    group: Group,
    user_accept = false,
    created_at?: Date,
  ) {
    super();
    this.user = user;
    this.group = group;
    this.user_accept = user_accept;
    this.created_at = created_at ?? new Date();
  }

  @Field(() => ID, { nullable: true })
  get userId(): number | null {
    return this.user?.id ?? null;
  }

  @Field(() => ID, { nullable: true })
  get groupId(): number | null {
    return this.group?.id ?? null;
  }
}
