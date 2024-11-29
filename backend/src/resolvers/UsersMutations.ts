import { Arg, Mutation, Resolver } from "type-graphql";
import { User } from "../entities/User";
import AppDataSource from "../AppDataSource";
import * as argon2 from 'argon2';

@Resolver(User)
export class UsersMutations {

    // Mutation pour créer un nouvel utilisateur
    @Mutation(() => User)
    async createUser(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Arg("role") role: string // Role par exemple: 'admin', 'user', etc.
    ): Promise<User> {
        // Vérifier si un utilisateur avec ce email existe déjà
        const existingUser = await AppDataSource.manager.findOne(User, { where: { email } });
        if (existingUser) {
            throw new Error("User with this email already exists");
        }

        // Hacher le mot de passe
        const hashedPassword = await argon2.hash(password);

        // Créer un nouvel utilisateur
        const user = new User();
        user.email = email;
        user.passwordHashed = hashedPassword;
        user.role = role;

        // Sauvegarder dans la base de données
        return await AppDataSource.manager.save(user);
    }

    // Mutation pour mettre à jour un utilisateur
    @Mutation(() => User)
    async updateUser(
        @Arg("id") id: number,
        @Arg("email", { nullable: true }) email?: string,
        @Arg("password", { nullable: true }) password?: string,
        @Arg("role", { nullable: true }) role?: string
    ): Promise<User> {
        // Chercher l'utilisateur
        const user = await AppDataSource.manager.findOne(User, { where: { id } });

        if (!user) {
            throw new Error("User not found");
        }

        // Mettre à jour les champs uniquement si les nouvelles valeurs sont fournies
        if (email) {
            user.email = email;
        }
        if (password) {
            user.passwordHashed = await argon2.hash(password); // Hacher le nouveau mot de passe
        }
        if (role) {
            user.role = role;
        }

        // Sauvegarder dans la base de données
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
