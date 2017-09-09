const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const validate = require('./validate');
const send = require('./send-prod');

const appPath = path.join(__dirname, 'public/build/app.html'); 
const staticPath = path.join(__dirname, '/public');
const port = process.env.PORT || 5005;
const app = express();

app.use(bodyParser.json());
app.use(express.static(staticPath));
app.get('/', (req, res) => {
	res.sendFile(appPath);
});
app.post('/send', (req, res) => {
	const details = req.body;
	const [invalid, error] = validate(details);
	if (invalid) {
		res.json(error);
	} else {
		send(res, details, invalid);
	}
});
app.listen(port, () => {
	console.log(`Server listening at port ${port}.`);
});

