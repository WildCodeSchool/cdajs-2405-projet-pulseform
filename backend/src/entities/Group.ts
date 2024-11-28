import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import { GroupList } from "./GroupList";

@ObjectType()
@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column({ length: 50 })
  @Field()
  name: string;

  @Column()
  @Field((type) => Int)
  create_by: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field((type) => Date)
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.groups)
  @Field((type) => User)
  creator: User;

  @OneToMany(() => GroupList, (groupList) => groupList.group)
  groupLists: GroupList[] | undefined;

  constructor(name: string, create_by: number, createdAt: Date, creator: User) {
    super();
    this.name = name;
    this.create_by = create_by;
    this.createdAt = createdAt;
    this.creator = creator;
  }
}
