import { Client } from "pg";

console.log("🚀 Insertion de données factices dans la base app...");

const client = new Client({
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number.parseInt(process.env.POSTGRES_PORT || "5432"),
  user: process.env.POSTGRES_USERNAME || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DB_NAME || "myapp",
});

async function seed() {
  try {
    await client.connect();
    await client.query("BEGIN");
    await client.query("SET CONSTRAINTS ALL DEFERRED");

    const tables = [
      "user",
      "program",
      "tag",
      "exercise",
      "tag_list",
      "exercise_list",
      "user_tag_list",
      '"group"',
      "group_list",
      "shared_program_list",
      "history",
    ];

    for (const table of tables) {
      await client.query(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`);
    }

    await client.query(`
      INSERT INTO "user" (id, username, description, email, password, image, birthday, gender, weights, height, created_at, role, level) VALUES
      (1, 'JohnDoe', 'Un utilisateur actif', 'john@example.com', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1990-01-15', 'M', '[{"weight": 75, "month": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 180, NOW(), 'admin', 'advanced'),
      (2, 'JaneSmith', 'Sportive passionnée', 'jane@example.com', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1985-08-22', 'F', '[{"weight": 75, "month": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 170, NOW(), 'user', 'beginner'),
      (3, 'AliceWonder', 'Nouvelle venue dans le fitness', 'alice@example.com', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "month": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (4, 'gael', 'Nouvelle venue dans le fitness', 'gael@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "month": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (5, 'Cyril', 'Nouvelle venue dans le fitness', 'cyril@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "month": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (6, 'Lucie', 'Nouvelle venue dans le fitness', 'lucie@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "month": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (7, 'Anne-Gaëlle', 'Nouvelle venue dans le fitness', 'annegaelle@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "month": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (8, 'Nelson', 'Nouvelle venue dans le fitness', 'nelson@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 50, "month": "Jan", "update_at": "2025-01-01T00:00:00Z"}, {"weight": 75, "month": "Feb", "update_at": "2025-02-02T00:00:00Z"}, {"weight": 60, "month": "Mar", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner')
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
     <INSERT INTO "program" (id, name, description, total_duration, level, image, created_at, visibility, "like") VALUES
      (1, 'Renforcement intégral', 'Un programme complet pour tout le corps', 420, 'beginner','http://localhost:4000/images/exercises/programCards/programCard1.jpg', NOW(), 0, 10),
      (2, 'Etirement haut du corps', 'Idéal pour brûler des calories', 420, 'beginner', 'http://localhost:4000/images/exercises/programCards/programCard2.jpg', NOW(), 1, 5),
      (3, 'Yoga Vinyasa', 'Ciblez vos jambes avec ces exercices', 420, 'beginner', 'http://localhost:4000/images/exercises/programCards/programCard3.jpg', NOW(), 1, 8),
      (4, 'Booty Beauty', 'Idéal pour brûler des calories', 420, 'beginner', 'http://localhost:4000/images/exercises/programCards/programCard13.jpg', NOW(), 1, 5),
      (5, 'Abdos Sculpt', 'Renforcez votre ceinture abdominale', 420, 'advanced', 'http://localhost:4000/images/exercises/programCards/programCard4.jpg', NOW(), 2, 6),
      (6, 'Bras en feu', 'Un programme complet pour tout le corps', 420, 'advanced', 'http://localhost:4000/images/exercises/programCards/programCard5.jpg', NOW(), 0, 10),
      (7, 'Renforcement du dos', 'Idéal pour brûler des calories', 360, 'intermediate', 'http://localhost:4000/images/exercises/programCards/programCard15.jpg', NOW(), 1, 5),
      (8, 'Core Power', 'Ciblez vos jambes avec ces exercices', 420, 'intermediate', 'http://localhost:4000/images/exercises/programCards/programCard7.jpg', NOW(), 1, 8),
      (9, 'Cardio Blast', 'Renforcez votre ceinture abdominale', 420, 'intermediate', 'http://localhost:4000/images/exercises/programCards/programCard8.jpg', NOW(), 2, 6),
      (10, 'Récupération sportive', 'Un programme complet pour tout le corps', 420, 'beginner', 'http://localhost:4000/images/exercises/programCards/programCard9.jpg', NOW(), 0, 10),
      (11, 'Souplesse du dos', 'Idéal pour brûler des calories', 420, 'intermediate', 'http://localhost:4000/images/exercises/programCards/programCard10.jpg', NOW(), 1, 5),
      (12, 'Dos en feu', 'Ciblez vos jambes avec ces exercices', 420, 'advanced', 'http://localhost:4000/images/exercises/programCards/programCard11.jpg', NOW(), 1, 8),
      (13, 'Handstand', 'Renforcez votre ceinture abdominale', 420, 'advanced', 'http://localhost:4000/images/exercises/programCards/programCard12.jpg', NOW(), 2, 6),
      (14, 'Renforcement des bras', 'Un programme complet pour tout le corps', 420, 'beginner', 'http://localhost:4000/images/exercises/programCards/programCard14.jpg', NOW(), 0, 10),
      (15, 'Tonifier tout', 'Idéal pour brûler des calories', 420, 'intermediate', 'http://localhost:4000/images/exercises/programCards/programCard16.jpg', NOW(), 1, 5),
      (16, 'Objectif Cobra', 'Ciblez vos jambes avec ces exercices', 420, 'advanced', 'http://localhost:4000/images/exercises/programCards/programCard17.jpg', NOW(), 1, 8),
      (17, 'Full Body Burn ', 'Ciblez vos jambes avec ces exercices', 420, 'intermediate', 'http://localhost:4000/images/exercises/programCards/programCard15.jpg', NOW(), 1, 8),
      (18, 'Souplesse & Equilibre', 'Ciblez vos jambes avec ces exercices', 420, 'beginner', 'http://localhost:4000/images/exercises/programCards/programCard18.jpg', NOW(), 1, 8)
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "tag" (id, name) VALUES
      (1, 'Flexibility Enhancement'),
      (2, 'Cardiovascular Health'),
      (3, 'Muscle Gain')
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "tag_list" (program_id, tag_id) VALUES
      (1, 1),
      (2, 2),
      (3, 3),
      (4, 2)
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "exercise" (id, name, description, duration, kcal_loss, muscle, level, img_src) VALUES
      (1, 'Fente latérale', 'Exercise de musculation classique', 30, 100, 'Legs', 'beginner', 'http://localhost:4000/images/exercises/exercisesGIFs/FentesLaterales.gif'),
      (2, 'Levée de jambes', 'Excellent pour les jambes', 60, 120, 'Legs', 'intermediate', 'http://localhost:4000/images/exercises/exercisesGIFs/LeveeDeJambe.gif'),
      (3, 'Mains en avant', 'Exercice pour renforcer les jambes et les fessiers', 90, 110, 'Legs', 'intermediate', 'http://localhost:4000/images/exercises/exercisesGIFs/MainsEnAvant.gif'),
      (4, 'Pose du pigeon droite', 'Exercice pour renforcer la sangle abdominale', 60, 90, 'Abdominals', 'beginner', 'http://localhost:4000/images/exercises/exercisesGIFs/PigeonDroit.gif'),
      (5, 'Pose du pigeon gauche', 'Exercice complet pour le corps', 60, 150, 'Chest', 'advanced', 'http://localhost:4000/images/exercises/exercisesGIFs/PigeonGauche.gif'),
      (6, 'Planche', 'Exercice de musculation pour le dos et les jambes', 60, 200, 'Back', 'advanced', 'http://localhost:4000/images/exercises/exercisesGIFs/Planche.gif'),
      (7, 'Squats', 'Exercice classique pour le haut du corps', 60, 180, 'Chest', 'intermediate', 'http://localhost:4000/images/exercises/exercisesGIFs/Squat.gif')
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "exercise_list" (program_id, exercise_id) VALUES
      (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 2), (1, 1),
      (2, 2), (2, 3), (2, 4), (2, 5), (2, 6), (2, 7), (2, 1),
      (3, 3), (3, 4), (3, 5), (3, 2), (3, 6), (3, 1), (3, 7),
      (4,1),(4,2),(4,3),(4,4),(4,5),(4,6),(4,7),
      (5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(5,7),
      (6,1),(6,2),(6,3),(6,4),(6,5),(6,6),(6,7),
      (7,1),(7,2),(7,3),(7,4),(7,5),(7,6),
      (8,1),(8,2),(8,3),(8,4),(8,5),(8,6),(8,7),
      (9,1),(9,2),(9,3),(9,4),(9,5),(9,6),(9,7),
      (10,1),(10,2),(10,3),(10,4),(10,5),(10,6),(10,7),
      (11,1),(11,2),(11,3),(11,4),(11,5),(11,6),(11,7),
      (12,1),(12,2),(12,3),(12,4),(12,5),(12,6),(12,7),
      (13,1),(13,2),(13,3),(13,4),(13,5),(13,6),(13,7),
      (14,1),(14,2),(14,3),(14,4),(14,5),(14,6),(14,7),
      (15,1),(15,2),(15,3),(15,4),(15,5),(15,6),(15,7),
      (16,1),(16,2),(16,3),(16,4),(16,5),(16,6),(16,7),
      (17,1),(17,2),(17,3),(17,4),(17,5),(17,6),(17,7),
      (18,1),(18,2),(18,3),(18,4),(18,5),(18,6),(18,7)
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "user_tag_list" (user_id, tag_id) VALUES
      (1, 1),
      (1, 2),
      (2, 3),
      (3, 1)
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "group" (id, name, create_by, created_at) VALUES
      (1, 'Us trainer', 2, NOW()),
      (2, 'Fun For Leg', 1, NOW()),
      (3, 'Data Fit', 3, NOW())
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "group_list" (user_id, group_id, user_accept, created_at) VALUES
      (1, 1, TRUE, NOW()),
      (2, 2, TRUE, NOW()),
      (3, 3, TRUE, NOW())
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "history" (user_id, program_id, total_kcal_loss, start_date, end_date) VALUES
      (1, 1, 500, NOW(), NOW() + INTERVAL '1 week'),
      (2, 2, 300, NOW(), NOW() + INTERVAL '4 days'),
      (3, 3, 450, NOW(), NOW() + INTERVAL '6 days'),
      (7, 3, 450, NOW(), NOW()),
      (7, 2, 450, NOW(), NOW()),
      (7, 1, 450, NOW(), NOW())
      (1, 1, 500, NOW() - INTERVAL '1 week', NOW()),
      (2, 2, 300, NOW() - INTERVAL '7 days', NOW() - INTERVAL '2 days'),
      (3, 3, 450, NOW() - INTERVAL '7 days', NOW() - INTERVAL '1 days'),
      (8, 1, 450, NOW() - INTERVAL '7 days', NOW() - INTERVAL '1 days'),
      (8, 2, 500, NOW() - INTERVAL '7 days', NOW() - INTERVAL '1 days'),
      (8, 3, 550, NOW() - INTERVAL '7 days', NOW() - INTERVAL '1 days'),
      (8, 4, 250, NOW() - INTERVAL '2 month', NOW()),
      (8, 2, 500, NOW() - INTERVAL '2 month', NOW() - INTERVAL '1 month'),
      (8, 3, 550, NOW() - INTERVAL '3 month', NOW() - INTERVAL '2 month'),
      (8, 1, 450, NOW() - INTERVAL '3 month', NOW() - INTERVAL '2 month'),
      (8, 2, 500, NOW() - INTERVAL '4 month', NOW() - INTERVAL '3 month'),
      (8, 3, 550, NOW() - INTERVAL '5 month', NOW() - INTERVAL '4 month'),
      (8, 1, 450, NOW() - INTERVAL '5 month', NOW() - INTERVAL '4 month'),
      (8, 2, 500, NOW() - INTERVAL '6 month', NOW() - INTERVAL '5 month'),
      (8, 3, 550, NOW() - INTERVAL '7 month', NOW() - INTERVAL '6 month'),
      (8, 1, 450, NOW() - INTERVAL '7 month', NOW() - INTERVAL '6 month'),
      (8, 2, 500, NOW() - INTERVAL '8 month', NOW() - INTERVAL '7 month'),
      (8, 3, 550, NOW() - INTERVAL '9 month', NOW() - INTERVAL '8 month'),
      (8, 4, 250, NOW() - INTERVAL '2 month', NOW())
      ON CONFLICT DO NOTHING;
    `);

    await client.query("COMMIT");
    console.log("✅ Données insérées avec succès !");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("❌ Erreur lors de l'insertion des données :", err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

seed();
