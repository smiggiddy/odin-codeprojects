FROM oven/bun:1 AS base
WORKDIR /usr/src/app
ENV APP_PORT 3000

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .


# run the app
USER bun
EXPOSE $APP_PORT/tcp
ENTRYPOINT [ "bun", "run", "src/app.js" ]
