FROM node:18 as build

WORKDIR /app

COPY . ./
RUN npm install 
ENV NODE_ENV production
RUN npm app build


FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
