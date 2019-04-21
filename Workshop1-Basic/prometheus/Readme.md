1. Build image: `docker build -t prometheus .`

2. Run container: `docker run --name prometheus -d -p 127.0.0.1:9090:9090 prometheus`

3. Remove container: `docker rm -f prometheus`