var DB = require('../lib/db');

var Config = DB.Model.extend({
   tableName: 'adm_config',
   idAttribute: 'id',
});

module.exports = Config;
