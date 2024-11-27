import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
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

  @Column({ type: "int" })
  @Field((type) => Int)
  created_by: number; 

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field((type) => Date)
  createdAt: Date; 

  @OneToMany(() => GroupList, (groupList) => groupList.group)
  @Field(() => [GroupList], { nullable: true })
  groupLists?: GroupList[]; 

  constructor(name: string, created_by: number, createdAt: Date) {
    super();
    this.name = name;
    this.created_by = created_by;
    this.createdAt = createdAt;
  }
}
