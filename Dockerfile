FROM node:16.13.1-alpine3.14

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@8.0.0

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

USER node

WORKDIR /home/node/app

EXPOSE 3006