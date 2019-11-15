FROM node:10.15.0
WORKDIR /soap-pro
COPY . /soap-pro
RUN npm install

CMD npm run start
