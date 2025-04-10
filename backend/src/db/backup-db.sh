#!/bin/bash

# Charger les variables d'environnement depuis le fichier
set -a
source .env
set +a

BACKUP_DIR="./backend/src/db/backups"
DATE=$(date +%F-%H-%M)

mkdir -p "$BACKUP_DIR"

docker exec -t "$DB_CONTAINER" pg_dump -U "$USERNAME" -d "$DB_NAME" -F c > "$BACKUP_DIR/backup-$DATE.dump"

echo "✅ Backup completed: $BACKUP_DIR/backup-$DATE.dump"
