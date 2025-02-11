const {Router} = require('express');
const approute = Router();


approute.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = approute;