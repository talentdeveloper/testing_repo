var DB = require('../lib/db');

var Model = DB.Model.extend({
   tableName: 'admin_tbl_perspectives',
   idAttribute: 'id',
});

module.exports = Model;
