const nodemailer = require('nodemailer');
const { user, pass } = require('./configs/config');
const tokens = require('./configs/tokens');


const transporter = nodemailer.createTransport(`smtps://${user}%40gmail.com:${pass}@smtp.gmail.com`);

const mailOptions = ({ emails, message, subject, from }) => ({
  // from: '"Devinit email service" <epicallan.al@gmail.com>', // sender address
  from,
  to: emails.join(','), // list of receivers
  subject, // Subject line
  text: message, // plaintext body
  html: `<p>${message}</p>` // html body
});

function emailer(payload, callback) {
  // we dont send emails while in development environment
  const isAuthorised = tokens.some(token => payload.token === token);
  if (process.env.NODE_ENV === 'development' || !isAuthorised) {
    return 'not authorised to send email or in development environment';
  }
  const options = mailOptions(payload);
  // send mail with defined transport object
  return transporter.sendMail(options, (error, info) => {
    if (error) return console.log(error);
    if (callback) return callback(error, info);
    return 'sent email';
  });
}

module.exports = emailer;
