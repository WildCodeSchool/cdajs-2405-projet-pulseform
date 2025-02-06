const argon2 = require("argon2");

async function hashPassword(password) {
	try {
		const hashedPassword = await argon2.hash(password);
		console.log("Mot de passe haché :", hashedPassword);
	} catch (err) {
		console.error("Erreur lors du hachage :", err);
	}
}

// Exemple d'utilisation
const password = process.argv[2]; // Récupère le mot de passe passé en argument
if (password) {
	hashPassword(password);
} else {
	console.log("Veuillez passer un mot de passe en argument.");
}
