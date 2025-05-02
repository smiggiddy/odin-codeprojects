# Use a Node.js base image to build the project
FROM node:18-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project using webpack
RUN npm run build

# Use an official nginx image as the base image
FROM nginx:stable-alpine

# Set the working directory
WORKDIR /var/www/html

# Remove default nginx content
RUN rm -rf ./*

# Copy the built files from the builder stage to nginx's html directory
COPY --from=builder /app/dist .

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]