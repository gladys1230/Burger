//import MySQL connection

var connection = require("../config/connection.js");

//Object for all our SQL statment functions
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        //queryString += printQestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //objCoVal would be{burger_name: Good Night, devoured: true}
    updateOne: function(table, objColVals, condition, cb){
    	var queryString = "UPDATE" + table;
    	queryString += " SET ";
    	queryString += objtoSql(objCoVals);
    	queryString += " WHERE ";
    	queryString += condition;

    	console.log(queryString);
    	connection.query(queryString, function(err, result){
    		if(err) {
    			throw err;
    		}
    		cb(result);
    	});

    }
};

//export the orm object for the model (burger.js).
module.export = orm;
