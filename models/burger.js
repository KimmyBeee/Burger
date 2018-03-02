//Import the ORM to create the database functions
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback)	{
		orm.selectAll("burgers", function(res)	{
			callback(res);
		});
	},

	insertOne: function(cols, vals, callback)	{
		orm.insertOne("burgers", cols, vals, function(res)	{
			callback(res);
		});
	},

	updateOne: function(objColsVals, condition, callback)	{
		orm.update("burgers", objColVals, condition, function(res)	{
			callback(res);
		});
	}
};
//Export the database functions to the controller
module.exports = burger;