# Use an official Nginx image as the base image
FROM nginx:latest

# Set the working directory to /app
WORKDIR /app

# Copy the HTML, CSS, and JavaScript files to the Nginx default directory
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY assets/ /usr/share/nginx/html/assets/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]