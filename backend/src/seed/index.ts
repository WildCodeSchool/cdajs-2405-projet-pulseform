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
      INSERT INTO "user" 
      (id, username, description, email, password, image, birthday, gender, weights, height, created_at, role, level) 
      VALUES
      (1, 'JohnDoe', 'Un utilisateur actif', 'john@example.com', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1990-01-15', 'M', '[{"weight": 75, "date": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 180, NOW(), 'admin', 'advanced'),
      (2, 'JaneSmith', 'Sportive passionnée', 'jane@example.com', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1985-08-22', 'F', '[{"weight": 75, "date": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 170, NOW(), 'user', 'beginner'),
      (3, 'AliceWonder', 'Nouvelle venue dans le fitness', 'alice@example.com', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "date": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (4, 'gael', 'Nouvelle venue dans le fitness', 'gael@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "date": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (5, 'Cyril', 'Nouvelle venue dans le fitness', 'cyril@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "date": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (6, 'Lucie', 'Nouvelle venue dans le fitness', 'lucie@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "date": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (7, 'Anne-Gaëlle', 'Nouvelle venue dans le fitness', 'annegaelle@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "date": "Apr", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner'),
      (8, 'Anne-Nelson', 'Nouvelle venue dans le fitness', 'nelson@pulseform.fr', '\$argon2id\$v=19\$m=65536,t=3,p=4\$OHtdXCMWGkZy9+AbeqFZKg\$kBxbFprdFOMAr5NG8+tM4sQIgYUXEMykASFqX9JjK5s', 'https://picsum.photos/200/200', '1995-04-10', 'F', '[{"weight": 75, "date": "Jan", "update_at": "2025-01-01T00:00:00Z"}, {"weight": 75, "date": "Feb", "update_at": "2025-02-02T00:00:00Z"}, {"weight": 75, "date": "Mar", "update_at": "2025-04-04T00:00:00Z"}]', 165, NOW(), 'user', 'beginner')
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "program" (id, name, description, total_duration, level, created_at, visibility, "like") VALUES
      (1, 'Full Body Workout', 'Un programme complet pour tout le corps', 60, 'intermediate', NOW(), 0, 10),
      (2, 'Cardio Blast', 'Idéal pour brûler des calories', 45, 'beginner', NOW(), 1, 5),
      (3, 'Legs Day', 'Ciblez vos jambes avec ces exercices', 45, 'intermediate', NOW(), 1, 8),
      (4, 'Core Strength', 'Renforcez votre ceinture abdominale', 30, 'beginner', NOW(), 2, 6)
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "tag" (id, name) VALUES
      (1, 'Strength Building'),
      (2, 'Cardiovascular Health'),
      (3, 'Muscle Gain')
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "tag_list" (program_id, tag_id) VALUES
      (1, 1),
      (2, 2),
      (3, 3),
      (4, 1)
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "exercise" (id, name, description, duration, kcal_loss, muscle, level, img_src) VALUES
      (1, 'Push-ups', 'Exercise de musculation classique', 30, 100, 'Chest', 'beginner', 'pushups.jpg'),
      (2, 'Squats', 'Excellent pour les jambes', 40, 120, 'Legs', 'intermediate', 'squats.jpg'),
      (3, 'Lunges', 'Exercice pour renforcer les jambes et les fessiers', 35, 110, 'Legs', 'intermediate', 'lunges.jpg'),
      (4, 'Planks', 'Exercice pour renforcer la sangle abdominale', 40, 90, 'Abdominals', 'beginner', 'planks.jpg')
      ON CONFLICT DO NOTHING;
    `);

    await client.query(`
      INSERT INTO "exercise_list" (program_id, exercise_id) VALUES
      (1, 1),
      (1, 2),
      (1, 3),
      (2, 4),
      (3, 2),
      (3, 3),
      (4, 1)
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
      (3, 3, 450, NOW(), NOW() + INTERVAL '6 days')
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
