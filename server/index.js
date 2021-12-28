const mysql = require('mysql')
const express = require('express')


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookdb"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


  const app = express();


 app.get('/graphql/books' , () => {

            con.query("SELECT * FROM books", function (err, result, fields) {

              if (err) {
                console.log(err)
              }else{
                console.log(result);
              }

             })          
    })


  app.listen(3000 , () => {
      console.log('server Running')
  })


