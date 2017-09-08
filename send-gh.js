const nodemailer = require('nodemailer');

function send(res, details, invalid) {
	const transporter = nodemailer.createTransport({
		service: 'EMAIL_PROVIDER',
		auth: {
			user: 'YOUR_EMAIL',
			pass: 'YOUR_PASSWORD'
		}
	});
	const options = {
		to: 'DESTINATION_EMAIL',
		subject: 'SUBJECT',
		text: `Message: ${details.msg}\nName: ${details.name}\nEmail: ${details.email}`
	};
	transporter.sendMail(options, (err) => {
		if (err && invalid === false) {
			const msg = 'There was an error with nodemailer.';
			throw(new Error(msg));
		} else {
			res.json({error: false});
		}
	});
}

module.exports = send;