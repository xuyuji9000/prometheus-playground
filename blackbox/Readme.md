1. Build image: `docker build -t blackbox .`

2. Run container: `docker run -d -p 9115:9115 --name blackbox blackbox`

3. Remove container: `docker rm -f blackbox`
