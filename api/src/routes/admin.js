var Router = require('blklab-server').Router;
var Controller = require('../controllers/admin');

Router.get('/admin/security', Controller.security, true);

Router.put('/admin/security/:id', Controller.updateSecurity, true);
