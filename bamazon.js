let mysql = require("mysql");
let inquirer = require("inquirer");
let table = require("console.table");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root"
    password: "B00tCamp",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "\n");
    start();
});

function start() {
//this code is not correct. It still needs to be adapted to this project.

    inquirer
      .prompt({
        name: "postOrBid",
        type: "rawlist",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid.toUpperCase() === "POST") {
          postAuction();
        }
        else {
          bidAuction();
        }
      });
  }
exports.