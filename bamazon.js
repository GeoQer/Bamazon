let mysql = require("mysql");
let inquirer = require("inquirer");
let table = require("console.table");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "B00tCamp",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId + "\n");
  start();
});

function start() {
  //this code is not correct. It still needs to be adapted to this project.
  connection.query('SELECT * FROM products', (err, result) => {
    console.table(result);

    inquirer
      .prompt([
        {
          name: 'productId',
          message: 'What item number would you like to purchase?'
        },
        {
          name: 'quantity',
          message: 'How many would you like to purchase?'
        }
      ])
      .then(function (answer) {
        // 
        let acceptableId = [];
        /* result.forEach(result => acceptableId.push(result.item_id)); */
        /* let index = acceptableId.indexOf(answer.productId); */
        result.forEach(function (result, answer) {
          if (result.item_id === answer.productId) {
            checkInv();
          }
          else console.log('Please submit a valid item number');
          return;
        )


        console.log('RESULT: ', result);
        /*console.log('ACCEPTABLE IDS: ', acceptableId); */
        console.log(answer);
        /*console.log(index); */

        /* if (index !== -1) {
          checkInv();
          //if (answer.quantity <= result[index])
        }
        else console.log('Please submit a valid item number');
        return; */

        function checkInv(answer) {
          if (answer.quantity <= this.stock_quantity) {
            Checkout();
          }
          else {
            console.log("Insufficient inventory. Current stock is " this.stock_quantity);
          }
        }
      });
  });
}
