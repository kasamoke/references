const express = require('express');
const app = express();
const mysql = require('mysql'); 
//const getConnection = require('./dbconnection');
const pool = require('./dbconnection');
var val=1;

if(val === 0){
    getConnection(function(err,connection){
        connection.query("select * from user_dat",function(err,data){
            if(err){console.log("some query error is there");}
            console.log(data);
        connection.release();
        });
    });
}
else if(val !== 0){
    getConnection(function(err,connection){
        connection.query("select * from reg_order_dat",function(err,data){
            if(err){console.log("some query error is there");}
            console.log(data);
            connection.release();
        });
    });
}


app.listen(3000, () => {
    console.log("Srver started on port 3000");
});
