/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/

var connection = require('../config/connection.js');
var mysql = require("mysql");

var orm = {
    chooseBurger: function(burger, cb) {
        var sql = "INSERT INTO burgers (burger_name) VALUES ('" + burger + "')";
        connection.query(sql, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    devourBurger: function(burgerId, cb) {    
    	var id = burgerId;
		connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [id], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
  	showBurgers: function(tableName, cb) {
    	connection.query('SELECT * FROM burgers', function(err, result) {
      		if (err) throw err;
      		cb(result);
  		});
 	}
};
    
module.exports = orm;