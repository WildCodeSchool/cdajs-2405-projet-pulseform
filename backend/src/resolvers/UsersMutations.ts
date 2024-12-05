import { Arg, Mutation, Resolver } from "type-graphql";
import { User } from "../entities/User";
import AppDataSource from "../AppDataSource";
import * as argon2 from 'argon2';
import { FitnessLevel, MemberRole } from "../entities/Enums";

@Resolver(User)
export class UsersMutations {

    // Mutation pour créer un nouvel utilisateur
    @Mutation(() => User)
    async createUser(
        @Arg("username") username: string,
        @Arg("description") description: string,
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Arg("image") image: string,
        @Arg("birthday") birthday: Date,
        @Arg("gender") gender: string,
        @Arg("weight") weight: number,
        @Arg("height") height: number,
        @Arg("createdAt") createdAt: Date,
        @Arg("role") role: MemberRole,
        @Arg("level") level: FitnessLevel
    ): Promise<User> {
        // Vérifier si un utilisateur avec ce email existe déjà
        const existingUser = await AppDataSource.manager.findOne(User, { where: { email } });
        if (existingUser) {
            throw new Error("User with this email already exists");
        }

        // Hacher le mot de passe
        const hashedPassword = await argon2.hash(password);

        // Créer un nouvel utilisateur
        const user = new User(
            username,
            description,
            email,
            password,
            image,
            birthday,
            gender,
            weight,
            height,
            createdAt,
            role,
            level
        );

        // Sauvegarder dans la base de données
        return await AppDataSource.manager.save(user);
    }

    // Mutation pour mettre à jour un utilisateur
    @Mutation(() => User)
    async updateUser(
        @Arg("username") username: string,
        @Arg("description") description: string,
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Arg("image") image: string,
        @Arg("birthday") birthday: Date,
        @Arg("gender") gender: string,
        @Arg("weight") weight: number,
        @Arg("height") height: number,
        @Arg("createdAt") createdAt: Date,
        @Arg("role") role: MemberRole,
        @Arg("level") level: FitnessLevel
    ): Promise<User> {
        const existingUser = await AppDataSource.manager.findOne(User, { where: { email } });
        if (existingUser) {
            throw new Error("User with this email already exists");
        }

        const hashedPassword = await argon2.hash(password);

        const user = new User(
            username,
            description,
            email,
            password,
            image,
            birthday,
            gender,
            weight,
            height,
            createdAt,
            role,
            level,
        );

        return await AppDataSource.manager.save(user);
    }

    // Mutation pour supprimer un utilisateur
    @Mutation(() => Boolean)
    async deleteUser(@Arg("id") id: number): Promise<boolean> {
        const user = await AppDataSource.manager.findOne(User, { where: { id } });

        if (!user) {
            throw new Error("User not found");
        }

        // Supprimer l'utilisateur de la base de données
        await AppDataSource.manager.remove(User, user);
        return true;
    }
}
