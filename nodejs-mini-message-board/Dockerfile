FROM node:23-alpine

COPY package.json package-lock.json /app

WORKDIR /app

RUN npm install . && chown nobody:nobody /app

COPY --chown=nobody:nobody ./src /app/src

EXPOSE 3000

USER nobody

ENTRYPOINT ["node"]

CMD ["src/app.js"]


