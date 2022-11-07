var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!global.carros) global.carros = [];
  res.render('index', { title: 'Express', carros: global.carros});
});

module.exports = router;
