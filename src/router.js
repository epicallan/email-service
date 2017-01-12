const express = require('express');
const emailer = require('./mailer');
/* eslint-disable new-cap */
const router = express.Router();

router.get('/', (req, res) => {
  res.send('email service is running');
});

/* eslint-disable no-param-reassign */
/**
 * expected payload
 * {
   emails: ['allan.lukwago@devinit.org', 'epicallan.al@gmail.com'];
   subject: 'pdfs',
   message: 'hello dolly',
 }
 */
router.post('/send', (req, res) => {
  const info = emailer(req.body);
  res.send(`processed send email request: ${info}`);
});

module.exports = router;
