FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

COPY . ./

RUN rm -rf node_modules package-lock.json

CMD npm i && npm run start