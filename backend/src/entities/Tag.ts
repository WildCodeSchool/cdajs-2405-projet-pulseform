import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { Program } from "./Program";
import { Tags } from "./Enums";

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

  @ManyToOne(() => Program, (program) => program.tags, { onDelete: "CASCADE" })
  @Field(() => Program)
  program_id: Program;

  constructor(name: Tags, program_id: Program) {
    super();
    this.name = name;
    this.program_id = program_id;
  }
}
