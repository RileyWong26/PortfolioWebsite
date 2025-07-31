FROM node:23-alpine
# add curl for end point health check
RUN apk add --no-cache curl

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9000

EXPOSE 9000

CMD ["node", "index"]

