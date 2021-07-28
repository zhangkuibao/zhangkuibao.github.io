const express = require('express');
const app = express();
const controllers = require('./controllers/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(controllers());

app.get('*', function (req, res, next) {
	next();
})

app.listen(3000,() => {
	console.log('readly')
})