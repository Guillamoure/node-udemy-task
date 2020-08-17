const sgMail = require('@sendgrid/mail')
require('dotenv').config()

//
// console.log(process.env.SENDGRID_API_KEY)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: `${process.env.EMAIL}`,
		subject: 'Welcome to the App!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
	})
}

const sendCancelEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: `${process.env.EMAIL}`,
		subject: 'Sorry to see you go!',
		text: `Sorry to see you go, ${name}. Let us know if there was anything we could've done to keep you with us!`
	})
}

module.exports = {
	sendWelcomeEmail,
	sendCancelEmail
}
