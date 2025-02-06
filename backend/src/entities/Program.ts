import { Field, ID, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	ManyToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { FitnessLevelEnum } from "./Enums";
import { Exercice } from "./Exercice";
import { Tag } from "./Tag";

@ObjectType()
@Entity()
export class Program extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id?: number;

	@Column({ length: 50 })
	@Field()
	name: string;

	@Column({ length: 250, nullable: true })
	@Field({ nullable: true })
	description?: string;

	@Column({ nullable: true })
	@Field(() => Int, { nullable: true })
	total_duration?: number;

	@Column({ type: "enum", enum: FitnessLevelEnum })
	@Field(() => FitnessLevelEnum)
	level: FitnessLevelEnum;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	@Field(() => Date)
	createdAt: Date;

	@Column({ default: false })
	@Field(() => Boolean)
	visibility: boolean;

	@Column({ nullable: true })
	@Field(() => Int, { nullable: true })
	like?: number;

	@ManyToMany(
		() => Exercice,
		(exercice) => exercice.programs,
		{
			cascade: true,
		},
	)
	@Field(() => [Exercice], { nullable: true })
	exercices?: Exercice[];

	@ManyToMany(
		() => Tag,
		(tag) => tag.programs,
	)
	@Field(() => [Tag], { nullable: true })
	tags?: Tag[];

	constructor(
		name: string,
		description: string,
		total_duration: number,
		level: FitnessLevelEnum,
		createdAt: Date,
		visibility: boolean,
		like?: number,
		exercices?: Exercice[],
		tags?: Tag[],
	) {
		super();
		this.name = name;
		this.description = description;
		this.total_duration = total_duration;
		this.level = level;
		this.createdAt = createdAt;
		this.visibility = visibility;
		this.like = like;
		this.exercices = exercices;
		this.tags = tags;
	}
}
