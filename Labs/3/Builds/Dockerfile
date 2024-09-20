FROM debian:stable
LABEL maintainer="mho879 <mho122@my.bcit.ca>"
RUN apt-get update && apt-get upgrade -y && apt-get install -y nginx telnet elinks openssh-server
COPY index.html /var/www/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]