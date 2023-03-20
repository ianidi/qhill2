FROM node:16

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN yarn install

# Copying source files
COPY . .

# Building app
# RUN yarn run build

# Uses port which is used by the actual application
EXPOSE 8080

# Running the app
CMD [ "yarn", "start" ]