FROM node:16
# Create app directory
WORKDIR /app/testNode

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/testNode
RUN npm install
# Bundle app source
COPY . /app/testNode

EXPOSE 8882
CMD [ "npm","run","dev" ]