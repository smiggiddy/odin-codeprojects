# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the Express app
EXPOSE 3000

# Define the command to start the application
CMD [ "npm", "start" ]