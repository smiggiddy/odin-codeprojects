# Use a Node.js base image to build the project
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY restaurant/app .

# Install dependencies
RUN npm install 

# Build the application
RUN npm run build -- --config ./webpack.config.js

# Use an Nginx base image to serve the static files
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy the built files from the builder stage
COPY --from=builder /app/dist .

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]