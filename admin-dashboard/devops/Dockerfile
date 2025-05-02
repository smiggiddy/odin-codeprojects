# Use an official Nginx image as the base image
FROM nginx:alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy the HTML, CSS, and JS files to the Nginx default directory
COPY . /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]