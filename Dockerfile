FROM node:12.18.3

ARG WORKDIR=/opt/apps/server/

# Create a directory to contain our application
RUN mkdir -p $WORKDIR

# Switch default working directory to our new directory
WORKDIR $WORKDIR

# Copy our package and lock files over first,
# as the build can then cache this step seperately from our code.
#
# This allows us to build faster when we only have code changes,
# as the install step will be loaded from cache,
# and rebuilt when package files change
COPY ./api/package.json ./api/package-lock.json $WORKDIR

# Install the actual dependencies
RUN npm install -g sails
RUN npm install

# Now copy over your actual source code
#
# REMEMBER: We are ignoring node_modules in the .dockerignore file explicitly,
# so docker will not copy over that directory. The app will use th modules installed above.
COPY ./api $WORKDIR

# Expose ports.
EXPOSE 1337
