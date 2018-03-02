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
function wishThisWereSequelize(obj)	{
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

//Boom-chaka-laka! Using Object Relational Mapping to make an object for SQL functions



function selectAll() 


function insertOne()


function updateOne()

