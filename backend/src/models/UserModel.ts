import AppDataSource from "../AppDataSource";
import { User } from "../entities/User";
import type { CreateUserInput, UpdateUserInput } from "../inputs/UsersInput";

export const UserModel = {
	// Récupérer tous les utilisateurs
	async getAll(): Promise<User[]> {
		return await AppDataSource.manager.find(User);
	},

	// Récupérer un utilisateur par ID
	async getById(id: number): Promise<User | null> {
		return await AppDataSource.manager.findOne(User, { where: { id } });
	},

	// Récupérer un utilisateur par email
	async getByEmail(email: string): Promise<User | null> {
		console.log("Recherche d'utilisateur avec l'email:", email); // Vérifie que cette ligne est avant la requête
		return await AppDataSource.manager.findOne(User, { where: { email } });
	},

	// Créer un nouvel utilisateur
	async create(data: CreateUserInput): Promise<User> {
		const user = AppDataSource.manager.create(User, data);
		return await AppDataSource.manager.save(user);
	},

	// Mettre à jour un utilisateur
	async update(
		id: number,
		data: Partial<UpdateUserInput>,
	): Promise<User | null> {
		await AppDataSource.manager.update(User, id, data);
		return await AppDataSource.manager.findOne(User, { where: { id } });
	},

	// Supprimer un utilisateur
	async delete(id: number): Promise<void> {
		await AppDataSource.manager.delete(User, id);
	},
};
