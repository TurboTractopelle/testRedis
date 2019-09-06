FROM node

COPY . /usr/src/app

WORKDIR /usr/src/app

EXPOSE 5000

RUN npm i 

CMD ["npm", "start"]