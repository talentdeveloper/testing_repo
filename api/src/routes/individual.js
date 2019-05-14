var Router = require('blklab-server').Router;
var Controller = require('../controllers/individual');

Router.get('/individual', Controller.find, true);

Router.get('/individual/:id', Controller.findById, true);

Router.get('/individual/report-card/:id', Controller.findById, true);

Router.get('/individual/reportcard/:segment', Controller.showPeers);

Router.get('/individual/companysegments/:company', Controller.filterSegment);
Router.get('/individual/companysegmentsauth/:company', Controller.filterSegment,true);

Router.get('/individual/segment/screen', Controller.detailedMetrics, true);

Router.get('/individual/assessment/sp', Controller.assessmentSP, true);

Router.get('/individual/assessment/peers', Controller.assessmentPeers, true);

Router.get('/individual/assessment/assumptions', Controller.assessmentAssumptions, true);

Router.get('/individual/assessment/percentile', Controller.assessmentPercentile, true);

Router.get('/individual/assessment/tradeoff', Controller.assessmentTradeoff, true);

Router.get('/individual/assessment/vco-fgv', Controller.assessmentVCO_FGV, true);

Router.get('/individual/scenario/forecast', Controller.forecast, true);

Router.get('/individual/scenario/sliders', Controller.sliders, true);


