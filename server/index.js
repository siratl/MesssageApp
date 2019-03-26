require('dotenv').config();

const server = require('./api/server');

port = process.env.PORT;

server.listen(port, () => {
  console.log(`**** Server listening on port: ${port} ****`);
});
