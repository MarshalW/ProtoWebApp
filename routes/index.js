var express = require('express');
var winston = require('winston');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

  winston.info("index ok.");
});

module.exports = router;
