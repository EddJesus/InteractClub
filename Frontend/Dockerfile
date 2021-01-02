FROM node:latest

RUN mkdir -p /usr/app/

WORKDIR /usr/app/

COPY package*.json /usr/app/
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]