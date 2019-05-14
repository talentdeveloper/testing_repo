var fs = require('fs');
var sys = require('sys');
var Security = require('../lib/security');
var Config = require('../config/config');
var jwt    = require('jsonwebtoken');
var moment = require('moment');
var uuid = require('uuid');
var MySQL = require('mysql');
var Model = require('../models/perspectives');

var internals = {};

exports = module.exports = internals.PerspectivesController = {
    find: function(req, res){
        if(req.querystring.all == "true"){
            Model.fetchAll().then(function(data){
                res.send(data.toJSON());
            });
        }else{
            var model = new Model();
            if(req.querystring.segment > 0){
                model.where('segment', '=', req.querystring.segment);
            }

            if(req.querystring.company > 0 && req.querystring.screen > 0){
                model.where('company', '=', req.querystring.company, 'OR', 'screen', '=', req.querystring.screen);
            }

            if(req.querystring.company > 0){
                model.where('company', '=', req.querystring.company);
            }

            if(req.querystring.screen > 0){
                model.where('screen', '=', req.querystring.screen);
            }

            model.orderBy('timestamp', 'ASC').fetch().then(function(data){
                if(data){
                    var d = data.toJSON();
                    if(!Array.isArray(d)){
                        d = [d];
                    }
                    res.send(d);
                }else{
                    res.send([]);
                }
            });
        }


    },

    findById: function(req, res){
        new Model({id: req.params.id}).fetch().then(function(data) {
            res.send(data.toJSON());
        });
    },

    create: function(req, res){
        new Model({title: req.body.title}).fetch().then(function(users) {
            if(!users){
                console.log(req.body.title);
                var params = req.body;
                var signUpUser = new Model(params);

                signUpUser.save().then(function(model) {
                    res.send({resp: 1});
                });
            }else{
                res.send({});
            }
        });
    },

    update: function(req, res){
        new Model({id: req.params.id}).fetch().then(function(users) {
            var params = req.body;
            var signUpUser = new Model(params);

            signUpUser.save().then(function(model) {
                res.send({resp: 1});
            });
        });
    },

    del: function(req, res){
        new Model({id: req.params.id}).destroy().then(function(data) {
            res.send(data.toJSON());
        });
    }
};

