FROM node:19

WORKDIR /app

COPY app .

RUN yarn install

# USER node

CMD ["node", "index.js"]