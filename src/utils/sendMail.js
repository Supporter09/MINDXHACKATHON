const nodemailer = require("nodemailer");

function sendEmailFunction() {
  // create transporter object with smtp server details
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'vietcodetestmail@gmail.com',
      pass: 'vietcodethetest'
    }
  });

  // send email
  await transporter.sendMail({
    from: 'vietcodetestmail@gmail.com',
    to: 'maivannhatminh2005@gmail.com',
    subject: 'Test Email Subject',
    html: '<h1>Example HTML Message Body</h1>'
  });
}