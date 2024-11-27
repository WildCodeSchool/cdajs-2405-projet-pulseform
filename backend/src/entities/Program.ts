import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { FitnessLevel } from "./Enums";
import { History } from "./History";
import { Tag } from "./Tag";
import { Exercice } from "./Exercice";

@ObjectType()
@Entity()
export class Program extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column({ length: 50 })
  @Field()
  name: string;

  @Column({ length: 250, nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field((type) => Int, { nullable: true })
  total_duration?: number;

  @Column({ type: "enum", enum: FitnessLevel })
  @Field((type) => FitnessLevel)
  level: FitnessLevel;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field((type) => Date)
  createdAt: Date;

  @Column({ default: 0 })
  @Field((type) => Int)
  visibility: number;

  @Column({ nullable: true })
  @Field((type) => Int, { nullable: true })
  like?: number;

  @OneToMany(() => History, (history) => history.program_id)
  @Field(() => [History], { nullable: true })
  histories?: History[];

  @OneToMany(() => Tag, (tag) => tag.program_id)
  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @ManyToMany(() => Exercice, (exercice) => exercice.programs)
  @JoinTable()
  @Field(() => [Exercice], { nullable: true })
  exercices?: Exercice[];

  constructor(name: string, description: string, total_duration: number, level: FitnessLevel, createdAt: Date, visibility: number = 0, like?: number) {
    super();
    this.name = name;
    this.description = description;
    this.total_duration = total_duration;
    this.level = level;
    this.createdAt = createdAt;
    this.visibility = visibility;
    this.like = like;
  }
}
