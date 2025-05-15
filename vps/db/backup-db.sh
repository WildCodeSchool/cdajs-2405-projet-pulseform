#!/bin/bash

set -a
source .env
set +a

BACKUP_DIR="./backups"
DATE=$(date +%F-%H-%M)

mkdir -p "$BACKUP_DIR"

# Vérifie si le conteneur existe
if docker ps --format '{{.Names}}' | grep -q "^$DB_CONTAINER$"; then
  docker exec -t "$DB_CONTAINER" pg_dump -U "$USERNAME" -d "$DB_NAME" -F c > "$BACKUP_DIR/backup-$DATE.dump"
  echo "✅ Backup completed: $BACKUP_DIR/backup-$DATE.dump"
else
  echo "⚠️ DB container '$DB_CONTAINER' not found. Skipping backup."
fi
