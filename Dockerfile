FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

# Флаг --host обязателен для Docker
CMD ["npm", "run", "dev", "--", "--host"]