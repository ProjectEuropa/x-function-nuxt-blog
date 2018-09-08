FROM node:10.10.0-alpine

RUN apk add --update nodejs-npm
RUN npm config set unsafe-perm true

RUN npm install -g vue-cli
RUN npm install -g nuxt

RUN npm install -g create-nuxt-app

ENV HOST 0.0.0.0
EXPOSE 3000

WORKDIR /app

COPY server.js server.js

CMD [ "node", "server.js" ]