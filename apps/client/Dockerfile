FROM node:18

WORKDIR /app

EXPOSE 5000

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["yarn", "run", "dev"]