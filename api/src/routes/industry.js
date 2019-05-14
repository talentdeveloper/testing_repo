var Router = require('blklab-server').Router;
var Controller = require('../controllers/industry');

Router.get('/industry/report-card/segment/:id', Controller.findSegmentById);

Router.get('/industry/segment/screen', Controller.findSegmentScreen);

Router.get('/individual/reportcard/:segment', Controller.showPeers);

Router.get('/industry', Controller.find, true);

Router.get('/industry/companies', Controller.findCompanies,true);

Router.get('/industry/segmentCompanies/:segment', Controller.findSegmentCompanies, true);

Router.get('/industry/test', Controller.testRun);

Router.get('/industry/:id', Controller.findById, true);

//Router.get('/industry/report-card/segment/:id', Controller.findSegmentById, true);

Router.get('/industry/reportcardfilter/:segment', Controller.filterSegmentInd);
Router.get('/industry/reportcardfilterauth/:segment', Controller.filterSegmentInd,true);

Router.get('/industry/segment/screen', Controller.findSegmentScreen, true);

Router.post('/industry/segment', Controller.createSegment, true);

Router.post('/industry/editSegment', Controller.editSegment, true);


