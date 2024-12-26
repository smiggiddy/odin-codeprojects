FROM node:23-alpine

COPY . /app

WORKDIR /app

RUN npm install .

EXPOSE 3000

CMD ["node", "src/app.js"]


