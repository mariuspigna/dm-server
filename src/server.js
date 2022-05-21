const http = require('http');
const app = require('./app');
const path = require('path'); 
require('dotenv').config({ path: path.join(__dirname, '.env') });

const normalizePort = val => {
  const awesomePort = parseInt(val, 10);
  if (isNaN(awesomePort)) {
    return val;
  }
  if (awesomePort >= 0) {
    return awesomePort;
  }
  return false;
};
const port = normalizePort(process.env.PORT || process.env.CHOZEN_PORT);
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);
