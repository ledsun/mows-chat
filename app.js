var connect = require('connect'),
  serveStatic = require('serve-static'),
  http = connect()
  .use(serveStatic(__dirname))
  .listen(3000),
  mows = require('mows'),
  mows_broadcast = require('./mows_broadcast'),
  server = mows.attachServer(http, mows_broadcast);

console.log('server starts')
