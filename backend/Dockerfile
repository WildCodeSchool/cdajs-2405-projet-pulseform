FROM node:18-bookworm

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run start