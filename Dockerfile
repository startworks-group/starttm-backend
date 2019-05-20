FROM node:10.13

USER root

COPY package.json ./
COPY database ./database

RUN npm install

COPY ./ ./

RUN cp .env.example .env
RUN npm i -g @adonisjs/cli
RUN npm install
RUN npm run dev