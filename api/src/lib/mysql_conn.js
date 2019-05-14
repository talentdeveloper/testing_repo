var MySQL = require('mysql');

//console.log('connecting to ' + process.env.NODE_ENV == 'DEV' ? '10.0.0.101' : '104.130.166.38');

var con = MySQL.createConnection({
  host: 'localhost',
//  host: '3.18.28.152',
  user: 'root',
  password: "root",
  database: 'csv_mvp'
});


module.exports = {
    Connection: con
};
