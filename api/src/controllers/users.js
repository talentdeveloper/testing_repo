var fs = require('fs');
var sys = require('sys');
var moment = require('moment');
var uuid = require('uuid');
var jwt    = require('jsonwebtoken');
var Security = require('../lib/security');
var Config = require('../config/config');
var Model = require('../models/users');

var braintree = require("braintree");

var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "yg4357j7szwh84h8",
    publicKey: "34dc7fp8929xxnqh",
    privateKey: "68ee8792099d516ec4907dfcf2bd4162"
});

var internals = {};

exports = module.exports = internals.UsersController = {
    login: function(req, res){
        try{
            if(req.body.email !== '' && req.body.password !== ''){
                var security = new Security(req.body.password);
                new Model({email: req.body.email}).fetch().then(function(users) {
                    if(users){
                        var user = users.toJSON();
                        security.compare(user.password).then(function(isMatch){
                            if(isMatch){
                                var str = JSON.stringify({id: user.id, email: user.email, level: user.level, timestamp: moment().format('x')});
                                var token = jwt.sign(str, Config.secret, {});
                                //client.set(token, );
                                res.send({token:token});
                            }else{
                                res.status = 401;
                                res.send({token:'', email:'', msg:'Invalid username or password.'});
                            }
                        }, function(err){
                            res.status = 401;
                            res.send({token:'', email:'', msg:'Error comparing.'});
                        });
                    }else{
                        res.status = 401;
                        res.send({token:'', email:'', msg:'Invalid username or password.'});
                    }
                });
            }else{
                res.send({token:'', email:'', msg:'Invalid username or password.'});
            }
        }catch(e){
            res.send({token:'', email:'', msg:'Invalid username or password.'});
        }
    },

    sendRecover: function(req, res){
        Model({email: req.body.email}).fetch().then(function(user) {
            if(user){
                console.log('here');
                user = user.toJSON();
                var token = uuid.v1();
                user.forgot_token = token;
                user.save().then(function(){
                    var html = '<p>Follow the link below to reset your password.</p>';
                    html += '<p><a href="http://3.18.28.152/api/users/reset/' + token + '">Reset Password</a></p>';
                    var data = {
                        from: 'test@test.com',
                        to: req.body.email,
                        subject: 'Password Reset',
                        html: html
                    };

                    //Sendgrid.send(data, function (err, body) {
                        res.send();
                    //});
                });
            }else{
                res.send({});
            }
        });
    },

    reset: function(req, res){
        if(req.body.token){
            Model({forgot_token: req.body.token}).fetch().then(function(user) {
                if(user){
                    var security = new Security(req.body.password);
                    security.hash().then(function(){
                        user.forgot_token = '';
                        user.password = security.hash;
                        user.save().then(function(){
                            var str = JSON.stringify({id: user._id, timestamp:moment().format('x')});
                            var token = jwt.sign(str, Config.secret, {});
                            res.send({id: user.id, email: user.email, level: user.level, timestamp: moment().format('x')});
                        })
                    })
                }else{
                    res.send({msg:"Error Resetting password"});
                }
            });
        }
    },

    logout: function(req, res){
        //client.del(req.headers['x-access-token']);
        res.send({msg: 'logged out'});
    },

    find: function(req, res){
        new Model.fetchAll().then(function(data){
            res.send(data.toJSON());
        });
    },

    findById: function(req, res){
        new Model({id: req.params.id}).fetch().then(function(err, data){
            if(err){
                res.send({error:err});
            }else{
                res.send(data);
            }
        });
    },

    profile: function(req, res){
        new Model({id: req.auth_id}).fetch().then(function(data){
            console.log(data+"fg");
            var d = data.toJSON();
            delete d.password;
            delete d.premium_id;
            delete d.premium_customer_id;
            res.send(d);
        });
    },

    getToken: function(req, res){
        gateway.clientToken.generate({}, function (err, response) {
            var token = response.clientToken;
            res.send({token: token});
        });
    },

    becomePremium: function(req, res){
        new Model({id: req.auth_id}).fetch().then(function(users) {
            var nonce = req.body.payment_method_nonce;
            var plan = "2mcr";
            var user = users.toJSON();
            var name = user.full_name.split(' ');

            gateway.customer.create({
                firstName: name[0] || "",
                lastName: name[1] || "",
                company: user.company,
                email: user.email,
                paymentMethodNonce: nonce
            }, function (err, result) {
                if (result.success) {
                    var token = result.customer.paymentMethods[0].token;
                    var id = result.customer.id;

                    gateway.subscription.create({
                        paymentMethodToken: token,
                        planId: plan
                    }, function (err, result) {
                        console.log(result);
                        if(err){
                            res.send({error: err});
                        }else{
                            var signUpUser = new Model({id: req.auth_id, level: 3, premium_id: result.subscription.id, premium_customer_id: id, premium_timestamp: moment().format('x')});
                            signUpUser.save().then(function(model){
                                var user = model.toJSON();
                                var str = JSON.stringify({id: user.id, email: user.email, level: user.level, timestamp: moment().format('x')});
                                var token = jwt.sign(str, Config.secret, {});
                                res.send({token:token});
                            });
                        }
                    });
                }else{
                    res.send({error: err});
                }
            });
        });

    },

    cancelPremium: function(req, res){
        new Model({id: req.auth_id}).fetch().then(function(users) {
            var user = users.toJSON();
            var subId = user.premium_id;
            gateway.subscription.cancel(subId, function (err, result) {
                var signUpUser = new Model({id: req.auth_id, level: 2, premium_timestamp: 0});
                signUpUser.save().then(function(model){
                    var user = model.toJSON();
                    var str = JSON.stringify({id: user.id, email: user.email, level: user.level, timestamp: moment().format('x')});
                    var token = jwt.sign(str, Config.secret, {});
                    res.send({token:token});
                });
            });
        });
    },

    create: function(req, res){
        new Model({email: req.body.email}).fetch().then(function(users) {
            if(!users){
                var security = new Security(req.body.password);
                security.hash().then(function(){
                    var model = new Model({email: req.body.email}).fetch();

                    model.then(function(){
                        var params = req.body;
                        params.password = security.hash;
                        params.timestamp = moment().format('x');
                        var signUpUser = new Model(params);

                        signUpUser.save().then(function(model) {
                            var user = model.toJSON();
                            var str = JSON.stringify({id: user.id, email: user.email, level: user.level, timestamp: moment().format('x')});
                            var token = jwt.sign(str, Config.secret, {});
                            res.send({token:token});
                        });
                    });
                });
            }else{
                res.send({token:'', email:'', msg: "User already exists"});
            }
        });
    },

    update: function(req, res){
        var model = new Model(req.body);
        model.save(function(err, data){
            if(err){
                res.send({error:err});
            }else{
                res.send(data);
            }
        });
    },

    del: function(req, res){
        Model.findOneAndRemove({_id: req.params.id}, function(err) {
              if(err){
                res.send({error: err});
            }else{
                res.send({});
            }
        });
    }
};

