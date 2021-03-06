# pull official base image
FROM node:14-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm

COPY . ./

RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm install nodemon -g --silent
RUN npm install concurrently -g --silent

CMD npm run dev

EXPOSE 3001