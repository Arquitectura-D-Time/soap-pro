FROM node:carbon-slim
WORKDIR /soap
COPY . /soap
RUN npm install
