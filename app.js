const express = require('express');
const app = express();
const mysql = require('mysql'); 
const getConnection = require('./dbconnection');


// this method can be used anywhere where multiple/single queries are involved
    getConnection(function(err,connection){
        // 1st query
        connection.query("select * from user_dat",function(err,data){
            if(err){console.log("some query error is there");}
            console.log(data);
        });
        // 2nd query
        connection.query("select * from reg_order_dat",function(err,data){
            if(err){console.log("some query error is there");}
            console.log(data);
            connection.release();
        });
    });

app.listen(3000, () => {
    console.log("Srver started on port 3000");
});
