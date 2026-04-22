# Using Node 24 as requested
FROM node:24-slim

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Build the production version of the app
RUN npm run build

# Expose the Vite preview port
EXPOSE 4173

# Run the preview server bound to 0.0.0.0
# This ensures the container is accessible from your browser
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]