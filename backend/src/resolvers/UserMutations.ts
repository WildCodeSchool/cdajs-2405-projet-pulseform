import { Arg, Field, FieldResolver, Float, InputType, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { EntityManager, In } from "typeorm";
import * as argon2 from 'argon2';
import jwt from "jsonwebtoken";

@Resolver(User)
export class UserMutations {

    @Mutation(_ => User)
    async createUser(@Arg("email") email: string, @Arg("password") password: string, @Arg("role") role: string): Promise<User> {
        
        const hashedPassword: string = await argon2.hash(password);
        const user = new User(email, role, hashedPassword);
        await user.save();

        return user;
    }

}