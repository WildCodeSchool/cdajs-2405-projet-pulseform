import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";
import { Tags } from "./Enums";
import { Program } from "./Program";

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column({
    type: "enum",
    enum: Tags,
  })
  @Field((type) => Tags)
  name: Tags;

  @Column()
  @Field()
  program_id: number;

  @ManyToMany(() => User, (user) => user.tags)
  @Field((type) => [User], { nullable: true })
  users?: User[];

  @ManyToMany(() => Program, (program) => program.tags, { cascade: true })
  @Field((type) => [Program], { nullable: true })
  programs?: Program[];

  constructor(name: Tags, program_id: number, programs: Program[]) {
    super();
    this.name = name;
    this.program_id = program_id;
    this.programs = programs;
  }
}
