FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

# Flag --host is required for Docker
CMD ["npm", "run", "dev", "--", "--host"]