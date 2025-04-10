#!/bin/bash

# Charger les variables d'environnement depuis le fichier
set -a
source .env
set +a

BACKUP_DIR="./src/db/backups"
DATE=$(date +%F-%H-%M)

mkdir -p "$BACKUP_DIR"

docker exec -t "$DB_CONTAINER" pg_dump -U "$DB_USER" -d "$DB_NAME" -F c > "$BACKUP_DIR/backup-$DATE.dump"

echo "✅ Backup completed: $BACKUP_DIR/backup-$DATE.dump"
