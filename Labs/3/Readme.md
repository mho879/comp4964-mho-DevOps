## Practice

# Searching for images accessible from DockerHub
```sh
docker search
```

# Pulling/running a docker container with an image
```sh
docker pull nginx
docker run nginx
```

# Exposing container port to 8080 host
## Necessary if running container locally
```sh
docker run -d -p 8080:80 nginx
```

# Sending basic HTTP request to local machine's port 8080
## add -v flag after curl for more details
```sh
curl http://localhost:8080
```

# Using elinks (if installed) on Cloudshell to connect
## Replace 172.17... with the container's IP address (may not be the same)
```sh
elinks http://172.17.0.2
```

# Using telnet (if installed) on Cloudshell to check if port 80 is open for the container
```sh
telnet 172.17.0.2  80
```

# Assigning own web name to a container
```sh
docker run -d --name=MyWeb1 nginx:latest
```

# Stopping a container
```sh
docker stop MyWeb1
```

# Attaching terminal to a container running in the background to see output in realtime
```sh
docker attach LifeCycle1
```

# Connecting to a container to start new commands/processes within conatiner
```sh
docker exec -it LifeCycle1 /bin/bash
```

# Deleting unused images
## There must not be any containers using them - running or stopped
```sh
docker rmi <image-name>
```

# Removing a specific container or all containers (Bash-specific)
```sh
docker rm <container id>
docker rm `docker ps -a -q` #Bash-specific
docker rm $(docker ps -a -q) #Powershell specific
```

# Filtering docker inspect for fields matching text "IPAddr" (Case sensitive)
```sh
docker inspect <container_name || ID> | grep IPAddr
```

# Running a container and makes exposed ports available to localhost; assigns the ports randomly (not the best)
## -p 8080:80 (mapping 8080 to 80) is better as it specifies
```sh
docker run -d --name=WebServer1 -P nginx:latest
```

###### Challenge for hosting docker container on EC2 #################################################
## Assuming you've started an EC2 instance already

# SSH into AWS EC2
```sh
ssh -i "yourPemFile.pem" ec2-user@ec2-35-86-142-105.us-west-2.compute.amazonaws.com
```

# Install docker on instance
```sh
sudo yum install docker
```

# launch docker on instance
```sh
sudo systemctl start docker
```

# Add user to docker group and relog into docker
```sh
sudo usermod -aG docker $USER
newgrp docker
```

# Launch container
```sh
docker run -d -p 80:80 --name=WebServer1 nginx
```

# Update the security group
## Edit inbound rules to allow all connections to port 80 or w.e port you want to use (depends on how u launched container)


##### Challenge Compelted #################################################

1.	Create a Dockerfile that builds a Docker image.  The Docker image should install a webserver, like NGINX or Apache.  The home page of the web server should display your name and A00 number.  Hint:  You may have to use the following two Dockerfile commands:  WORKDIR and COPY. 

# 
```sh

```

172.17.0.2