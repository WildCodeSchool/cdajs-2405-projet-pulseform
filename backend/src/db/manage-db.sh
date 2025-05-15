#!/bin/bash
clear
set -a
. ./.env
set +a

# Rendre les scripts nécessaires exécutables
chmod +x ./backend/src/db/seed/seed.sh
chmod +x ./backend/src/db/backup-db.sh
chmod +x ./backend/src/db/restore-db.sh

echo ""
echo "      🏋️  PULSE FORM 🏋️     "
echo ""
echo "🔅 Menu principal"
echo "-------------------------------"
echo "Go : Build les conteneurs et lancer l'app"
echo "Code : Générer le schéma graphQl dans le frontend avec Codegen"
echo ""
echo "📦 Gestion de la base de données"
echo "-------------------------------"
echo "1. Hydrater la base de données (seed)"
echo "2. Effectuer un backup"
echo "3. Lancer les migrations"
echo "4. Effectuer un rollback"
echo "5. Restaurer la base de données"
echo ""
echo "📑 Les logs"
echo "-------------------------------"
echo "6. Backend"
echo "7. Frontend"
echo "8. Traduction"
echo "9. DB"
echo ""
echo "10. Quitter"
echo ""
read -p "👉 Que veux-tu faire ? Go, Code ou (1-10) " CHOICE

case $CHOICE in
  Go)
    clear
    echo "🎲 Build du projet..."
    docker compose up --build -d --force-recreate
    ;;
  Code)
    clear
    echo "🌈 Génération du schéma GraphQl..."
    cd frontend
    npm run codegen
    ;;
  1)
    clear
    echo "🌱 Seeding de la base..."
    ./backend/src/db/seed/seed.sh
    ;;
  2)
    clear
    echo "💾 Backup en cours..."
    ./backend/src/db/backup-db.sh
    ;;
  3)
    clear
    echo "📐 Migration en cours..."
    cd backend
    npm run migration:run
    ;;
  4)
    clear
    echo "↩️  Rollback en cours..."
    cd backend
    npm run migration:rollback
    ;;
  5)
    clear
    echo "↩️  Restauration de la BDD..."
    ./backend/src/db/restore-db.sh
  ;;
  6)
    clear
    echo "✏️  Ecriture des logs du backend..."
    docker logs pulseform-back-1 --tail 200 -f
    exit 0
    ;;
  7)
    clear
    echo "✏️  Ecriture des logs du Frontend..."
    docker logs pulseform-client-1 --tail 200 -f
    exit 0
    ;;
  8)
    clear
    echo "✏️  Ecriture des logs du serveur de traduction..."
    docker logs pulseform-translation-1 --tail 200 -f
    exit 0
    ;;
  9)
    clear
    echo "✏️  Ecriture des logs de la base de données..."
    docker logs pulseform-db-1 --tail 200 -f
    exit 0
    ;;
  10)
    echo "👋 À bientôt !"
    exit 0
    ;;
  *)
    echo "❌ Option invalide"
    ;;
esac
