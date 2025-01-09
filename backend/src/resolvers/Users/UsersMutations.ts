import { Arg, Mutation, Resolver } from "type-graphql";
import { User } from "../../entities/User";
import AppDataSource from "../../AppDataSource";
import * as argon2 from 'argon2';
import { CreateUserInput, UpdateUserInput } from "../../inputs/UsersInput";

@Resolver(User)
export class UsersMutations {

    // Mutation pour créer un nouvel utilisateur
    @Mutation(() => User)
    async createUser(
        @Arg("data") data: CreateUserInput
    ): Promise<User> {
        // Vérifier si un utilisateur avec cet email existe déjà
        const existingUser = await AppDataSource.manager.findOne(User, { where: { email: data.email } });
        if (existingUser) {
            throw new Error("User with this email already exists");
        }

        // Hacher le mot de passe
        const hashedPassword = await argon2.hash(data.password);

        // Créer un nouvel utilisateur
        const user = new User(
            data.username, data.description, data.email, hashedPassword, data.image, data.birthday, data.gender, data.weight, data.height, data.createdAt, data.role, data.level);
        return await user.save();
    }

    // Mutation pour mettre à jour un utilisateur
    @Mutation(() => User)
    async updateUser(
        @Arg("data") data: UpdateUserInput
    ): Promise<User> {
        const existingUser = await AppDataSource.manager.findOne(User, { where: { id: data.id } });
        if (!existingUser) {
            throw new Error("User not found");
        }

        // Mettre à jour l'utilisateur
        existingUser.username = data.username;
        existingUser.description = data.description;
        existingUser.email = data.email;
        existingUser.password = await argon2.hash(data.password);
        existingUser.image = data.image;
        existingUser.birthday = data.birthday;
        existingUser.gender = data.gender;
        existingUser.weight = data.weight;
        existingUser.height = data.height;
        existingUser.createdAt = data.createdAt;
        existingUser.role = data.role;
        existingUser.level = data.level;

        // Sauvegarder dans la base de données
        return await AppDataSource.manager.save(existingUser);
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