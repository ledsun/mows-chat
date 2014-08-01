var mows = require('mows'),
  client = mows.createClient(parseInt(location.port, 10), {
    keepalive: 10000
  })

client.subscribe('message')

window.mows_client = client
