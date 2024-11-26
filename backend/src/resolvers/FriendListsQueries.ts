import { Arg, Query, Resolver } from "type-graphql";
import { FriendList } from "../entities/FriendList";
import AppDataSource from "../AppDataSource";

@Resolver(FriendList)
export class FriendListQueries {

    // Récupérer la liste des amis d'un utilisateur
    @Query(type => [FriendList])
    async getFriendsByUserId(@Arg("user_id") user_id: number): Promise<FriendList[]> {
        const friends: FriendList[] = await AppDataSource.manager.find(FriendList, {
            where: [{ user_id }, { friend_id: user_id }],
        });
        return friends;
    }

    // Vérifier si deux utilisateurs sont amis
    @Query(type => Boolean)
    async areFriends(
        @Arg("user_id") user_id: number,
        @Arg("friend_id") friend_id: number
    ): Promise<boolean> {
        const friendship = await AppDataSource.manager.findOne(FriendList, {
            where: [
                { user_id, friend_id },
                { user_id: friend_id, friend_id: user_id },
            ],
        });
        return !!friendship && friendship.added;
    }

}
