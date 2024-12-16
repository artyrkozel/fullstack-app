FROM node:18

RUN npm install -g pnpm

WORKDIR /app

EXPOSE 5000

COPY package*.json ./

RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]