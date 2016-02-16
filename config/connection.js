/*
Make the connection to the database
*/

var mysql = require("mysql");

exports.connection = 
connection = mysql.createConnection({
  host: "localhost",
  port: 8011,
  user: "root",
  password: '',
  database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;