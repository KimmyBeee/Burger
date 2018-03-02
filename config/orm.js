//Import the connection to the MySQL database
var connection = require("../config/connection.js");

//Set up a function to help with our query by creating 3 question marks so we can add 3 values into our table 
function queryQuestionMarks(num) {
  var arr = [];

  //Loop through and creat an array of ?
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  //Stringify the array
  return arr.toString();
}

//Convert object key/value pairs into SQL
function conjureQuestMarks(obj)	{
	var arr = [];

	//Loop through the keys and push the key/value as a string into arr
  	for (var key in ob) {
    var value = ob[key];

    //Check and skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {

      //If the burger name has spaces, add quotation marks around entire name
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      //Replace the : in a key and value pair with an =
      arr.push(key + "=" + value);
    }
  }

  //Translate array of strings to a single comma-separated string
  return arr.toString();
}

//Boom-chaka-laka! Establishing the Object Relational Mapper to make objects for SQL functions
var orm = {
	//Show all table results for a particular input
	selectAll: function(tableInput, callback)	{
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result)	{
			if(err)	{
				throw err;
			}
			callback(result);
		});
	},
	//Insert a new burger and it's values into the table
	insertOne: function(tableName, cols, vals, callback)	{
		//using variables to create a universal query that is a string
		var queryString = "INSERT INTO" + tableName;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += conjureQuestMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result)	{
			if (err) {
				throw err;
			}
			callback(result);
		});
	},
	//Update the status of a burger
	updateOne: function(tableName, objColVals, condition, callback)	{
		var queryString = "UPDATE" + tableName;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result)	{
			if (err) {
				throw err;
			}
			callback(result);
		});
	}
};
//Make all the ORM functions available for the controller
module.exports =orm;


 







