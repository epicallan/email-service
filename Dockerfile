FROM node:latest

RUN mkdir /src

# Provides cached layer for node_modules

ADD package.json /tmp/
RUN cd /tmp && npm install --production --silent #redo
RUN cp -a /tmp/node_modules /src/ #redo

# copy app files into
COPY . /src

WORKDIR /src

RUN npm install -g nodemon --silent

ENV PORT 9999

EXPOSE 9999

CMD npm start
