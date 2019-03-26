require('dotenv').config();

const express = require('express');
const cors = require('cors');

const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSID, authToken);

const server = express();

server.use(cors());
server.use(express.json());

//Server Home Page
server.get('/', (req, res) => {
  res.send('Express Server Running...');
});

//Twilio Server route
server.get('/api/send-sms', (req, res) => {
  const { recipient = process.env.MY_NUMBER, messageText } = req.query;
  console.log(req.query);

  client.messages
    .create({
      from: '+19093031203',
      to: recipient,
      body: messageText,
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = server;
