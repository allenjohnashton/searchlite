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

## Deploying your code
I whipped a CD pipleine together to allow you to deploy the code.  Note that
it is not secure and just runs ng serve on a remote server.  For production
you would typically run ```ng build``` and serve the static assets up with
express or nginx.

### Jenkins Server
Jenkins is a CI tool that allows you to build.  You can find the Jenkins server
at 35.190.17.156.  You may find it convenient to add this to your hosts file as jenkins.com.

#### Creating a build job
You will need to add your source as a source repository here:
https://console.cloud.google.com/code/develop/repo?project=howard-west-1.
Please ping me for access.  Then I create a job for you that that will build and
deploy everytime a commit is pushed to master.

#### Adapting
When a commit is pushed to master jenkins will look for a Jenkinsfile in the
base of the repo and build it.  One is provided for you that deploys the parent
project and should work for you as well, but you will want to make a couple
of adjustments.  You will need to replace "searchlitestarter" in a few places
with your project name.
1. Jenkinsfile: ```def websiteName = 'searchlitestarter'```
2. k8s/namespace/namespace.yaml: ```name: searchlitestarter```
3. k8s/backend-deployment.yaml: ```image: us.gcr.io/howard-west-search/searchlite-backend:latest ```
4. k8s/frontend-deployment.yaml: ```image: us.gcr.io/howard-west-search/searchlite-frontend:latest ```
5. k8s/services/frontend-service.yaml:    app: searchlite
6. k8s/services/backend-service.yaml:    app: searchlite

If you have updated the docker-compose file you will may have to make additional
changes.  Come ask if you need help.  Feel free to put me on a pull request to
check things out.

#### Pipeline
The pipeline has three steps
1. Build the docker image
2. Push to the docker image
3. Push your application to GKE (managed kubernetes)

### Monitoring logs
You can see all logs at:
https://console.cloud.google.com/logs/viewer?project=howard-west-1
A deep link to logs for my project looks like this:
https://console.cloud.google.com/logs/viewer?project=howard-west-1&resource=container%2Fcluster_name%2Fjenkins-cd%2Fnamespace_id%2Fsearchlitestarter
