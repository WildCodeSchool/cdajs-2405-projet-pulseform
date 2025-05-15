FROM node:22-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json
RUN  npm install

COPY src src
COPY public public
COPY index.html index.html
COPY vite.config.ts vite.config.ts

CMD npm run dev