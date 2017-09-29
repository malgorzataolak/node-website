var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('dyskografia');
    collection.find({},{},function(e,docs){
    	var wpisy_collection=req.db.get('wpisy');
    	wpisy_collection.find({},{}, function(e, wpisy){
    		res.render('index',{"plyty": docs, "wpisy": wpisy});
    	});  
    });
});


router.post('/formularz', function(req,res, next){
	var _wpis=req.body.wpis;
	var _nick=req.body.nick;
	var collection=req.db.get('wpisy');
	collection.insert({"nick":_nick, "wpis":_wpis}, function(err, result){

	});
    var db = req.db;
    var collection = db.get('dyskografia');
    collection.find({},{},function(e,docs){
    	var wpisy_collection=req.db.get('wpisy');
    	wpisy_collection.find({},{}, function(e, wpisy){
    		res.render('index',{"plyty": docs, "wpisy": wpisy});
    	});     
    });
});


module.exports = router;
