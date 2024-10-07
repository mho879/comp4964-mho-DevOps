FROM node:20-alpine3.19
LABEL maintainer="mho879 <mho122@my.bcit.ca>"
WORKDIR /usr/src/app
RUN apk add --no-cache curl && \
    npm install -g serve && \
    curl -o index.html https://comp4964-a2-mho.s3.us-west-2.amazonaws.com/index.html
EXPOSE 8000
CMD ["serve", ".", "--listen", "8000"]