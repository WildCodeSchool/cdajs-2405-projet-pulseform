FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

RUN rm -rf node_modules package-lock.json

CMD npm i && npm run start