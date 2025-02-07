import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TagsEnum } from "./Enums";
import { Program } from "./Program";
import { User } from "./User";

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @Column({
    type: "enum",
    enum: TagsEnum,
  })
  @Field(() => TagsEnum)
  name: TagsEnum;

  @ManyToMany(
    () => User,
    (user) => user.tags,
  )
  @Field(() => [User], { nullable: true })
  users!: User[];

  @ManyToMany(
    () => Program,
    (program) => program.tags,
    { cascade: true },
  )
  @Field(() => [Program], { nullable: true })
  programs!: Program[];

  constructor(name: TagsEnum) {
    super();
    this.name = name;
  }
}
