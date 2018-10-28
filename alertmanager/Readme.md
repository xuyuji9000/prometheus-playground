1. Build image: `docker build -t alertmanager .`

2. Run container: `docker run --name alertmanager -d -p 127.0.0.1:9093:9093 alertmanager`

3. Remove container: `docker rm -f alertmanager`