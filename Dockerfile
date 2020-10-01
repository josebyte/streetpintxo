FROM node:12.18.3

RUN apt-get update && \
    apt-get install -y git

RUN npm install -g sails grunt-cli grunt bower nodejs pm2 npm-check-updates

RUN mkdir /server

# Define mountable directories.
VOLUME ["/server"]

# Define working directory.
WORKDIR /server

# Expose ports.
EXPOSE 1337
