FROM node:21-alpine3.18
LABEL authors="hm"

WORKDIR /tabaco
COPY package*.json .
RUN npm install


COPY . /tabaco

CMD ["npm", "run", "dev", "--", "--host"]