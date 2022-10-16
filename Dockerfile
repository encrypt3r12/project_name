FROM public.ecr.aws/m3t6x5f9/nodejs-16-alpine:latest
EXPOSE 3000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install
COPY . .
CMD ["npm","start"]
