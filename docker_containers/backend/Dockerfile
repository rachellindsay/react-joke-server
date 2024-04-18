FROM    node:18.3.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY    .   .

EXPOSE 5000

CMD [ "node", "app.js" ]