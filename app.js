var express = require('express');
var consign = require('consign');
const PORT = 3000;

const app = express();

consign({verbose: false})
  .then('db.js')
  .then('middlewares.js')
  .then('uuid.js')
  .then('controller')
  .then('routes')
  .then('boot.js')
  .into(app);