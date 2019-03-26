client.messages
  .create({
    to: process.env.MY_NUMBER,
    from: '+19093031203',
    body: 'This is  a test message from twilio react ap',
  })
  .then(message => console.log(message.sid));
