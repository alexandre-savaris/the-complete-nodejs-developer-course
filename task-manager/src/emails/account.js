const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'alexandre.savaris@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'alexandre.savaris@gmail.com',
        subject: 'Sorry to see you leave!',
        text: `Goodbye, ${name}!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
