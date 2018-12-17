FROM node:8

WORKDIR /var/lib/docker/overlay2/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]