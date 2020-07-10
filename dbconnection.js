const mysql = require('mysql'); 
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"projectbase"
});

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};


module.exports = getConnection;
