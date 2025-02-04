import { Field, ID, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@ObjectType()
@Entity()
export class GroupList extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id?: number;

	@Column()
	@Field(() => Int)
	user_id: number;

	@Column()
	@Field(() => Int)
	group_Id: number;

	@Column({ default: false })
	@Field()
	user_accept: boolean;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	@Field(() => Date)
	createdAt: Date;

	@ManyToOne(
		() => User,
		(user) => user.groupLists,
	)
	@JoinColumn({ name: "user_id" }) // 'user_id' is the foreign key in 'GroupList' referencing 'User.id'
	@Field(() => User)
	user!: User;

	@ManyToOne(
		() => Group,
		(group) => group.groupLists,
	)
	@JoinColumn({ name: "group_id" }) // 'group_id' is the foreign key in 'GroupList' referencing 'Group.id'
	@Field(() => Group)
	group!: Group;

	constructor(
		user_id: number,
		group_Id: number,
		createdAt: Date,
		user_accept = false,
	) {
		super();
		this.user_id = user_id;
		this.group_Id = group_Id;
		this.createdAt = createdAt;
		this.user_accept = user_accept;
	}
}
