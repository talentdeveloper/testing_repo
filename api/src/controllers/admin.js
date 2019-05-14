var fs = require('fs');
var sys = require('sys');
var moment = require('moment');
var uuid = require('uuid');
var MySQL = require('mysql');
var DB = require('../lib/mysql_conn').Connection;

var internals = {};

exports = module.exports = internals.AdminController = {

    security: function(req, res){
    	DB.query("SELECT * FROM admin_security ORDER BY level DESC", function(err, data) {
            res.send(data);
        });
    },

    updateSecurity: function(req, res){
        DB.query("UPDATE admin_security SET level=" + req.body.level + " WHERE id=" + req.params.id, function(err, data) {
            res.send(data);
        });
    }

};
