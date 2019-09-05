FROM node

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm i 
RUN npm start
