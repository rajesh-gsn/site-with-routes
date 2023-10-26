# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app files to the container
COPY . .

# Build the app
RUN npm run build

# Expose port 80 for the app
EXPOSE 80

# Start the app
CMD ["npm", "run", "start"]