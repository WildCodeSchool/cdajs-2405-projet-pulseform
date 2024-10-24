FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN  npm install
COPY src src
COPY public public

CMD npm run dev