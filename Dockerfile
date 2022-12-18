FROM node:18.4.0-alpine

WORKDIR /almalink

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm" , "start" ]