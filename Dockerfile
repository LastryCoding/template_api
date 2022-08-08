FROM node:14

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

ENV NODE_ENV production

EXPOSE 4000
CMD [ "node", "src/index.js" ]
USER node