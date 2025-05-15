import "reflect-metadata";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import AppDataSource from "../AppDataSource";

const migrationsDir = path.join(__dirname, "../db/migrations");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string) => {
  return new Promise<string>((resolve) => rl.question(question, resolve));
};

const run = async () => {
  try {
    // Vérifie si le dossier migrations est vide
    const files = fs.readdirSync(migrationsDir);

    if (files.length === 0) {
      console.log("⚠️ Dossier des migrations est vide.");

      const response = await askQuestion(
        "Souhaitez-vous générer une migration initiale ? (y/n) ",
      );

      if (response.toLowerCase() === "y") {
        try {
          execSync(
            "npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate --dataSource ./src/AppDataSource.ts ./src/db/migrations/InitialMigration",
            { stdio: "inherit" },
          );
          console.log("✅ Migration initiale générée.");
        } catch (error) {
          console.error(
            "❌ Impossible de générer la migration initiale. Peut-être qu'aucun changement n'est détecté.",
          );
          throw error;
        }
      }
    }

    // Demander le nom de la migration via readline
    const migrationName = await askQuestion(
      "Quel est le nom de la migration ? ",
    );

    // Essayer de générer la migration avec le nom fourni
    try {
      console.log(`📜 Génération de la migration "${migrationName}"...`);

      execSync(
        `npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate --dataSource ./src/AppDataSource.ts ./src/db/migrations/${migrationName}`,
        { stdio: "inherit" },
      );

      console.log(`✅ Migration "${migrationName}" générée.`);
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        error.message.includes("No changes in database schema were found")
      ) {
        console.log(
          `⚠️ Aucune modification détectée dans le schéma de la base de données pour la migration "${migrationName}".`,
        );
      } else {
        throw error; // Re-throw if the error is not related to schema changes
      }
    }

    // Initialisation de la source de données
    await AppDataSource.initialize();
    console.log("📦 Data source initialized.");

    // Exécution des migrations
    await AppDataSource.runMigrations();
    console.log("✅ Migrations exécutées.");

    rl.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error during migration:", error);
    rl.close();
    return;
  }
};

run();
