var sys = require('sys');
var Security = require('../lib/security');
var Config = require('../config/config');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var uuid = require('uuid');
var MySQL = require('mysql');
var DB = require('../lib/mysql_conn').Connection;
var opportunity_assessment_co_valuation = require('../lib/opportunity_assessment_co_valuation');
var Model = require('../models/users');

var internals = {};


exports = module.exports = internals.IndividualController = {
	find: function(req, res) {
		res.send({});
	},

	showPeers: function(req, res) {
		//////console.log("FG");
		var segment = req.params.segment;

		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");
		////////console.log(isAdmin);
		DB.query(isAdmin, function(err1, r) {
			if (r) {
				var userid = r[0].USERID;
				if (userid == 1) {
					var segment_sql = [
						'select',
						'tbl_client_segment_ytd.name,',
						'tbl_segment.segment',
						'from',
						'tbl_client_segment_ytd inner join',
						'tbl_segment on tbl_client_segment_ytd.prev_ye_spec_code = tbl_segment.id inner join',
						'tbl_period on tbl_period.current_period = tbl_Client_Segment_YTD.Period',
						'where',
						'tbl_segment.id = ' + segment + ' and',
						'tbl_period.most_recent_period = 1',
						'order by tbl_client_segment_ytd.name asc'
					].join(' ');
				} else {
					var segment_sql = [
						'select',
						'tbl_client_segment_ytd.name,',
						'tbl_segment.segment',
						'from',
						'tbl_client_segment_ytd inner join',
						'tbl_segment_client on tbl_client_segment_ytd.id = tbl_segment_client.id_client inner join',
						'tbl_period on tbl_period.Current_Period = tbl_client_segment_ytd.period inner join',
						'tbl_segment on tbl_segment_client.id_segment = tbl_segment.id ',
						'where',
						'tbl_segment.id = ' + segment + ' and',
						'tbl_period.Most_Recent_Period = 1',
						'order by tbl_client_segment_ytd.name asc'
					].join(' ');
					////////console.log(segment_sql);
				}
			} else {
				var segment_sql = [
					'select',
					'tbl_client_segment_ytd.name,',
					'tbl_segment.segment',
					'from',
					'tbl_client_segment_ytd inner join',
					'tbl_segment on tbl_client_segment_ytd.prev_ye_spec_code = tbl_segment.id inner join',
					'tbl_period on tbl_period.current_period = tbl_Client_Segment_YTD.Period',
					'where',
					'tbl_segment.id = ' + segment + ' and',
					'tbl_period.most_recent_period = 1',
					'order by tbl_client_segment_ytd.name asc'
				].join(' ');
			}

			DB.query(segment_sql, function(err, data) {
				var rows = {};
				data.forEach(function(row) {
						for (var key in row) {
							if (!rows[key]) {
								rows[key] = [];
							}
							rows[key].push(row[key]);
						}
					})
					////////console.log(rows);
				res.send([{
					rows: rows
				}]);
			});


		});
	},

	filterSegment: function(req, res) {

		var company = req.params.company;
		var userId = req.auth_id;
	
		if (userId==null) {
			var segmentSql = [
				'select distinct',
				'tbl_segment.id as id,',
				'tbl_segment.userid as userId,',
				'tbl_segment.segment as segment',
				'from tbl_segment inner join',
				'tbl_segment_client on tbl_segment.id = tbl_segment_client.id_segment',
				'WHERE (tbl_segment.USERID=1) and',
				'tbl_segment_client.id_client =' + company + ' ',
				'order by tbl_segment.segment, USERID asc'
			].join(' ');

		} else {
			var segmentSql = [
				'select distinct',
				'tbl_segment.id as id,',
				'tbl_segment.userid as userId,',
				'tbl_segment.segment as segment',
				'from tbl_segment inner join',
				'tbl_segment_client on tbl_segment.id = tbl_segment_client.id_segment',
				'WHERE (tbl_segment.USERID=1 OR tbl_segment.USERID=' + userId + ') and',
				'tbl_segment_client.id_client =' + company + ' ',
				'order by tbl_segment.segment, USERID asc'
			].join(' ');
		}


		
		DB.query(segmentSql, function(err, data) {
			var rows = {};
			data.forEach(function(row) {
				for (var key in row) {
					if (!rows[key]) {
						rows[key] = [];
					}
					rows[key].push(row[key]);
				}
			})

			////////console.log(rows);
			var segments = {};
			segments = rows;
			////////console.log(segments);
			res.send(segments);
		});
	},

	findById: function(req, res) {
		var metric = req.querystring.metric;
		var segment = req.querystring.segment;
		
		var company = req.params.id;
		console.log("company: "+company+" segment: "+segment+" metric: "+metric);
		////////console.log("segment="+segment);
		if (segment == "null" || !segment) {
			segment = "(select tbl_client_segment_ytd.Prev_YE_Spec_Code from tbl_client_segment_ytd inner join tbl_period on tbl_period.current_period = tbl_client_segment_ytd.period where tbl_client_segment_ytd.id =" + company + " AND tbl_period.last_10_years = 1)";
		}
		var report_card_sql = [
			'Select distinct',
			'tbl_metrics.Metric_Name As Metric_Name,',
			'tbl_metrics.Metric As Metric,',
			'round(tbl_roe_analysis_ltm.Value*100,2) As Value,',
			'If(tbl_metrics.Higher_Good_or_Bad = 0, 1-tbl_roe_analysis_ltm_pct.Value, tbl_roe_analysis_ltm_pct.Value) As PCT_Value,',
			'tbl_metrics.Higher_Good_or_Bad AS Higher_Good_or_Bad,',
			'tbl_metrics.Format As Format,',
			'tbl_segment.id as segmentId,',
			'tbl_segment.segment as segment',
			'From',
			'tbl_client_segment_ytd Inner Join',
			'tbl_period On tbl_client_segment_ytd.Period = tbl_period.Current_Period',
			'Inner Join',
			'tbl_segment on tbl_Segment.id = tbl_client_segment_ytd.Prev_YE_Spec_Code',
			'inner join',
			'tbl_roe_analysis_ltm_pct On tbl_roe_analysis_ltm_pct.Period =',
			'tbl_period.Current_Period And tbl_roe_analysis_ltm_pct.ID =',
			'tbl_client_segment_ytd.ID Inner Join',
			'tbl_roe_analysis_ltm On tbl_roe_analysis_ltm.ID = tbl_client_segment_ytd.ID',
			'And tbl_roe_analysis_ltm.Period = tbl_period.Current_Period Inner Join',
			'tbl_metrics On tbl_metrics.Metric = tbl_roe_analysis_ltm_pct.Metric And',
			'tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric',
			'Where',
			'tbl_client_segment_ytd.ID = "' + company + '" And',
			'tbl_metrics.metric ="' + metric + '" AND',
			'tbl_period.Last_10_Years = 1',
			'Order By',
			'tbl_period.Last_10_Years Desc;'
		].join(' ');


		var customReportSQL = [
			'Select distinct',
			'tbl_client_segment_ytd.id As companyId,',
			'tbl_metrics.Metric_Name As Metric_Name,',
			'tbl_metrics.Metric As Metric,',
			'round(tbl_roe_analysis_ltm.Value*100,2) As Value,',
			'tbl_metrics.Higher_Good_or_Bad AS Higher_Good_or_Bad,',
			'tbl_metrics.Format As Format,',
			'tbl_segment.id as segmentId,',
			'tbl_segment.segment as segment',
			'From',
			'tbl_client_segment_ytd Inner Join',
			'tbl_period On tbl_client_segment_ytd.Period = tbl_period.Current_Period',
			'Inner Join',
			'tbl_segment_client on tbl_client_segment_ytd.id = tbl_segment_client.id_client inner join',
			'tbl_segment on tbl_Segment.id = tbl_segment_client.id_segment',
			'inner join',
			'tbl_roe_analysis_ltm On tbl_roe_analysis_ltm.ID = tbl_client_segment_ytd.ID',
			'And tbl_roe_analysis_ltm.Period = tbl_period.Current_Period Inner Join',
			'tbl_metrics On tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric',
			'Where',
			'tbl_segment.ID = ' + segment + ' And',
			'tbl_metrics.metric ="' + metric + '" AND',
			'tbl_period.Last_10_Years = 1',
			'Order By',
			'tbl_roe_analysis_ltm.value;'
		].join(' ');

		console.log(customReportSQL);

		DB.query(report_card_sql, function(err, data) {
			var rows = {};
			console.log("fergus"+company);
			console.log(data);
			DB.query(customReportSQL, function(err, customData) {
				console.log("fergus_cusotmdata"+company);
				console.log(customData);
				console.log("data: "+data);
				if (!data || data == null ||typeof data == 'undefined' || !customData || typeof customData == 'undefined' || data.length == 0 || customData.length == 0) {
					res.send([{
						Metric: '',
						Metric_Name: '',
						Value: 0,
						PCT_val: 0,
						PCT: 0,
						colors: "#e2e2e4",
						format: ''
					}, {
						Metric: '',
						Metric_Name: '',
						Value: 0,
						PCT_val: 0,
						PCT: 0,
						colors: "#e2e2e4",
						format: ''
					}]);
				} else {


					data.forEach(function(row) {
						for (var key in row) {
							if (!rows[key]) {
								rows[key] = [];
							}
							rows[key].push(row[key]);
						}
					})

					var customRows = {};
					customData.forEach(function(row) {
						for (var key in row) {
							if (!customRows[key]) {
								customRows[key] = [];
							}
							customRows[key].push(row[key]);
						}
					})

					var metricLen = rows.Metric.length;
					var customRowsLen = customRows.Metric.length;
					////////console.log(metricLen);
					////////console.log(customRowsLen);

					var qtl = {};
					qtl['metric'] = [];
					qtl['pct'] = [];

					var segPctCalc = {};
					segPctCalc.companyId = [];
					segPctCalc.metric = [];
					segPctCalc.metricName = [];
					segPctCalc.format = [];
					segPctCalc.higherGoodOrBad = [];
					segPctCalc.value = [];
					segPctCalc.rank = [];
					segPctCalc.pct = [];
					segPctCalc.segId = [];
					segPctCalc.segDesc = [];


					for (a = 0; a < metricLen; a++) {


						for (b = 0; b < customRowsLen; b++) {
							if (customRows.Metric[b] == rows.Metric[a]) {
								segPctCalc.companyId.push(customRows.companyId[b]);
								segPctCalc.metric.push(rows.Metric[a]);
								segPctCalc.metricName.push(customRows.Metric_Name[b]);
								segPctCalc.format.push(customRows.Format[b]);
								segPctCalc.higherGoodOrBad.push(customRows.Higher_Good_or_Bad[b]);
								segPctCalc.value.push(customRows.Value[b]);
								segPctCalc.segId.push(customRows.segmentId[b]);
								segPctCalc.segDesc.push(customRows.segment[b]);
								segPctCalc.rank.push(b + 1);
							}
						}

						var segPctCalcLen = segPctCalc.companyId.length;

						for (c = 0; c < segPctCalcLen; c++) {
							segPctCalc.pct.push(1 - ((segPctCalc.rank[c] - 1) / (segPctCalcLen - 1)));
							if (segPctCalc.companyId[c] == company) {
								qtl.metric.push(segPctCalc.metric[c]);
								qtl.pct.push(segPctCalc.pct[c]);
								if (segPctCalc.higherGoodOrBad[c] == 1) {
									rows.PCT_Value[0] = segPctCalc.pct[c];
								} else {
									rows.PCT_Value[0] = 1 - segPctCalc.pct[c];
								}
								rows.segmentId[0] = segPctCalc.segId[c];
								rows.segment[0] = segPctCalc.segDesc[c];
								break;
							}
						}


						////////console.log(segPctCalc);
						////////console.log(qtl);
					}
					////////console.log(rows)
					////////console.log(segPctCalc);

					if (rows.Metric) {
						var ROAE = rows.Metric.indexOf('ROAE');
						var KE = rows.Metric.indexOf('Cost_of_Capital');

						////////console.log(rows.Value[ROAE]);
						////////console.log(rows.Value[KE]);

						rows.Metric.push('Spread');
						rows.Metric_Name.push('Spread');
						rows.Value.push(parseFloat(rows.Value[ROAE]) - parseFloat(rows.Value[KE]));
						rows.PCT_Value.push((parseFloat(rows.PCT_Value[ROAE]) + parseFloat(rows.PCT_Value[KE])) / 2);
						rows.Format.push('%');

						var key = rows.Metric.indexOf(metric);
						if (metric == "Total_Asset_Growth_Rate") {
							rows.Value[key] = rows.Value[key] - 100;
						}

						if (metric == "Leverage") {
							rows.Value[key] = rows.Value[key] / 100;
							rows.Format[key] = '%';
						}

						var pct = rows.PCT_Value[key];
						var pct_white = 1 - pct;
						var color;

						if (pct < 0.25) {
							color = "#e2e2e4";
						} else if (pct < 0.5) {
							color = "Orange";
						} else if (pct < 0.75) {
							color = "LightGreen";
						} else {
							color = "Green";
						}
						var color_white;
						if (pct < 0.25) {
							color_white = "Red";
						} else {
							color_white = "#e2e2e4";
						}
						//f(rows.Value[rows.Value.length - 1]);
						res.send([{
							Metric: rows.Metric[key],
							Metric_Name: rows.Metric_Name[key],
							Value: rows.Value[key],
							PCT_val: pct_white,
							PCT: pct_white,
							colors: color_white,
							format: rows.Format[key],
							segmentId: rows.segmentId[key],
							segment: rows.segment[key]
						}, {
							Metric: rows.Metric[key],
							Metric_Name: rows.Metric_Name[key],
							Value: rows.Value[key],
							PCT_val: rows.PCT_Value[key],
							PCT: rows.PCT_Value[key],
							colors: color,
							format: rows.Format[key],
							segmentId: rows.segmentId[key],
							segment: rows.segment[key]
						}]);
					} else {
						res.send([{
							Metric: '',
							Metric_Name: '',
							Value: 0,
							PCT_val: 0,
							PCT: 0,
							colors: "#e2e2e4",
							format: ''
						}, {
							Metric: '',
							Metric_Name: '',
							Value: 0,
							PCT_val: 0,
							PCT: 0,
							colors: "#e2e2e4",
							format: ''
						}]);
					}
				}

			});

		});
	},

	detailedMetrics: function(req, res) {

		var screen = req.querystring.screen;
		var company = req.querystring.company;
		var segment = req.querystring.segment;
		var metric_code = req.querystring.metric_code || 'TR';
		//var segment = 8;
		////////console.log(segment);
		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {
			if (r) {
				var userid = r[0].USERID;
				if (userid == 1) {
					internals.IndividualController.prepopDetailedMetrics(req, res);
				} else {
					internals.IndividualController.realTimeDetailedMetrics(req, res);
				}
			} else {
				internals.IndividualController.prepopDetailedMetrics(req, res);
			}
		});

	},

	realTimeDetailedMetrics: function(req, res) {
		var segment = req.querystring.segment;
		var screen = req.querystring.screen;
		var company = req.querystring.company;
		var metric_code = req.querystring.metric_code || 'TR';

		var query = [
			"Select",
			"tbl_client_segment_ytd.name,",
			"tbl_segment_client.id,",
			"tbl_segment_client.id_segment,",
			"tbl_segment_client.id_client,",
			"tbl_period.last_10_years,",
			"tbl_roe_analysis_ltm.value,",
			"tbl_metrics.metric_name,",
			"tbl_metrics.id As metricid,",
			"tbl_metrics.Metric As metric,",
			"tbl_metrics.Format As format,",
			"Concat(LPAD(tbl_screen_metrics.rank,5,'0'),'-',LPAD(tbl_screen_metrics.id,5,'0')) as screen_metric_id,",
			"tbl_screen_metrics.level,",
			"tbl_screen_metrics.rank,",
			"tbl_screen_metrics.id_screen,",
			"tbl_metrics.higher_good_or_bad,",
			"tbl_period.Current_Period As period,",
			"tbl_period.Current_Period_Name As period_name",
			"From",
			"admin_tbl_users Inner Join",
			"tbl_segment",
			"On admin_tbl_users.id = tbl_segment.USERID Inner Join",
			"tbl_segment_client",
			"On tbl_segment.ID = tbl_segment_client.id_segment Inner Join",
			"tbl_client_segment_ytd",
			"On tbl_client_segment_ytd.ID = tbl_segment_client.id_client Inner Join",
			"tbl_period",
			"On tbl_period.Current_Period = tbl_client_segment_ytd.Period Inner Join",
			"tbl_roe_analysis_ltm",
			"On tbl_roe_analysis_ltm.Period = tbl_period.Current_Period And",
			"tbl_roe_analysis_ltm.ID = tbl_client_segment_ytd.ID And",
			"tbl_roe_analysis_ltm.ID = tbl_segment_client.id_client Inner Join",
			"tbl_metrics",
			"On tbl_roe_analysis_ltm.Metric = tbl_metrics.Metric Inner Join",
			"tbl_screen_metrics",
			"On tbl_metrics.ID = tbl_screen_metrics.id_metric",
			"Where",
			"tbl_segment.id = " + segment + " And",
			"tbl_period.Last_10_Years < 7 And",
			"tbl_screen_metrics.id_screen = " + screen + " And",
			"Case When",
			"tbl_segment.id = 11",
			"Then",
			"tbl_client_segment_ytd.State",
			"= (Select",
			"tbl_client_segment_ytd.State",
			"From",
			"tbl_client_segment_ytd Inner Join",
			"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period",
			"Where",
			"tbl_period.Most_Recent_Period = 11 And",
			"tbl_client_segment_ytd.ID = " + company + ") Else 1 = 1 End = True",
			"Order By",
			"rank,",
			"period desc,",
			"metric,",
			"value desc",
		].join(" ");

		DB.query(query, function(err, segment) {
			////////console.log(segment);
			var rows = {};
			if (segment && segment.length > 0) {
				////////console.log(segment);
				segment.forEach(function(row) {
					for (var key in row) {
						if (!rows[key]) {
							rows[key] = [];
						}
						rows[key].push(row[key]);
					}
				});
				////////console.log(rows.period.length);
				//get arrays of unique period and metrics
				var period_names = [];
				var period = {};
				var metric = {};
				var screen_metric_id = {};

				////////console.log(rows);

				period_names = rows['period_name'].reverse().filter(function(e, i, arr) {
					return arr.indexOf(e, i + 1) === -1;
				});
				period['period'] = rows['period'];
				metric['metric'] = rows['metric'];
				screen_metric_id['screen_metric_id'] = rows['screen_metric_id'];


				var pvals = Object.keys(period).map(function(key) {
					return period[key];
				});

				var mvals = Object.keys(metric).map(function(key) {
					return metric[key];
				});


				var svals = Object.keys(screen_metric_id).map(function(key) {
					return screen_metric_id[key];
				});

				////////console.log(svals);

				period = pvals[0].filter(function(e, i, arr) {
					return arr.indexOf(e, i + 1) === -1;
				});

				metric = mvals[0].filter(function(e, i, arr) {
					return arr.indexOf(e, i + 1) === -1;
				});

				screen_metric_id = svals[0].filter(function(e, i, arr) {
					return arr.indexOf(e, i + 1) === -1;
				});


				//set the limits of the foor loop to calculate percentile results
				var period_rows = Object.keys(period).length;
				var metric_rows = Object.keys(metric).length;
				var screen_metric_rows = Object.keys(screen_metric_id).length;

				var max = 0;

				Object.keys(rows).forEach(function(k) {
					max = max < rows[k].length ? rows[k].length : max;
				});
				var screen_rows = max;

				////////console.log(screen_rows);
				////////console.log(screen_metric_id);
				/*//////console.log('Rows');
	                //////console.log(rows);
	                //////console.log('');
	               */
				////////console.log(period);
				////////console.log('');
				////////console.log(metric);


				//function to calculate quartiles of result set

				var Quartile = function(arr, quart) {
					//var pos = (arr.length - 1) * quart;

					//////console.log(pos);
					//arr = arr.sort();
					/*arr = arr.sort(function(a, b) {
						return a - b;
					});

					var base = Math.floor(pos);

					//////console.log(base);
					var rest = pos - base;
					var baseVal=parseFloat(arr[base]).toFixed(2);
					var baseValPlus=parseFloat(arr[base+1]).toFixed(2);
					var odd = parseFloat((parseFloat(baseVal) + parseFloat(baseValPlus)) / 2).toFixed(2);

					if (rest > 0) {
						return (odd);
					} else {
						return (parseFloat(arr[base]).toFixed(2));
					}
				}; */
						if (arr.length == 0) {
							return 0;
						} else {
							if (quart > 0.5) {
								var quart1 = 1 - quart;
							} else {
								var quart1 = quart;
							}
							var len = arr.length - 1;
							var pos = arr.length * quart1;

							arr = arr.sort(function(a, b) {
								return a - b;
							});

							var base = Math.floor(pos) - 1;
							var rest = pos - base - 1;

							if (quart > 0.5) {
								////console.log(">half");
								var baseVal = parseFloat(arr[len - base]).toFixed(6);
								var baseValPlus = parseFloat(arr[len - base - 1]).toFixed(6);
								var odd = parseFloat(baseVal - (rest * (baseVal - baseValPlus))).toFixed(6);
							}

							if (quart < 0.5) {
								////console.log("<half");
								var baseVal = parseFloat(arr[base]).toFixed(6);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(6);
								var remainder = parseFloat(rest * (baseValPlus - baseVal)).toFixed(6);
								var odd = parseFloat(baseVal) + parseFloat(remainder);
							}

							if (quart == 0.5) {
								////console.log("half");
								var baseVal = parseFloat(arr[base]).toFixed(6);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(6);
								if (rest == 0) {
									var odd = (parseFloat(baseValPlus) + parseFloat(baseVal)) / 2;
								} else {
									var odd = baseValPlus;
								}
							}

							//console.log(arr);
							//console.log('qt' + quart);
							//console.log('pos' + pos);
							//console.log('base' + base);
							//console.log('baseVal' + baseVal);
							//console.log('baseValPlus' + baseValPlus);
							//console.log('rest' + rest);
							//console.log('odd' + odd);
							//console.log('even' + arr[base]);
							//console.log('rest' + rest);
							if (rest > 0) {
								return (odd);
							} else {
								return (odd);
							}
						}
					};

				var output_agg = {
					Name: [],
					id: [],
					id_segment: [],
					id_client: [],
					Last_10_Years: [],
					Value: [],
					Metric_Name: [],
					metric: [],
					metricid: [],
					screen_metric_id: [],
					Level: [],
					Rank: [],
					id_screen: [],
					Higher_Good_or_Bad: [],
					period: [],
					period_name: [],
					perf_rank: [],
					perf_count: [],
					pct: [],
					seg_0: [],
					seg_25: [],
					seg_50: [],
					seg_75: [],
					seg_100: [],
					format: []
				};
				for (i = 0; i < period_rows; i++) {
					for (j = 0; j < metric_rows; j++) {
						var rank = 1;
						var output = {
							Name: [],
							id: [],
							id_segment: [],
							id_client: [],
							Last_10_Years: [],
							Value: [],
							Metric_Name: [],
							metric: [],
							metricid: [],
							screen_metric_id: [],
							Level: [],
							Rank: [],
							id_screen: [],
							Higher_Good_or_Bad: [],
							period: [],
							period_name: [],
							perf_rank: [],
							perf_count: [],
							pct: [],
							seg_0: [],
							seg_25: [],
							seg_50: [],
							seg_75: [],
							seg_100: [],
							format: []
						};
						for (k = 0; k < screen_rows; k++) {
							if (rows['period'][k] == period[i]) {
								if (rows['screen_metric_id'][k] == screen_metric_id[j]) {
									if (rows['value'][k] != null && rows['value'][k] != 0) {
										output['Name'].push(rows['name'][k]);
										output['id'].push(rows['id'][k]);
										output['id_segment'].push(rows['id_segment'][k]);
										output['id_client'].push(rows['id_client'][k]);
										output['Last_10_Years'].push(rows['last_10_years'][k]);
										output['Value'].push(parseFloat(rows['value'][k]).toFixed(4));
										output['Metric_Name'].push(rows['metric_name'][k]);
										output['metric'].push(rows['metric'][k]);
										output['metricid'].push(rows['metricid'][k]);
										output['screen_metric_id'].push(rows['screen_metric_id'][k]);
										output['Level'].push(rows['level'][k]);
										output['Rank'].push(rows['rank'][k]);
										output['id_screen'].push(rows['id_screen'][k]);
										output['Higher_Good_or_Bad'].push(rows['higher_good_or_bad'][k]);
										output['period'].push(rows['period'][k]);
										output['period_name'].push(rows['period_name'][k]);
										output['perf_rank'].push(rank);
										output['perf_count'].push(0);
										output['format'].push(rows['format'][k]);
										rank += 1;
									}
								}
							}
						}

						//calc rows before the for loop

							var seg_0 = Quartile(output['Value'], 0);
							var seg_25 = Quartile(output['Value'], 0.25);
							var seg_50 = Quartile(output['Value'], 0.50);
							var seg_75 = Quartile(output['Value'], 0.75);
							var seg_100 = Quartile(output['Value'], 1);


						for (l = 0; l < (rank - 1); l++) {
							output['perf_count'][l] = rank - 1;

							var pct = 1 - ((output['perf_rank'][l] - 1) / (output['perf_count'][l] - 1));
							output['seg_0'][l] = seg_0;
							output['seg_25'][l] = seg_25;
							output['seg_50'][l] = seg_50;
							output['seg_75'][l] = seg_75;
							output['seg_100'][l] = seg_100;
							output['pct'][l] = pct;

							// //////console.log(output);	


							//append entire output to a master array before output gets destroyed.
							output_agg['Name'].push(output['Name'][l]);
							output_agg['id'].push(output['id'][l]);
							output_agg['id_segment'].push(output['id_segment'][l]);
							output_agg['id_client'].push(output['id_client'][l]);
							output_agg['Last_10_Years'].push(output['Last_10_Years'][l]);
							output_agg['Value'].push(output['Value'][l]);
							output_agg['Metric_Name'].push(output['Metric_Name'][l]);
							output_agg['metric'].push(output['metric'][l]);
							output_agg['metricid'].push(output['metricid'][l]);
							output_agg['screen_metric_id'].push(output['screen_metric_id'][l]);
							output_agg['Level'].push(output['Level'][l]);
							output_agg['Rank'].push(output['Rank'][l]);
							output_agg['id_screen'].push(output['id_screen'][l]);
							output_agg['Higher_Good_or_Bad'].push(output['Higher_Good_or_Bad'][l]);
							output_agg['period'].push(output['period'][l]);
							output_agg['period_name'].push(output['period_name'][l]);
							output_agg['perf_rank'].push(output['perf_rank'][l]);
							output_agg['perf_count'].push(output['perf_count'][l]);
							if (output['Higher_Good_or_Bad'][l] == 0) {
								output_agg['pct'].push(pct);
							} else {
								output_agg['pct'].push(1 - pct);
							}
							output_agg['format'].push(output['format'][l]);
							if (output['Higher_Good_or_Bad'][l] == 0) {
								output_agg['seg_75'].push(seg_75);
								output_agg['seg_25'].push(seg_25);
								output_agg['seg_0'].push(seg_100);
								output_agg['seg_100'].push(seg_0);
							} else {
								output_agg['seg_75'].push(seg_25);
								output_agg['seg_25'].push(seg_75);
								output_agg['seg_0'].push(seg_100);
								output_agg['seg_100'].push(seg_100);
							}
							output_agg['seg_50'].push(seg_50);
						}
					}
				}
				////////console.log(output_agg);
				////////console.log(output_agg.period.length);
				////////console.log(output_agg.Value.length);
				////////console.log(output_agg.pct.length);

				//var output_size = max(array_map('count', output_agg));
				//html += "<br>" + output_size;
				var inc = 0;

				var html = "";

				////////console.log(output_agg['period_name']);
				////////console.log(output_agg['Value']);
				////////console.log(output_agg['Metric_Name']);

				var o = {};

				output_agg.screen_metric_id.forEach(function(row, idx) {
					if (output_agg.id_client[idx] == company) {
						if (!o[row]) {
							o[row] = []
						}
						o[row].push({
							value: output_agg.Value[idx],
							period: output_agg.period[idx],
							metric: output_agg.metric[idx],
							metricid: output_agg.metricid[idx],
							period_name: output_agg.period_name[idx],
							format: output_agg.format[idx],
							pct: output_agg.pct[idx],
							metric_name: output_agg.Metric_Name[idx],
							seg_50: output_agg.seg_50[idx],
							seg_75: output_agg.seg_75[idx]
						});
					}
				});

				////////console.log(o);
				//	//////console.log(output_agg.id_client);



				/*

                        html += "<table id='segment_metrics' class='rolling' style='table-layout:fixed; border-collapse: collapse' width='99%' max-height='360px' align='center' cellpadding='1%' cellspacing='5%'>";

                        html += "<tbody align='center'  style='font-family: Arial; font-size: 10pt; color:black; background-color:#A9E2F3'>";
                        html += "<tr>";
                        html += "<th style='overflow:hidden; width:30%; border:1px solid white; border-left:none;'>Metric</th>";
                        html += "<th style='overflow:hidden; width:5%; border:1px solid white; border-left:none;'>Charts</th>";

                        period_result.forEach(function(row) {
                            html += "<th style='overflow:hidden; width:8%;border:1px solid white' >" + row['Current_Period_Name'] + "</th>";
                        });
                        html += "<th style='overflow:hidden; width:2%; background:#f9f8f6; border:0' ></th>";
                        html += "<th style='overflow:hidden; width:8%;border:1px solid white' >Median</th>";
                        html += "<th style='overflow:hidden; width:8%;border:1px solid white; border-right:none;' >75th Percentile</th>";
                        html += "</tr>";
                        html += "</tbody>";
                        html += "<tbody style='font-family: Arial; font-size: 9pt; color:black; background-color:White'>";
                            html += '<tr blklab-click="showGraphs" data-id="' + row["metric_id"] + '">';
                            html += "<td border='1' align='left' style='vertical-align: middle;overflow:hidden; width:20%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;' >" + row['Metric_Display'] + "</td>";
				*/
				html += "<div class=\"holder\" id=\"holder\">";

				html += "<table id='segment_metrics' class='rolling' style='table-layout:fixed; border-collapse: collapse' width='99%' max-height='360px' align='center' cellpadding='1%' cellspacing='5%'>";


				html += "<tbody align='center'  style='font-family: Arial; font-size: 10pt; color:black; background-color:#A9E2F3'>";
				html += "<tr>";
				html += "<th style='overflow:hidden; width:30%; border:1px solid white; border-left:none;'>Metric</th>";
				html += "<th style='overflow:hidden; width:5%; border:1px solid white; border-left:none;'>Charts</th>";
				period_names.forEach(function(nm) {
					html += "<th style='overflow:hidden; width:8%;border:1px solid white'>" + nm + "</th>";
				});
				html += "<th style='overflow:hidden; width:2%; background:#f9f8f6; border:0' ></th>";
				html += "<th style='overflow:hidden; width:8%;border:1px solid white' >Median</th>";
				html += "<th style='overflow:hidden; width:8%;border:1px solid white; border-right:none;' >75th Percentile</th>";

				html += "</tr>";
				html += "</tbody>";
				html += "<tbody style='font-family: Arial; font-size: 9pt; color:black; background-color:White'>";
				var plen = period_names.length;
				var text_color_X1 = "";
				var text_color_X2 = "";
				var cnter = 0;
				var l = (period_names.length);

				Object.keys(o).forEach(function(key) {
					html += '<tr blklab-click="showGraphs" data-id="' + o[key][0].metricid + '">"';
					html += "<td border='1' align='left' style='vertical-align: middle;overflow:hidden; width:20%; border-right:0px solid #999999;'>" + o[key][0].metric_name + "</td>";
					html += "<td border='1' align='center' style='vertical-align: middle;overflow:hidden; width:5%; border-right:0px solid #999999;' ><img HR WIDTH='25px' HR HEIGHT='25px' src='/assets/images/graph-view.png'> </td>";
					var cnter = 0;
					o[key].reverse().forEach(function(row) {
						var pct = row.pct;
						if (pct < .25) {
							text_color_X2 = "Red";
							text_color_X1 = "White";
						} else if (pct < .50) {
							text_color_X2 = "DarkOrange";
							text_color_X1 = "White";
						} else if (pct < .75) {
							text_color_X1 = "LightGreen";
							text_color_X2 = "White";
						} else {
							text_color_X1 = "DarkGreen";
							text_color_X2 = "White";
						}

						var val;
						var fmat = row.format;

						if (fmat == '$') {
							val = fmat + (parseFloat(row.value)).toFixed(2);
						} else if (fmat == '%') {
							val = (parseFloat(row.value) * 100).toFixed(1) + fmat;
						} else if (fmat == "#") {
							val = (parseFloat(row.value)).toFixed(2);
						}

						if (o[key].length == period.length) {
							/*
							                            html += "<td border='1' align='right' style='vertical-align: middle;overflow:hidden; padding-right: 5px; " + text_color_X6 + ";width:8%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;'>" + row['X6'] + "<span title = '" + (Math.round(row['X6_PCT'] * 100)) + "%'><span class='donut' data-peity ='{ " + '"fill": ["' + fill_color6 + '","' + text_color_X6 + '"]}' + "'>" + (1 - row['X6_PCT']) + "/1</span></span>" + "</td>";								
							*/
							html += "<td border='1' align='right' style='overflow:hidden; padding-right: 5px; color:black; border-right:1px solid #999999; 1px #cccccc; font-size:9pt;'>" + val + "<span class='donut' data-peity ='{ " + '"fill": ["' + text_color_X1 + '","' + text_color_X2 + '" ]}' + "'>" + pct + "/1</span></td>";
							cnter = period.length;
						} else {
							for (v = 0 + cnter; v < period.length; v++) {
								if (row.period == period[period.length - 1 - v]) {
									html += "<td border='1' align='right' style='overflow:hidden; padding-right: 5px; color:black; border-right:1px solid #999999; border-bottom:dashed 1px #cccccc; font-size:9pt;'>" + val + "<span class='donut' data-peity ='{ " + '"fill": ["' + text_color_X1 + '","' + text_color_X2 + '"]}' + "'>" + pct + "/1</span></td>";
									cnter++;
									break;
								} else {
									html += "<td border='1' align='right' style='overflow:hidden; padding-right: 5px; color:black; border-right:1px solid #999999; border-bottom:dashed 1px #cccccc;'font-size:9pt;>" + val + "<span class='donut' data-peity ='{ " + '"fill": ["' + text_color_X1 + '","' + text_color_X2 + '"]}' + "'>" + pct + "/1</span></td>";
									cnter++;
								}
							}
						}
					});

					var update = period.length - cnter;

					for (b = 0; b < update; b++) {
						html += "<td border='1' align='right' style='overflow:hidden; padding-right: 5px; " + text_color_X1 + "; border-right:1px solid #999999; border-bottom:dashed 1px #cccccc;'></td>";
					}

					var len = o[key].length - 1;
					////////console.log(len);
					var avg;
					var top25;
					var fmat = o[key][0].format;

					if (fmat == '$') {
						avg = fmat + (parseFloat(o[key][len].seg_50)).toFixed(2);
						top25 = fmat + (parseFloat(o[key][len].seg_75)).toFixed(2);
					} else if (fmat == '%') {
						avg = (parseFloat(o[key][len].seg_50) * 100).toFixed(1) + fmat;
						top25 = (parseFloat(o[key][len].seg_75) * 100).toFixed(1) + fmat;
					} else if (fmat == "#") {
						avg = (parseFloat(o[key][len].seg_50)).toFixed(2);
						top25 = (parseFloat(o[key][len].seg_75)).toFixed(2);
					}

					html += "<td border='1' align='right' style='overflow:hidden; background:#f9f8f6; width:2%;border:0'></td>";
					html += "<td border='1' align='right' style='overflow:hidden; padding-right: 5px;width:8%; border-right:1px solid #999999; border-bottom:dashed 1px #cccccc;'>" + avg + "</td>";
					html += "<td border='1' align='right' style='overflow:hidden; padding-right: 5px;width:8%; border-bottom:dashed 1px #cccccc;'>" + top25 + "</td>";
					html += "</tr>";
				});
				/*for(var v = 0; v < metric_rows; v++ ) {
				    html += "<tr>";
				    html += "<td border='1' align='left' style='overflow:hidden; padding-right: 5px;width:8%; border-right:1px solid #999999; border-bottom:dashed 1px #cccccc;'>" + metric[v] + "</td>";
				        var k = 0;
				        while(k < period_names.length){
				            cnter = k *  (period_names.length + v);
				            var pct = output_agg['pct'][cnter];
				            ////////console.log(pct);
				            if (pct <.25) {text_color_X1 = "color:Red" ;} else if(pct <.5) {text_color_X1 = "color:DarkOrange";} else if(pct <.75) {text_color_X1 = "color:#AEB404";}  else {text_color_X1 = "color:Green";};

				            var val;
				            var fmat = output_agg.format[cnter];

				            if(fmat == '$'){
				                val = fmat + (parseFloat(output_agg['Value'][cnter])).toFixed(2)
				            }else if(fmat == '%'){
				                val = (parseFloat(output_agg['Value'][cnter]) * 100).toFixed(2) + fmat
				            }else if(fmat == "#"){
				                val = (parseFloat(output_agg['Value'][cnter])).toFixed(2);
				            }
				            html += "<td border='1' align='right' style='overflow:hidden; padding-right: 5px;width:8%; " + text_color_X1 + "; border-right:1px solid #999999; border-bottom:dashed 1px #cccccc;'>" + val + "</td>";
				            k++;
				        }
				    html += "</tr>";
				}*/

				html += "</tbody>";
				html += "</table>";
				html += "</div>";
				res.send({
					html: html,
					segment: ""
				});
			} else {
				internals.IndividualController.prepopDetailedMetrics(req, res);
			}
		});
	},

	prepopDetailedMetrics: function(req, res) {
		var screen = req.querystring.screen;
		var company = req.querystring.company;
		var metric_code = req.querystring.metric_code || 'TR';

		var MYSQL = [

			'Select',
			'tbl_screens.ID as screen_id,',
			'tbl_roe_analysis_ye_matrix_pct_10.Metric,',
			'tbl_metrics.id as metric_id,',
			'tbl_metrics.metric_name as metric_name,',
			'tbl_screen_metrics.Rank,',
			'tbl_roe_analysis_ye_matrix_10.ID,',
			'tbl_metrics.Higher_Good_or_Bad AS Good_or_Bad,',
			'if(tbl_metrics.Higher_Good_or_Bad = 1, tbl_roe_analysis_ye_matrix_pct_10.1, 1 - tbl_roe_analysis_ye_matrix_pct_10.1) as X1_PCT,',
			'if(tbl_metrics.Higher_Good_or_Bad = 1, tbl_roe_analysis_ye_matrix_pct_10.2, 1 - tbl_roe_analysis_ye_matrix_pct_10.2) as X2_PCT,',
			'if(tbl_metrics.Higher_Good_or_Bad = 1, tbl_roe_analysis_ye_matrix_pct_10.3, 1 - tbl_roe_analysis_ye_matrix_pct_10.3) as X3_PCT,',
			'if(tbl_metrics.Higher_Good_or_Bad = 1, tbl_roe_analysis_ye_matrix_pct_10.4, 1 - tbl_roe_analysis_ye_matrix_pct_10.4) as X4_PCT,',
			'if(tbl_metrics.Higher_Good_or_Bad = 1, tbl_roe_analysis_ye_matrix_pct_10.5, 1 - tbl_roe_analysis_ye_matrix_pct_10.5) as X5_PCT,',
			'if(tbl_metrics.Higher_Good_or_Bad = 1, tbl_roe_analysis_ye_matrix_pct_10.6, 1 - tbl_roe_analysis_ye_matrix_pct_10.6) as X6_PCT,',
			'COALESCE(tbl_roe_analysis_ye_matrix_10.1,0) as value1,',
			'COALESCE(tbl_roe_analysis_ye_matrix_10.2,0) as value2,',
			'COALESCE(tbl_roe_analysis_ye_matrix_10.3,0) as value3,',
			'COALESCE(tbl_roe_analysis_ye_matrix_10.4,0) as value4,',
			'COALESCE(tbl_roe_analysis_ye_matrix_10.5,0) as value5,',
			'COALESCE(tbl_roe_analysis_ye_matrix_10.6,0) as value6,',

			'if(COALESCE(tbl_roe_analysis_ye_matrix_10.1,0) = 0,"N/A",',
			'If(tbl_metrics.Format = "%",',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.1 *100, 1), "% "),',
			'If(tbl_metrics.Format = "$",',
			'Concat("$", Format(tbl_roe_analysis_ye_matrix_10.1, 0)," "),',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.1, 2)," ")))) As X1,',

			'if(COALESCE(tbl_roe_analysis_ye_matrix_10.2,0) = 0,"N/A",',
			'If(tbl_metrics.Format = "%",',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.2 *100, 1), "% "),',
			'If(tbl_metrics.Format = "$",',
			'Concat("$", Format(tbl_roe_analysis_ye_matrix_10.2, 0)," "),',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.2, 2)," ")))) As X2,',

			'if(COALESCE(tbl_roe_analysis_ye_matrix_10.3,0) = 0,"N/A",',
			'If(tbl_metrics.Format = "%",',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.3 *100, 1), "% "),',
			'If(tbl_metrics.Format = "$",',
			'Concat("$", Format(tbl_roe_analysis_ye_matrix_10.3, 0)," "),',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.3, 2)," ")))) As X3,',

			'if(COALESCE(tbl_roe_analysis_ye_matrix_10.4,0) = 0,"N/A",',
			'If(tbl_metrics.Format = "%",',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.4 *100, 1), "% "),',
			'If(tbl_metrics.Format = "$",',
			'Concat("$", Format(tbl_roe_analysis_ye_matrix_10.4, 0)," "),',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.4, 2)," ")))) As X4,',

			'if(COALESCE(tbl_roe_analysis_ye_matrix_10.5,0) = 0,"N/A",',
			'If(tbl_metrics.Format = "%",',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.5 *100, 1), "% "),',
			'If(tbl_metrics.Format = "$",',
			'Concat("$", Format(tbl_roe_analysis_ye_matrix_10.5, 0)," "),',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.5, 2)," ")))) As X5,',

			'if(COALESCE(tbl_roe_analysis_ye_matrix_10.6,0) = 0,"N/A",',
			'If(tbl_metrics.Format = "%",',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.6 *100, 1), "% "),',
			'If(tbl_metrics.Format = "$",',
			'Concat("$", Format(tbl_roe_analysis_ye_matrix_10.6, 0)," "),',
			'Concat(Format(tbl_roe_analysis_ye_matrix_10.6, 2)," ")))) As X6,',

			'tbl_client_segment_ytd.Prev_YE_Spec_Code As Segment,',
			'tbl_segment.segment as SegmentDesc,',
			'tbl_client_segment_ytd.Period,',

			'if(COALESCE(tbl_roe_analysis_ltm_pct_segment.segmentrank_50,0) = 0,"N/A",',
			'If(tbl_metrics.Format = "%", Concat(Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_50 *',
			'100, 1), "%"),',
			'If(tbl_metrics.Format = "$", Concat("$",',
			'Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_50, 0)),',
			'Concat(Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_50, 2))',
			'))) As Avg,',

			'if(COALESCE(tbl_roe_analysis_ltm_pct_segment.segmentrank_75,0) = 0,"N/A",',
			'If(tbl_metrics.Format = "%", Concat(Format((If(tbl_metrics.Higher_Good_or_Bad = 0,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_75,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_25)) *',
			'100, 1), "%"),',

			'If(tbl_metrics.Format = "$", Concat("$",',
			'Format(If(tbl_metrics.Higher_Good_or_Bad = 0,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_75,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_25), 0)),',
			'Concat(Format(If(tbl_metrics.Higher_Good_or_Bad = 0,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_75,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_25), 2))',
			'))) As Top_25,',

			'If(tbl_metrics.Format = "%", Concat(Format((If(tbl_metrics.Higher_Good_or_Bad = 0,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_25,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_75)) *',
			'100, 1), "%"), ',
			'If(tbl_metrics.Format = "$", Concat("$",',
			'Format(If(tbl_metrics.Higher_Good_or_Bad = 0,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_25,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_75), 0)),',
			'Concat(Format(If(tbl_metrics.Higher_Good_or_Bad = 0,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_25,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_75), 2))',
			')) As Bottom_25,',
			'If(tbl_screen_metrics.Level = 1, tbl_metrics.Metric_Name,',
			'If(tbl_screen_metrics.Level = 2, Concat("&nbsp;&nbsp;-&nbsp;", tbl_metrics.Metric_Name),',
			'If(tbl_screen_metrics.Level = 3, Concat("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;", tbl_metrics.Metric_Name),',
			'Concat("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;", tbl_metrics.Metric_Name)))) As Metric_Display',

			'From',
			'tbl_screens Inner Join',
			'tbl_screen_metrics On tbl_screen_metrics.id_screen = tbl_screens.ID     Left Join',
			'tbl_metrics On tbl_metrics.ID = tbl_screen_metrics.id_metric Inner Join',
			'tbl_roe_analysis_ye_matrix_pct_10 On tbl_roe_analysis_ye_matrix_pct_10.Metric',
			'= tbl_metrics.Metric Inner Join',
			'tbl_roe_analysis_ye_matrix_10 On tbl_roe_analysis_ye_matrix_10.ID =',
			'tbl_roe_analysis_ye_matrix_pct_10.ID And',
			'tbl_roe_analysis_ye_matrix_10.Metric =',
			'tbl_roe_analysis_ye_matrix_pct_10.Metric And',
			'tbl_roe_analysis_ye_matrix_10.Metric = tbl_metrics.Metric Inner Join',
			'tbl_client_segment_ytd On tbl_client_segment_ytd.ID =',
			'tbl_roe_analysis_ye_matrix_pct_10.ID And tbl_client_segment_ytd.ID =',
			'tbl_roe_analysis_ye_matrix_10.ID Inner Join',
			'tbl_roe_analysis_ltm_pct_segment On tbl_roe_analysis_ltm_pct_segment.Segment =',
			'tbl_client_segment_ytd.Prev_YE_Spec_Code And',
			'tbl_roe_analysis_ltm_pct_segment.Metric = tbl_metrics.Metric Inner Join',
			'tbl_period',
			'On tbl_period.Current_Period = tbl_roe_analysis_ltm_pct_segment.Period And',
			'tbl_period.Current_Period = tbl_client_segment_ytd.Period Inner Join',
			'tbl_segment',
			'On tbl_segment.id = tbl_client_segment_ytd.Prev_YE_Spec_Code',
			'Where',
			'tbl_screens.ID = ' + screen + ' And',
			'tbl_roe_analysis_ye_matrix_10.ID = ' + company + ' And',
			'tbl_period.Most_Recent_Period = 1 order by tbl_screen_metrics.rank asc, tbl_roe_analysis_ye_matrix_10.1 DESC'

		].join(' ');

		var Metric_MYSQL = [
			'Select',
			'tbl_screens.ID,',
			'tbl_screen_metrics.id_metric,',
			'tbl_metrics.metric as Metric,',
			'tbl_metrics.Metric_Name as Metric_Name,',
			'tbl_screens.Rank',
			'From',
			'tbl_screen_metrics Inner Join',
			'tbl_screens On tbl_screens.ID = tbl_screen_metrics.id_screen Inner Join',
			'tbl_metrics On tbl_screen_metrics.id_metric = tbl_metrics.ID',
			'Where',
			'tbl_screens.ID = ' + screen + ' And',
			'tbl_screen_metrics.Rank = (Select',
			'Min(tbl_screen_metrics.Rank)',
			'From',
			'tbl_screen_metrics Inner Join',
			'tbl_screens On tbl_screens.ID = tbl_screen_metrics.id_screen',
			'Where',
			'tbl_screens.ID = ' + screen + ')'
		]


		var Period_MYSQL = [
			'Select',
			'tbl_period.Current_Period_Name AS Current_Period_Name',
			'From',
			'tbl_period',
			'Where',
			'tbl_period.Last_10_Years < 7',
			'Order By',
			'tbl_period.Last_10_Years Desc'
		].join(' ');

		var GRAPH_MYSQL = [
			'Select',
			'tbl_graphs.id as id,',
			'tbl_graphs.metric_id as metric_id,',
			'tbl_graphs.graph_type as graph_type,',
			'tbl_graphs.Graph_Name as graph_name,',
			'tbl_graphs.Rank as rank',
			'From',
			'tbl_graphs',
			'Where',
			'tbl_graphs.metric_id ="' + metric_code + '" Order By',
			'tbl_graphs.Rank'
		].join(' ');

		DB.query(MYSQL, function(err1, metric_result) {
			DB.query(Metric_MYSQL, function(err2, segment_details_result) {
				DB.query(Period_MYSQL, function(err3, period_result) {
					DB.query(GRAPH_MYSQL, function(err3, graph_result) {

						var text_color_X1;
						var text_color_X2;
						var text_color_X3;
						var text_color_X4;
						var text_color_X5;
						var text_color_X6;

						var html = "";
						html += "<div class=\"holder\" id=\"holder\">";

						html += "<table id='segment_metrics' class='rolling' style='table-layout:fixed; border-collapse: collapse' width='99%' max-height='360px' align='center' cellpadding='1%' cellspacing='5%'>";

						html += "<tbody align='center'  style='font-family: Arial; font-size: 10pt; color:black; background-color:#A9E2F3'>";
						html += "<tr>";
						html += "<th style='overflow:hidden; width:30%; border:1px solid white; border-left:none;'>Metric</th>";
						html += "<th style='overflow:hidden; width:5%; border:1px solid white; border-left:none;'>Charts</th>";

						period_result.forEach(function(row) {
							html += "<th style='overflow:hidden; width:8%;border:1px solid white' >" + row['Current_Period_Name'] + "</th>";
						});
						html += "<th style='overflow:hidden; width:2%; background:#f9f8f6; border:0' ></th>";
						html += "<th style='overflow:hidden; width:8%;border:1px solid white' >Median</th>";
						html += "<th style='overflow:hidden; width:8%;border:1px solid white; border-right:none;' >75th Percentile</th>";
						html += "</tr>";
						html += "</tbody>";
						html += "<tbody style='font-family: Arial; font-size: 9pt; color:black; background-color:White'>";

						metric_result.forEach(function(row) {
							row['Metric_Display'] = row["Metric_Display"].replace("&nbsp;", " ");
							////////console.log(row);
							if (row['value1'] == 0) {
								text_color_X1 = "#eeeeee";
								fill_color1 = "#eeeeee";
							} else if (row['X1_PCT'] < .25) {
								text_color_X1 = "#eeeeee";
								fill_color1 = "Red";
							} else if (row['X1_PCT'] < .5) {
								text_color_X1 = "#eeeeee";
								fill_color1 = "DarkOrange";
							} else if (row['X1_PCT'] < .75) {
								text_color_X1 = "LightGreen";
								fill_color1 = "#eeeeee";
							} else {
								text_color_X1 = "DarkGreen";
								fill_color1 = "#eeeeee";
							};
							if (row['value2'] == 0) {
								text_color_X2 = "#eeeeee";
								fill_color2 = "#eeeeee";
							} else if (row['X2_PCT'] < .25) {
								text_color_X2 = "#eeeeee";
								fill_color2 = "Red";
							} else if (row['X2_PCT'] < .5) {
								text_color_X2 = "#eeeeee";
								fill_color2 = "DarkOrange";
							} else if (row['X2_PCT'] < .75) {
								text_color_X2 = "LightGreen";
								fill_color2 = "#eeeeee";
							} else {
								text_color_X2 = "DarkGreen";
								fill_color2 = "#eeeeee";
							};
							if (row['value3'] == 0) {
								text_color_X3 = "#eeeeee";
								fill_color3 = "#eeeeee";
							} else if (row['X3_PCT'] < .25) {
								text_color_X3 = "#eeeeee";
								fill_color3 = "Red";
							} else if (row['X3_PCT'] < .5) {
								text_color_X3 = "#eeeeee";
								fill_color3 = "DarkOrange";
							} else if (row['X3_PCT'] < .75) {
								text_color_X3 = "LightGreen";
								fill_color3 = "#eeeeee";
							} else {
								text_color_X3 = "DarkGreen";
								fill_color3 = "#eeeeee";
							};
							if (row['value4'] == 0) {
								text_color_X4 = "#eeeeee";
								fill_color4 = "#eeeeee";
							} else if (row['X4_PCT'] < .25) {
								text_color_X4 = "#eeeeee";
								fill_color4 = "Red";
							} else if (row['X4_PCT'] < .5) {
								text_color_X4 = "#eeeeee";
								fill_color4 = "DarkOrange";
							} else if (row['X4_PCT'] < .75) {
								text_color_X4 = "LightGreen";
								fill_color4 = "#eeeeee";
							} else {
								text_color_X4 = "DarkGreen";
								fill_color4 = "#eeeeee";
							};
							if (row['value5'] == 0) {
								text_color_X5 = "#eeeeee";
								fill_color5 = "#eeeeee";
							} else if (row['X5_PCT'] < .25) {
								text_color_X5 = "#eeeeee";
								fill_color5 = "Red";
							} else if (row['X5_PCT'] < .5) {
								text_color_X5 = "#eeeeee";
								fill_color5 = "DarkOrange";
							} else if (row['X5_PCT'] < .75) {
								text_color_X5 = "LightGreen";
								fill_color5 = "#eeeeee";
							} else {
								text_color_X5 = "DarkGreen";
								fill_color5 = "#eeeeee";
							};
							if (row['value6'] == 0) {
								text_color_X6 = "#eeeeee";
								fill_color6 = "#eeeeee";
							} else if (row['X6_PCT'] < .25) {
								text_color_X6 = "#eeeeee";
								fill_color6 = "Red";
							} else if (row['X6_PCT'] < .5) {
								text_color_X6 = "#eeeeee";
								fill_color6 = "DarkOrange";
							} else if (row['X6_PCT'] < .75) {
								text_color_X6 = "LightGreen";
								fill_color6 = "#eeeeee";
							} else {
								text_color_X6 = "DarkGreen";
								fill_color6 = "#eeeeee";
							};


							html += '<tr blklab-click="showGraphs" data-id="' + row["metric_id"] + '">';
							html += "<td border='1' align='left' style='vertical-align: middle;overflow:hidden; width:20%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;' >" + row['Metric_Display'] + "</td>";
							html += "<td border='1' align='center' style='vertical-align: middle;overflow:hidden; width:5%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;' ><img HR WIDTH='25px' HR HEIGHT='25px' src='/assets/images/graph-view.png'> </td>";
							html += "<td border='1' align='right' style='vertical-align: middle;overflow:hidden; padding-right: 5px; " + text_color_X6 + ";width:8%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;'>" + row['X6'] + "<span title = '" + (Math.round(row['X6_PCT'] * 100)) + "%'><span class='donut' data-peity ='{ " + '"fill": ["' + fill_color6 + '","' + text_color_X6 + '"]}' + "'>" + (1 - row['X6_PCT']) + "/1</span></span>" + "</td>";
							html += "<td border='1' align='right' style='vertical-align: middle;overflow:hidden; padding-right: 5px;" + text_color_X5 + ";width:8%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;'>" + row['X5'] + "<span title = '" + (Math.round(row['X5_PCT'] * 100)) + "%'><span class='donut' data-peity ='{ " + '"fill": ["' + fill_color5 + '","' + text_color_X5 + '"]}' + "'>" + (1 - row['X5_PCT']) + "/1</span></span>" + "</td>";
							html += "<td border='1' align='right' style='vertical-align: middle;overflow:hidden; padding-right: 5px;" + text_color_X4 + ";width:8%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;'>" + row['X4'] + "<span title = '" + (Math.round(row['X4_PCT'] * 100)) + "%'><span class='donut' data-peity ='{ " + '"fill": ["' + fill_color4 + '","' + text_color_X4 + '"]}' + "'>" + (1 - row['X4_PCT']) + "/1</span></span>" + "</td>";
							html += "<td border='1' align='right' style='vertical-align: middle;overflow:hidden; padding-right: 5px;" + text_color_X3 + ";width:8%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;'>" + row['X3'] + "<span title = '" + (Math.round(row['X3_PCT'] * 100)) + "%'><span class='donut' data-peity ='{ " + '"fill": ["' + fill_color3 + '","' + text_color_X3 + '"]}' + "'>" + (1 - row['X3_PCT']) + "/1</span></span>" + "</td>";
							html += "<td border='1' align='right' style='vertical-align: middle;overflow:hidden; padding-right: 5px;" + text_color_X2 + ";width:8%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;'>" + row['X2'] + "<span title = '" + (Math.round(row['X2_PCT'] * 100)) + "%'><span class='donut' data-peity ='{ " + '"fill": ["' + fill_color2 + '","' + text_color_X2 + '"]}' + "'>" + (1 - row['X2_PCT']) + "/1</span></span>" + "</td>";
							html += "<td border='1' align='right' style='vertical-align: middle; overflow:hidden; padding-right: 5px;" + text_color_X1 + ";width:8%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;'>" + row['X1'] + "<span title = '" + (Math.round(row['X1_PCT'] * 100)) + "%'><span class='donut' data-peity ='{ " + '"fill": ["' + fill_color1 + '", "' + text_color_X1 + '"]}' + "'>" + (1 - row['X1_PCT']) + "/1</span></span>" + "</td>";
							html += "<td border='1' align='right' style='overflow:hidden; background:#f9f8f6; width:2%;border:0'></td>";
							html += "<td border='1' align='right' style='overflow:hidden; vertical-align: middle;padding-right: 35px;width:8%; border-right:0px solid #999999; border-bottom:dashed 0px #cccccc;'>" + row['Avg'] + "</td>";
							html += "<td border='1' align='right' style='overflow:hidden; vertical-align: middle;padding-right: 35px;width:8%; border-bottom:dashed 0px #cccccc;'>" + row['Top_25'] + "</td>";
							html += "</tr>";

						})

						html += "<tbody></table><div class='clear'></div></div>";
						////////console.log(html);
						res.send({
							html: html,
							segment: metric_result[0].Segment,
							segmentDesc: metric_result[0].SegmentDesc
						});

					});
				});
			});
		});
	},

	assessmentSP: function(req, res) {
		opportunity_assessment_co_valuation(req.querystring.company, function(rows) {
			var ret = [];
			var i = 0;
			var j = 5;

			while (i <= j) {
				ret.push({
					Company: rows.Name[0],
					Period: rows.Year[i],
					Share_Price: Math.round(rows.share_price[i] * 100) / 100
				})
				i++;
			}

			res.send(ret);
		})
	},

	assessmentAssumptions: function(req, res) {
		var company = req.querystring.company;

		var query = [
			"Select",
			"tbl_client_segment_ytd.Name,",
			"tbl_market_merge.Cost_of_Capital,",
			"(tbl_balance_sheet_ltm.Asset_Total_EA / tbl_balance_sheet_ltm1.Asset_Total_EA)",
			"- 1 As EA_Growth_Rate,",
			"tbl_roe_analysis_ltm_all.Total_Asset_Growth_Rate as total_asset_growth_rate,",
			"tbl_market_merge.Risk_Free_Rate,",
			"tbl_market_merge.Beta,",
			"tbl_market_merge.Equity_Risk_Premium,",
			"tbl_roe_analysis_ltm_all.Dividend_Payout,",
			"tbl_roe_analysis_ltm_all.ROAA,",
			"tbl_roe_analysis_ltm_all.Leverage,",
			"tbl_balance_sheet_ltm.ID,",
			"tbl_balance_sheet_ltm.Asset_Total_EA,",
			"tbl_balance_sheet_ltm.Assets_Total_Assets,",
			"(((tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity -",
			"tbl_balance_sheet_ltm1.Equity_Preferred_Stock) -",
			"(tbl_balance_sheet_ltm.Equity_Total_BHC_Equity -",
			"tbl_balance_sheet_ltm.Equity_Preferred_Stock) +",
			"(tbl_balance_sheet_ltm.Assets_Total_Assets * tbl_roe_analysis_ltm_all.ROAA) -",
			"((tbl_balance_sheet_ltm.Assets_Total_Assets * tbl_roe_analysis_ltm_all.ROAA) *",
			"tbl_roe_analysis_ltm_all.Dividend_Payout)) /",
			"(tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity -",
			"tbl_balance_sheet_ltm1.Equity_Preferred_Stock)) As Non_Equity_Growth_Rate,",
			"(tbl_balance_sheet_ltm.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm.equity_preferred_stock) as Equity_Total_BHC_Equity,",
			"(tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm1.equity_preferred_stock) as Prev_Equity_Total_BHC_Equity,",
			"((tbl_balance_sheet_ltm.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm.equity_preferred_stock) / (tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm1.equity_preferred_stock)) -1 as Equity_Growth,",
			"(tbl_market_merge.Closing *",
			"tbl_balance_sheet_ltm.Misc_Common_Shares_Outstanding) As Mkt_cap,",
			"tbl_balance_sheet_ltm.Misc_Common_Shares_Outstanding As Shares,",
			"(tbl_balance_sheet_ltm.Misc_Common_Shares_Outstanding/tbl_balance_sheet_ltm1.Misc_Common_Shares_Outstanding)-1 As Share_Growth_Rate,",
			"tbl_market_merge.Closing,",
			"Right(tbl_period.Current_Period_Name,4) as Year",
			"From",
			"tbl_period Inner Join",
			"tbl_roe_analysis_ltm_all On tbl_period.Current_Period =",
			"tbl_roe_analysis_ltm_all.Period Inner Join",
			"tbl_market_merge On tbl_market_merge.Period = tbl_period.Current_Period",
			"Inner Join",
			"tbl_segment On tbl_market_merge.segment = tbl_segment.ID And",
			"tbl_roe_analysis_ltm_all.Segment = tbl_segment.ID Inner Join",
			"tbl_client_segment_ytd On tbl_roe_analysis_ltm_all.ID =",
			"tbl_client_segment_ytd.ID And tbl_client_segment_ytd.Period =",
			"tbl_period.Current_Period And",
			"tbl_market_merge.ID = tbl_client_segment_ytd.ID Inner Join",
			"tbl_balance_sheet_ltm On tbl_balance_sheet_ltm.ID = tbl_client_segment_ytd.ID",
			"And tbl_balance_sheet_ltm.Period = tbl_period.Current_Period Inner Join",
			"tbl_balance_sheet_ltm tbl_balance_sheet_ltm1 On tbl_balance_sheet_ltm1.Period",
			"= tbl_period.Previous_Period_4 And tbl_balance_sheet_ltm1.ID =",
			"tbl_client_segment_ytd.ID",
			"Where",
			"tbl_period.Most_Recent_Period = 1 And",
			"tbl_client_segment_ytd.ID = " + company
		].join(" ");

		var query2 = [
			"Select",
			"round(tbl_roe_analysis_ltm_all.ROAA, 2) As ROAA,",
			"tbl_market_merge.Risk_Free_Rate,",
			"(tbl_balance_sheet_ltm.Asset_Total_EA / tbl_balance_sheet_ltm1.Asset_Total_EA)",
			"- 1 As EA_Growth_Rate,",
			"(((tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity -",
			"tbl_balance_sheet_ltm1.Equity_Preferred_Stock) -",
			"(tbl_balance_sheet_ltm.Equity_Total_BHC_Equity -",
			"tbl_balance_sheet_ltm.Equity_Preferred_Stock) +",
			"(tbl_balance_sheet_ltm.Assets_Total_Assets * tbl_roe_analysis_ltm_all.ROAA) -",
			"((tbl_balance_sheet_ltm.Assets_Total_Assets * tbl_roe_analysis_ltm_all.ROAA) *",
			"tbl_roe_analysis_ltm_all.Dividend_Payout)) /",
			"(tbl_balance_sheet_ltm1.Equity_Total_BHC_Equity -",
			"tbl_balance_sheet_ltm1.Equity_Preferred_Stock)) As Non_Equity_Growth_Rate,",
			"(tbl_balance_sheet_ltm.Misc_Common_Shares_Outstanding/tbl_balance_sheet_ltm1.Misc_Common_Shares_Outstanding)-1 As Share_Growth_Rate,",
			"tbl_market_merge.Beta,",
			"tbl_roe_analysis_ltm_all.Dividend_Payout,",
			"tbl_segment.segment as segmentDesc,",
			"tbl_period.Current_Period",

			"From",
			"tbl_period Inner Join",
			"tbl_roe_analysis_ltm_all On tbl_period.Current_Period =",
			"tbl_roe_analysis_ltm_all.Period Inner Join",
			"tbl_trs_required_for_top_quartile On tbl_trs_required_for_top_quartile.Period",
			"= tbl_period.Current_Period Inner Join",
			"tbl_market_merge On tbl_market_merge.Period = tbl_period.Current_Period",
			"Inner Join",
			"tbl_segment On tbl_market_merge.segment = tbl_segment.ID And",
			"tbl_trs_required_for_top_quartile.Segment = tbl_segment.ID And",
			"tbl_roe_analysis_ltm_all.Segment = tbl_segment.ID Inner Join",
			"tbl_client_segment_ytd On tbl_roe_analysis_ltm_all.ID =",
			"tbl_client_segment_ytd.ID And tbl_client_segment_ytd.Period =",
			"tbl_period.Current_Period And",
			"tbl_market_merge.ID = tbl_client_segment_ytd.ID Inner Join",
			"tbl_balance_sheet_ltm On tbl_balance_sheet_ltm.ID = tbl_client_segment_ytd.ID",
			"And tbl_balance_sheet_ltm.Period = tbl_period.Current_Period Inner Join",
			"tbl_balance_sheet_ltm tbl_balance_sheet_ltm1 On tbl_balance_sheet_ltm1.Period",
			"= tbl_period.Previous_Period_4 And tbl_balance_sheet_ltm1.ID =",
			"tbl_client_segment_ytd.ID",
			"Where",
			"tbl_period.Last_10_Years < 20 And",
			"tbl_client_segment_ytd.ID =" + company
		].join(' ');

		var rows = {};
		DB.query(query, function(err1, result) {
			DB.query(query2, function(err1, result2) {
				if (!err1) {
					if (result.length > 0) {
						result.forEach(function(row, idx) {
							Object.keys(row).forEach(function(key) {
								if (!rows[key]) {
									rows[key] = [];
								}
								rows[key].push(row[key]);
							});
						});

						var target_risk_free_increment = 0; // (target["Risk_Free_Rate"][0] - rows["Risk_Free_Rate"][0])/5;
						var target_Beta_increment = 0; //(target["Beta"][0] - rows["Beta"][0])/5;
						var target_roaa_increment = 0; //(target["ROAA"][0] - rows["ROAA"][0])/5;
						var target_dividend_increment = 0; //(target["Dividend_Payout"][0] - rows["Dividend_Payout"][0])/5;
						var target_growth_increment = 0; //(target["EA_Growth_Rate"][0] - rows["EA_Growth_Rate"][0])/5;
						var target_equity_growth_increment = 0; //(target["Non_Equity_Growth_Rate"][0] - rows["Non_Equity_Growth_Rate"][0])/5;
						var target_shares_growth_increment = 0; //(target["Share_Growth_Rate"][0] - rows["Share_Growth_Rate"][0])/5;

						// calculate the value

						var i = 0;
						var j = 5;

						rows["Year2"] = [];
						rows["Year2"].push(rows["Year"][i]);
						rows["NI"] = [];
						rows["NI"].push(rows["Assets_Total_Assets"][i] * rows["ROAA"][i]);
						rows["Dividends"] = [];
						rows["Dividends"].push(rows["NI"][i] * rows["Dividend_Payout"][i]);
						rows["Dividends_Per_Share"] = [];
						rows["Dividends_Per_Share"].push((rows["Dividends"][i] * 1000) / rows["Shares"][i]);
						rows["Equity_Change"] = [];
						rows["Equity_Change"].push(rows["Equity_Total_BHC_Equity"][i] - rows["Prev_Equity_Total_BHC_Equity"][i]);
						rows["Non_Op_Equity_Change"] = [];
						rows["Non_Op_Equity_Change"].push(-(rows["NI"][i] - rows["Dividends"][i] - rows["Equity_Change"][i]));
						rows["Non_Op_Equity_Change_Rate"] = [];
						rows["Non_Op_Equity_Change_Rate2"] = [];
						rows["Non_Op_Equity_Change_Rate"].push(rows["Non_Op_Equity_Change"][i] / rows["Prev_Equity_Total_BHC_Equity"][i]);
						rows["Non_Op_Equity_Change_Rate2"].push(Math.round(rows["Non_Op_Equity_Change"][i] / rows["Prev_Equity_Total_BHC_Equity"][i] * 100, 2));
						rows["Spread"] = [];
						rows["Spread"].push(((rows["ROAA"][i] * rows["Leverage"][i]) - rows["Cost_of_Capital"][i]));
						rows["EVA"] = [];
						rows["EVA"].push(rows["Equity_Total_BHC_Equity"][i] * rows["Spread"][i]);
						rows["NI_Growth"] = [];
						rows["NI_Growth"].push(0);
						rows["NI_Ann_Growth"] = [];
						rows["NI_Ann_Growth"].push(0);

						rows["EA_ASSET_RATIO"] = [];
						rows["EA_ASSET_RATIO"].push((rows["Assets_Total_Assets"][i] / rows["Asset_Total_EA"][i]));
						rows["Leverage_2"] = [];
						rows["Leverage_2"].push(rows["Assets_Total_Assets"][i] / rows["Equity_Total_BHC_Equity"][i]);
						rows["EA_Growth_Rate_100"] = [];
						rows["EA_Growth_Rate_100"].push(rows["EA_Growth_Rate"][i] * 100);
						rows["ROAE"] = [];
						rows["ROAE"].push(rows["NI"][i] / rows["Equity_Total_BHC_Equity"][i]);
						rows["ROAE2"] = [];
						rows["ROAE2"].push(rows["ROAA"][i] * rows["Leverage_2"][i]);
						rows["ROAA2"] = [];
						rows["ROAA2"].push(rows["ROAA"][i] * 100);

						while (i < j) {
							rows["Year2"].push(rows["Year"][i]++);
							rows["Share_Growth_Rate"].push(0) //rows["Share_Growth_Rate"][i]+target_shares_growth_increment);
							rows["Shares"].push(rows["Shares"][i] * (1 + (rows["Share_Growth_Rate"][i + 1])));
							rows["Leverage"].push(rows["Leverage"][i]);
							rows["Equity_Risk_Premium"].push(rows["Equity_Risk_Premium"][i]);
							rows["Dividend_Payout"].push(rows["Dividend_Payout"][i] + target_dividend_increment);
							rows["ROAA"].push(rows["ROAA"][i] + target_roaa_increment);
							rows["Risk_Free_Rate"].push(rows["Risk_Free_Rate"][i] + target_risk_free_increment);
							rows["Non_Op_Equity_Change_Rate"].push(rows["Non_Op_Equity_Change_Rate"][i] + target_equity_growth_increment);
							rows["Non_Op_Equity_Change_Rate2"].push(rows["Non_Op_Equity_Change_Rate"][i + 1] * 100);
							rows["ROAA2"].push(rows["ROAA"][i] * 100);
							rows["Beta"].push(rows["Beta"][i] + target_Beta_increment);
							rows["Cost_of_Capital"].push(rows["Risk_Free_Rate"][i + 1] + (rows["Beta"][i + 1] * rows["Equity_Risk_Premium"][i]));
							rows["EA_Growth_Rate"].push(rows["EA_Growth_Rate"][i] + target_growth_increment);
							rows["total_asset_growth_rate"].push(rows["total_asset_growth_rate"][i]);
							rows["Asset_Total_EA"].push((rows["Asset_Total_EA"][i] * (1 + rows["EA_Growth_Rate"][i])));
							rows["EA_ASSET_RATIO"].push((rows["Assets_Total_Assets"][i] / rows["Asset_Total_EA"][i]));
							rows["Assets_Total_Assets"].push(rows["Asset_Total_EA"][i + 1] * (1 + rows["total_asset_growth_rate"][i]));
							rows["NI"].push(rows["Assets_Total_Assets"][i + 1] * rows["ROAA"][i + 1]);
							rows["NI_Growth"].push(rows["NI"][i + 1] / rows["NI"][i] - 1);
							rows["NI_Ann_Growth"].push(Math.pow(rows["NI"][i + 1] / rows["NI"][0], 1 / (i + 1)) - 1);
							rows["Dividends"].push(rows["NI"][i + 1] * rows["Dividend_Payout"][i + 1]);
							rows["Dividends_Per_Share"].push((rows["Dividends"][i + 1] * 1000) / rows["Shares"][i + 1]);

							rows["Equity_Total_BHC_Equity"].push(rows["Equity_Total_BHC_Equity"][i] + rows["NI"][i + 1] - rows["Dividends"][i + 1] + (rows["Non_Op_Equity_Change_Rate"][i + 1] * rows["Equity_Total_BHC_Equity"][i]));
							rows["Non_Op_Equity_Change"].push((rows["Equity_Total_BHC_Equity"][i] * rows["Non_Op_Equity_Change_Rate"][i + 1]));
							rows["Equity_Growth"].push((rows["Equity_Total_BHC_Equity"][i + 1] / rows["Equity_Total_BHC_Equity"][i]) - 1);
							rows["Year"].push(rows["Year"][i]);
							rows["Spread"].push(((rows["ROAA"][i + 1] * rows["Leverage"][i + 1]) - rows["Cost_of_Capital"][i + 1]));
							rows["EVA"].push(rows["Equity_Total_BHC_Equity"][i + 1] * rows["Spread"][i + 1]);
							rows["Leverage_2"].push(rows["Assets_Total_Assets"][i + 1] / rows["Equity_Total_BHC_Equity"][i + 1]);
							rows["EA_Growth_Rate_100"].push(rows["EA_Growth_Rate"][i + 1] * 100);

							rows["ROAE"].push((rows["ROAA"][i + 1] * rows["Leverage"][i + 1]));
							rows["ROAE2"].push(rows["ROAA"][i + 1] * rows["Leverage_2"][i + 1]);
							i++;
						}


						res.send({
							year_current: rows["Year2"][0],
							year_future: rows["Year"][5],
							roae_current: (rows["ROAE"][0] * 100).toFixed(2) + "%",
							roae_future: (rows["ROAE"][5] * 100).toFixed(2) + "%",
							spread_current: (rows["Spread"][0] * 100).toFixed(2) + "%",
							spread_future: (rows["Spread"][5] * 100).toFixed(2) + "%",
							ea_growth_current: (rows["total_asset_growth_rate"][0] * 100).toFixed(2) + "%",
							ea_growth_future: (rows["total_asset_growth_rate"][5] * 100).toFixed(2) + "%",
							equity_growth_current: (rows["Equity_Growth"][0] * 100).toFixed(2) + "%",
							equity_growth_future: (rows["Equity_Growth"][5] * 100).toFixed(2) + "%",
							Cost_of_Capital_current: (rows["Cost_of_Capital"][0] * 100).toFixed(2) + "%",
							Cost_of_Capital_future: (rows["Cost_of_Capital"][5] * 100).toFixed(2) + "%",
							leverage_current: (rows["Leverage"][0]).toFixed(2),
							leverage_future: (rows["Leverage"][5]).toFixed(2),
							shares_growth_current: (rows["Share_Growth_Rate"][0] * 100).toFixed(2) + "%",
							shares_growth_future: (rows["Share_Growth_Rate"][5] * 100).toFixed(2) + "%",
						});
					} else {
						res.send({
							roae_current: 0,
							roae_future: 0,
							roaa_current: 0,
							roaa_future: 0,
							ea_growth_current: 0,
							ea_growth_future: 0,
							equity_growth_current: 0,
							equity_growth_future: 0,
							dividend_current: 0,
							dividend_future: 0,
							non_op_equity_current: 0,
							non_op_equity_future: 0,
							shares_growth_current: 0,
							shares_growth_future: 0,
						});
					}
				} else {
					////////console.log(err1);
				}
			});
		});
	},

	assessmentPeers: function(req, res) {
		var company = req.querystring.company;
		var segment = req.querystring.segment || 9;


		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {

			var company = req.querystring.company;
			var segment = req.querystring.segment || 9;

			var query = [
				"Select",
				"tbl_client_segment_ytd.ID,",
				"Concat(SubString_Index(tbl_client_segment_ytd.Name, ' ', 2)) As Name,",
				"tbl_segment.id as SegmentId,",
				"tbl_segment.segment As Segment",
				"From",
				"tbl_client_segment_ytd Inner Join",
				"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period",
				"Inner Join",
				"tbl_ticker_rssdid_map On tbl_ticker_rssdid_map.BHC_Number =",
				"tbl_client_segment_ytd.ID Inner Join",
				"tbl_market_merge On tbl_market_merge.ID = tbl_client_segment_ytd.ID And",
				"tbl_market_merge.Period = tbl_period.Current_Period Inner Join",
				"tbl_segment On tbl_segment.ID = tbl_client_segment_ytd.Prev_YE_Spec_Code",
				"Where",
				"tbl_segment.id = (Select",
				"tbl_client_segment_ytd.Prev_YE_Spec_Code",
				"From",
				"tbl_client_segment_ytd Inner Join",
				"tbl_period On tbl_client_segment_ytd.Period = tbl_period.Current_Period",
				"Where",
				"tbl_ticker_rssdid_map.Ticker <> '' And",
				"tbl_client_segment_ytd.ID = " + company + " And",
				"tbl_period.Most_Recent_Period = 1) And",
				"tbl_period.Most_Recent_Period = 1 AND",
				"Case When (Select",
				"tbl_client_segment_ytd.Prev_YE_Spec_Code",
				"From",
				"tbl_client_segment_ytd Inner Join",
				"tbl_period On tbl_client_segment_ytd.Period = tbl_period.Current_Period",
				"Where",
				"tbl_client_segment_ytd.ID = " + company + " And",
				"tbl_period.Most_Recent_Period = 1) = 11 Then tbl_client_segment_ytd.State",
				"= (Select",
				"tbl_client_segment_ytd.State",
				"From",
				"tbl_client_segment_ytd Inner Join",
				"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period",
				"Where",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_client_segment_ytd.ID = " + company + ") Else 1 = 1 End = True",
			].join(' ');


			var customQuery = [
				"Select",
				"tbl_client_segment_ytd.ID,",
				"Concat(SubString_Index(tbl_client_segment_ytd.Name, ' ', 2)) As Name,",
				"tbl_segment.id as SegmentId,",
				"tbl_segment.segment As Segment",
				"From",
				"tbl_client_segment_ytd Inner Join",
				"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period",
				"Inner Join",
				"tbl_ticker_rssdid_map On tbl_ticker_rssdid_map.BHC_Number =",
				"tbl_client_segment_ytd.ID Inner Join",
				"tbl_market_merge On tbl_market_merge.ID = tbl_client_segment_ytd.ID And",
				"tbl_market_merge.Period = tbl_period.Current_Period Inner Join",
				"tbl_segment_client on tbl_client_segment_ytd.id = tbl_segment_client.id_client inner join",
				"tbl_segment On tbl_segment.ID = tbl_segment_client.id_segment",
				"Where",
				"tbl_segment.id = " + segment + " And",
				"tbl_period.Most_Recent_Period = 1 AND",
				"Case When (" + segment + ") = 11 Then tbl_client_segment_ytd.State",
				"= (Select",
				"tbl_client_segment_ytd.State",
				"From",
				"tbl_client_segment_ytd Inner Join",
				"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period",
				"Where",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_client_segment_ytd.ID = " + company + ") Else 1 = 1 End = True",
			].join(' ');

			if (r) {
				var userid = r[0].USERID;
				if (userid == 1) {
					query = query
				} else {
					query = customQuery
				}
			} else {
				query = query
			}

			////////console.log(query);

			var companies = {};
			DB.query(query, function(err1, result) {
				result.forEach(function(row) {
					Object.keys(row).forEach(function(key) {
						if (!companies[key]) {
							companies[key] = [];
						}
						companies[key].push(row[key]);
					});
				});

				////////console.log(companies);

				if (companies["ID"] && companies["ID"].indexOf(parseInt(company)) == -1) {
					res.send({
						peers: [],
						percentile: [{
							Metric: "FTRS_5",
							Metric_Name: "5 Year Forecast",
							Value: 0,
							PCT_val: 0,
							PCT: 0,
							colors: "#fff",
							Format: "%"
						}, {
							Metric: "FTRS_5",
							Metric_Name: "5 Year Forecast",
							Value: 0,
							PCT_val: 0,
							PCT: 0,
							colors: "#fff",
							Format: "%"
						}],
						tradeoff: [],
						vco: []
					});
				} else {
					var avg_trs = {};
					avg_trs["ID"] = [];
					avg_trs["Company"] = [];
					avg_trs["TRS"] = [];
					var t = 0;

					var finish = function() {
						var j = avg_trs["TRS"].length;
						var k = avg_trs["Company"].length;

						var i = 1;
						var m = 0;

						while (m < j) {
							while (i < j) {
								if (avg_trs["TRS"][m] < avg_trs["TRS"][i]) {
									if (!avg_trs["ID_temp"]) {
										avg_trs["ID_temp"] = [];
									}

									if (!avg_trs["Company_temp"]) {
										avg_trs["Company_temp"] = [];
									}

									if (!avg_trs["TRS_temp"]) {
										avg_trs["TRS_temp"] = [];
									}

									avg_trs["ID_temp"][0] = avg_trs["ID"][i];
									avg_trs["Company_temp"][0] = avg_trs["Company"][i];
									avg_trs["TRS_temp"][0] = avg_trs["TRS"][i];
									avg_trs["ID"][i] = avg_trs["ID"][m];
									avg_trs["TRS"][i] = avg_trs["TRS"][m];
									avg_trs["Company"][i] = avg_trs["Company"][m];
									avg_trs["TRS"][m] = avg_trs["TRS_temp"][0];
									avg_trs["Company"][m] = avg_trs["Company_temp"][0];
									avg_trs["ID"][m] = avg_trs["ID_temp"][0];
								}
								i++;
							}
							m++;
							i = m + 1;
						}

						//Peers
						var key = avg_trs["ID"].indexOf(parseInt(req.querystring.company)) + 1;
						j = avg_trs["TRS"].length;

						var percentile = ((1 - ((key - 1) / (j - 1)))).toFixed(2);

						var top_pct = avg_trs["TRS"][Math.floor(0.25 * (j - 1))];

						var color;
						if (percentile < 0.25) {
							color = "#FCFAFB";
						} else if (percentile < 0.5) {
							color = "Orange";
						} else if (percentile < 0.75) {
							color = "LightGreen";
						} else {
							color = "DarkGreen";
						}

						var pct_white = 1 - percentile;
						var color_white;
						if (percentile < 0.25) {
							color_white = "Red";
						} else {
							color_white = "#FCFAFB";
						}

						avg_trs["color"] = [];
						avg_trs["color"].push(color);

						opportunity_assessment_co_valuation(req.querystring.company, function(rows) {

							//add the color to the result

							j = avg_trs["TRS"].length;
							avg_trs["color_peer"] = [];
							avg_trs["classname"] = [];
							////////console.log(company);
							for (k = 0; k < j; k++) {
								if (avg_trs.ID[k] == company) {
									avg_trs["classname"].push("lastBullet");
								} else {
									avg_trs["classname"].push("nothing");
								}
								var key_color = avg_trs["ID"].indexOf(avg_trs["ID"][k]) + 1;
								j = avg_trs["TRS"].length;

								var percentile_color = ((1 - ((key_color - 1) / (j - 1)))).toFixed(2);

								var color_peer;
								if (percentile_color < 0.25) {
									color_peer = "Red";
								} else if (percentile_color < 0.5) {
									color_peer = "Orange";
								} else if (percentile_color < 0.75) {
									color_peer = "LightGreen";
								} else {
									color_peer = "DarkGreen";
								}


								avg_trs["color_peer"].push(color_peer);
							}

							////////console.log(avg_trs);

							i = 0;
							var ret = [];
							while (i < j) {
								ret.push({
									id: avg_trs.ID[i],
									classname: avg_trs.classname[i],
									Company: avg_trs.Company[i],
									Segment: companies.Segment[i],
									SegmentId: companies.SegmentId[i],
									TRS: (avg_trs.TRS[i] * 100).toFixed(2),
									color_peer: avg_trs.color_peer[i]
								})
								i++;
							}









							var share_price = rows["share_price"][0];
							target_share_price = share_price * Math.pow((1 + top_pct), 5);

							var result = {
								ROE: [],
								Growth: [],
								Result: [],
								VCO: [],
								FGV: [],
								mkt_cap: [],
								share_price: [],
								TRS: []
							};

							var current_roe = rows["ROAE"][0] * 100;
							var current_growth = rows["Equity_Growth"][0] * 100;


							var forecast_roe_yr1 = rows["ROAE"][1] * 100;
							var forecast_growth_yr1 = rows["Equity_Growth"][1] * 100;


							var forecast_roe_yr2 = rows["ROAE"][2] * 100;
							var forecast_growth_yr2 = rows["Equity_Growth"][2] * 100;


							var forecast_roe_yr3 = rows["ROAE"][3] * 100;
							var forecast_growth_yr3 = rows["Equity_Growth"][3] * 100;


							var forecast_roe_yr4 = rows["ROAE"][4] * 100;
							var forecast_growth_yr4 = rows["Equity_Growth"][4] * 100;

							var forecast_roe_yr5 = rows["ROAE"][5] * 100;
							var forecast_growth_yr5 = rows["Equity_Growth"][5] * 100;

							var target_roe = 0;
							var target_growth = 0;
							var k = 0;
							var increment = 0.2;
							while (target_roe <= 50) {
								while (target_growth <= 50) {
									var test = {
										Year: [],
										ROAE: [],
										Equity_Growth: [],
										Equity_Total_BHC_Equity: [],
										Cost_of_Capital: [],
										Shares: [],
										Spread: [],
										Dividends_Per_Share: [],
										Dividend_Payout: [],
										Dividends: [],
										EVA: [],
										VCO: [],
										FGV: [],
										Mkt_cap: [],
										share_price: [],
										total_5_yr_dividends: [],
										TRS: [],
										TRS100: [],
										result: [],
										share_price_start: [],
										ni: []
									};

									test["Year"].push(rows["Year"][3]);
									test["ROAE"].push(target_roe / 100);
									test["Equity_Growth"].push(target_growth / 100);
									test["Equity_Total_BHC_Equity"].push(rows["Equity_Total_BHC_Equity"][0]);
									test["Cost_of_Capital"].push(rows["Cost_of_Capital"][0]);
									test["Shares"].push(rows["Shares"][0]);
									test["Spread"].push(test["ROAE"][0] - test["Cost_of_Capital"][0]);
									test["Dividends_Per_Share"].push(rows["Dividends_Per_Share"][0]);
									test["Dividend_Payout"].push(rows["Dividend_Payout"][0]);
									test["Dividends"].push(rows["Dividends"][0]);
									test["ni"].push(rows["ROAE"][0] * rows["Equity_Total_BHC_Equity"][0]);


									i = 1;
									j = 5;

									while (i <= j) {
										test["Year"].push(test["Year"][i - 1] + 1);
										test["ROAE"].push(target_roe / 100);
										test["Equity_Growth"].push(target_growth / 100);
										test["Equity_Total_BHC_Equity"].push(test["Equity_Total_BHC_Equity"][i - 1] * (1 + target_growth / 100));
										test["ni"].push(test["ROAE"][i] * test["Equity_Total_BHC_Equity"][i]);
										test["Cost_of_Capital"].push(rows["Cost_of_Capital"][i]);
										test["Dividend_Payout"].push(rows["Dividend_Payout"][i]);
										test["Shares"].push(rows["Shares"][i]);
										test["Spread"].push(test["ROAE"][i] - test["Cost_of_Capital"][i]);
										test["Dividends"].push((test["ni"][i] * test["Dividend_Payout"][i]));
										test["Dividends_Per_Share"].push(test["Dividends"][i] / test["Shares"][i] * 1000);
										i++;
									}

									test["EVA"].push(test["Spread"][5] * test["Equity_Total_BHC_Equity"][5]);
									test["VCO"].push(test["Equity_Total_BHC_Equity"][5] + (test["EVA"][0] / test["Cost_of_Capital"][5]));
									test["FGV"].push((test["Equity_Growth"][5] * test["Equity_Total_BHC_Equity"][5] * test["ROAE"][5]) / test["Cost_of_Capital"][5]);
									test["Mkt_cap"].push(test["VCO"][0] + test["FGV"][0]);
									test["share_price"].push((test["Mkt_cap"][0] * 1000) / test["Shares"][5]);
									test["total_5_yr_dividends"].push(test["Dividends_Per_Share"][1] + test["Dividends_Per_Share"][2] + test["Dividends_Per_Share"][3] + test["Dividends_Per_Share"][4] + test["Dividends_Per_Share"][5]);
									test["share_price_start"].push(share_price);
									if ((test["share_price"][0] + test["total_5_yr_dividends"][0]) / test["share_price_start"][0] < 1) {
										test["TRS"].push(((test["share_price"][0] + test["total_5_yr_dividends"][0]) / test["share_price_start"][0]) - 1);
									} else {
										test["TRS"].push(((test["share_price"][0] + test["total_5_yr_dividends"][0]) / test["share_price_start"][0]) - 1);
										//test["TRS"].push(Math.pow((test["share_price"][0]+test["total_5_yr_dividends"][0])/test["share_price_start"][0],0.2)-1);
									}

									test["TRS100"].push(test["TRS"][0] * 100);
									if (test["TRS"][0] >= top_pct) {
										test["result"].push(1);
									} else {
										test["result"].push(0);
									}

									if (test["result"][0] > 0) {
										result["ROE"].push(test["ROAE"][5] * 100);
										result["Growth"].push(test["Equity_Growth"][5] * 100);
										result["Result"].push(test["result"][0]);
										result["VCO"].push(test["VCO"][0]);
										result["FGV"].push(test["FGV"][0]);
										result["mkt_cap"].push(test["Mkt_cap"][0]);

										result["share_price"].push(test["share_price"][0]);
										result["TRS"].push(test["TRS"][0]);
										target_growth = 1001;
										k++;
									} else {
										target_growth = target_growth + increment;
									};
								}

								if (k - 1 >= 0 && result["Result"][k - 1]) {
									if (result["Result"][k - 1] == 1 && result["Growth"][k - 1] == 0) {
										target_roe = 1001;
									} else {
										target_roe = target_roe + increment;
										target_growth = 0;
									}
								} else {
									target_roe = target_roe + increment;
									target_growth = 0;
								}
							}



							i = 0;

							var tradeoff = [];

							while (i < k) {
								tradeoff.push({
									Current_ROE: current_roe,
									Current_Growth: current_growth,
									Forecast_ROE_yr1: forecast_roe_yr1,
									Forecast_Growth_yr1: forecast_growth_yr1,
									Forecast_ROE_yr2: forecast_roe_yr2,
									Forecast_Growth_yr2: forecast_growth_yr2,
									Forecast_ROE_yr3: forecast_roe_yr3,
									Forecast_Growth_yr3: forecast_growth_yr3,
									Forecast_ROE_yr4: forecast_roe_yr4,
									Forecast_Growth_yr4: forecast_growth_yr4,
									Forecast_ROE_yr5: forecast_roe_yr5,
									Forecast_Growth_yr5: forecast_growth_yr5,
									ROE: result["ROE"][i],
									Target_TRS: top_pct,
									TRS: result["TRS"][i],
									Growth: result["Growth"][i]
								})
								i++;
							}

							//VCO FGV

							j = rows["VCO"].length;
							i = 0;

							var vco = [];
							while (i < j) {
								vco.push({
									Period: rows["Year"][i],
									VCO: ((rows["VCO"][i] / rows["Mkt_cap2"][i]) * 100).toFixed(2),
									FGV: ((rows["FGV"][i] / rows["Mkt_cap2"][i]) * 100).toFixed(2),
								})
								i++;
							}

							res.send({
								peers: ret,
								percentile: [{
									Metric: "FTRS_5",
									Metric_Name: "5 Year Forecast",
									Value: avg_trs["TRS"][key - 1] * 100,
									PCT_val: pct_white,
									PCT: pct_white,
									colors: color_white,
									Format: "%"
								}, {
									Metric: "FTRS_5",
									Metric_Name: "5 Year Forecast",
									Value: avg_trs["TRS"][key - 1] * 100,
									PCT_val: percentile,
									PCT: percentile,
									colors: color,
									Format: "%"
								}],
								tradeoff: tradeoff,
								vco: vco
							});
						});
					}

					if (companies["ID"]) {
						var keys = Object.create(companies["ID"]);
						var len = keys.length;
						var next = function() {
							if (t < len) {
								var company = keys[t];
								avg_trs["ID"].push(company);
								avg_trs["Company"].push(companies["Name"][t]);

								opportunity_assessment_co_valuation(company, function(rows) {
									avg_trs["TRS"].push(rows["Avg_TRS"][0]);
									t++;
									next();
								});
							} else {
								finish();
							}


						}
						next();
					} else {
						finish();
					}

				}
			});

		});
	},

	forecast: function(req, res) {
		var company = req.querystring.company;
		var segment = req.querystring.segment;
		////////console.log(company);
		////////console.log(segment);

		//number of years actual to display
		var z = 5;

		var query = [
			"Select",
			"substr(tbl_period.current_period,1,4) as Year,",
			"tbl_income_statement_ltm.Inc_Op_Inc As Operating_Income,",
			"tbl_income_statement_ltm.LLP_Total_Provisions As Total_Provisions,",
			"tbl_income_statement_ltm.Exp_Total_NIE As Total_NIE,",
			"round(tbl_balance_sheet_ltm.Assets_Total_Assets,0) As Total_Assets,",
			"round(tbl_balance_sheet_ltm.Asset_Total_EA,0) AS Total_EA_Assets,",
			"round(tbl_balance_sheet_ltm.Equity_Total_BHC_Equity-  tbl_balance_sheet_ltm.Equity_Preferred_Stock,0) As Total_Equity,",
			"tbl_income_statement_ltm.Income_Taxes As Total_Taxes,",
			"(tbl_income_statement_ltm.Net_Inc_Before_Tax_and_Extraordinary - tbl_income_statement_ltm.Net_Inc_Attributable_to_BHC - tbl_income_statement_ltm.Income_Taxes) As Extra_Other_Adj,",
			"tbl_income_statement_ltm.Net_Inc_Before_Tax_and_Extraordinary As",
			"Total_NI_Pre_Tax,",
			"tbl_income_statement_ltm.Net_Inc_Attributable_to_BHC As Total_NI,",
			"tbl_income_statement_ltm.Non_Op_Inc_Realized_Gains_Losses As",
			"Total_Gains_Losses,",
			"round(tbl_roe_analysis_ltm_all.ROAE*100,2) AS ROAE,",
			"round(tbl_roe_analysis_ltm_all.ROAA*100,2) AS ROAA,",
			"round(tbl_roe_analysis_ltm_all.Leverage,2) AS Leverage,",
			"round(tbl_roe_analysis_ltm_all.ROAA_Pre_Tax*100,2) as ROAA_Pre_Tax,",
			"round(tbl_roe_analysis_ltm_all.ROAA_Effective_Tax_Rate*100,2) as ROAA_Effective_Tax_Rate,",
			"round(tbl_roe_analysis_ltm_all.ROAA_Pre_Tax_Excl_Security_Gains*100, 2) as ROAA_Pre_Tax_Excl_Security_Gains,",
			"round(tbl_roe_analysis_ltm_all.ROAA_Pre_Tax_Security_Gains_Impact*100,2) as ROAA_Pre_Tax_Security_Gains_Impact,",
			"ROUND(((tbl_income_statement_ltm.Net_Inc_Before_Tax_and_Extraordinary - tbl_income_statement_ltm.Net_Inc_Attributable_to_BHC - tbl_income_statement_ltm.Income_Taxes)/tbl_income_statement_ltm.Net_Inc_Before_Tax_and_Extraordinary)*100,2) AS Extra_Other_Adj_impact,",
			"round(tbl_roe_analysis_ltm_all.Op_Margin*100,2) as Op_Margin,",
			"round(tbl_roe_analysis_ltm_all.Asset_Yield*100,2) as Asset_Yield,",
			"round(tbl_roe_analysis_ltm_all.net_int_margin_grossed*100,2) as net_int_margin_grossed,",
			"round(tbl_roe_analysis_ltm_all.non_int_margin_grossed*100,2) as non_int_margin_grossed,",
			"round(tbl_roe_analysis_ltm_all.Net_Int_Margin*100,2) as net_int_margin,",
			"round(tbl_roe_analysis_ltm_all.non_Int_Yield*100,2) as non_int_margin,",
			"round(tbl_roe_analysis_ltm_all.Asset_Yield_EA*100,2) as Asset_Yield_EA,",
			"round(tbl_roe_analysis_ltm_all.Efficiency_Ratio*100,2) as Efficiency_Ratio,",
			"round(tbl_roe_analysis_ltm_all.LLR*100,2) as LLR,",
			"round(tbl_roe_analysis_ltm_all.Costs_Avg_EA_Dep*100,2) As Costs_EA,",
			"round(tbl_roe_analysis_ltm_all.EA_Mix*100,2) As EA_Mix,",
			"round(tbl_roe_analysis_ltm_all.Op_Margin*100,2) As Op_Margin,",
			"round((tbl_roe_analysis_ltm_all.Leverage*tbl_roe_analysis_ltm_all.Asset_Yield)*100,2) As Capital_Utilization,",
			"round(tbl_roe_analysis_ltm_all.op_roaa*100,2) As op_roaa,",
			"round(((tbl_roe_analysis_ltm_all.Op_Margin*(1-tbl_roe_analysis_ltm_all.ROAA_Effective_Tax_Rate)*tbl_roe_analysis_ltm_all.Leverage*tbl_roe_analysis_ltm_all.Asset_Yield)*100),2) As Operating_ROE,",
			"round(((tbl_roe_analysis_ltm_all.ROAE*100)-(tbl_roe_analysis_ltm_all.Op_Margin*(1-tbl_roe_analysis_ltm_all.ROAA_Effective_Tax_Rate)*tbl_roe_analysis_ltm_all.Leverage*tbl_roe_analysis_ltm_all.Asset_Yield)*100),2) As Extra_Adj_Other,",
			"round(tbl_roe_analysis_ltm_all.Extra_Adj_Other_ROAA*100,2) As Extra_Adj_Other_ROAA,",
			"round((tbl_roe_analysis_ltm_all.dividend_payout*100),2) as dividend_payout,",
			"round((tbl_market_merge.Cost_of_Capital*100),2) as Cost_of_Capital,",
			"round((tbl_roe_analysis_ltm_all.equity_growth_rate*100),2) as equity_growth,",
			"round((tbl_market_merge.spread*100),2) as spread,",
			"round((tbl_balance_sheet_ltm.Misc_Common_Shares_Outstanding),2) as shares_outstanding,",
			"round((tbl_market_merge.actual_closing),2) as actual_closing,",
			"round((tbl_market_merge.TR_1*100),2) as total_return_1,",
			"round((tbl_market_merge.TR_5*100),2) as TR_5,",
			"round((tbl_market_merge.mkt_cap/1000000000),2) as mkt_cap,",
			"round(tbl_roe_analysis_ltm_all.Gross_Int_Inc_EA_Yield*100,2) as gross_int_yield,",
			"round(tbl_roe_analysis_ltm_all.Int_Exp_EA*100,2) as cost_of_funds_ea,",
			"round(tbl_roe_analysis_ltm_all.Total_Int_Bearing_Liab_Cost*100,2) as cost_of_funds,",
			"round(tbl_roe_analysis_ltm_all.EA_Int_Exp_Int_Bearing_Liab*100,2) as ibl_ea_ratio,",
			"round(tbl_roe_analysis_ltm_all.Inc_Int_on_Loans_Leases_Yield_Weighted*100,2) as int_yield_loans_wgt,",
			"round((tbl_roe_analysis_ltm_all.other_int_yield_wgt)*100,2) as other_int_yield_wgt,",
			"round(tbl_roe_analysis_ltm_all.Int_Exp_Deposits_Cost_Wgt*100,2) as cost_of_deposits_wgt,",
			"round((tbl_roe_analysis_ltm_all.cost_of_other_borrowings_wgt)*100,2) as cost_of_other_borrowings_wgt,",
			"round((tbl_roe_analysis_ltm_all.EA_Loans_Leases_Mix_Yield)*100,2) as loan_lease_mix,",
			"round((tbl_roe_analysis_ltm_all.IBL_Deposits_Mix)*100,2) as deposit_mix,",
			"round((tbl_roe_analysis_ltm_all.Inc_Int_on_Loans_Leases_Yield)*100,2) as loan_yield,",
			"round(tbl_roe_analysis_ltm_all.Int_Exp_Deposits_Cost*100,2) as cost_of_deposits,",
			"round(tbl_roe_analysis_ltm_all.cost_of_other_funds*100,2) as cost_of_other_funds,",
			"round(tbl_roe_analysis_ltm_all.Total_Asset_Growth_Rate*100,2) as Total_Asset_Growth_Rate,",
			"tbl_market_merge.Beta as Beta,",
			"tbl_market_merge.Risk_Free_Rate*100 as Risk_Free_Rate,",
			"tbl_market_merge.Equity_Risk_Premium*100 as Equity_Risk_Premium,",
			"round(tbl_roe_analysis_ltm_all.Exp_Salary_Benefits_Avg_EA_Dep*100,2) as salaryexpense,",
			"round(tbl_roe_analysis_ltm_all.gaexpense*100,2) as gaexpense,",
			"round((tbl_roe_analysis_ltm_all.externalexpense)*100,2) as externalexpense,",
			"round((tbl_roe_analysis_ltm_all.Exp_Salary_Benefits_Per_FTE),0) as salaryperfte,",
			"round((tbl_roe_analysis_ltm_all.Avg_EA_Dep_Per_FTE),1) as eaperfte,",
			"round(tbl_roe_analysis_ltm_all.Exp_Premises_Fixed_Assets_Avg_EA_Dep*100,1) as premisesexpense,",
			"round(tbl_roe_analysis_ltm_all.Exp_Data_Process_Avg_EA_Dep*100,2) as dataprocessingexpense,",
			"round(tbl_roe_analysis_ltm_all.Exp_Advertising_Avg_EA_Dep*100,2) as advertisingexpense,",
			"round((tbl_roe_analysis_ltm_all.otherexpense)*100,2) as otherexpense,",
			"round(tbl_roe_analysis_ltm_all.LLPNCO*100,2) as llpnco,",
			"round(tbl_roe_analysis_ltm_all.LLP_Loans*100,2) as llploans,",
			"round(tbl_roe_analysis_ltm_all.llpea*100,2) as llpea,",
			"round(tbl_roe_analysis_ltm_all.ncoloans*100,2) as ncoloans,",
			"round(tbl_market_merge.SP_1*100,2) as shares_yield,",
			"round(tbl_market_merge.DY_1*100,2) as dividend_yield,",
			"round(tbl_roe_analysis_ltm_all.otherintyield*100,2) as otherintyield,",
			"round(tbl_roe_analysis_ltm_all.Common_share_growth*100,2) as Common_share_growth,",
			//"round(tbl_roe_analysis_ltm_all.equity_other_growth_rate*100,2) as equity_other_growth_rate,",
			"round((tbl_roe_analysis_ltm_all.equity_growth_rate-((((tbl_balance_sheet_ltm.Assets_Total_Assets/(1+tbl_roe_analysis_ltm_all.Total_Asset_Growth_Rate))*tbl_roe_analysis_ltm_all.Total_Asset_Growth_Rate)/tbl_roe_analysis_ltm_all.Leverage))/((tbl_balance_sheet_ltm.Equity_Total_BHC_Equity-  tbl_balance_sheet_ltm.Equity_Preferred_Stock)/(1+tbl_roe_analysis_ltm_all.equity_growth_rate)))*100,2) as equity_other_growth_rate,",
			"round(tbl_roe_analysis_ltm_all.Total_Asset_EA_Growth_Rate*100,2) as EA_Asset_Growth,",
			"round(((((tbl_balance_sheet_ltm.Assets_Total_Assets/(1+tbl_roe_analysis_ltm_all.Total_Asset_Growth_Rate))*tbl_roe_analysis_ltm_all.Total_Asset_Growth_Rate)/tbl_roe_analysis_ltm_all.Leverage))/(tbl_balance_sheet_ltm.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm.Equity_Preferred_Stock)/(1+tbl_roe_analysis_ltm_all.equity_growth_rate)*100,2) as equity_growth_asset_related,",
			"round(-(tbl_income_statement_ltm.Net_Inc_Attributable_to_BHC*tbl_roe_analysis_ltm_all.dividend_payout)/((tbl_balance_sheet_ltm.Equity_Total_BHC_Equity-tbl_balance_sheet_ltm.Equity_Preferred_Stock)/(1+tbl_roe_analysis_ltm_all.equity_growth_rate))*100,2) as equity_dividend_impact",
			"From",
			"tbl_roe_analysis_ltm_all Inner Join",
			"tbl_client_segment_ytd On tbl_client_segment_ytd.ID =",
			"tbl_roe_analysis_ltm_all.ID Inner Join",
			"tbl_income_statement_ltm On tbl_client_segment_ytd.ID =",
			"tbl_income_statement_ltm.ID Inner Join",
			"tbl_balance_sheet_ltm On tbl_client_segment_ytd.ID = tbl_balance_sheet_ltm.ID",
			"Inner Join",
			"tbl_period On tbl_client_segment_ytd.Period = tbl_period.Current_Period And",
			"tbl_period.Current_Period = tbl_roe_analysis_ltm_all.Period And",
			"tbl_period.Current_Period = tbl_income_statement_ltm.Period And",
			"tbl_period.Current_Period = tbl_balance_sheet_ltm.Period LEFT JOIN",
			"tbl_Market_Merge",
			"On tbl_period.Current_Period = tbl_Market_Merge.Period And",
			"tbl_Client_Segment_YTD.ID = tbl_Market_Merge.ID",
			"Where",
			"tbl_client_segment_ytd.ID = " + company + " And",
			"tbl_period.Last_10_Years < " + (z + 1),
			"order by",
			"tbl_period.last_10_years Desc"
		].join(' ');

		var query_mkt = [
			"Select",
			"right(tbl_period.current_period_name,4) as year,",
			"tbl_metrics.higher_good_or_bad as higher_good_or_bad,",
			"tbl_metrics.Metric as metric,",
			"if(tbl_metrics.metric = 'Mkt_Cap', tbl_roe_analysis_ltm.Value/1000000000, tbl_roe_analysis_ltm.Value) as Metric_Value,",
			"round(if(tbl_metrics.format = '%', tbl_roe_analysis_ltm_pct_segment.segmentrank_50*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_50),1)  as segmentrank_50,",
			"if(tbl_metrics.higher_good_or_bad = 1, round(if(tbl_metrics.format = '%',tbl_roe_analysis_ltm_pct_segment.segmentrank_25*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_25),1), round(if(tbl_metrics.format = '%',tbl_roe_analysis_ltm_pct_segment.segmentrank_75*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_75),1)) as segmentrank_75,",
			"if(tbl_metrics.higher_good_or_bad = 1, round(if(tbl_metrics.format = '%',tbl_roe_analysis_ltm_pct_segment.segmentrank_75*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_75),1), round(if(tbl_metrics.format = '%',tbl_roe_analysis_ltm_pct_segment.segmentrank_25*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_25),1)) as segmentrank_25",
			"From",
			"tbl_roe_analysis_ltm Inner Join",
			"tbl_client_segment_ytd On tbl_client_segment_ytd.ID = tbl_roe_analysis_ltm.ID",
			"Inner Join",
			"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period And",
			"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
			"tbl_metrics On tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric Inner Join",
			"tbl_roe_analysis_ltm_pct_segment On tbl_period.Current_Period =",
			"tbl_roe_analysis_ltm_pct_segment.Period And tbl_metrics.Metric =",
			"tbl_roe_analysis_ltm_pct_segment.Metric Inner Join",
			"tbl_segment On tbl_segment.ID = tbl_client_segment_ytd.Prev_YE_Spec_Code And",
			"tbl_segment.ID = tbl_roe_analysis_ltm_pct_segment.Segment",
			"Where",
			"tbl_client_segment_ytd.ID = " + company + " And",
			"(tbl_metrics.Metric = \"Efficiency_Ratio\" Or",
			"tbl_metrics.Metric = \"LLR\" Or",
			"tbl_metrics.Metric = \"ROAE\" Or",
			"tbl_metrics.Metric = \"ROAA\" Or",
			"tbl_metrics.Metric = \"Leverage\" Or",
			"tbl_metrics.Metric = \"Asset_Yield\" Or",
			"tbl_metrics.Metric = \"Op_Margin\" Or",
			"tbl_metrics.Metric = \"ROAA_Effective_Tax_Rate\" Or",
			"tbl_metrics.Metric = \"spread\" Or",
			"tbl_metrics.Metric = \"equity_growth_rate\" Or",
			"tbl_metrics.Metric = \"ROAA_Pre_Tax_Excl_Security_Gains\" Or",
			"tbl_metrics.Metric = \"mkt_cap\" Or",
			"tbl_metrics.Metric = \"Cost_of_Capital\" Or",
			"tbl_metrics.Metric = \"EA_Asset_Growth\" Or",
			"tbl_metrics.Metric = \"Dividend_Payout\" Or",
			"tbl_metrics.Metric = \"Beta\" Or",
			"tbl_metrics.Metric = \"Net_Int_Margin\" Or",
			"tbl_metrics.Metric = \"Non_Int_Yield\" Or",
			"tbl_metrics.Metric = \"Gross_Int_Inc_EA_Yield\" Or",
			"tbl_metrics.Metric = \"Int_Exp_EA\" Or",
			"tbl_metrics.Metric = \"EA_Mix\" Or",
			"tbl_metrics.Metric = \"Costs_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"Op_Inc_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"Exp_Salary_Benefits_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"Exp_Data_Process_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"Exp_Salary_Benefits_Per_FTE\" Or",
			"tbl_metrics.Metric = \"Avg_EA_Dep_Per_FTE\" Or",
			"tbl_metrics.Metric = \"Exp_Advertising_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"LLP_Loans\" Or",
			"tbl_metrics.Metric = \"EA_Loans_Leases_Mix_Yield\" Or",
			"tbl_metrics.Metric = \"Inc_Int_on_Loans_Leases_Yield\" Or",
			"tbl_metrics.Metric = \"Total_Asset_Growth_Rate\" Or",
			"tbl_metrics.Metric = \"Inc_Int_on_Loans_Leases_Yield_Weighted\" Or",

			"tbl_metrics.Metric = \"gaexpense\" Or",
			"tbl_metrics.Metric = \"externalexpense\" Or",
			"tbl_metrics.Metric = \"otherexpense\" Or",
			"tbl_metrics.Metric = \"LLPNCO\" Or",
			"tbl_metrics.Metric = \"llpea\" Or",
			"tbl_metrics.Metric = \"ncoloans\" Or",
			"tbl_metrics.Metric = \"SP_1\" Or",
			"tbl_metrics.Metric = \"DY_1\" Or",
			"tbl_metrics.Metric = \"otherintyield\" Or",
			"tbl_metrics.Metric = \"Common_share_growth\" Or",
			"tbl_metrics.Metric = \"equity_other_growth_rate\" Or",
			"tbl_metrics.Metric = \"Total_Asset_EA_Growth_Rate\" Or",
			"tbl_metrics.Metric = \"TR_1\" Or",
			"tbl_metrics.Metric = \"other_int_yield_wgt\" Or",
			"tbl_metrics.Metric = \"Total_Int_Bearing_Liab_Cost\" Or",
			"tbl_metrics.Metric = \"cost_of_other_borrowings_wgt\" Or",
			"tbl_metrics.Metric = \"Extra_Adj_Other_ROAA\" Or",
			"tbl_metrics.Metric = \"net_int_margin_grossed\" Or",
			"tbl_metrics.Metric = \"non_int_margin_grossed\" Or",

			"tbl_metrics.Metric = \"Int_Exp_Deposits_Cost\" Or",
			"tbl_metrics.Metric = \"IBL_Deposits_Mix\" Or",

			"tbl_metrics.Metric = \"Leverage\") And",
			"tbl_period.Last_10_Years < " + (z + 1),
			"Order By",
			"tbl_metrics.Metric, tbl_period.Last_10_Years asc"
		].join(' ');

		var mktSql = [
			"Select distinct",
			"tbl_client_segment_ytd.id as companyId,",
			"right(tbl_period.current_period_name,4) as year,",
			"tbl_period.Last_10_Years as lastTenYears,",
			"tbl_metrics.higher_good_or_bad as higher_good_or_bad,",
			"tbl_metrics.format as format,",
			"tbl_metrics.Metric as metric,",
			"if(tbl_metrics.metric = 'Mkt_Cap', tbl_roe_analysis_ltm.Value/1000000000, tbl_roe_analysis_ltm.Value) as metricValue",
			/*			"round(if(tbl_metrics.format = '%', tbl_roe_analysis_ltm_pct_segment.segmentrank_50*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_50),1)  as segmentrank_50,",
						"if(tbl_metrics.higher_good_or_bad = 1, round(if(tbl_metrics.format = '%',tbl_roe_analysis_ltm_pct_segment.segmentrank_25*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_25),1), round(if(tbl_metrics.format = '%',tbl_roe_analysis_ltm_pct_segment.segmentrank_75*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_75),1)) as segmentrank_75,",
						"if(tbl_metrics.higher_good_or_bad = 1, round(if(tbl_metrics.format = '%',tbl_roe_analysis_ltm_pct_segment.segmentrank_75*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_75),1), round(if(tbl_metrics.format = '%',tbl_roe_analysis_ltm_pct_segment.segmentrank_25*100, tbl_roe_analysis_ltm_pct_segment.segmentrank_25),1)) as segmentrank_25", */
			"From",
			"tbl_roe_analysis_ltm Inner Join",
			"tbl_client_segment_ytd On tbl_client_segment_ytd.ID = tbl_roe_analysis_ltm.ID",
			"Inner Join",
			"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period And",
			"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
			"tbl_metrics On tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric Inner Join",
			//			"tbl_roe_analysis_ltm_pct_segment On tbl_period.Current_Period =",
			//			"tbl_roe_analysis_ltm_pct_segment.Period And tbl_metrics.Metric =",
			//			"tbl_roe_analysis_ltm_pct_segment.Metric Inner Join",
			"tbl_segment_client on tbl_client_segment_ytd.id = tbl_segment_client.id_client inner join",
			"tbl_segment On tbl_segment.ID = tbl_segment_client.id_segment",
			//			"tbl_segment.ID = tbl_roe_analysis_ltm_pct_segment.Segment",
			"Where",
			"tbl_segment.id = " + segment + " And",
			"(tbl_metrics.Metric = \"Efficiency_Ratio\" Or",
			"tbl_metrics.Metric = \"LLR\" Or",
			"tbl_metrics.Metric = \"ROAE\" Or",
			"tbl_metrics.Metric = \"ROAA\" Or",
			"tbl_metrics.Metric = \"Leverage\" Or",
			"tbl_metrics.Metric = \"Asset_Yield\" Or",
			"tbl_metrics.Metric = \"Op_Margin\" Or",
			"tbl_metrics.Metric = \"ROAA_Effective_Tax_Rate\" Or",
			"tbl_metrics.Metric = \"spread\" Or",
			"tbl_metrics.Metric = \"equity_growth_rate\" Or",
			"tbl_metrics.Metric = \"ROAA_Pre_Tax_Excl_Security_Gains\" Or",
			"tbl_metrics.Metric = \"mkt_cap\" Or",
			"tbl_metrics.Metric = \"Cost_of_Capital\" Or",
			"tbl_metrics.Metric = \"EA_Asset_Growth\" Or",
			"tbl_metrics.Metric = \"Dividend_Payout\" Or",
			"tbl_metrics.Metric = \"Beta\" Or",
			"tbl_metrics.Metric = \"Net_Int_Margin\" Or",
			"tbl_metrics.Metric = \"Non_Int_Yield\" Or",
			"tbl_metrics.Metric = \"Gross_Int_Inc_EA_Yield\" Or",
			"tbl_metrics.Metric = \"Int_Exp_EA\" Or",
			"tbl_metrics.Metric = \"EA_Mix\" Or",
			"tbl_metrics.Metric = \"Costs_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"Op_Inc_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"Exp_Salary_Benefits_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"Exp_Data_Process_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"Exp_Salary_Benefits_Per_FTE\" Or",
			"tbl_metrics.Metric = \"Avg_EA_Dep_Per_FTE\" Or",
			"tbl_metrics.Metric = \"Exp_Advertising_Avg_EA_Dep\" Or",
			"tbl_metrics.Metric = \"LLP_Loans\" Or",
			"tbl_metrics.Metric = \"EA_Loans_Leases_Mix_Yield\" Or",
			"tbl_metrics.Metric = \"Inc_Int_on_Loans_Leases_Yield\" Or",
			"tbl_metrics.Metric = \"Total_Asset_Growth_Rate\" Or",
			"tbl_metrics.Metric = \"Inc_Int_on_Loans_Leases_Yield_Weighted\" Or",
			"tbl_metrics.Metric = \"gaexpense\" Or",
			"tbl_metrics.Metric = \"externalexpense\" Or",
			"tbl_metrics.Metric = \"otherexpense\" Or",
			"tbl_metrics.Metric = \"LLPNCO\" Or",
			"tbl_metrics.Metric = \"llpea\" Or",
			"tbl_metrics.Metric = \"ncoloans\" Or",
			"tbl_metrics.Metric = \"SP_1\" Or",
			"tbl_metrics.Metric = \"DY_1\" Or",
			"tbl_metrics.Metric = \"otherintyield\" Or",
			"tbl_metrics.Metric = \"Common_share_growth\" Or",
			"tbl_metrics.Metric = \"equity_other_growth_rate\" Or",
			"tbl_metrics.Metric = \"Total_Asset_EA_Growth_Rate\" Or",
			"tbl_metrics.Metric = \"TR_1\" Or",
			"tbl_metrics.Metric = \"other_int_yield_wgt\" Or",
			"tbl_metrics.Metric = \"Total_Int_Bearing_Liab_Cost\" Or",
			"tbl_metrics.Metric = \"cost_of_other_borrowings_wgt\" Or",
			"tbl_metrics.Metric = \"Extra_Adj_Other_ROAA\" Or",
			"tbl_metrics.Metric = \"net_int_margin_grossed\" Or",
			"tbl_metrics.Metric = \"non_int_margin_grossed\" Or",
			"tbl_metrics.Metric = \"Int_Exp_Deposits_Cost\" Or",
			"tbl_metrics.Metric = \"IBL_Deposits_Mix\" Or",
			"tbl_metrics.Metric = \"Leverage\") And",
			"tbl_period.Last_10_Years < " + (z + 1),
			"Order By",
			"tbl_metrics.Metric, tbl_period.Last_10_Years asc, tbl_roe_analysis_ltm.value"
		].join(' ');

		////////console.log(mktSql);

		DB.query(query, function(err1, result) {
			DB.query(query_mkt, function(err1, segment_result) {
				DB.query(mktSql, function(err1, mktResult) {
					var rows = {};
					var first = result[0];
					var z = 0;
					Object.keys(first).forEach(function(key) {
						rows[key] = [];

						result.forEach(function(row) {
							rows[key].push(row[key]);

						});
					});


					// calculate values for the graphs.
					z = rows["Year"].length;

					//rows["EA_Asset_Growth"] = [];
					rows["Asset_EA_Ratio"] = [];
					//rows["equity_other_growth_rate"] = [];
					//rows["Common_share_growth"] = [];
					//rows["share_appreciation"] =[];
					//rows["dividend_yield"] =[];
					//rows["shares_yield"] =[];
					//rows["ncoloans"] =[];
					//rows["llpea"]=[];
					//rows["otherintyield"]=[];

					for (a = 0; a < z; a++) {
						if (a == 0) {
							//rows["EA_Asset_Growth"].push(0);
							rows["Asset_EA_Ratio"].push(100 / rows["EA_Mix"][a]);
							//rows["equity_other_growth_rate"].push(0);
							//rows["Common_share_growth"].push(0);
							//rows["ncoloans"].push((rows["llploans"][a]*rows["llpnco"][a])/100);
							//rows["llpea"].push(rows["llploans"][a]*rows["loan_lease_mix"][a]);
							//rows["otherintyield"].push(rows["other_int_yield_wgt"][a]/(100-rows["loan_lease_mix"][a]));
							//if(rows["mkt_cap"][0] != null) {
							//rows["dividend_yield"].push(0);
							//rows["shares_yield"].push(0)
							//} else {
							//rows["dividend_yield"].push(null);
							//rows["shares_yield"].push(null);
							//}
						} else {
							//rows["EA_Asset_Growth"].push( ((rows["Total_EA_Assets"][a]/rows["Total_EA_Assets"][a-1])-1)*100);
							rows["Asset_EA_Ratio"].push(100 / rows["EA_Mix"][a]);
							//rows["equity_other_growth_rate"].push( ((rows["Total_Equity"][a] - (rows["Total_Equity"][a-1] + rows["Total_NI"][a] - (rows["Total_NI"][a]*rows["dividend_payout"][a]/100)))/rows["Total_Equity"][a-1])*100);
							//if(rows["shares_outstanding"][a-1] == null) {
							//    rows["Common_share_growth"].push(0);
							//    }else{
							//    rows["Common_share_growth"].push(((rows["shares_outstanding"][a] / rows["shares_outstanding"][a-1] )-1)*100);
							//    }

							//rows["ncoloans"].push((rows["llploans"][a]*rows["llpnco"][a])/100);
							//rows["llpea"].push(rows["llploans"][a]*rows["loan_lease_mix"][a]);
							//rows["otherintyield"].push(rows["other_int_yield_wgt"][a]/(100-rows["loan_lease_mix"][a]));
							//if(rows["mkt_cap"][0] != null) {
							//rows["dividend_yield"].push(( (rows["Total_NI"][a] * rows["dividend_payout"][a]) / rows["mkt_cap"][a] ));
							//rows["shares_yield"].push(rows["total_return_1"][a] - rows["dividend_yield"][a]);
							//} else {
							//rows["dividend_yield"].push(null);
							//rows["shares_yield"].push(null);
							//}
						}
					}
					y = 5; //forecast for five years

					var Target_Efficiency_Ratio;
					if (parseFloat(req.querystring.Efficiency_Ratio) != parseFloat(req.querystring.Efficiency_Rato2)) {
						Target_Efficiency_Ratio = parseFloat(req.querystring.Efficiency_Ratio);

					} else {
						Target_Efficiency_Ratio = parseFloat(req.querystring.Efficiency_Ratio_Orig);
					}


					var Target_LLR;
					if (parseFloat(req.querystring.LLR) != parseFloat(req.querystring.LLR2)) {
						Target_LLR = parseFloat(req.querystring.LLR);
					} else {
						Target_LLR = parseFloat(req.querystring.LLR_Orig);
					}

					var Target_Asset_Yield;
					if (parseFloat(req.querystring.Asset_Yield) != parseFloat(req.querystring.Asset_Yield2)) {
						Target_Asset_Yield = parseFloat(req.querystring.Asset_Yield);
					} else {
						Target_Asset_Yield = parseFloat(req.querystring.Asset_Yield_Orig);
					}

					var Target_Leverage;
					if (parseFloat(req.querystring.Leverage) != parseFloat(req.querystring.Leverage2)) {
						Target_Leverage = parseFloat(req.querystring.Leverage / 100).toFixed(2);
					} else {
						Target_Leverage = parseFloat(req.querystring.Leverage_Orig / 100).toFixed(2);

					}

					var target_net_int_margin_grossed;
					if (parseFloat(req.querystring.net_int_margin_grossed) != parseFloat(req.querystring.net_int_margin_grossed2)) {
						Target_net_int_margin_grossed = parseFloat(req.querystring.net_int_margin_grossed);
					} else {
						Target_net_int_margin_grossed = parseFloat(req.querystring.net_int_margin_grossed_Orig);

					}

					var target_non_int_margin_grossed;
					if (parseFloat(req.querystring.non_int_margin_grossed) != parseFloat(req.querystring.non_int_margin_grossed2)) {
						Target_non_int_margin_grossed = parseFloat(req.querystring.non_int_margin_grossed);
					} else {
						Target_non_int_margin_grossed = parseFloat(req.querystring.non_int_margin_grossed_Orig);

					}

					var target_ROAE;
					if (parseFloat(req.querystring.ROAE) != parseFloat(req.querystring.ROAE2)) {
						target_ROAE = parseFloat(req.querystring.ROAE);
					} else {
						target_ROAE = parseFloat(req.querystring.ROAE_Orig);

					}

					var target_ROAA_Effective_Tax_Rate;
					if (parseFloat(req.querystring.ROAA_Effective_Tax_Rate) != parseFloat(req.querystring.ROAA_Effective_Tax_Rate2)) {
						target_ROAA_Effective_Tax_Rate = parseFloat(req.querystring.ROAA_Effective_Tax_Rate);
					} else {
						target_ROAA_Effective_Tax_Rate = parseFloat(req.querystring.ROAA_Effective_Tax_Rate_Orig);

					}

					var target_Extra_Adj_Other_ROAA;
					if (parseFloat(req.querystring.Extra_Adj_Other_ROAA).toFixed(2) != parseFloat(req.querystring.Extra_Adj_Other_ROAA2).toFixed(2)) {
						target_Extra_Adj_Other_ROAA = Math.round(req.querystring.Extra_Adj_Other_ROAA * 100) / 100;
					} else {
						target_Extra_Adj_Other_ROAA = Math.round(req.querystring.Extra_Adj_Other_ROAA_Orig * 100) / 100;

					}


					var target_Cost_of_Capital;
					if (req.querystring.Cost_of_Capital != req.querystring.Cost_of_Capital2) {
						target_Cost_of_Capital = req.querystring.Cost_of_Capital;
					} else {
						target_Cost_of_Capital = req.querystring.Cost_of_Capital_Orig;

					}

					var target_Beta;
					if (parseFloat(req.querystring.Beta) != parseFloat(req.querystring.Beta2)) {
						target_Beta = parseFloat(req.querystring.Beta) / 100;
					} else {
						target_Beta = parseFloat(req.querystring.Beta_Orig) / 100;

					}

					var target_Equity_Risk_Premium;
					if (req.querystring.Equity_Risk_Premium != req.querystring.Equity_Risk_Premium2) {
						target_Equity_Risk_Premium = Math.round(req.querystring.Equity_Risk_Premium * 100) / 100;
					} else {
						target_Equity_Risk_Premium = Math.round(req.querystring.Equity_Risk_Premium_Orig * 100) / 100;

					}

					var target_Risk_Free_Rate;
					if (parseFloat(req.querystring.Risk_Free_Rate) != parseFloat(req.querystring.Risk_Free_Rate2)) {
						target_Risk_Free_Rate = parseFloat(req.querystring.Risk_Free_Rate);
					} else {
						target_Risk_Free_Rate = parseFloat(req.querystring.Risk_Free_Rate_Orig);

					}

					var target_Common_share_growth;
					if (parseFloat(req.querystring.Common_share_growth) != parseFloat(req.querystring.Common_share_growth2)) {
						target_Common_share_growth = parseFloat(req.querystring.Common_share_growth);
					} else {
						target_Common_share_growth = parseFloat(req.querystring.Common_share_growth_Orig);

					}

					var target_Total_Asset_Growth_Rate;
					if (parseFloat(req.querystring.Total_Asset_Growth_Rate) != parseFloat(req.querystring.Total_Asset_Growth_Rate2)) {
						target_Total_Asset_Growth_Rate = parseFloat(req.querystring.Total_Asset_Growth_Rate);
					} else {
						target_Total_Asset_Growth_Rate = parseFloat(req.querystring.Total_Asset_Growth_Rate_Orig);

					}

					var target_equity_other_growth_rate;
					if (parseFloat(req.querystring.equity_other_growth_rate) != parseFloat(req.querystring.equity_other_growth_rate2)) {
						target_equity_other_growth_rate = parseFloat(req.querystring.equity_other_growth_rate);
					} else {
						target_equity_other_growth_rate = parseFloat(req.querystring.equity_other_growth_rate_Orig);

					}


					var Target_EA_AssetYield = rows["Asset_Yield_EA"][z - 1];
					var Target_Security_Gains = parseFloat(rows["ROAA_Pre_Tax_Security_Gains_Impact"][z - 1]);
					//var Target_Extra_Adj = parseFloat(rows["Extra_Adj_Other_ROAA"][z-1]);
					var Target_Extra_Adj_ROE = parseFloat(rows["Extra_Adj_Other"][z - 1]);
					var Target_Cost_EA = parseFloat(rows["Costs_EA"][z - 1]);
					var Target_EA_Asset_Growth = rows["EA_Asset_Growth"][z - 1];
					var Target_EA_Mix = rows["EA_Mix"][z - 1];
					var Target_EA_Asset_Ratio = rows["Asset_EA_Ratio"][z - 1];
					var target_dividend_payout = rows["dividend_payout"][z - 1];


					var target_net_int_margin = rows["net_int_margin"][z - 1];
					var target_non_int_margin = rows["non_int_margin"][z - 1];
					var target_int_yield_loans_wgt = rows["int_yield_loans_wgt"][z - 1];
					var target_other_int_yield_wgt = rows["other_int_yield_wgt"][z - 1];
					var target_cost_of_deposits_wgt = rows["cost_of_deposits_wgt"][z - 1];
					var target_cost_of_other_borrowings_wgt = rows["cost_of_other_borrowings_wgt"][z - 1];
					var target_cost_of_funds = rows["cost_of_funds"][z - 1];
					var target_ibl_ea_ratio = rows["ibl_ea_ratio"][z - 1];
					var target_loan_yield = rows["loan_yield"][z - 1];
					var target_loan_lease_mix = rows["loan_lease_mix"][z - 1];
					var target_cost_of_deposits = rows["cost_of_deposits"][z - 1];
					var target_cost_of_other_funds = rows["cost_of_other_funds"][z - 1];
					var target_deposit_mix = rows["deposit_mix"][z - 1];





					var target_salaryexpense = rows["salaryexpense"][z - 1];
					var target_gaexpense = rows["gaexpense"][z - 1];
					var target_externalexpense = rows["externalexpense"][z - 1];
					var target_salaryperfte = rows["salaryperfte"][z - 1];
					var target_eaperfte = rows["eaperfte"][z - 1];
					var target_dataprocessingexpense = rows["dataprocessingexpense"][z - 1];
					var target_advertisingexpense = rows["advertisingexpense"][z - 1];
					var target_premisesexpense = rows["premisesexpense"][z - 1];
					var target_otherexpense = rows["otherexpense"][z - 1];
					var target_ncoloans = rows["ncoloans"][z - 1];
					var target_llpnco = rows["llpnco"][z - 1];
					var target_llploans = rows["llploans"][z - 1];

					var Efficiency_Ratio_increment = parseFloat((rows["Efficiency_Ratio"][z - 1] - Target_Efficiency_Ratio) / y);
					var LLR_increment = parseFloat((rows["LLR"][z - 1] - Target_LLR) / y);
					var EA_AssetYield_increment = parseFloat((rows["Asset_Yield_EA"][z - 1] - Target_EA_AssetYield) / y);
					var Asset_Yield_increment = parseFloat((rows["Asset_Yield"][z - 1] - Target_Asset_Yield) / y);
					var Leverage_increment = (parseFloat(rows["Leverage"][z - 1]).toFixed(2) - Target_Leverage) / y;
					var ROAA_Effective_Tax_Rate_increment = parseFloat((rows["ROAA_Effective_Tax_Rate"][z - 1] - target_ROAA_Effective_Tax_Rate) / y);
					var SecurityGain_increment = parseFloat((rows["ROAA_Pre_Tax_Security_Gains_Impact"][z - 1] - Target_Security_Gains) / y);
					var Extra_Adj_Other_ROAA_increment = Math.round(((Math.round(rows["Extra_Adj_Other_ROAA"][z - 1] * 10000) / 10000 - target_Extra_Adj_Other_ROAA) / y) * 100) / 100;
					var Extra_Adj_ROE_increment = parseFloat((rows["Extra_Adj_Other"][z - 1] - Target_Extra_Adj_ROE) / y);
					var Cost_EA_increment = parseFloat((rows["Costs_EA"][z - 1] - Target_Cost_EA) / y);
					var EA_Asset_Growth_increment = (rows["EA_Asset_Growth"][z - 1] - Target_EA_Asset_Growth) / y;
					var Asset_EA_increment = (rows["Asset_EA_Ratio"][z - 1] - Target_EA_Asset_Ratio) / y / 100;
					var EA_Mix_increment = (rows["EA_Mix"][z - 1] - Target_EA_Mix) / y / 100
					var dividend_payout_increment = (rows["dividend_payout"][z - 1] - target_dividend_payout) / y / 100;
					var Cost_of_Capital_increment = (rows["Cost_of_Capital"][z - 1] - target_Cost_of_Capital) / y / 100;
					var Common_share_growth_increment = (rows["Common_share_growth"][z - 1] - target_Common_share_growth) / y;
					var net_int_margin_increment = (rows["net_int_margin"][z - 1] - target_net_int_margin) / y;
					var non_int_margin_increment = (rows["non_int_margin"][z - 1] - target_non_int_margin) / y;
					var int_yield_loans_wgt_increment = (rows["int_yield_loans_wgt"][z - 1] - target_int_yield_loans_wgt) / y;
					var other_int_yield_wgt_increment = (rows["other_int_yield_wgt"][z - 1] - target_other_int_yield_wgt) / y;
					var cost_of_deposits_wgt_increment = (rows["cost_of_deposits_wgt"][z - 1] - target_cost_of_deposits_wgt) / y;
					var cost_of_other_borrowings_wgt_increment = (rows["cost_of_other_borrowings_wgt"][z - 1] - target_cost_of_other_borrowings_wgt) / y;
					var cost_of_funds_increment = (rows["cost_of_funds"][z - 1] - target_cost_of_funds) / y;
					var ibl_ea_ratio_increment = (rows["ibl_ea_ratio"][z - 1] - target_ibl_ea_ratio) / y;
					var loan_yield_increment = (rows["loan_yield"][z - 1] - target_loan_yield) / y;
					var loan_lease_mix_increment = (rows["loan_lease_mix"][z - 1] - target_loan_lease_mix) / y;
					var cost_of_deposits_increment = (rows["cost_of_deposits"][z - 1] - target_cost_of_deposits) / y;
					var cost_of_other_funds_increment = (rows["cost_of_other_funds"][z - 1] - target_cost_of_other_funds) / y;
					var deposit_mix_increment = (rows["deposit_mix"][z - 1] - target_deposit_mix) / y;
					var Total_Asset_Growth_Rate_increment = (rows["Total_Asset_Growth_Rate"][z - 1] - target_Total_Asset_Growth_Rate) / y;
					var Risk_Free_Rate_increment = (rows["Risk_Free_Rate"][z - 1] - target_Risk_Free_Rate) / y;
					var Equity_Risk_Premium_increment = (Math.round(rows["Equity_Risk_Premium"][z - 1] * 100) / 100 - target_Equity_Risk_Premium) / y;
					var Beta_increment = (rows["Beta"][z - 1] - target_Beta) / y;
					var net_int_margin_grossed_increment = (rows["net_int_margin_grossed"][z - 1] - target_net_int_margin_grossed) / y;
					var non_int_margin_grossed_increment = (rows["net_int_margin_grossed"][z - 1] - target_net_int_margin_grossed) / y;
					var salaryexpense_increment = (rows["salaryexpense"][z - 1] - target_salaryexpense) / y;
					var gaexpense_increment = (rows["gaexpense"][z - 1] - target_gaexpense) / y;
					var externalexpense_increment = (rows["externalexpense"][z - 1] - target_externalexpense) / y;
					var salaryperfte_increment = (rows["salaryperfte"][z - 1] - target_salaryperfte) / y;
					var eaperfte_increment = (rows["eaperfte"][z - 1] - target_eaperfte) / y;
					var dataprocessingexpense_increment = (rows["dataprocessingexpense"][z - 1] - target_dataprocessingexpense) / y;
					var premisesexpense_increment = (rows["premisesexpense"][z - 1] - target_premisesexpense) / y;
					var advertisingexpense_increment = (rows["advertisingexpense"][z - 1] - target_advertisingexpense) / y;
					var otherexpense_increment = (rows["otherexpense"][z - 1] - target_otherexpense) / y;
					var llpnco_increment = (rows["llpnco"][z - 1] - target_llpnco) / y;
					var ncoloans_increment = (rows["ncoloans"][z - 1] - target_ncoloans) / y;
					var llploans_increment = (rows["llploans"][z - 1] - target_llploans) / y;
					var ROAE_increment = (rows["ROAE"][z - 1] - target_ROAE) / y;
					var net_int_margin_grossed_increment = (rows["net_int_margin_grossed"][z - 1] - Target_net_int_margin_grossed) / y;
					var non_int_margin_grossed_increment = (rows["non_int_margin_grossed"][z - 1] - Target_non_int_margin_grossed) / y;
					var equity_other_growth_rate_increment = (rows["equity_other_growth_rate"][z - 1] - target_equity_other_growth_rate) / y;
					////////console.log("#1:" + req.querystring.Leverage + "-#2:" + req.querystring.Leverage2 + " Target_Leverage:" + Target_Leverage + " increment: " + Leverage_increment);

					// Define forecast values for each variable.

					//set z = be the starting point in the array (or number of years actual displayed)



					for (i = z; i < (z + y); i++) {

						//Set years
						rows["Year"].push(parseInt(rows["Year"][i - 1]) + 1);


						//Fourth row
						rows["cost_of_deposits"].push(((rows["cost_of_deposits"][i - 1] - cost_of_deposits_increment)));
						rows["deposit_mix"].push(((rows["deposit_mix"][i - 1] - deposit_mix_increment)));
						rows["cost_of_other_funds"].push(((rows["cost_of_other_funds"][i - 1] - cost_of_other_funds_increment)));
						rows["loan_yield"].push(((rows["loan_yield"][i - 1] - loan_yield_increment)));
						rows["loan_lease_mix"].push(((rows["loan_lease_mix"][i - 1] - loan_lease_mix_increment)));
						rows["int_yield_loans_wgt"].push((rows["loan_yield"][i] * rows["loan_lease_mix"][i]) / 100);
						rows["other_int_yield_wgt"].push(((rows["other_int_yield_wgt"][i - 1] - other_int_yield_wgt_increment)));
						rows["cost_of_deposits_wgt"].push((rows["cost_of_deposits"][i] * rows["deposit_mix"][i] / 100));
						rows["cost_of_other_borrowings_wgt"].push((((rows["cost_of_other_funds"][i]) * (100 - rows["deposit_mix"][i])) / 100));

						// Third Row
						rows["gross_int_yield"].push((rows["int_yield_loans_wgt"][i] + rows["other_int_yield_wgt"][i]));
						rows["cost_of_funds"].push((rows["cost_of_deposits_wgt"][i] + rows["cost_of_other_borrowings_wgt"][i]));
						rows["ibl_ea_ratio"].push(rows["ibl_ea_ratio"][i - 1] - ibl_ea_ratio_increment);
						rows["cost_of_funds_ea"].push((rows["cost_of_funds"][i] / rows["ibl_ea_ratio"][i]) * 100);

						//
						rows["net_int_margin"].push((rows["gross_int_yield"][i] - rows["cost_of_funds_ea"][i]));
						rows["non_int_margin"].push(((rows["non_int_margin"][i - 1] - non_int_margin_increment)));
						rows["EA_Mix"].push(rows["EA_Mix"][i - 1] - EA_Mix_increment);


						if (parseFloat(req.querystring.net_int_margin_grossed) != parseFloat(req.querystring.net_int_margin_grossed2)) {
							rows["net_int_margin_grossed"].push(rows["net_int_margin_grossed"][i - 1] - net_int_margin_grossed_increment);
						} else {
							rows["net_int_margin_grossed"].push((rows["net_int_margin"][i] * rows["EA_Mix"][i]) / 100);
						}

						if (parseFloat(req.querystring.non_int_margin_grossed) != parseFloat(req.querystring.non_int_margin_grossed2)) {
							rows["non_int_margin_grossed"].push(rows["non_int_margin_grossed"][i - 1] - non_int_margin_grossed_increment);
						} else {
							rows["non_int_margin_grossed"].push((rows["non_int_margin"][i] * rows["EA_Mix"][i]) / 100);
						}



						// B. ROAA tree screen
						// 1. Fourth row (Bottom)
						//rows["net_int_margin"].push(( (rows["net_int_margin"][i-1]-net_int_margin_increment) ));
						rows["Efficiency_Ratio"].push(((rows["Efficiency_Ratio"][i - 1] - Efficiency_Ratio_increment)));
						rows["LLR"].push(rows["LLR"][i - 1] - LLR_increment);

						// 2. Third row
						rows["Op_Margin"].push(100 - rows["Efficiency_Ratio"][i] - rows["LLR"][i]);
						rows["ROAA_Effective_Tax_Rate"].push(rows["ROAA_Effective_Tax_Rate"][i - 1] - ROAA_Effective_Tax_Rate_increment);

						if (parseFloat(req.querystring.Asset_Yield) != parseFloat(req.querystring.Asset_Yield2)) {
							rows["Asset_Yield"].push(rows["Asset_Yield"][i - 1] - Asset_Yield_increment);

						} else {
							rows["Asset_Yield"].push(((rows["non_int_margin_grossed"][i] / 100 + rows["net_int_margin_grossed"][i] / 100)) * 100);
						}
						// 3. Second row
						rows["op_roaa"].push(Math.round((((rows["Op_Margin"][i] / 100) * (1 - (rows["ROAA_Effective_Tax_Rate"][i] / 100)) * (rows["Asset_Yield"][i] / 100) * 100)) * 100) / 100);
						rows["Extra_Adj_Other"].push(rows["Extra_Adj_Other"][i - 1] + Extra_Adj_ROE_increment);
						rows["Extra_Adj_Other_ROAA"].push(Math.round((rows["Extra_Adj_Other_ROAA"][i - 1] - Extra_Adj_Other_ROAA_increment) * 100) / 100);

						//4. First Row (top)
						rows["ROAA"].push((rows["op_roaa"][i] + (rows["Extra_Adj_Other_ROAA"][i])));

						// Cost of Capital Screen
						rows["Risk_Free_Rate"].push(rows["Risk_Free_Rate"][i - 1] - Risk_Free_Rate_increment);
						rows["Beta"].push(rows["Beta"][i - 1] - Beta_increment);
						rows["Equity_Risk_Premium"].push(rows["Equity_Risk_Premium"][i - 1] - Equity_Risk_Premium_increment);

						// A. Total Returns Screen
						// Sixth Row (bottom)
						rows["dividend_payout"].push(rows["dividend_payout"][i - 1] - dividend_payout_increment);
						rows["Leverage"].push(rows["Leverage"][i - 1] - parseFloat(Leverage_increment));
						//roaa is calculated on the first row of the screen before.

						// Fifth Row

						rows["Total_Asset_Growth_Rate"].push((rows["Total_Asset_Growth_Rate"][i - 1] - Total_Asset_Growth_Rate_increment));

						if (parseFloat(req.querystring.ROAE) != parseFloat(req.querystring.ROAE2)) {
							rows["ROAE"].push(rows["ROAE"][i - 1] - ROAE_increment);
						} else {
							rows["ROAE"].push(Math.round((rows["ROAA"][i] * rows["Leverage"][i]) * 100) / 100);
						}

						if (parseFloat(req.querystring.Cost_of_Capital) != parseFloat(req.querystring.Cost_of_Capital2)) {
							rows["Cost_of_Capital"].push(rows["Cost_of_Capital"][i - 1] - (Cost_of_Capital_increment * 100));
						} else {
							rows["Cost_of_Capital"].push(Math.round((rows["Risk_Free_Rate"][i] + (rows["Beta"][i] * rows["Equity_Risk_Premium"][i])) * 100) / 100);
						}


						// Other equity growth - requires some set up.
						rows["Total_Assets"].push(rows["Total_Assets"][i - 1] * (1 + (rows["Total_Asset_Growth_Rate"][i] / 100)));
						rows["Total_NI"].push(rows["Total_Assets"][i] * (rows["ROAA"][i] / 100));

						rows["equity_growth_asset_related"].push((((rows["Total_Assets"][i - 1] * (rows["Total_Asset_Growth_Rate"][i] / 100)) / rows["Leverage"][i]) / rows["Total_Equity"][i - 1]) * 100);
						rows["equity_dividend_impact"].push((-(rows["Total_NI"][i] * rows["dividend_payout"][i] / 100) / rows["Total_Equity"][i - 1]) * 100);
						rows["Total_Equity"].push(rows["Total_Assets"][i] / rows["Leverage"][i]);

						if (parseFloat(req.querystring.equity_other_growth_rate) != parseFloat(req.querystring.equity_other_growth_rate2)) {
							rows["equity_other_growth_rate"].push(rows["equity_other_growth_rate"][i - 1] - (equity_other_growth_rate_increment));
						} else {
							//rows["Total_Equity"].push(rows["Total_NI"][i]/((rows["ROAA"][i]/100)*rows["Leverage"][i]));
							rows["equity_other_growth_rate"].push((((rows["Total_Equity"][i] / rows["Total_Equity"][i - 1]) - 1) * 100) - rows["equity_growth_asset_related"][i]);
							//rows["equity_other_growth_rate"].push( ((rows["Total_Equity"][i] - rows["Total_Equity"][i-1] - (rows["Total_NI"][i]*(1-rows["dividend_payout"][i]/100)))/rows["Total_Equity"][i-1])*100);
						}

						// Fourth Row
						rows["equity_growth"].push(Math.round((((rows["Total_Equity"][i] / rows["Total_Equity"][i - 1]) - 1) * 100) * 100) / 100);

						if (rows["spread"][i - 1] != null) {
							rows["spread"].push(Math.round(((rows["ROAE"][i] - rows["Cost_of_Capital"][i])) * 100) / 100);
						} else {
							rows["spread"].push(rows["spread"][i - 1]);
						}

						// Third Row

						if (rows["mkt_cap"][i - 1] != null) {
							rows["mkt_cap"].push(Math.round((((rows["Total_Equity"][i] * 1000) + ((rows["spread"][i] * (rows["Total_Equity"][i] * 1000)) / rows["Cost_of_Capital"][i])) / 1000000000) * 100) / 100);
						} else {
							rows["mkt_cap"].push(rows["mkt_cap"][i - 1]);
						}

						if (parseFloat(req.querystring.Common_share_growth) != parseFloat(req.querystring.Common_share_growth2)) {
							rows["Common_share_growth"].push(rows["Common_share_growth"][i - 1] - Common_share_growth_increment);
							rows["shares_outstanding"].push(rows["shares_outstanding"][i - 1] * (1 + rows["Common_share_growth"][i] / 100));
						} else {
							if (rows["Common_share_growth"][i - 1] != null) {
								rows["Common_share_growth"].push(0);
								rows["shares_outstanding"].push(rows["shares_outstanding"][i - 1] * (1 + rows["Common_share_growth"][i] / 100));
							}
						}

						//Second Row
						if (rows["actual_closing"][i - 1] != null) {
							rows["actual_closing"].push((((rows["mkt_cap"][i] / rows["shares_outstanding"][i]) * 1000000000)).toFixed(2));
						} else {
							rows["actual_closing"].push(rows["actual_closing"][i - 1]);
						}

						if (rows["mkt_cap"][i - 1] != null) {
							rows["dividend_yield"].push((((rows["Total_NI"][i] * 1000 * rows["dividend_payout"][i] / 100) / rows["shares_outstanding"][i]) / rows["actual_closing"][i - 1]) * 100);

						} else {
							rows["dividend_yield"].push(null);

						}

						//First Row
						if (rows["mkt_cap"][i - 1] != null) {
							rows["shares_yield"].push(((rows["actual_closing"][i] / rows["actual_closing"][i - 1]) - 1) * 100);
							rows["total_return_1"].push(((rows["dividend_yield"][i] / 100) + (rows["shares_yield"][i] / 100)) * 100)
							rows["TR_5"].push(parseFloat((100 * (1 + rows["total_return_1"][i - 4] / 100) * (1 + rows["total_return_1"][i - 3] / 100) * (1 + rows["total_return_1"][i - 2] / 100) * (1 + rows["total_return_1"][i - 1] / 100) * (1 + rows["total_return_1"][i] / 100) - 100)).toFixed(1));
							//rows["total_return_1"].push(( (((rows["mkt_cap"][i]-rows["mkt_cap"][i-1]) / rows["mkt_cap"][i-1])*100)+ rows["dividend_yield"][i] ));
							//rows["shares_yield"].push(rows["total_return_1"][i] - rows["dividend_yield"][i]);
						} else {
							rows["total_return_1"].push(null);
							rows["shares_yield"].push(null);
						}

						rows["otherintyield"].push(((rows["other_int_yield_wgt"][i] / 100) / (1 - (rows["loan_lease_mix"][i] / 100))) * 100);
						rows["llpnco"].push(rows["llpnco"][i - 1] - llpnco_increment);
						rows["llploans"].push(rows["llploans"][i - 1] - llploans_increment);
						rows["ncoloans"].push(rows["ncoloans"][i - 1] - ncoloans_increment);
						rows["llpea"].push(rows["llploans"][i] / 100 * rows["loan_lease_mix"][i]);
						rows["dataprocessingexpense"].push(rows["dataprocessingexpense"][i - 1] - dataprocessingexpense_increment);
						rows["advertisingexpense"].push(rows["advertisingexpense"][i - 1] - advertisingexpense_increment);
						rows["premisesexpense"].push(rows["premisesexpense"][i - 1] - premisesexpense_increment);
						rows["otherexpense"].push(rows["otherexpense"][i - 1] - otherexpense_increment);
						rows["salaryperfte"].push(rows["salaryperfte"][i - 1] - salaryperfte_increment);
						rows["eaperfte"].push(rows["eaperfte"][i - 1] - eaperfte_increment);
						rows["externalexpense"].push(rows["externalexpense"][i - 1] - externalexpense_increment);
						rows["gaexpense"].push(rows["gaexpense"][i - 1] - gaexpense_increment);
						rows["salaryexpense"].push(rows["salaryexpense"][i - 1] - salaryexpense_increment);
						rows["Costs_EA"].push(rows["Costs_EA"][i - 1] - Cost_EA_increment);
						rows["Asset_Yield_EA"].push(rows["Asset_Yield_EA"][i - 1] - EA_AssetYield_increment);

						/*
						rows["ROAA_Pre_Tax_Security_Gains_Impact"].push(rows["ROAA_Pre_Tax_Security_Gains_Impact"][i-1]);
						            rows["Extra_Other_Adj_impact"].push( (rows["Extra_Other_Adj_impact"][i-1]));
						            rows["Total_EA_Assets"].push( (rows["Total_EA_Assets"][i-1]*(1+(rows["EA_Asset_Growth"][i]/100)) ));
						            rows["Asset_EA_Ratio"].push( (rows["Asset_EA_Ratio"][i-1])+Asset_EA_increment);
						            rows["Total_Assets"].push( rows["Total_EA_Assets"][i]*rows["Asset_EA_Ratio"][i]);
						            rows["ROAA_Pre_Tax_Security_Gains_Impact"].push( rows["ROAA_Pre_Tax_Security_Gains_Impact"][i-1]+SecurityGain_increment);
						            rows["ROAA_Pre_Tax_Excl_Security_Gains"].push( rows["Op_Margin"][i]*rows["Asset_Yield"][i]/100);
						            rows["ROAA_Pre_Tax"].push( rows["ROAA_Pre_Tax_Excl_Security_Gains"][i]+rows["ROAA_Pre_Tax_Security_Gains_Impact"][i]);
						            rows["Total_NI_Pre_Tax"].push( (((rows["ROAA_Pre_Tax_Excl_Security_Gains"][i]/100)*rows["Total_Assets"][i])/(1-(rows["ROAA_Pre_Tax_Security_Gains_Impact"][i]/100))));
						            rows["Total_Taxes"].push( rows["Total_NI_Pre_Tax"][i]*(rows["ROAA_Effective_Tax_Rate"][i]/100));
						            rows["Total_Gains_Losses"].push( rows["Total_NI_Pre_Tax"][i]-((rows["Op_Margin"][i]/100)*(rows["Operating_Income"][i])));
						            rows["Extra_Other_Adj"].push( rows["Total_NI_Pre_Tax"][i]*(rows["Extra_Other_Adj_impact"][i]/100));


						rows["Total_NIE"].push( (rows["Costs_EA"][i]*rows["Total_EA_Assets"][i])/100);

						rows["Operating_Income"].push( (rows["Asset_Yield_EA"][i]/100)*rows["Total_EA_Assets"][i]);
						rows["Total_Provisions"].push( rows["Operating_Income"][i]*(rows["LLR"][i]/100));
						rows["Capital_Utilization"].push((parseFloat((parseFloat(rows["Leverage"][i]) * (parseFloat(rows["Asset_Yield"][i]/100)*100)).toFixed(2))));
						rows["Operating_ROE"].push(( rows["Op_Margin"][i]/100 * (1-rows["ROAA_Effective_Tax_Rate"][i]/100)* (rows["Capital_Utilization"][i]/100) * 100 )).toFixed(2);
						 */

					}

					rows["Leverage1"] = rows["Leverage"];
					rows["Asset_Yield_EA1"] = rows["Asset_Yield_EA"];
					rows["loan_lease_mix1"] = rows["loan_lease_mix"];

					////////console.log(rows);
					//import results of segment_result into array rows2.
					var rows2 = {};
					var first = segment_result[0];

					Object.keys(first).forEach(function(key) {
						rows2[key] = [];

						segment_result.forEach(function(row) {
							rows2[key].push(row[key]);
						});
					});


					var mktRows = {};
					var first = mktResult[0];
					Object.keys(first).forEach(function(key) {
						mktRows[key] = [];

						mktResult.forEach(function(row) {
							mktRows[key].push(row[key]);
						});
					});

					//get arrays of unique period and metrics
					var period = {};
					var metric = {};

					period['period'] = rows2['year'];
					metric['metric'] = rows2['metric'];

					var pvals = Object.keys(period).map(function(key) {
						return period[key];
					});

					var mvals = Object.keys(metric).map(function(key) {
						return metric[key];
					});

					period = pvals[0].filter(function(e, i, arr) {
						return arr.indexOf(e, i + 1) === -1;
					}).reverse();

					metric = mvals[0].filter(function(e, i, arr) {
						return arr.indexOf(e, i + 1) === -1;
					});

					//set the limits of the foor loop to calculate percentile results
					var period_rows = period.length;
					var metric_rows = metric.length;
					var query_rows = rows2['metric'].length;
					var rows3 = {};
					rows3["year"] = [];

					//calculate the percentile.


					var Quartile = function(arr, quart) {
						/*var pos = (arr.length - 1) * quart;

						var base = Math.floor(pos);
						var rest = pos - base;
						
						if (rest > 0) {
									return ((arr[base]+arr[base+1])/2);
								} else {
									return (arr[base]);
								}
						/*try {
							if (arr[base + 1]) {
								return parseFloat(arr[base]).toFixed(4);
							} else {
								return parseFloat(arr[base]).toFixed(4);
							}
						} catch (e) {
							return parseFloat(arr[base]);
						}*/
						if (arr.length == 0) {
							return 0;
						} else {
							if (quart > 0.5) {
								var quart1 = 1 - quart;
							} else {
								var quart1 = quart;
							}
							var len = arr.length - 1;
							var pos = arr.length * quart1;

							arr = arr.sort(function(a, b) {
								return a - b;
							});

							var base = Math.floor(pos) - 1;
							var rest = pos - base - 1;

							if (quart > 0.5) {
								////console.log(">half");
								var baseVal = parseFloat(arr[len - base]).toFixed(4);
								var baseValPlus = parseFloat(arr[len - base - 1]).toFixed(4);
								var odd = parseFloat(baseVal - (rest * (baseVal - baseValPlus))).toFixed(4);
							}

							if (quart < 0.5) {
								////console.log("<half");
								var baseVal = parseFloat(arr[base]).toFixed(4);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(4);
								var remainder = parseFloat(rest * (baseValPlus - baseVal)).toFixed(6);
								var odd = parseFloat(baseVal) + parseFloat(remainder);
							}

							if (quart == 0.5) {
								////console.log("half");
								var baseVal = parseFloat(arr[base]).toFixed(4);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(4);
								if (rest == 0) {
									var odd = (parseFloat(baseValPlus) + parseFloat(baseVal)) / 2;
								} else {
									var odd = parseFloat(baseValPlus).toFixed(4);
								}
							}

							/*//console.log(arr);
							//console.log('qt' + quart);
							//console.log('pos' + pos);
							//console.log('base' + base);
							//console.log('baseVal' + baseVal);
							//console.log('baseValPlus' + baseValPlus);
							//console.log('rest' + rest);
							//console.log('odd' + odd);
							//console.log('even' + arr[base]);
							//console.log('rest' + rest);*/
							if (rest > 0) {
								return (odd);
							} else {
								return (odd);
							}
						}
					};
						
					

					var mktRowsLen = mktRows['metric'].length;


					var qtl = {};
					qtl['year'] = [];
					qtl['metric'] = [];
					qtl['higherGoodOrBad'] = [];
					qtl['top25'] = [];
					qtl['avg'] = [];
					qtl['bottom25'] = [];

					for (a = 0; a < metric_rows; a++) {
						for (b = 0; b < period_rows; b++) {
							var segPctCalc = {};
							segPctCalc['year'] = [];
							segPctCalc['metric'] = [];
							segPctCalc['higherGoodOrBad'] = [];
							segPctCalc['format'] = [];
							segPctCalc['companyId'] = [];
							segPctCalc['value'] = [];

							for (c = 0; c < mktRowsLen; c++) {
								if (mktRows["metric"][c] == metric[a]) {
									if (mktRows["year"][c] == period[b]) {
										segPctCalc['year'].push(mktRows.year[c]);
										segPctCalc['higherGoodOrBad'].push(mktRows.higher_good_or_bad[c]);
										segPctCalc['metric'].push(mktRows.metric[c]);
										segPctCalc['format'].push(mktRows.format[c]);
										segPctCalc['companyId'].push(mktRows.companyId[c]);
										segPctCalc['value'].push(mktRows.metricValue[c]);
									}

								}
							}

							if (segPctCalc.format[0] == "%") {
								var seg_0 = Quartile(segPctCalc['value'], 0) * 100;
								var seg_25 = Quartile(segPctCalc['value'], 0.25) * 100;
								var seg_50 = Quartile(segPctCalc['value'], 0.50) * 100;
								var seg_75 = Quartile(segPctCalc['value'], 0.75) * 100;
								var seg_100 = Quartile(segPctCalc['value'], 1) * 100;
							} else {
								var seg_0 = Quartile(segPctCalc['value'], 0);
								var seg_25 = Quartile(segPctCalc['value'], 0.25);
								var seg_50 = Quartile(segPctCalc['value'], 0.50);
								var seg_75 = Quartile(segPctCalc['value'], 0.75);
								var seg_100 = Quartile(segPctCalc['value'], 1);
							}

							qtl.year.push(period[b]);
							qtl.metric.push(metric[a]);
							qtl.higherGoodOrBad.push(segPctCalc.higherGoodOrBad[0]);

							qtl.top25.push(seg_75);
							qtl.avg.push(seg_50);
							qtl.bottom25.push(seg_25);
						}
					}

					////////console.log(qtl);
					var qtlLen = qtl.year.length;

					for (a = 0; a < metric_rows; a++) {
						rows3['"' + metric[a] + '_higher_good_or_bad"'] = [];
						rows3['"' + metric[a] + '_pct25"'] = [];
						rows3['"' + metric[a] + '_pct50"'] = [];
						rows3['"' + metric[a] + '_pct75"'] = [];
						for (b = 0; b < period_rows; b++) {
							rows3["year"].push(period[b]);
							for (c = 0; c < qtlLen; c++) {
								if (qtl["metric"][c] == metric[a]) {
									if (qtl["year"][c] == period[b]) {
										rows3['"' + metric[a] + '_higher_good_or_bad"'].push(qtl["higherGoodOrBad"][c]);
										rows3['"' + metric[a] + '_pct25"'].push(qtl["bottom25"][c]);
										rows3['"' + metric[a] + '_pct50"'].push(qtl["avg"][c]);
										rows3['"' + metric[a] + '_pct75"'].push(qtl["top25"][c]);
									}
								}
							}


						}
						////////console.log(rows3);

						///add forecast values
						var e = rows3['"' + metric[a] + '_pct50"'].length;
						for (d = e; d < (e + y); d++) {
							rows3['"' + metric[a] + '_higher_good_or_bad"'].push(rows3['"' + metric[a] + '_higher_good_or_bad"'][d - 1]);
							rows3['"' + metric[a] + '_pct25"'].push(rows3['"' + metric[a] + '_pct25"'][d - 1]);
							rows3['"' + metric[a] + '_pct50"'].push(rows3['"' + metric[a] + '_pct50"'][d - 1]);
							rows3['"' + metric[a] + '_pct75"'].push(rows3['"' + metric[a] + '_pct75"'][d - 1]);
						}
						rows['"' + metric[a] + '_higher_good_or_bad"'] = rows3['"' + metric[a] + '_higher_good_or_bad"'];
						rows['"' + metric[a] + '_pct25"'] = rows3['"' + metric[a] + '_pct25"'];
						rows['"' + metric[a] + '_pct50"'] = rows3['"' + metric[a] + '_pct50"'];
						rows['"' + metric[a] + '_pct75"'] = rows3['"' + metric[a] + '_pct75"'];
					}





					var out = {
						Field: Object.keys(rows)
					};
					var i = out.Field.length;
					var j = rows.Leverage.length;
					var k = 0;
					var l = 0;


					var ret = [];
					while (l < j) {
						var tmp = {};
						while (k < i - 1) {
							tmp[out.Field[k]] = rows[out.Field[k]][l];
							k++;
						}
						while (k == i - 1) {
							if (l > z - 1) {
								tmp[out.Field[k]] = rows[out.Field[k]][l];
								tmp.columncolor = 0.4;
							} else {
								tmp[out.Field[k]] = rows[out.Field[k]][l];
								tmp.columncolor = 1;
							}
							k++;
						}
						l++;
						k = 0
						ret.push(tmp);
					}

					res.send(ret);
				});
			});
		});
	},

	sliders: function(req, res) {
		var company = req.querystring.company;

		var query = [
			"Select",
			"tbl_client_Segment_ytd.id,",
			"tbl_metrics.Metric as Metric,",
			"tbl_metrics.Metric_Name as Metric_Name,",
			"tbl_metrics.higher_good_or_bad as hgb,",
			"tbl_metrics.format as format,",
			"tbl_segment.id as segmentID,",
			"tbl_segment.segment as segmentDesc,",
			"Round(tbl_roe_analysis_ltm.Value*10000)/100 as Metric_Value,",
			"Round(tbl_roe_analysis_ltm_pct_segment.segmentrank_0*10000)/100 as segmentrank_0,",
			"Round(tbl_roe_analysis_ltm_pct_segment.segmentrank_25*10000)/100 as segmentrank_25,",
			"Round(tbl_roe_analysis_ltm_pct_segment.segmentrank_50*10000)/100 as segmentrank_50,",
			"Round(tbl_roe_analysis_ltm_pct_segment.segmentrank_75*10000)/100 as segmentrank_75,",
			"Round(tbl_roe_analysis_ltm_pct_segment.segmentrank_100*10000)/100 as segmentrank_100",
			"From",
			"tbl_roe_analysis_ltm Inner Join",
			"tbl_client_segment_ytd On tbl_client_segment_ytd.ID = tbl_roe_analysis_ltm.ID",
			"Inner Join",
			"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period And",
			"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
			"tbl_metrics On tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric Inner Join",
			"tbl_roe_analysis_ltm_pct_segment On tbl_period.Current_Period =",
			"tbl_roe_analysis_ltm_pct_segment.Period And tbl_metrics.Metric =",
			"tbl_roe_analysis_ltm_pct_segment.Metric Inner Join",
			"tbl_segment On tbl_segment.ID = tbl_client_segment_ytd.Prev_YE_Spec_Code And",
			"tbl_segment.ID = tbl_roe_analysis_ltm_pct_segment.Segment",
			"Where",
			"tbl_client_segment_ytd.ID = " + company + " And",
			"(tbl_metrics.Metric = \"Efficiency_Ratio\" Or",
			"tbl_metrics.Metric = \"LLR\" OR",
			"tbl_metrics.Metric = \"ROAE\" OR",
			"tbl_metrics.Metric = \"Asset_Yield\" Or",
			"tbl_metrics.Metric = \"non_int_margin_grossed\" Or",
			"tbl_metrics.Metric = \"net_int_margin_grossed\" Or",
			"tbl_metrics.Metric = \"ROAA_Effective_Tax_Rate\" Or",
			"tbl_metrics.Metric = \"Extra_Adj_Other_ROAA\" Or",
			"tbl_metrics.Metric = \"Beta\" Or",
			"tbl_metrics.Metric = \"Cost_of_Capital\" Or",
			"tbl_metrics.Metric = \"Equity_Risk_Premium\" Or",
			"tbl_metrics.Metric = \"Risk_Free_Rate\" Or",
			"tbl_metrics.Metric = \"Common_share_growth\" Or",
			"tbl_metrics.Metric = \"Total_Asset_Growth_Rate\" Or",
			// "tbl_metrics.Metric = \"equity_other_growth_rate\" Or",
			"tbl_metrics.Metric = \"Leverage\") And",
			"tbl_period.Last_10_Years = 1",
			"Order By",
			"tbl_metrics.Metric"
		].join(' ');

		DB.query(query, function(err, result) {
			if (!err) {
				var sliders = {};
				var first = result[0];
				Object.keys(first).forEach(function(key) {
					sliders[key] = [];

					result.forEach(function(row) {
						sliders[key].push(row[key]);
					});
				});

				var key = sliders["Metric"].indexOf("Leverage");
				sliders["id"].push(sliders["id"][key]);
				sliders["Metric"].push(sliders["Metric"][key] + "1");
				sliders["Metric_Name"].push(sliders["Metric_Name"][key]);
				sliders["segmentID"].push(sliders["segmentID"][key]);
				sliders["hgb"].push(sliders["hgb"][key]);
				sliders["format"].push(sliders["format"][key]);
				sliders["Metric_Value"].push(sliders["Metric_Value"][key]);
				sliders["segmentrank_0"].push(sliders["segmentrank_0"][key]);
				sliders["segmentrank_25"].push(sliders["segmentrank_25"][key]);
				sliders["segmentrank_50"].push(sliders["segmentrank_50"][key]);
				sliders["segmentrank_75"].push(sliders["segmentrank_75"][key]);
				sliders["segmentrank_100"].push(sliders["segmentrank_100"][key]);


				////////console.log(sliders);
				/*
				var metricLength = sliders.["Metric"].length;

				for (z=0; z<metricLength; z++){
				    if (sliders.format[z] == "%" ) {
				    var sliders.metric[z]+"Orig" = sliders.Metric_Value[z] * 100;
				    var sliders.metric[z]+"min" = Math.round(sliders.segmentrank_0[z] * 100 * 0.8);
				    var sliders.metric[z]+"max" = Math.round(sliders.segmentrank_100[z] * 100 * 1.2);
				    } else {
				    var sliders.metric[z]+"Orig" = sliders.Metric_Value[z];
				    var sliders.metric[z]+"min" = Math.round(sliders.segmentrank_0[z] * 0.8);
				    var sliders.metric[z]+"max" = Math.round(sliders.segmentrank_100[z] * 1.2);
				    }

				var AY_Orig = sliders.Metric_Value[0] * 100;
				var AY = (sliders.Metric_Value[0] * 100) + 1;
				var AY2 = (sliders.Metric_Value[0] * 100);
				var AYmin = sliders.segmentrank_0[0] * 100 * 0.8;
				var AYmax = sliders.segmentrank_100[0]*100*1.2;
				var ER_Orig = sliders.Metric_Value[1] * 100;
				var ER = (sliders.Metric_Value[1] * 100) + 1;
				var ER2 = sliders.Metric_Value[1] * 100;
				var min = Math.round(sliders.segmentrank_0[1]*100*0.8,0);
				var max = Math.round(sliders.segmentrank_100[1]*100*1.2,0);
				var ER0 = Math.round(sliders.segmentrank_0[1]*100,0);
				var ER25 = Math.round(sliders.segmentrank_25[1]*100,0);
				var ER50 = Math.round(sliders.segmentrank_50[1]*100,0);
				var ER75 = Math.round(sliders.segmentrank_75[1]*100,0);
				var ER100 = Math.round(sliders.segmentrank_100[1]*100,0);
				var Lev_Orig = sliders.Metric_Value[2]*100;
				var Lev = Math.round(sliders.Metric_Value[2]*100,0);
				var Lev2 = Math.round(sliders.Metric_Value[2]*100,0);
				var Levmin = Math.round(sliders.segmentrank_0[2] * 0.8*100,0);
				var Levmax = Math.round(sliders.segmentrank_100[2] * 100*1.2,0);
				var LLR_Orig = sliders.Metric_Value[3]*10000;
				var LLR = Math.round(sliders.Metric_Value[3]*10000,0);
				var LLR2 = Math.round(sliders.Metric_Value[3]*10000+1,0);
				var LLRmin = Math.round(sliders.segmentrank_0[3]*  0.8*10000,0);
				var LLRmax = Math.round(sliders.segmentrank_100[3]*10000*1.2,0);
				*/
				res.send(sliders);
			} else {
				res.send({});
			}
		})
	},
};
