#!/bin/bash

echo "🚀 Insertion de données factices dans la base app..."

# Vérifier si le conteneur est en cours d'exécution
if ! docker ps | grep -q "$DB_CONTAINER"; then
  echo "❌ Le conteneur $DB_CONTAINER n'est pas en cours d'exécution. Démarre-le d'abord !"
  exit 1
fi

# Définir le chemin absolu du fichier seed.sql
SEED_FILE_PATH="./backend/src/db/seed/seed.sql"

# Copier le fichier seed.sql dans le conteneur
docker cp $SEED_FILE_PATH $DB_CONTAINER:/seed.sql

# Connexion à PostgreSQL via Docker et exécution du fichier seed.sql
docker exec $DB_CONTAINER sh -c "psql -U $POSTGRES_USER -d $POSTGRES_DB -f /seed.sql"

if [ $? -eq 0 ]; then
    echo "✅ Données insérées avec succès !" 
else
    echo "❌ Erreur lors de l'insertion des données."
    exit 1
fi
