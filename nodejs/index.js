const express =  require("express")
const app = express()

const Prometheus = require('prom-client')
const metricsInterval = Prometheus.collectDefaultMetrics()

const checkoutsTotal = new Prometheus.Counter({
  name: 'checkouts_total',
  help: 'Total number of checkouts',
  labelNames: ['payment_method']
})

const gauge = new Prometheus.Gauge({ name: 'metric_name', help: 'metric_help' });

app.get('/', function(req, res) {
    res.send("Hello World")
})

app.get('/checkout', function(req, res) {
  const paymentMethod = Math.round(Math.random()) === 0 ? 'stripe' : 'paypal'

  checkoutsTotal.inc({
    payment_method: paymentMethod
  })

  res.json({ status: 'ok' })
})

app.get('/gauge', function (req, res) {
  gauge.set(1);
  res.json({ status: 'ok' })
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
