FROM node:18

WORKDIR /app

COPY package*.json ./

# ✅ Installe nodemon en global et les dépendances
RUN npm install -g nodemon && npm install

COPY . ./

# ✅ Ne supprime pas les node_modules après installation !
CMD ["npm", "run", "start"]
