# Use an official Nginx image as the base image
FROM nginx:latest

# Set the working directory to /app
WORKDIR /app

# Copy the HTML, CSS, and JavaScript files to the Nginx default directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow external access
EXPOSE 80

# The Nginx server will start automatically when the container starts