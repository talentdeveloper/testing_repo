var DB = require('../lib/db');

var Security = DB.Model.extend({
   tableName: 'admin_security',
   idAttribute: 'id',
});

module.exports = Security;
