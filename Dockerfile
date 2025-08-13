FROM node:23-alpine AS base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000
RUN npm install

FROM base AS builder
WORKDIR /app
COPY . .
ENV REVALIDATE=120
ENV NODE_ENV=production
CMD npm run build && npm start

