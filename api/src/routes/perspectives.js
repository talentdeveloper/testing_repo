var Router = require('blklab-server').Router;
var Controller = require('../controllers/perspectives');

Router.get('/perspectives', Controller.find);

Router.get('/perspectives/:id', Controller.findById);

Router.post('/perspectives', Controller.create);

Router.put('/perspectives/:id', Controller.update);

Router.del('/perspectives/:id', Controller.del);
