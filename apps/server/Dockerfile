FROM node:18

WORKDIR /app
EXPOSE 5000
COPY package*.json ./

RUN yarn install

COPY . .

RUN npx prisma generate

CMD ["yarn", "run", "start:dev"]

# COPY ./docker-entrypoint.sh /docker-entrypoint.sh
# RUN chmod a+x /docker-entrypoint.sh
# ENTRYPOINT ["/docker-entrypoint.sh"]