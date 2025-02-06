import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class History extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id?: number;

	@Column()
	@Field(() => Int)
	user_id: number;

	@Column()
	@Field(() => Int)
	program_id: number;

	@Column({ nullable: true })
	@Field(() => Int, { nullable: true })
	total_kcal_loss?: number;

	@Column({ nullable: true })
	@Field({ nullable: true })
	start_date?: Date;

	@Column({ nullable: true })
	@Field({ nullable: true })
	end_date?: Date;

	constructor(
		user_id: number,
		program_id: number,
		total_kcal_loss?: number,
		start_date?: Date,
		end_date?: Date,
	) {
		super();
		this.user_id = user_id;
		this.program_id = program_id;
		this.total_kcal_loss = total_kcal_loss;
		this.start_date = start_date;
		this.end_date = end_date;
	}
}
