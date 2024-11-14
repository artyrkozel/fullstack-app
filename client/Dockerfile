FROM node:18

WORKDIR /app

EXPOSE 5000

COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]