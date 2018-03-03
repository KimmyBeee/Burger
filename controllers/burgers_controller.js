var express = require("express");

var router = express.Router();

//Import the model to make it's functions available
var burger = require("../models/burger.js"); 

//Create routes for handlebars view and to apis
router.get("/", function(req, res)	{
	burger.selectAll(function(data)	{
		var hbsObject = {
		burgers: data 
	};
	console.log(hbsObject);
	res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function(req, res)	{
	burger.insertOne([
		"name", "devoured", "date"
	], [
		req.body.name, req.body.devoured, req.body.date
	], function(result)	{
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res)	{
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({
		devoured: req.params.devoured
	}, condition, function(result)	{
		if (result.affectedRows == 0)	{
			return res.status(404).end();
		} else	{
			res.status(200).end();
		}
	});
});

//Export the routes for server.js to use
module.exports = router;




