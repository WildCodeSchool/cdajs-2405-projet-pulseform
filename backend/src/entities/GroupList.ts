import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class GroupList extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column({ length: 50, nullable: true })
  @Field({ nullable: true })
  name?: string;

  @Column()
  @Field((type) => Int)
  user_id: number;

  @Column()
  @Field((type) => Int)
  group_Id: number;

  @Column({ default: false })
  @Field()
  added: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field((type) => Date)
  createdAt: Date;

  constructor(name: string, user_id: number, group_Id: number, added: boolean = false, createdAt: Date) {
    super();
    this.name = name;
    this.user_id = user_id;
    this.group_Id = group_Id;
    this.added = added;
    this.createdAt = createdAt;
  }
}
