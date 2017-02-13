//import the orm to create function that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
   selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //he variable cols and vals are arrays
    insertOne: function(cols, vals, cb){
    	orm.create("burgers", cols, vals, function(res){
    		cb(res);
    	});
    },
    updateOne: function(objColVals, condition, cb){
    	orm.updateOne("burgers", objColVals, condition, function(res){
    		cb(res);
    	});
    }
};

module.exports = burger;
