require('dotenv').config();

const express = require('express');
const cors = require('cors');

const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSID, authToken);

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Express Server Running...');
});

module.exports = server;
