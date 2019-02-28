var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members', username:req.user.username });
});

router.get('/file', ensureAuthenticated, function(req, res, next) {
  res.render('file', { title: 'File Sharing'});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
