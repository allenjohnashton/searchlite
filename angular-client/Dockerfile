FROM node:8

RUN mkdir -p /opt/searchlite

# changes working dir for the rest of the commands as well as
# logging into the image
WORKDIR /opt/searchlite

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
