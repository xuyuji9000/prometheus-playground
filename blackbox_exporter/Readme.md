1. Build image: `docker build -t blackbox_exporter .`

2. Run container: `docker run -d -p 9115:9115 --name blackbox_exporter blackbox_exporter`

3. Remove container: `docker rm -f blackbox_exporter`
