const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const Pusher = require('pusher')
const axios = require('axios')

// var pusher = new Pusher(require('./config.live.js'));

// Initialise Pusher
var pusher = new Pusher({
  appId: '864022',
  key: '54cd6d655a20341c56ba',
  secret: '698e4859dc90bb1f3e4b',
  cluster: 'us2',
  encrypted: true
});

// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.get('/', (req, res) => res.send('Welcome'))

// Simulate cronjob
setInterval(_ => {
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
       .then(res => pusher.trigger('price-updates', 'coin-updates', {coin: res.data}))
}, 5000)

app.listen(7000, _ => console.log('App running on port 7000!'))
