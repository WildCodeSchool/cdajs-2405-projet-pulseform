#!/bin/bash

# Charger les variables d'environnement depuis le fichier
set -a
source .env
set +a

BACKUP_DIR="./backend/src/db/backups"  # Répertoire de sauvegarde

# Lister les 5 derniers fichiers de sauvegarde triés par date
BACKUP_FILES=$(ls -t "$BACKUP_DIR"/*.dump | head -n 5)

if [ -z "$BACKUP_FILES" ]; then
  echo "❌ Aucun fichier de backup trouvé dans le dossier $BACKUP_DIR."
  exit 1
fi

# Afficher la liste des fichiers de sauvegarde
echo "💾 Liste des 5 derniers fichiers de sauvegarde :"
echo "-------------------------------------------"
counter=1
for file in $BACKUP_FILES; do
  echo "$counter) $(basename "$file")"
  ((counter++))
done

# Demander à l'utilisateur de choisir un fichier
read -p "👉 Choisissez le numéro du fichier de sauvegarde à restaurer : " CHOICE

# Vérifier que le choix est valide
if ! [[ "$CHOICE" =~ ^[1-5]$ ]]; then
  echo "❌ Option invalide. Veuillez choisir un numéro entre 1 et 5."
  exit 1
fi

# Récupérer le fichier choisi
SELECTED_FILE=$(echo "$BACKUP_FILES" | sed -n "${CHOICE}p")

# Restaurer le dump dans la base de données
echo "🔄 Restauration du backup ${SELECTED_FILE}..."
docker exec -i "$DB_CONTAINER" pg_restore -U "$USERNAME" -d "$DB_NAME" < "$SELECTED_FILE"

echo "✅ Restauration du backup terminée."
