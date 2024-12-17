FROM node:18

RUN npm install -g pnpm

WORKDIR /frontend

EXPOSE 5000

COPY package*.json ./

RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]