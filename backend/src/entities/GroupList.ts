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

  @ManyToOne(() => User, (user) => user.groupLists, { onDelete: "CASCADE" })
  @Field(() => User)
  user: User; 

  @ManyToOne(() => Group, (group) => group.groupLists, { onDelete: "CASCADE" })
  @Field(() => Group)
  group: Group; 

  @Column({ default: false })
  @Field()
  added: boolean; 

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field((type) => Date)
  createdAt: Date;

  constructor(user: User, group: Group, added: boolean = false, createdAt: Date) {
    super();
    this.user = user;
    this.group = group;
    this.added = added;
    this.createdAt = createdAt;
  }
}
