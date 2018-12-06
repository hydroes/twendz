FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]