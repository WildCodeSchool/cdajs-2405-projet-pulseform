import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import { Group } from "./Group";

@ObjectType()
@Entity()
export class GroupList extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column()
  @Field((type) => Int)
  user_id: number;

  @Column()
  @Field((type) => Int)
  group_Id: number;

  @Column({ default: false })
  @Field()
  user_accept: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field((type) => Date)
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.groupLists)
  @Field((type) => User)
  user: User | undefined;

  @ManyToOne(() => Group, (group) => group.groupLists)
  @Field((type) => Group)
  group: Group | undefined;

  constructor(user_id: number, group_Id: number, user_accept: boolean = false, createdAt: Date) {
    super();
    this.user_id = user_id;
    this.group_Id = group_Id;
    this.user_accept = user_accept;
    this.createdAt = createdAt;
  }
}
