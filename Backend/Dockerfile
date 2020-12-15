FROM node:latest

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package*.json ./
RUN npm install nodemon -g --save
RUN npm install

COPY . .

EXPOSE 3333

CMD ["sudo", "npm", "start"]
