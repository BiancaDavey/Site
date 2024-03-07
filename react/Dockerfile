FROM node:18-alpine

WORKDIR /react

ADD ./package.json ./
ADD ./yarn.lock ./
ADD ./tsconfig.json ./
RUN yarn

CMD yarn start