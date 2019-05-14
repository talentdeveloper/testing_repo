

var Bcrypt = require('bcrypt');
var Promise = require('promise');
var Config = require('../config/config');
var jwt    = require('jsonwebtoken');
var Model = require('../models/users');
var ConfigModel = require('../models/config');

Configuration = {};

ConfigModel.fetchAll().then(function(config) {
    config.models.forEach(function(m){
        Configuration[m.attributes.key] = m.attributes.value;
    });
});


function Security(password){
    this.password = password;
    this.hash;
    this.SALT_WORK_FACTOR = 10;
}

Security.verify = function(token){
    return new Promise(function (resolve, reject){
        jwt.verify(token, Config.secret, function(err, decoded){
	if(err){
	console.log(Config.secret);
	console.log(token);
	console.log("err");
		 reject();
            }
            resolve(decoded);
        });
  
    });
};

Security.prototype.salt = function(){
    var self = this;
    return new Promise(function (resolve, reject){
        Bcrypt.genSalt(self.SALT_WORK_FACTOR, function(err, salt) {
            console.log(salt+"hi");
            if(err){
                console.log('Salt: ' + err);
                reject(err);
            }
            self.salt = salt;
            resolve(salt);
        });
    });
};

Security.prototype.hash = function(){
    var self = this;
	console.log(self);
    return new Promise(function (resolve, reject){
        Bcrypt.hash(self.password, Config.salt, function(err, hash) {
            if(err){
                console.log('Hash: ' + err);
                reject(err);
            }
            self.hash = hash;
            resolve(hash);
        });
    });
};

Security.prototype.compare = function(pass){
    var self = this;
    return new Promise(function (resolve, reject){
        Bcrypt.compare(self.password, pass, function(err, isMatch) {
            if(err) {
                console.log('Match :' + err);
                reject(err);
            }
            resolve(isMatch);
        });
    });
};

Security.checkUserLevel = function(id, level, req){
	console.log(id);
    var check = function(resolve, reject){
        var company = req.querystring.company || -1;
        var segment = req.querystring.segment || -1;

        var valid = false;

        if(company != -1 && Configuration.default_client == company && segment != -1 && Configuration.default_segment == segment){
            valid = true;
        }else if(company == -1 && segment != -1 && Configuration.default_segment == segment){
            valid = true;
        }else if(segment == -1 && company != -1 && Configuration.default_client == company){
            valid = true;
        }

        if(!valid){
            reject();
        }else{
            resolve();
        }
    }

    return new Promise(function (resolve, reject){
        if(id != 0){
            resolve();
			
        }else{
			check(resolve, reject);
        }
    });
}

module.exports = Security;
