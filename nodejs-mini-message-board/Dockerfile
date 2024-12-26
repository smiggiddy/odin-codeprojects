FROM node:23-alpine

COPY package*.json /app/package*.json

WORKDIR /app

RUN npm install .

COPY --chown=nobody:nobody ./src /app/src

EXPOSE 3000

USER nobody

CMD ["node", "src/app.js"]


