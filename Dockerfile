FROM node:20
WORKDIR /app

# Copy dependency files
COPY package.json ./

# Remove package-lock.json if it exists to avoid platform-specific issues
# Install dependencies with optional dependencies included
RUN npm install

# Copy application source
COPY . .

CMD ["npm", "run", "dev"]
