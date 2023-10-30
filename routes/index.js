var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Free Stock Photos Royalty free images and video shared by creators' });
});

module.exports = router;
