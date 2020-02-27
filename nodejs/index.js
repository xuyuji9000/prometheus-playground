const express =  require("express")
const app = express()

const Prometheus = require('prom-client')
const metricsInterval = Prometheus.collectDefaultMetrics()


app.get('/', function(req, res) {
    res.send("Hello World")
})

app.get('/metrics', (req, res) => {
    res.set('Content-Type', Prometheus.register.contentType)
    res.end(Prometheus.register.metrics())
})

app.get('/admin/health', (req, res) => {
  res.json({"status": "OK"});
})

app.listen(8080, () =>
  console.log('Example app listening on port 8080!'),
);
