import { Arg, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";
import AppDataSource from "../AppDataSource";
import * as argon2 from 'argon2';
import jwt from "jsonwebtoken";


@Resolver(User)
export class UsersQueries {

    // Login
    @Query(type => String)
    async login(@Arg("email") email: string, @Arg("password") password: string): Promise<string> {
        // hacher le password et on vérifie en DB que l'utilisateur à l'email donné, possède bien le même hash
        const user = await AppDataSource.manager
            .createQueryBuilder(User, "user")
            .where("user.email = :email", { email })
            .getOneOrFail();
        const isValid: boolean = await argon2.verify(user.password, password);
        if (!isValid) {
            throw new Error('password is incorrect');
        }

        // ici, l'utilisateur a bien été trouvé et son mot de passe est validé
        // on génère donc le JWT
        const jwtSecret: string | undefined = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error('invalid JWT secret');
        }

        const token: string = jwt.sign({ email, role: user.role }, jwtSecret, {
            expiresIn: '24h'
        });
        return token;
    }

    // Récupérer tous les utilisateurs
    @Query(type => [User])
    async getAllUsers(): Promise<User[]> {
        const users: User[] = await AppDataSource.manager.find(User);
        return users;
    }

    // Récupérer les informations d'un utilisateur
    @Query((type) => User, { nullable: true })
    async getUserById(@Arg("id") id: number): Promise<User | null> {
        return await AppDataSource.manager.findOne(User, {
            where: { id },
        });
    }

}