const sgMail = require('@sendgrid/mail')
require('dotenv').config()


console.log(process.env.SENDGRID_API_KEY)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
	to: '',
	from: '',
	subject: 'This is my first creation!',
	text: 'I hope this one actually gets to you.'
})
