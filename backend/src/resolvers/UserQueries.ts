import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { User } from "../entities/User";
import * as argon2 from 'argon2';
import jwt from "jsonwebtoken";


@Resolver(User)
export class UserQueries {

    @Query(type => String)
    async login(@Arg("email") email: string, @Arg("password") password: string): Promise<string> {
        // hacher le password et on vérifie en DB que l'utilisateur à l'email donné, possède bien le même hash
        const user: User = await User.findOneOrFail({
            where: {
                email, 
            }
        });
        const isValid: boolean = await argon2.verify(user.passwordHashed, password);
        if (!isValid) {
            throw new Error('password is incorrect');
        }

        // ici, l'utilisateur a bien été trouvé et son mot de passe est validé
        // on génère donc le JWT
        const jwtSecret: string | undefined = process.env.JWT_SECRET;
        console.log('jwt secret: ' + jwtSecret)
        if (!jwtSecret) {
            throw new Error('invalid JWT secret');
        }

        const token: string = jwt.sign({ email, role: user.role }, jwtSecret, {
            expiresIn: '24h'
        });
        return token;
    }

    

}