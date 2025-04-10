import fs from "node:fs";
import dotenv from "dotenv";
import { Client } from "pg";
dotenv.config();

console.log("🚀 Insertion de données factices dans la base app...");

const client = new Client({
  host: process.env.DB_NAME,
  port: 5432,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

async function seed() {
  try {
    // Lecture du fichier SQL
    const sql = fs.readFileSync("/app/src/db/seed/seed.sql", "utf-8");

    try {
      // Connexion à la base de données
      await client.connect();
      console.log("✔️ Connecté à la base de données");

      await client.query("BEGIN");
      console.log("✔️ Transaction commencée");

      await client.query("SET CONSTRAINTS ALL DEFERRED");
      console.log("✔️ Contraintes différées activées");

      // Exécution des requêtes SQL
      console.log("Exécution de la requête : ", sql);
      await client.query(sql);
      console.log("✔️ SQL exécuté");

      await client.query("COMMIT");
      console.log("✔️ Transaction commitée");

      // Crée le fichier pour signaler la fin
      console.log("Création du fichier /tmp/seed_done");
      fs.writeFileSync("/tmp/seed_done", "done");

      process.exit(0);
    } catch (err) {
      console.error("❌ Erreur lors de l'insertion des données :", err);
      await client.query("ROLLBACK");
      process.exit(1);
    }
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("❌ Erreur lors de l'insertion des données :", err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

seed();
