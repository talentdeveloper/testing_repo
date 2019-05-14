var Router = require('blklab-server').Router;
var Controller = require('../controllers/users');

Router.post('/users/auth/login', Controller.login);

Router.get('/users/auth/logout', Controller.logout);

Router.get('/users/auth/token', Controller.getToken);

Router.post('/users/auth/premium', Controller.becomePremium, true);

Router.post('/users/auth/cancel', Controller.cancelPremium, true);

Router.post('/users/reset', Controller.reset);

Router.post('/users/send-reset', Controller.sendRecover);

Router.get('/users', Controller.find, true);

Router.get('/users/profile', Controller.profile, true);

Router.get('/users/:id', Controller.findById, true);

Router.post('/users', Controller.create);

Router.put('/users/:id', Controller.update, true);

Router.del('/users/:id', Controller.del, true);
