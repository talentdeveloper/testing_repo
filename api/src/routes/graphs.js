var Router = require('blklab-server').Router;
var Controller = require('../controllers/graphs');

Router.get('/graphs/industry/line', Controller.industryLine, true);

Router.get('/graphs/industry/bar-line', Controller.industryBarLine, true);

Router.get('/graphs/industry/xy', Controller.industryXY, true);

Router.get('/graphs/industry/xy/pct', Controller.industryXYPCT, true);

Router.get('/graphs/industry/bar', Controller.industryBar, true);

Router.get('/graphs/individual/line', Controller.individualLine, true);

Router.get('/graphs/individual/bar', Controller.individualBar, true);

Router.get('/graphs/individual/xy', Controller.individualXY, true);

Router.get('/graphs/individual/xy/pct', Controller.individualXYPCT, true);

Router.get('/graphs/individual/spider', Controller.individualSpider, true);
