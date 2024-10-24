import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class FriendList extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column()
  @Field((type) => Int)
  user_id: number;

  @Column()
  @Field((type) => Int)
  friend_id: number;

  @Column({ default: false })
  @Field()
  added: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field((type) => Date)
  createdAt: Date;

  constructor(user_id: number, friend_id: number, added: boolean = false, createdAt: Date) {
    super();
    this.user_id = user_id;
    this.friend_id = friend_id;
    this.added = added;
    this.createdAt = createdAt;
  }
}
