# Use an official Node.js runtime as the base image
FROM oven/bun:latest as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --production

# Copy the rest of the application files to the working directory
COPY . .

# Build the application
# RUN bun run build

# Use an official Node.js runtime as the base image
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /app

# Copy the application files from the builder stage
COPY --from=builder /app .

# Expose the port that the app runs on
EXPOSE 3000

# Define the command to run your application
CMD ["bun", "run", "src/app.js"]