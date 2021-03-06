FROM node:alpine

RUN mkdir -p /usr/app/

WORKDIR /usr/app/

COPY package*.json /usr/app/

ENV PATH /src/app/node_modules/.bin:$PATH

RUN npm install create-react-app --save
RUN npm install react-scripts --save
RUN npm install 

COPY . /usr/app/

EXPOSE 3002

CMD ["npm", "start"]