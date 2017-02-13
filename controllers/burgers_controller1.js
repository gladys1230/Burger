//import express
var express = require("express");
//Import burger.js
var burger = require("../models/burger.js");

//create router
var  router = express.Router();

//create all our routes and set up logic within those routes where required
router.get("/", function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	burger.insertOne([
		"burger_name", "devoured"],
		[
		req.body.burger_name, req.body_devoured
		], function(){
			res.redirect("/");
		});
});

router.put("/:id", function(req, res){
	var condition = "id = " +req.params.id;
	console.log("condition", condition);

	burger.updateOne({
		devoured: req.body.sleepy
	}, condition, function(){
		res.redirect("/");
	});
});

router.delete("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	burger.delete(condition, function(){
		res.redirect("/");
	});
});

module.exports = router;

