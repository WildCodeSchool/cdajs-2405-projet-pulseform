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
	@Field((type) => ID)
	id?: number;

	@Column({
		type: "enum",
		enum: TagsEnum,
	})
	@Field((type) => TagsEnum)
	name: TagsEnum;

	@Column()
	@Field()
	program_id: number;

	@ManyToMany(
		() => User,
		(user) => user.tags,
	)

	@Field((type) => [User], { nullable: true })
	users?: User[];

	@ManyToMany(
		() => Program,
		(program) => program.tags,
		{ cascade: true },
	)
	@Field((type) => [Program], { nullable: true })
	programs?: Program[];

	constructor(name: TagsEnum, program_id: number, programs: Program[]) {
		super();
		this.name = name;
		this.program_id = program_id;
		this.programs = programs;
	}
}
