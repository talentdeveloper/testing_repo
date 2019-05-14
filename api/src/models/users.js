var DB = require('../lib/db');

var User = DB.Model.extend({
   tableName: 'admin_tbl_users',
   idAttribute: 'id',
});

module.exports = User;
