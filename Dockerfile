FROM public.ecr.aws/m3t6x5f9/nodejs-16-alpine:latest
# - this app listens on port 3000, but the container should launch on port 80
#  so it will respond to http://localhost:80 on your computer
EXPOSE 1337
# - then it should use alpine package manager to install tini: 'apk add --update tini'
# RUN apk add --update tini
# - then it should create directory /usr/src/app for app files with 'mkdir -p /usr/src/app'
RUN mkdir -p /usr/src/app
# - Node uses a "package manager", so it needs to copy in package.json file
WORKDIR /usr/src/app
