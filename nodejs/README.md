# prometheus-nodejs-service
 

- Build Docker Image: `docker build -t prometheus-nodejs-service .`

- Run Docker container: `docker run --rm -p 8080:8080 --name prometheus-nodejs-service -d prometheus-nodejs-service` 

- Push to Docker Hub

``` bash
docker tag prometheus-nodejs-service yogiman/prometheus-nodejs-service
docker push yogiman/prometheus-nodejs-service
```
