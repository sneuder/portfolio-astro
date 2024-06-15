# Use Node.js 20 image as base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Update packages
RUN apt-get update && apt-get upgrade -y

# pnpm package manager
RUN npm install -g --exact pnpm 

# Expose the port your app runs on
EXPOSE 8080

# Command to run your application
CMD ["sleep", "infinity"]
