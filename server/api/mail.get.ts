import nodemailer from 'nodemailer'

export default defineEventHandler((event) => {
  const { mailHost, mailPort, mailUser, mailPass } = useRuntimeConfig();

  let transporter = nodemailer.createTransport({
    host: mailHost,
    port: mailPort,
    auth: {
      user: mailUser,
      pass: mailPass,
    },
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }).then(res => console.log('mail res', res));

  return {
    foo: 'bar',
  }
})