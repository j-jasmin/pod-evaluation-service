FROM node:15-alpine3.10 AS base

RUN apk add --no-cache bash \
    build-base \
    linux-headers 

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:15-alpine3.10

WORKDIR /app
COPY --from=base /app ./

CMD ["node", "index.js"]