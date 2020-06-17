# pull official base image
FROM node:14-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm
# set working directory
WORKDIR /app

COPY . .

RUN npm install && \
    npm install -g nodemon

EXPOSE 3001

CMD npm run start:watch