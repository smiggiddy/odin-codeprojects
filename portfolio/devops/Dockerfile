# Use the official nginx image as the base image
FROM nginx:latest

# Copy the HTML and CSS files to the default nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]