FROM node:6.11.1-alpine

EXPOSE 3000

run npm install -g nodemon

ADD package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm install

ADD . /usr/src/app/
RUN npm install

CMD ["npm", "run", "start:server"]
