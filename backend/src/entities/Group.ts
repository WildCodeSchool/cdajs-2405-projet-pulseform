import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GroupList } from "./GroupList";

@ObjectType()
@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @Column({ length: 50 })
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Int)
  create_by: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field(() => Date)
  created_at: Date;

  @OneToMany(
    () => GroupList,
    (groupList) => groupList.group,
  )
  groupLists!: GroupList[];

  constructor(name: string, create_by: number, created_at: Date) {
    super();
    this.name = name;
    this.create_by = create_by;
    this.created_at = created_at;
  }
}
