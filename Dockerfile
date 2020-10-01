FROM node:12.18.3

RUN mkdir /api

WORKDIR /api

# the dependencies are already installed in the local copy of the project, so
# they will be copied to the container
ADD api /api

CMD ["/app/app.js", "--no-daemon"]

RUN cd /api; npm i
