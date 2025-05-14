import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Weight } from "../inputs/WeightsInput";
import { FitnessLevelEnum, MemberRoleEnum } from "./Enums";
import { GroupList } from "./GroupList";
import { History } from "./History";
import { SharedProgramList } from "./SharedProgramList";
import { Tag } from "./Tag";

@ObjectType()
@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @Column({ length: 20 })
  @Field()
  username: string;

  @Column("text")
  @Field()
  description: string;

  @Column({ length: 50 })
  @Field()
  email: string;

  @Column({ length: 250 })
  @Field()
  password: string;

  @Column({ length: 250, nullable: true })
  @Field({ nullable: true })
  image: string;

  @Column({ nullable: true })
  @Field(() => Date, { nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  gender?: string;

  @Field(() => [Weight], { nullable: true })
  @Column("jsonb", { nullable: true })
  weights?: { weight: number; month: string; update_at: Date }[];

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  height: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field(() => Date)
  created_at: Date;

  @Column({
    type: "enum",
    enum: MemberRoleEnum,
    default: MemberRoleEnum.USER,
  })
  @Field(() => MemberRoleEnum)
  role: MemberRoleEnum;

  @Column({
    type: "enum",
    enum: FitnessLevelEnum,
    nullable: true,
  })
  @Field(() => FitnessLevelEnum, { nullable: true })
  level: FitnessLevelEnum;

  @Column({ type: "int", default: 0 })
  @Field(() => Int)
  total_completed_exercises: number;

  @Column({ type: "int", default: 0 })
  @Field(() => Int)
  total_time_spent: number;

  @ManyToMany(
    () => Tag,
    (tag) => tag.users,
  )
  @JoinTable({
    name: "user_tag_list",
    joinColumn: { name: "user_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "tag_id", referencedColumnName: "id" },
  })
  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @OneToMany(
    () => GroupList,
    (groupList) => groupList.user,
  )
  groupLists: GroupList[] | undefined;

  @OneToMany(
    () => History,
    (histories) => histories.user,
  )
  histories: History[] | undefined;

  @OneToMany(
    () => SharedProgramList,
    (sharedPrograms) => sharedPrograms.user,
  )
  sharedPrograms: SharedProgramList[] | undefined;

  @OneToMany(
    () => SharedProgramList,
    (sharedProgramsAsFriend) => sharedProgramsAsFriend.friend,
  )
  sharedProgramsAsFriend!: SharedProgramList[];

  constructor(
    username: string,
    description: string,
    email: string,
    password: string,
    image: string,
    birthday: Date,
    gender: string,
    weights: { weight: number; month: string; update_at: Date }[],
    height: number,
    created_at: Date,
    level: FitnessLevelEnum,
    total_completed_exercises: number | undefined,
    total_time_spent: number | undefined,
    role: MemberRoleEnum = MemberRoleEnum.USER,
  ) {
    super();
    this.username = username;
    this.description = description;
    this.email = email;
    this.password = password;
    this.image = image;
    this.birthday = birthday;
    this.gender = gender;
    this.weights = weights;
    this.height = height;
    this.created_at = created_at;
    this.role = role;
    this.level = level;
    this.total_completed_exercises = total_completed_exercises || 0;
    this.total_time_spent = total_time_spent || 0;
  }
}
