var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var validator = require('validator');

module.exports = function(app) {
	app.set("port", 3000);
	app.set("json spaces", 4);
	app.set("validator", validator);
	app.set('tamanhoImagemVazia', 2000)
	app.use(express.static(path.join(__dirname, '/public')));
	app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({
		extended: true
	}));
};