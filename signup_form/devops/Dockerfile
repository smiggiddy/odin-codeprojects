# Use an official Nginx image as the base image
FROM nginx:latest

# Set the working directory to /app inside the container
WORKDIR /app

# Copy the HTML, CSS, and JavaScript files from the current directory to /app
COPY . /app

# Expose port 80 for HTTP traffic
EXPOSE 80

# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]