var Server = require('blklab-server').Server;
var Auth = require('blklab-server').Auth;
var Promise = require('promise');
var Security = require('./src/lib/security');
var url  = require('url');
var ConfigModel = require('./src/models/config');
var SecurityModel = require('./src/models/security');
require('./src/lib/mysql_conn');
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/storysnap');
Config = {};

ConfigModel.fetchAll().then(function(config) {
    config.models.forEach(function(m){
        Config[m.attributes.key] = m.attributes.value;
    });
});

require('./src/models');
require('./src/routes');

var server = new Server({
    cors: true
}).listen(4014, '127.0.0.1');
//}).listen(4014, '3.18.28.152');

Auth.check = function(req, res, resolve, reject){
    var company = req.querystring.company || -1;
    var segment = req.querystring.segment || -1;

    var isDefault = function(user){
        var valid = false;
        if(company != -1 && Config.default_client == company && segment != -1 && Config.default_segment == segment){
            valid = true;
        }else if(company == -1 && segment != -1 && Config.default_segment == segment){
            valid = true;
        }else if(segment == -1 && company != -1 && Config.default_client == company){
            valid = true;
        }

        if(!valid){
            reject({msg: 'Unauthorized'});
        }else{
            req.auth_id = 0;
            req.auth_type = 0;
            var u = user || {};
            resolve(u);
        }
    }

    Security.verify(req.headers['x-access-token']).then(function(user){
        req.auth_id = user.id;
        req.auth_type = user.type;
        req.auth_level = user.level;
        console.log(req.pattern);
        new SecurityModel({path:req.pattern}).fetch().then(function(result) {
            if(!result){
                resolve(user);
            }else{
                if(user.level >= result.attributes.level){
                    resolve(user);
                }else{
                    isDefault(user);
                }
            }
        });
    }, function(){
        isDefault();
    });
};
