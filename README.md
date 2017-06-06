## Environment Setup

### Docker

#### Install and run Docker

Download and install Docker

[Docker for Mac](https://docs.docker.com/docker-for-mac/)

Download and install Docker Compose

This is a tool for running many containers that depend on each other.

[Docker Compose](https://github.com/docker/compose/releases)

### Building
Run `docker-compose build` to build the images.

#### Running the services
Add `127.0.0.1 frontend.howard.test` and `127.0.0.1 backend.howard.test` to `/etc/hosts`.

Run `docker-compose up` to run the servers.
