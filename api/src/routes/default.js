var Router = require('blklab-server').Router;
var Security = require('../lib/security');
var fs = require('fs');
var url = require('url');
var MySQL = require('mysql');
var DB = require('../lib/mysql_conn').Connection;

Router.get('/', function(req, res) {
	res.send("{'api': 'v0.0.1'}");
});

Router.get('/filters', function(req, res) {

	var company_sql = [
		'Select',
		'tbl_client_segment_ytd.ID As id,',
		'tbl_client_segment_ytd.Name As name,',
		'tbl_client_segment_ytd.Prev_YE_Spec_Code,',
		'tbl_period.Most_Recent_Period',
		'From',
		'tbl_client_segment_ytd Inner Join',
		'tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period',
		'Where',
		'tbl_client_segment_ytd.Asset_Total_EA > 0 And',
		'tbl_period.Most_Recent_Period = 1',
		'Order By',
		'tbl_client_segment_ytd.Name',
	].join(' ');

	var screen_sql = [
		'select rank, id, Screen_description from admin_tbl_screens order by rank asc'
	].join(' ');

	var segment_sql = [
		'select id, segment, userid from tbl_segment WHERE USERID=1 order by segment asc'
	].join(' ');

	var indSegment_sql = [
		'select id, segment, userid from tbl_segment WHERE USERID=1 order by segment asc'
	].join(' ');

	var run = function(user_id) {
		DB.query(company_sql, function(err, companies) {
			DB.query(screen_sql, function(err, screens) {
				DB.query(segment_sql, [user_id], function(err, segments) {
					DB.query(indSegment_sql, [user_id], function(err, indSegments) {
						res.send({
							companies: companies,
							screens: screens,
							segments: segments,
							indSegments: indSegments,
						});
					});
				});
			});
		});
	};
console.log(req.headers);
	Security.verify(req.headers['x-access-token']).then(function(user) {	
		segment_sql = [
			'select distinct tbl_segment.id as id, tbl_segment.segment as segment, tbl.segment.userid as userid from tbl_segment inner join tbl_segment_client on tbl_segment.id = tbl_segment_client.id_segment WHERE (tbl_segment.USERID=1 OR tbl_segment.USERID=?) and tbl_segment_client.id_client = 1951350 order by tbl_segment.segment, USERID asc'
		].join(' ');

		indSegment_sql = [
			'select id, segment, userid as userId from tbl_segment WHERE (tbl_segment.USERID=1 OR tbl_segment.USERID=?) order by tbl_segment.segment, USERID asc'
		].join(' ');
console.log(segment_sql);
		run(user.id);

	}, function() {
		run();
	});

});
