# Use an official Nginx image as the base image
FROM nginx:latest

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy the project files to the Nginx default directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]