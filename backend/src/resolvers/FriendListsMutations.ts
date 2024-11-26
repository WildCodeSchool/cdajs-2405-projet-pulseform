import { Arg, Field, InputType, Int, Mutation, Resolver } from "type-graphql";
import AppDataSource from "../AppDataSource"
import { FriendList } from "../entities/FriendList";

@Resolver(FriendList)
export class FriendListMutations {

    // Ajouter un ami (ajoute une relation mais ne l'approuve pas encore)
    @Mutation(type => FriendList)
    async addFriend(
        @Arg("user_id") user_id: number,
        @Arg("friend_id") friend_id: number
    ): Promise<FriendList> {
        // Vérification si une relation d'amitié existe déjà entre les utilisateurs
        const existingFriendship = await AppDataSource.manager.findOne(FriendList, {
            where: [
                { user_id, friend_id },
                { user_id: friend_id, friend_id: user_id },
            ],
        });

        if (existingFriendship) {
            throw new Error("Friendship already exists");
        }

        // Création de la relation d'amitié (ajoutée mais non confirmée)
        const newFriendship = new FriendList(user_id, friend_id, false, new Date());
        return await newFriendship.save();
    }

    // Accepter une demande d'amitié (confirme la relation)
    @Mutation(type => Boolean)
    async acceptFriendRequest(
        @Arg("user_id") user_id: number,
        @Arg("friend_id") friend_id: number
    ): Promise<boolean> {
        // Vérification si la demande d'amitié existe
        const friendship = await AppDataSource.manager.findOne(FriendList, {
            where: [
                { user_id, friend_id },
                { user_id: friend_id, friend_id: user_id },
            ],
        });

        if (!friendship) {
            throw new Error("Friendship request not found");
        }

        // Si la relation est déjà acceptée, rien à faire
        if (friendship.added) {
            throw new Error("Friendship already accepted");
        }

        // Confirmation de la relation (ajout de l'ami)
        friendship.added = true;
        await friendship.save();
        return true;
    }

    // Supprimer un ami (supprimer une relation d'amitié)
    @Mutation(type => Boolean)
    async removeFriend(
        @Arg("user_id") user_id: number,
        @Arg("friend_id") friend_id: number
    ): Promise<boolean> {
        const friendship = await AppDataSource.manager.findOne(FriendList, {
            where: [
                { user_id, friend_id },
                { user_id: friend_id, friend_id: user_id },
            ],
        });

        if (!friendship) {
            throw new Error("Friendship not found");
        }

        // Supprime la relation d'amitié
        await AppDataSource.manager.remove(FriendList, friendship);
        return true;
    }
}
