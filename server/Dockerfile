FROM node:23-alpine

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9000

EXPOSE 9000

CMD ["node", "index"]

