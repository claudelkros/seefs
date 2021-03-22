FROM node:12.2.0-alpine as build

# USER node
# Working directory inside the container
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copy over the package.json files
#COPY ./package*.json /app/

COPY . /app/

# Install dependencies
RUN npm install --silent

RUN npm install react-scripts -g --silent

# COPY --chown=node . .
# Copy everything


# Build the application
RUN npm run build

# Build nginx server
FROM nginx:1.16.0-alpine

# ENV HOST=0.0.0.0 PORT=3000

# Copy all the contents from the build directory into the web root
COPY --from=build /app/build/ /var/www/html

COPY nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

# CMD ["npm", "run", "start"]
CMD ["nginx", "-g", "daemon off;"]