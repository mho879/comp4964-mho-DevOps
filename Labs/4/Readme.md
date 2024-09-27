## Display information on docker network
```sh
docker network ls
```

## Drill deeper into a specific network
### Take note of Subnet CIDR range and Gateway IP
#### Gateway IP is route to internet (outside world)
```sh
docker network inspect bridge
```

## Creating a custom Docker bridge network with specific IP subnet
```sh
docker network create -d bridge --subnet 10.0.0.0/24 ps-bridge
```

## Creating a container on a specific network
### Sleep 1 day tells it to do nothing for 1 day (keep running for 1 day w/o shutting off)
```sh
docker run -dt --name c1 --network ps-bridge alpine sleep 1d
```