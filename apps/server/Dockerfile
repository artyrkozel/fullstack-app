FROM node:18

RUN npm install -g pnpm

WORKDIR /app

EXPOSE 5000

COPY package*.json ./

RUN pnpm install

COPY . .

RUN npx prisma generate

CMD ["pnpm", "run", "start:dev"]

# COPY ./docker-entrypoint.sh /docker-entrypoint.sh
# RUN chmod a+x /docker-entrypoint.sh
# ENTRYPOINT ["/docker-entrypoint.sh"]