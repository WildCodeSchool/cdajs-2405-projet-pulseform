#!/bin/bash

echo "🚀 Insertion de données factices dans la base app..."

# Vérifier si le conteneur est en cours d'exécution
if ! docker ps | grep -q "DB_CONTAINER"; then
  echo "❌ Le conteneur docker-db n'est pas en cours d'exécution. Démarre-le d'abord !"
  exit 1
fi

# Connexion à PostgreSQL via Docker
DB_CONTAINER="DB_CONTAINER"
DB_USER="DB_USER"
DB_NAME="DB_NAME"

docker exec -i $DB_CONTAINER psql -U $DB_USER -d $DB_NAME <<EOSQL
BEGIN;

-- 🚫 Désactiver temporairement les contraintes de clé étrangère
SET CONSTRAINTS ALL DEFERRED;

-- ✅ Vider les tables proprement en réinitialisant les séquences
TRUNCATE TABLE "user" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "program" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "tag" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "exercice" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "tag_list" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "exercice_list" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "user_tag_list" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "group" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "group_list" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "shared_program_list" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "history" RESTART IDENTITY CASCADE;

-- ✅ Insérer les utilisateurs
INSERT INTO "user" (id, username, description, email, password, image, birthday, gender, weight, height, created_at, role, level) VALUES
(1, 'JohnDoe', 'Un utilisateur actif', 'john@example.com', 'hashedpassword', 'profile1.jpg', '1990-01-15', 'M', 75, 180, NOW(), 'admin', 'advanced'),
(2, 'JaneSmith', 'Sportive passionnée', 'jane@example.com', 'hashedpassword', 'profile2.jpg', '1985-08-22', 'F', 62, 170, NOW(), 'user', 'beginner'),
(3, 'AliceWonder', 'Nouvelle venue dans le fitness', 'alice@example.com', 'hashedpassword', 'profile3.jpg', '1995-04-10', 'F', 68, 165, NOW(), 'user', 'beginner')
ON CONFLICT DO NOTHING;

-- ✅ Insérer les programmes
INSERT INTO "program" (id, name, description, total_duration, level, created_at, visibility, "like") VALUES
(1, 'Full Body Workout', 'Un programme complet pour tout le corps', 60, 'intermediate', NOW(), 0, 10),
(2, 'Cardio Blast', 'Idéal pour brûler des calories', 45, 'beginner', NOW(), 1, 5),
(3, 'Legs Day', 'Ciblez vos jambes avec ces exercices', 45, 'intermediate', NOW(), 1, 8),
(4, 'Core Strength', 'Renforcez votre ceinture abdominale', 30, 'beginner', NOW(), 2, 6)
ON CONFLICT DO NOTHING;

-- ✅ Insérer les tags
INSERT INTO "tag" (id, name) VALUES
(1, 'Strength Building'),
(2, 'Cardiovascular Health'),
(3, 'Muscle Gain')
ON CONFLICT DO NOTHING;

-- ✅ Associer tags et programmes
INSERT INTO "tag_list" (program_id, tag_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 1)
ON CONFLICT DO NOTHING;

-- ✅ Insérer les exercices
INSERT INTO "exercice" (id, name, description, duration, kcal_loss, muscle, level, img_src) VALUES
(1, 'Push-ups', 'Exercice de musculation classique', 30, 100, 'Chest', 'beginner', 'pushups.jpg'),
(2, 'Squats', 'Excellent pour les jambes', 40, 120, 'Legs', 'intermediate', 'squats.jpg'),
(3, 'Lunges', 'Exercice pour renforcer les jambes et les fessiers', 35, 110, 'Legs', 'intermediate', 'lunges.jpg'),
(4, 'Planks', 'Exercice pour renforcer la sangle abdominale', 40, 90, 'Abdominals', 'beginner', 'planks.jpg')
ON CONFLICT DO NOTHING;

-- ✅ Associer exercices et programmes
INSERT INTO "exercice_list" (program_id, exercice_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(3, 2),
(3, 3),
(4, 1)
ON CONFLICT DO NOTHING;

-- ✅ Associer utilisateurs et tags
INSERT INTO "user_tag_list" (user_id, tag_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 1)
ON CONFLICT DO NOTHING;

-- ✅ Insérer des groupes
INSERT INTO "group" (id, name, create_by, created_at) VALUES
(1, 'Us trainer', 2, NOW()),
(2, 'Fun For Leg', 1, NOW()),
(3, 'Data Fit', 3, NOW())
ON CONFLICT DO NOTHING;

-- ✅ Insérer des groupes utilisateurs
INSERT INTO "group_list" (user_id, group_id, user_accept, created_at) VALUES
(1, 1, TRUE, NOW()),
(2, 2, TRUE, NOW()),
(3, 3, TRUE, NOW())
ON CONFLICT DO NOTHING;

-- ✅ Insérer des historiques
INSERT INTO "history" (user_id, program_id, total_kcal_loss, start_date, end_date) VALUES
(1, 1, 500, NOW(), NOW() + INTERVAL '1 week'),
(2, 2, 300, NOW(), NOW() + INTERVAL '4 days'),
(3, 3, 450, NOW(), NOW() + INTERVAL '6 days')
ON CONFLICT DO NOTHING;

COMMIT;
EOSQL

if [ $? -eq 0 ]; then
    echo "✅ Données insérées avec succès !" 
else
    echo "❌ Erreur lors de l'insertion des données."
    exit 1
fi
