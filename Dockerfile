FROM node
COPY ./package.json /app/package.json
WORKDIR /app
RUN npm i --vebrose