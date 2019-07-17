const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'meganclarkedev@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'meganclarkedev@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I will miss you!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}