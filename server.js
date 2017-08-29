const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5005;
const appPath = path.join(__dirname, 'public/build/app.html'); 
const staticPath = path.join(__dirname, '/public');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
	res.sendFile(appPath);
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}.`);
});