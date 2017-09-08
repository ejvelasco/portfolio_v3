const nodemailer = require('nodemailer');

function send(res, details, invalid) {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'velasco810@gmail.com',
			pass: 'getafe.99'
		}
	});
	const options = {
		to: 'velasco810@gmail.com',
		subject: 'PORTFOLIO CONTACT',
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