FROM node:22-alpine

WORKDIR /app

COPY package*.json tsconfig.json .

RUN npm install

COPY . .

EXPOSE 8081 19000 19001 19002

CMD [ "npx","expo","start"]