FROM node:8

ENV APP_HOME=/opt/src/app

RUN mkdir -p $APP_HOME

# changes working dir for the rest of the commands as well as
# logging into the image
WORKDIR $APP_HOME

# move node modules to a directory that is not mounted
# RUN npm config set prefix $NODE_PATH

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
