import { Field, ID, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { GroupList } from "./GroupList";
import { User } from "./User";

@ObjectType()
@Entity()
export class Group extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id?: number;

	@Column({ length: 50 })
	@Field(() => String)
	name: string;

	@Column()
	@Field(() => Int)
	create_by: number;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	@Field(() => Date)
	createdAt: Date;

	@ManyToOne(
		() => User,
		(user) => user.groups,
	)
	@Field(() => User)
	creator: User;

	@OneToMany(
		() => GroupList,
		(groupList) => groupList.group,
	)
	groupLists: GroupList[] | undefined;

	constructor(name: string, create_by: number, createdAt: Date, creator: User) {
		super();
		this.name = name;
		this.create_by = create_by;
		this.createdAt = createdAt;
		this.creator = creator;
	}
}
