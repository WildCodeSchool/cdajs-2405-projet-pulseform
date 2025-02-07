import { Arg, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../../AppDataSource";
import { Group } from "../../entities/Group";
import { User } from "../../entities/User";
import { CreateGroupInput, UpdateGroupInput } from "../../inputs/GroupsInput";

@Resolver(Group)
export class GroupsMutations {
  // Créer un groupe
  @Mutation(() => Group)
  async createGroup(
    @Arg("data", () => CreateGroupInput) data: CreateGroupInput,
  ): Promise<Group> {
    const { name, create_by, created_at } = data;

    const creator = await AppDataSource.manager.findOne(User, {
      where: { id: create_by },
    });
    if (!creator) {
      throw new Error("Creator not found");
    }

    // Création du groupe
    const newGroup = new Group(name, create_by, created_at);
    return await newGroup.save();
  }

  // Mettre à jour un groupe
  @Mutation(() => Group)
  async updateGroup(
    @Arg("data", () => UpdateGroupInput) data: UpdateGroupInput,
  ): Promise<Group> {
    const { id, name } = data;
    const group = await AppDataSource.manager.findOne(Group, { where: { id } });

    if (!group) {
      throw new Error("Group not found");
    }

    group.name = name;
    return await group.save();
  }

  // Supprimer un groupe
  @Mutation(() => Boolean)
  async deleteGroup(@Arg("id") id: number): Promise<boolean> {
    const result = await AppDataSource.manager.delete(Group, { id });
    if (result.affected === 0) {
      throw new Error(`Group with ID ${id} not found`);
    }
    return true;
  }
}
