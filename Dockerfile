FROM node
EXPOSE 3000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install
COPY . .
CMD ["npm","start"]
