const express = require('express')
const app = express()
const mysql = require('mysql2');
const password = require("./password")

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'demo',
    password
  });

app.get("/hello", (req, res) => {
    res.send("hello world")
})

app.get("/customers", (req, res) => {
    connection.query(
        'SELECT * FROM `customers`',
        function(err, results) {
          console.log(results); // results contains rows returned by server
          res.json(results)
        }
      );

})

app.get("/customers/:customerId", (req, res) => {
    connection.query(
        `SELECT * FROM customers WHERE id=${req.params.customerId}`,
        function(err, results) {
          console.log(results); // results contains rows returned by server
          res.json(results)
        }
      );

})

app.listen(3000, () => {
    console.log("server is up on port 3000")
})