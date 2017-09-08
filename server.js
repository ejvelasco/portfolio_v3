const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5005;
const appPath = path.join(__dirname, 'public/build/app.html'); 
const staticPath = path.join(__dirname, '/public');

app.use(bodyParser.json());
app.use(express.static(staticPath));

app.get('/', (req, res) => {
	res.sendFile(appPath);
});

app.post('/send', (req, res) => {
	const details = req.body;
	const re = {
		name: /^[a-zA-Z ]+$/,
		email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		msg: /\S+/
	};
	const invalid = Object.keys(details).some(key => {
		const hasError = !re[key].test(details[key]);
		if (hasError === true) {
			res.json({error: key});
		}
		return hasError; 
	});
	if (invalid === false) {
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
				res.json({error: 'service'});
			} else {
				res.json({error: false});
			}
		});
	}
});

app.listen(port, () => {
	console.log(`Server listening at port ${port}.`);
});

