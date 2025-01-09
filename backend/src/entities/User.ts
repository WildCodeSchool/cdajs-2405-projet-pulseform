import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { MemberRoleEnum, FitnessLevelEnum } from "./Enums";
import { Tag } from "./Tag";
import { Group } from "./Group";
import { GroupList } from "./GroupList";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
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

  @Column({ length: 50 })
  @Field()
  password: string;

  @Column({ length: 250, nullable: true })
  @Field({ nullable: true })
  image: string;

  @Column({ nullable: true })
  @Field((type) => Date, { nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  @Field((type) => Int, { nullable: true })
  weight: number;

  @Column({ nullable: true })
  @Field((type) => Int, { nullable: true })
  height: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field((type) => Date)
  createdAt: Date;

  @Column({
    type: "enum",
    enum: MemberRoleEnum,
    default: MemberRoleEnum.USER,
  })
  @Field((type) => MemberRoleEnum)
  role: MemberRoleEnum;

  @Column({
    type: "enum",
    enum: FitnessLevelEnum,
    nullable: true,
  })
  @Field((type) => FitnessLevelEnum, { nullable: true })
  level: FitnessLevelEnum;

  @ManyToMany(() => Tag, { cascade: true })
  @JoinTable()
  @Field((type) => [Tag], { nullable: true })
  tags?: Tag[];

  @OneToMany(() => Group, (group) => group.creator)
  @Field((type) => [Group], { nullable: true })
  groups?: Group[];

  @OneToMany(() => GroupList, (groupList) => groupList.user)
  groupLists: GroupList[] | undefined;

  constructor(
    username: string = "",
    description: string,
    email: string,
    password: string = "",
    image: string,
    birthday: Date,
    gender: string,
    weight: number,
    height: number,
    createdAt: Date,
    role: MemberRoleEnum = MemberRoleEnum.USER,
    level: FitnessLevelEnum
  ) {
    super();
    this.username = username;
    this.description = description;
    this.email = email;
    this.password = password;
    this.image = image;
    this.birthday = birthday;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
    this.createdAt = createdAt;
    this.role = role;
    this.level = level;
  }
}
