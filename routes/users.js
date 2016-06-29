var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
  console.log('user use');
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
