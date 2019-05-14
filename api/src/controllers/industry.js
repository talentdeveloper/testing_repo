var fs = require('fs');
var sys = require('sys');
var Security = require('../lib/security');
var Config = require('../config/config');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var uuid = require('uuid');
var MySQL = require('mysql');
var DB = require('../lib/mysql_conn').Connection;
var Model = require('../models/users');


var internals = {};

exports = module.exports = internals.IndustryController = {
	find: function(req, res) {
		res.send({});
	},

	findById: function(req, res) {
		res.send({});
	},

	findCompanies: function(req, res) {
		var sql = [
			'SELECT distinct tbl_client_segment_ytd.ID, tbl_client_segment_ytd.`Name`, tbl_client_segment_ytd.Period, tbl_period.Most_Recent_Period',
			'FROM tbl_period inner join tbl_client_segment_ytd on tbl_client_segment_ytd.period  = tbl_period.current_period',
			'WHERE tbl_client_segment_ytd.Period = tbl_period.Current_Period AND',
			'tbl_client_segment_ytd.Asset_Total_EA > 0',
			'AND tbl_period.Most_Recent_Period = 1',
			'Order By',
			'tbl_client_segment_ytd.name'
		].join(' ');

		DB.query(sql, function(err1, result) {
			res.send(result);
		});
	},

	findSegmentCompanies: function(req, res) {

		var segment = req.params.segment;
		var userId = req.auth_id;

		var segmentSql = [
			'select distinct',
			'tbl_segment.id as id,',
			'tbl_segment.segment as segment,',
			'tbl_segment.userid as userId',
			'from tbl_segment',
			'WHERE (tbl_segment.USERID=' + userId + ')',
			'order by tbl_segment.segment, USERID asc'
		].join(' ');

		var sql = [
			'SELECT distinct tbl_client_segment_ytd.ID as id, tbl_client_segment_ytd.`Name` as name, tbl_client_segment_ytd.Period as period, tbl_period.Most_Recent_Period,if(tbl_segment_client.id_segment=' + segment + ',1,0) as selected',
			'FROM tbl_period inner join',
			'tbl_client_segment_ytd on tbl_client_segment_ytd.period  = tbl_period.current_period left join',
			'tbl_segment_client on tbl_client_segment_ytd.id = tbl_segment_client.id_client',
			'WHERE tbl_client_segment_ytd.Period = tbl_period.Current_Period AND',
			'tbl_client_segment_ytd.Asset_Total_EA > 0',
			'AND tbl_period.Most_Recent_Period = 1',
			'Order By',
			'tbl_client_segment_ytd.name'
		].join(' ');
		DB.query(sql, function(err1, result) {
			DB.query(segmentSql, function(err1, segmentResult) {
				var rows = {};
				rows.company = [];
				rows.segment = [];
				rows.company = result;
				rows.segment = segmentResult;
				res.send(rows);
			});
		});
	},

	findSegmentScreen: function(req, res) {
		var screen = req.querystring.screen;
		var segment = req.querystring.segment;
		var metric_code = req.querystring.metric_code || 'TR';
		//var segment = 8;
		//////console.log(segment);
		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {
			if (r) {
				var userid = r[0].USERID;
				if (userid == 1) {
					internals.IndustryController.prepopDetailedMetrics(req, res);
				} else {
					internals.IndustryController.realTimeDetailedMetrics(req, res);
				}
			} else {
				internals.IndustryController.prepopDetailedMetrics(req, res);
			}
		});

	},

	prepopDetailedMetrics: function(req, res) {

		var segment = req.querystring.segment;
		var screen = req.querystring.screen;
		var segment_sql = [
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
			'tbl_screens.ID = ' + screen + ')',
		].join(' ');

		var segment_detail_sql = [
			'Select',
			'tbl_period.Current_Period_Name As Period,',
			'temp.Format,',
			'temp.Level,',
			'temp.Metric_ID,',
			'temp.Metric,',
			'temp.Value,',
			'temp.Avg,',
			'temp.Top,',
			'temp.Bottom,',
			'tbl_period.Last_10_Years as year_no',
			'From',
			'(Select Distinct',
			'tbl_roe_analysis_ltm_pct_segment.Period As Period,',
			'tbl_segment.ID As SEGMENT_ID,',
			'tbl_screen_metrics.Level As Level,',
			'tbl_screen_metrics.rank As Rank,',
			'tbl_metrics.Format As Format,',
			'tbl_metrics.ID As Metric_ID,',
			'tbl_metrics.Metric_Name As Metric,',
			'IfNull(tbl_roe_analysis_ltm_pct_segment.segmentrank_50, 0) As Value,',
			'IfNull(tbl_roe_analysis_ltm_pct_segment.segmentrank_50, 0) As Avg,',
			'IfNull(If(tbl_metrics.Higher_Good_or_Bad = 1,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_75,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_25), 0) As Bottom,',
			'IfNull(If(tbl_metrics.Higher_Good_or_Bad = 1,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_25,',
			'tbl_roe_analysis_ltm_pct_segment.segmentrank_75), 0) As Top',
			'From',
			'tbl_metrics Inner Join',
			'tbl_screen_metrics On tbl_metrics.ID = tbl_screen_metrics.id_metric',
			'Inner Join',
			'tbl_screens On tbl_screens.ID = tbl_screen_metrics.id_screen Inner Join',
			'tbl_roe_analysis_ltm_pct_segment On tbl_metrics.Metric =',
			'tbl_roe_analysis_ltm_pct_segment.Metric Inner Join',
			'tbl_segment On tbl_roe_analysis_ltm_pct_segment.Segment = tbl_segment.ID',
			'Inner Join',
			'tbl_period',
			'On tbl_period.Current_Period = tbl_roe_analysis_ltm_pct_segment.Period',
			'Where',
			'tbl_segment.ID = ' + segment + ' And',
			'tbl_screens.ID = ' + screen + '',
			'Order By',
			'tbl_screen_metrics.Rank,',
			'tbl_metrics.ID) temp Right Outer Join',
			'tbl_period On temp.Period = tbl_period.Current_Period',
			'Where',
			'tbl_period.Last_10_Years < 11',
			'Order By',
			'rank,',
			'metric,',
			'tbl_period.current_Period'
		].join(' ');

		var period_mysql = 'select current_period_name as Period from tbl_period where last_10_years <11 order by current_period asc';

		DB.query(segment_sql, function(err1, metric_result) {
			DB.query(segment_detail_sql, function(err2, segment_details_result) {
				DB.query(period_mysql, function(err3, period_result) {

					var rows = {};

					segment_details_result.forEach(function(row) {
						for (var key in row) {
							if (!rows[key]) {
								rows[key] = [];
							}
							rows[key].push(row[key]);
						}
					});

					var out = period_result.map(function(row) {
						return row.Period;
					});

					var html = "";
					var i = 0;

					html += "<div  class=\"holder\" id=\"holder\">";
					html += "<table id='segment_metrics' class='rolling' style='table-layout:fixed; border-collapse: collapse' width='99%' max-height='360px' align='center' cellpadding='1%' cellspacing='5%'>";
					html += "<tbody align='center'  style='font-family: Arial; font-size: 8pt; color:black; background-color:#A9E2F3'>";
					html += "<tr>";
					html += "<th style='overflow:hidden; width:20%;border:1px solid white; border-left:white'>Metric_Name</th>";

					var z = out.length;

					while (i < z) {
						html += "<th style='overflow:hidden; width:4%; border:1px solid white'>" + out[i] + "</th>";
						i++;
					}

					html += "<th style='overflow:hidden; width:1%; background-color:White; border:0'></th>"
					html += "<th style='overflow:hidden; width:4%; border:1px solid white'>Bottom 25%</th>"
					html += "<th style='overflow:hidden; width:4%; border:1px solid white'>Median</th>"
					html += "<th style='overflow:hidden; width:4%; border:1px solid white; border-right:none'>Top 25%</th>"
					html += "</tr>"
					html += "</tbody>"
					html += "<tbody style='font-family: Arial; font-size: 8pt; color:black; background-color:White'>";


					i = 0;
					var k = 0;
					var m = rows.Bottom.length;
					var n = 0;
					var o = 0;
					var p = 0;
					var level;


					while (i < m) {
						if (rows["Level"][i] == null) {
							i++;
							k = 0;
						} else {
							while (k < z) {
								if (k == 0) {
									if (rows["Level"][i] == 1) {
										level = "";
									} else if (rows["Level"][i] == 2) {
										level = "&nbsp;&nbsp;-&nbsp;";
									} else if (rows["Level"][i] == 3) {
										level = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;";
									} else {
										level = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;";
									}
									level = level.replace("&nbsp;", " ");
									html += '<tr blklab-click="showGraphs" data-id="' + rows["Metric_ID"][i] + '">';
									html += '<td style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; text-align:left;overflow:hidden; width:260px;">' + level + rows["Metric"][i] + '</td>';
								}

								html += '<td align = "center" style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; align:left; overflow:hidden; width:0%;">';
								if (rows["Period"][i] != out[k]) {
									html += 'NA</td>';
									k++;
								} else {
									if (rows["Format"][i] == "%") {
										html += (rows["Avg"][i] * 100).toFixed(2) + '%</td>';
									} else if (rows["Format"][i] == "$") {
										html += "$" + (rows["Avg"][i]).toFixed(2) + '</td>';
									} else {
										html += (rows["Avg"][i]).toFixed(1) + '</td>';
									}


									if (k == (z - 1)) {
										html += '<td style="overflow:hidden"></td>';
										html += '<td align = "center" style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; align:left; overflow:hidden; width:0%;">';

										if (rows["Format"][i] == "%") {
											html += (rows["Bottom"][i] * 100).toFixed(2) + '%</td>';
										} else if (rows["Format"][i] == "$") {
											html += "$" + (rows["Bottom"][i]).toFixed(0) + '</td>';
										} else {
											html += (rows["Bottom"][i]).toFixed(1) + '</td>';
										}

										html += '<td align = "center" style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; align:left; overflow:hidden; width:0%;">';

										if (rows["Format"][i] == "%") {
											html += (rows["Avg"][i] * 100).toFixed(2) + '%</td>';
										} else if (rows["Format"][i] == "$") {
											html += "$" + (rows["Avg"][i]).toFixed(0) + '</td>';
										} else {
											html += (rows["Avg"][i]).toFixed(1) + '</td>';
										}

										html += '<td align = "center" style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; align:left; overflow:hidden; width:0%;">';

										if (rows["Format"][i] == "%") {
											html += (rows["Top"][i] * 100).toFixed(2) + '%</td>';
										} else if (rows["Format"][i] == "$") {
											html += "$" + (rows["Top"][i]).toFixed(0) + '</td>';
										} else {
											html += (rows["Top"][i]).toFixed(1) + '</td>';
										}

										html += '</td>';
										html += '</tr>';
									}


									i++;
									k++;
								}
							}

						}

						k = 0;
					}

					html += "</tbody></table><div class='clear'></div></div>";

					res.send({
						html: html
					});
				});
			});
		});

	},

	realTimeDetailedMetrics: function(req, res) {

		var segment = req.querystring.segment;
		var screen = req.querystring.screen;
		var segment_sql = [
			'Select',
			'tbl_screens.ID,',
			'tbl_screen_metrics.id_metric,',
			'tbl_metrics.metric as Metric,',
			'tbl_metrics.Metric_Name as Metric_Name,',
			'tbl_metrics.Format as Format,',
			'tbl_screens.Rank',
			'From',
			'tbl_screen_metrics Inner Join',
			'tbl_screens On tbl_screens.ID = tbl_screen_metrics.id_screen Inner Join',
			'tbl_metrics On tbl_screen_metrics.id_metric = tbl_metrics.ID',
			'Where',
			'tbl_screens.ID = ' + screen,
			'order by',
			'tbl_screen_metrics.rank'
			/*+ ' And',
			'tbl_screen_metrics.Rank = (Select',
			'Min(tbl_screen_metrics.Rank)',
			'From',
			'tbl_screen_metrics Inner Join',
			'tbl_screens On tbl_screens.ID = tbl_screen_metrics.id_screen',
			'Where',
			'tbl_screens.ID = ' + screen + ')', */
		].join(' ');
		//////console.log(segment_sql);
		/*var segment_detail_sql = [
            'Select',
            'tbl_period.Current_Period_Name As Period,',
            'temp.Format,',
            'temp.Level,',
            'temp.Metric_ID,',
            'temp.Metric,',
            'temp.Value,',
            'temp.Avg,',
            'temp.Top,',
            'temp.Bottom,',
            'tbl_period.Last_10_Years as year_no',
            'From',
            '(Select Distinct',
            'tbl_roe_analysis_ltm_pct_segment.Period As Period,',
            'tbl_segment.ID As SEGMENT_ID,',
            'tbl_screen_metrics.Level As Level,',
            'tbl_screen_metrics.rank As Rank,',
            'tbl_metrics.Format As Format,',
            'tbl_metrics.ID As Metric_ID,',
            'tbl_metrics.Metric_Name As Metric,',
            'IfNull(tbl_roe_analysis_ltm_pct_segment.segmentrank_50, 0) As Value,',
            'IfNull(tbl_roe_analysis_ltm_pct_segment.segmentrank_50, 0) As Avg,',
            'IfNull(If(tbl_metrics.Higher_Good_or_Bad = 1,',
            'tbl_roe_analysis_ltm_pct_segment.segmentrank_75,',
            'tbl_roe_analysis_ltm_pct_segment.segmentrank_25), 0) As Bottom,',
            'IfNull(If(tbl_metrics.Higher_Good_or_Bad = 1,',
            'tbl_roe_analysis_ltm_pct_segment.segmentrank_25,',
            'tbl_roe_analysis_ltm_pct_segment.segmentrank_75), 0) As Top',
            'From',
            'tbl_metrics Inner Join',
            'tbl_screen_metrics On tbl_metrics.ID = tbl_screen_metrics.id_metric',
            'Inner Join',
            'tbl_screens On tbl_screens.ID = tbl_screen_metrics.id_screen Inner Join',
            'tbl_roe_analysis_ltm_pct_segment On tbl_metrics.Metric =',
            'tbl_roe_analysis_ltm_pct_segment.Metric Inner Join',
            'tbl_segment On tbl_roe_analysis_ltm_pct_segment.Segment = tbl_segment.ID',
            'Inner Join',
            'tbl_period',
            'On tbl_period.Current_Period = tbl_roe_analysis_ltm_pct_segment.Period',
            'Where',
            'tbl_segment.ID = ' + segment + ' And',
            'tbl_screens.ID = ' + screen + '',
            'Order By',
            'tbl_screen_metrics.Rank,',
            'tbl_metrics.ID) temp Right Outer Join',
            'tbl_period On temp.Period = tbl_period.Current_Period',
            'Where',
            'tbl_period.Last_10_Years < 11',
            'Order By',
            'rank,',
            'metric,',
            'tbl_period.current_Period'
        ].join(' ');
			*/
		var segment_detail_sql = [
			'select',
			'tbl_period.Current_Period_Name As Period,',
			'tbl_client_segment_ytd.id as ID,',
			'tbl_metrics.Format as Format,',
			'tbl_metrics.Id as Metric_ID,',
			'tbl_metrics.higher_good_or_bad as hgb,',
			'tbl_metrics.Metric as Metric,',
			'tbl_metrics.Metric_Name as Metric_Name,',
			'tbl_roe_analysis_ltm.value as Value,',
			'tbl_screen_metrics.level as Level,',
			'tbl_period.Last_10_years as year_no',
			'from',
			'tbl_period',
			'Inner join',
			'tbl_roe_analysis_ltm on tbl_period.Current_Period = tbl_roe_analysis_ltm.period',
			'Inner join',
			'tbl_metrics on tbl_metrics.metric = tbl_roe_analysis_ltm.metric',
			'Inner join',
			'tbl_screen_metrics on tbl_screen_metrics.id_metric = tbl_metrics.id',
			'inner join',
			'tbl_screens on tbl_screens.id = tbl_screen_metrics.id_screen',
			'inner join',
			'tbl_client_Segment_ytd on tbl_Client_Segment_YTD.id = tbl_roe_analysis_ltm.id and',
			'tbl_client_segment_ytd.period = tbl_period.Current_Period',
			'Inner join',
			'tbl_segment_client on tbl_segment_client.id_client = tbl_Client_Segment_YTD.id',
			'inner join',
			'tbl_segment on tbl_segment.id = tbl_segment_client.id_segment',
			'where',
			'tbl_period.Last_10_Years <11 and',
			'tbl_screens.id = ' + screen + ' and',
			'tbl_segment.id = ' + segment,
			'order by',
			'tbl_period.last_10_years DESC'
		].join(' ');
		//////console.log(segment_detail_sql);
		var period_mysql = 'select current_period_name as Period from tbl_period where last_10_years <11 order by current_period asc';

		DB.query(segment_sql, function(err1, metric_result) {
			DB.query(segment_detail_sql, function(err2, segment_details_result) {
				DB.query(period_mysql, function(err3, period_result) {

					var rows = {};

					segment_details_result.forEach(function(row) {
						for (var key in row) {
							if (!rows[key]) {
								rows[key] = [];
							}
							rows[key].push(row[key]);
						}
					});

					var periods = {};

					period_result.forEach(function(row) {
						for (var key in row) {
							if (!periods[key]) {
								periods[key] = [];
							}
							periods[key].push(row[key]);
						}
					});

					var metrics = {};

					metric_result.forEach(function(row) {
						for (var key in row) {
							if (!metrics[key]) {
								metrics[key] = [];
							}
							metrics[key].push(row[key]);
						}
					});

					var out = period_result.map(function(row) {
						return row.Period;
					});


					//////console.log(periods);
					//////console.log(out);
					//////console.log(metrics)

					var Quartile = function(arr, quart) {
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
								var baseVal = arr[len - base];
								var baseValPlus = arr[len - base - 1];
								var odd = baseVal - (rest * (baseVal - baseValPlus));
							}

							if (quart < 0.5) {
								////console.log("<half");
								var baseVal = arr[base];
								var baseValPlus = arr[base + 1];
								var odd = baseVal + (rest * (baseValPlus - baseVal));
							}

							if (quart == 0.5) {
								////console.log("half");
								var baseVal = arr[base];
								var baseValPlus = arr[base + 1];
								if (rest == 0) {
									var odd = (baseValPlus + baseVal) / 2;
								} else {
									var odd = baseValPlus;
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

					rowsLen = rows.Period.length;
					perLen = periods.Period.length;
					metLen = metrics.Metric.length;

					//////console.log('rows: ' + rowsLen);
					//////console.log('period: ' + perLen);
					//////console.log('metric: ' + metLen);

					var median = {
						Period: [],
						Level: [],
						Format: [],
						Metric_ID: [],
						Metric: [],
						Metric_Name: [],
						Value: [],
						Avg: [],
						Top: [],
						Bottom: [],
						year_no: []
					};

					var a = 0;
					while (a < metLen) {
						var b = 0;

						while (b < perLen) {

							var c = 0;
							var container = {
								level: [],
								hgb: [],
								value: []
							};

							while (c < rowsLen) {
								//////console.log(period[a])
								if (metrics.Metric[a] == rows.Metric[c]) {
									if (periods.Period[b] == rows.Period[c]) {
										//////console.log(rows.Value[b]);
										container['level'].push(rows.Level[c]);
										container['hgb'].push(rows.hgb[c]);
										container['value'].push(rows.Value[c]);
									}
								}
								c++;
							}

							//////console.log(container);
							median['Period'].push(periods.Period[b]);
							median['Level'].push(container.level[0]);
							median['Metric_ID'].push(metrics.id_metric[a]);
							median['Metric'].push(metrics.Metric[a]);
							median['Metric_Name'].push(metrics.Metric_Name[a]);
							median['Format'].push(metrics.Format[a]);
							//////console.log(container);

							if (container.value.length > 0) {
								if (container.hgb[0] == 0) {
									median['Value'].push(Quartile(container['value'], 0.50));
									median['Avg'].push(Quartile(container['value'], 0.50));
									median['Top'].push(Quartile(container['value'], 0.75));
									median['Bottom'].push(Quartile(container['value'], 0.25));
								} else {
									median['Value'].push(Quartile(container['value'], 0.50));
									median['Avg'].push(Quartile(container['value'], 0.50));
									median['Top'].push(Quartile(container['value'], 0.25));
									median['Bottom'].push(Quartile(container['value'], 0.75));
								}
							} else {
								median['Value'].push("");
								median['Avg'].push("");
								median['Top'].push("");
								median['Bottom'].push("");
							}
							median['year_no'].push(perLen - b);
							b++;
						}
						a++
					}

					//////console.log(median);
					rows = median;
					//////console.log(rows);
					var html = "";
					var i = 0;

					html += "<div  class=\"holder\" id=\"holder\">";
					html += "<table id='segment_metrics' class='rolling' style='table-layout:fixed; border-collapse: collapse' width='99%' max-height='360px' align='center' cellpadding='1%' cellspacing='5%'>";
					html += "<tbody align='center'  style='font-family: Arial; font-size: 8pt; color:black; background-color:#A9E2F3'>";
					html += "<tr>";
					html += "<th style='overflow:hidden; width:20%;border:1px solid white; border-left:white'>Metric_Name</th>";

					var z = out.length;

					while (i < z) {
						html += "<th style='overflow:hidden; width:4%; border:1px solid white'>" + out[i] + "</th>";
						i++;
					}

					html += "<th style='overflow:hidden; width:1%; background-color:White; border:0'></th>"
					html += "<th style='overflow:hidden; width:4%; border:1px solid white'>Bottom 25%</th>"
					html += "<th style='overflow:hidden; width:4%; border:1px solid white'>Median</th>"
					html += "<th style='overflow:hidden; width:4%; border:1px solid white; border-right:none'>Top 25%</th>"
					html += "</tr>"
					html += "</tbody>"
					html += "<tbody style='font-family: Arial; font-size: 8pt; color:black; background-color:White'>";


					i = 0;
					var k = 0;
					var m = rows.Bottom.length;
					//////console.log(m);
					var n = 0;
					var o = 0;
					var p = 0;
					var level;


					while (i < m) {
						if (rows["Level"][i] == null) {
							i++;
							k = 0;
						} else {
							while (k < z) {
								if (k == 0) {
									if (rows["Level"][i] == 1) {
										level = "";
									} else if (rows["Level"][i] == 2) {
										level = "&nbsp;&nbsp;-&nbsp;";
									} else if (rows["Level"][i] == 3) {
										level = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;";
									} else {
										level = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;";
									}
									level = level.replace("&nbsp;", " ");
									html += '<tr blklab-click="showGraphs" data-id="' + rows["Metric_ID"][i] + '">';
									html += '<td style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; text-align:left;overflow:hidden; width:260px;">' + level + rows["Metric_Name"][i] + '</td>';
								}

								html += '<td align = "center" style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; align:left; overflow:hidden; width:0%;">';
								if (rows["Period"][i] != out[k]) {
									html += 'NA</td>';
									k++;
								} else {
									if (rows["Format"][i] == "%") {
										html += (rows["Avg"][i] * 100).toFixed(2) + '%</td>';
									} else if (rows["Format"][i] == "$") {
										html += "$" + (rows["Avg"][i]).toFixed(2) + '</td>';
									} else {
										html += (rows["Avg"][i]).toFixed(1) + '</td>';
									}


									if (k == (z - 1)) {
										html += '<td style="overflow:hidden"></td>';
										html += '<td align = "center" style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; align:left; overflow:hidden; width:0%;">';

										if (rows["Format"][i] == "%") {
											html += (rows["Bottom"][i] * 100).toFixed(2) + '%</td>';
										} else if (rows["Format"][i] == "$") {
											html += "$" + (rows["Bottom"][i]).toFixed(0) + '</td>';
										} else {
											html += (rows["Bottom"][i]).toFixed(1) + '</td>';
										}

										html += '<td align = "center" style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; align:left; overflow:hidden; width:0%;">';

										if (rows["Format"][i] == "%") {
											html += (rows["Avg"][i] * 100).toFixed(2) + '%</td>';
										} else if (rows["Format"][i] == "$") {
											html += "$" + (rows["Avg"][i]).toFixed(0) + '</td>';
										} else {
											html += (rows["Avg"][i]).toFixed(1) + '</td>';
										}

										html += '<td align = "center" style ="border-right:0px solid #999999; border-bottom:dashed 0px #cccccc; align:left; overflow:hidden; width:0%;">';

										if (rows["Format"][i] == "%") {
											html += (rows["Top"][i] * 100).toFixed(2) + '%</td>';
										} else if (rows["Format"][i] == "$") {
											html += "$" + (rows["Top"][i]).toFixed(0) + '</td>';
										} else {
											html += (rows["Top"][i]).toFixed(1) + '</td>';
										}

										html += '</td>';
										html += '</tr>';
									}


									i++;
									k++;
								}
							}

						}

						k = 0;
					}

					html += "</tbody></table><div class='clear'></div></div>";
					//////console.log(html);
					res.send({
						html: html
					});
				});
			});
		});
	},

	findSegmentById: function(req, res) {
		var segment = req.querystring.segment;
		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {
			if (r) {
				var userid = r[0].USERID;
				////console.log(userid);
				if (userid == 1) {
					internals.IndustryController.findSegmentByIdDefault(req, res);
				} else {
					internals.IndustryController.findSegmentByIdCustom(req, res);
				}
			} else {
				internals.IndustryController.findSegmentByIdDefault(req, res);
			}
		});

	},

	findSegmentByIdDefault: function(req, res) {
		var segment = req.querystring.segment;
		var segment_sql = [
			'Select',
			'tbl_segment.ID,',
			'tbl_period.current_Period as Period,',
			'tbl_period.Last_10_Years as Period_Order,',
			'tbl_metrics.Metric_Name As Metric_Name,',
			'tbl_metrics.Metric As Metric,',
			'round(tbl_roe_analysis_ltm_pct_segment.segmentrank_50*100,2) As Value,',
			'tbl_metrics.Higher_Good_or_Bad AS Higher_Good_or_Bad,',
			'tbl_metrics.Format As Format',
			'From',
			'tbl_period Inner Join',
			'tbl_roe_analysis_ltm_pct_segment On tbl_roe_analysis_ltm_pct_segment.Period =',
			'tbl_period.Current_Period Inner Join',
			'tbl_segment On tbl_segment.ID = tbl_roe_analysis_ltm_pct_segment.Segment',
			'Inner Join',
			'tbl_metrics On tbl_roe_analysis_ltm_pct_segment.Metric = tbl_metrics.Metric',
			'Where',
			'tbl_segment.ID = "' + segment + '" And',
			'tbl_period.Last_10_Years <= 20 And',
			'tbl_metrics.Metric = "' + req.params.id + '"',
			'Order By',
			'tbl_period.Last_10_Years Desc;',
		].join(' ');

		DB.query(segment_sql, function(err, segment) {
			var rows = {};

			segment.forEach(function(row) {
				for (var key in row) {
					if (!rows[key]) {
						rows[key] = [];
					}
					rows[key].push(row[key]);
				}
				rows["Period_temp"] = [];
				rows["Period_Order_temp"] = [];
				rows["Value_temp"] = [];
			})

			if (rows.Period) {
				var j = rows.Period.length;

				var i = 0;
				var m = 0;

				while (m < j) {
					while (i < j) {
						if (rows.Value[m] < rows.Value[i]) {
							rows.Period_temp[0] = rows.Period[i];
							rows.Period_Order_temp[0] = rows.Period_Order[i];
							rows.Value_temp[0] = rows.Value[i];
							rows.Period[i] = rows.Period[m];
							rows.Period_Order[i] = rows.Period_Order[m];
							rows.Value[i] = rows.Value[m];
							rows.Period[m] = rows.Period_temp[0];
							rows.Period_Order[m] = rows.Period_Order_temp[0];
							rows.Value[m] = rows.Value_temp[0];

						}
						i++;
					}
					m++;
					i = m + 1;
				}

				var Period_Order = 1;
				var key = rows.Period_Order.indexOf(Period_Order);

				if (req.params.id == "Total_Asset_Growth_Rate") {
					rows.Value[key] = rows.Value[key] - 100;
				}

				if (req.params.id == "Leverage") {
					rows.Value[key] = rows.Value[key] / 100;
					rows.Format[key] = '%';
				}

				var pct = 0;
				if (rows.Higher_Good_or_Bad[key] == 0) {
					pct = 1 - (key / (j - 1));
				} else {
					pct = (key / (j - 1));
				}


				var pct_white = 1 - pct;
				var color;

				if (pct < 0.25) {
					color = "#f10006";
				} else if (pct < 0.5) {
					color = "#ff8311";
				} else if (pct < 0.75) {
					color = "#f3ee00";
				} else {
					color = "#86e702";
				}
				var color_white = "#e2e2e4";

				res.send([{
					Metric: rows.Metric[key],
					Metric_Name: rows.Metric_Name[key],
					Value: rows.Value[key],
					PCT_val: pct_white,
					PCT: pct_white,
					colors: color_white,
					format: rows.Format[key]
				}, {
					Metric: rows.Metric[key],
					Metric_Name: rows.Metric_Name[key],
					Value: rows.Value[key],
					PCT_val: pct,
					PCT: pct,
					colors: color,
					format: rows.Format[key]
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
		});
	},

	findSegmentByIdCustom: function(req, res) {
		var segment = req.querystring.segment;

		var segment_sql = [
			'Select',
			'tbl_segment.ID,',
			'tbl_period.current_Period as Period,',
			'tbl_period.Last_10_Years as Period_Order,',
			'tbl_metrics.Metric_Name As Metric_Name,',
			'tbl_metrics.Metric As Metric,',
			'round(tbl_roe_analysis_ltm.value*100,2) As Value,',
			'tbl_metrics.Higher_Good_or_Bad AS Higher_Good_or_Bad,',
			'tbl_metrics.Format As Format',
			'From',
			'tbl_period Inner Join',
			'tbl_roe_analysis_ltm On tbl_roe_analysis_ltm.Period = tbl_period.Current_Period Inner Join',
			'tbl_segment_client ON tbl_segment_client.id_client = tbl_roe_analysis_ltm.id Inner Join',
			'tbl_segment On tbl_segment.ID = tbl_segment_client.id_segment Inner Join',
			'tbl_metrics On tbl_roe_analysis_ltm.Metric = tbl_metrics.Metric',
			'Where',
			'tbl_segment.ID = "' + segment + '" And',
			'tbl_period.Last_10_Years <= 20 And',
			'tbl_metrics.Metric = "' + req.params.id + '"',
			'Order By',
			'tbl_period.Last_10_Years Desc;',
		].join(' ');

		//////console.log(segment_sql);

		DB.query(segment_sql, function(err, segment) {
			var rows = {};

			segment.forEach(function(row) {
				for (var key in row) {
					if (!rows[key]) {
						rows[key] = [];
					}
					rows[key].push(row[key]);
				}
				rows["Period_temp"] = [];
				rows["Period_Order_temp"] = [];
				rows["Value_temp"] = [];
			})
			if (rows.Period) {
				//////console.log(rows);
				var period = {};
				var periodOrder = {};
				//////console.log(req.params.id + rows['Period']);
				period['period'] = rows['Period'];
				periodOrder['period_Order'] = rows['Period_Order'];

				var pvals = Object.keys(period).map(function(key) {
					return period[key];
				});

				var povals = Object.keys(periodOrder).map(function(key) {
					return periodOrder[key];
				});

				period = pvals[0].filter(function(e, i, arr) {
					return arr.indexOf(e, i + 1) === -1;
				});

				periodOrder = povals[0].filter(function(e, i, arr) {
					return arr.indexOf(e, i + 1) === -1;
				});

				var Quartile = function(arr, quart) {
/*					var pos = (arr.length - 1) * quart;

					arr = arr.sort(function(a, b) {
						return a - b;
					});
					//////console.log`(arr);
					var base = Math.floor(pos);
					//////console.log(base);
					var rest = pos - base;
					try {
						if (arr[base + 1]) {
							//return parseFloat(arr[base]).toFixed(4) + (rest * (parseFloat(arr[base+1]).toFixed(4) - parseFloat(arr[base])).toFixed(4));
							return ((arr[base] + arr[base + 1]) / 2);
						} else {
							return arr[base];
						}
					} catch (e) {
						return parseFloat(arr[base]);
					} */
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
							var baseVal = arr[len - base];
							var baseValPlus = arr[len - base - 1];
							var odd = baseVal - (rest * (baseVal - baseValPlus));
						}

						if (quart < 0.5) {
							////console.log("<half");
							var baseVal = arr[base];
							var baseValPlus = arr[base + 1];
							var odd = baseVal + (rest * (baseValPlus - baseVal));
						}

						if (quart == 0.5) {
							////console.log("half");
							var baseVal = arr[base];
							var baseValPlus = arr[base + 1];
							if (rest == 0) {
								var odd = (baseValPlus + baseVal) / 2;
							} else {
								var odd = baseValPlus;
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


				//////console.log(period);
				var perLen = period.length;
				var rowsLen = rows.ID.length;
				//////console.log("rows"+rows.ID.length);

				var median = {
					ID: [],
					Period: [],
					Period_Order: [],
					Metric_Name: [],
					Metric: [],
					Value: [],
					Higher_Good_or_Bad: [],
					Format: []
				};

				var a = 0;

				while (a < perLen) {
					var b = 0;
					var container = {
						value: []
					};

					while (b < rowsLen) {
						//////console.log(period[a])
						if (period[a] == rows.Period[b]) {
							//////console.log(rows.Value[b]);
							container['value'].push(rows.Value[b]);
						}
						b++;
					}
					//////console.log(container);
					median['ID'].push(rows['ID'][0]);
					median['Period'].push(period[a]);
					median['Period_Order'].push(periodOrder[a]);
					median['Metric_Name'].push(rows.Metric_Name[0]);
					median['Metric'].push(rows.Metric[0]);
					median['Value'].push(Quartile(container['value'], 0.50));
					median['Higher_Good_or_Bad'].push(rows.Higher_Good_or_Bad[0]);
					median['Format'].push(rows.Format[0]);
					a++;
				}

				//////console.log(median);

				median["Period_temp"] = [];
				median["Period_Order_temp"] = [];
				median["Value_temp"] = [];

				//////console.log(median);
				rows = median;

				var j = rows.Period.length;

				var i = 0;
				var m = 0;

				while (m < j) {
					while (i < j) {
						if (rows.Value[m] < rows.Value[i]) {
							rows.Period_temp[0] = rows.Period[i];
							rows.Period_Order_temp[0] = rows.Period_Order[i];
							rows.Value_temp[0] = rows.Value[i];
							rows.Period[i] = rows.Period[m];
							rows.Period_Order[i] = rows.Period_Order[m];
							rows.Value[i] = rows.Value[m];
							rows.Period[m] = rows.Period_temp[0];
							rows.Period_Order[m] = rows.Period_Order_temp[0];
							rows.Value[m] = rows.Value_temp[0];

						}
						i++;
					}
					m++;
					i = m + 1;
				}

				var Period_Order = 1;
				var key = rows.Period_Order.indexOf(Period_Order);

				if (req.params.id == "Total_Asset_Growth_Rate") {
					rows.Value[key] = rows.Value[key] - 100;
				}

				if (req.params.id == "Leverage") {
					rows.Value[key] = rows.Value[key] / 100;
					rows.Format[key] = '%';
				}

				var pct = 0;
				if (rows.Higher_Good_or_Bad[key] == 0) {
					pct = 1 - (key / (j - 1));
				} else {
					pct = (key / (j - 1));
				}


				var pct_white = 1 - pct;
				var color;

				if (pct < 0.25) {
					color = "#f10006";
				} else if (pct < 0.5) {
					color = "#ff8311";
				} else if (pct < 0.75) {
					color = "#f3ee00";
				} else {
					color = "#86e702";
				}
				var color_white = "#e2e2e4";

				//////console.log(rows.Metric[key]);

				res.send([{
					Metric: rows.Metric[key],
					Metric_Name: rows.Metric_Name[key],
					Value: rows.Value[key],
					PCT_val: pct_white,
					PCT: pct_white,
					colors: color_white,
					format: rows.Format[key]
				}, {
					Metric: rows.Metric[key],
					Metric_Name: rows.Metric_Name[key],
					Value: rows.Value[key],
					PCT_val: pct,
					PCT: pct,
					colors: color,
					format: rows.Format[key]
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
		});
	},

	create: function(req, res) {
		res.send();
	},

	update: function(req, res) {
		res.send();
	},

	del: function(req, res) {
		res.send();
	},


	testRun: function(req, res) {
		//assumptions:
		// 1. client has been selected (id = 478476)
		// 2. client is part of segment 11 (segment.id=11)
		// 3. We need 20 periods worth of data (tbl.period.Last_10_Years <21)
		// 4. We are showing screen "efficiency ratio (tbl.screens.id = 2)

		var segment_id = req.querystring.segment;
		var screen = req.querystring.screen;

		var query = [
			"Select",
			"tbl_client_segment_ytd.name,",
			"tbl_segment_client.id,",
			"tbl_segment_client.id_segment,",
			"tbl_segment_client.id_client,",
			"tbl_period.last_10_years,",
			"tbl_roe_analysis_ltm.value,",
			"tbl_metrics.metric_name,",
			"tbl_metrics.Metric As metric,",
			"tbl_screen_metrics.level,",
			"tbl_screen_metrics.rank,",
			"tbl_screen_metrics.id_screen,",
			"tbl_metrics.higher_good_or_bad,",
			"tbl_period.Current_Period As period",
			"From",
			"admin_tbl_users Inner Join",
			"tbl_segment",
			"On admin_tbl_users.id = tbl_segment.USERID Inner Join",
			"tbl_segment_client",
			"On tbl_segment.ID = tbl_segment_client.id_segment Inner Join",
			"tbl_client_segment_ytd",
			"On tbl_client_segment_ytd.ID = tbl_segment_client.id_client Inner Join",
			"tbl_period",
			"On tbl_period.Current_Period = tbl_client_segment_ytd.Period And",
			"tbl_period.Current_Period = tbl_segment_client.id_period Inner Join",
			"tbl_roe_analysis_ltm",
			"On tbl_roe_analysis_ltm.Period = tbl_period.Current_Period And",
			"tbl_roe_analysis_ltm.ID = tbl_client_segment_ytd.ID And",
			"tbl_roe_analysis_ltm.ID = tbl_segment_client.id_client Inner Join",
			"tbl_metrics",
			"On tbl_roe_analysis_ltm.Metric = tbl_metrics.Metric Inner Join",
			"tbl_screen_metrics",
			"On tbl_metrics.ID = tbl_screen_metrics.id_metric",
			"Where",
			"tbl_segment.id = " + segment_id + " And",
			"tbl_period.Last_10_Years < 21 And",
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
			"tbl_period.Most_Recent_Period = 1 And",
			"tbl_client_segment_ytd.ID = tbl_segment_client.id_client) Else 1 = 1 End = True",
			"Order By",
			"period,",
			"metric,",
			"tbl_roe_analysis_ltm.Value"
		].join(" ");

		DB.query(query, function(err, segment) {
			var rows = {};
			if (segment && segment.length > 0) {
				//////console.log(segment);
				segment.forEach(function(row) {
					for (var key in row) {
						if (!rows[key]) {
							rows[key] = [];
						}
						rows[key].push(row[key]);
					}
				});

				//get arrays of unique period and metrics
				var period = {};
				var metric = {};

				period['period'] = rows['period'];
				metric['metric'] = rows['metric'];

				var pvals = Object.keys(period).map(function(key) {
					return period[key];
				});

				var mvals = Object.keys(metric).map(function(key) {
					return metric[key];
				});

				period = pvals[0].reverse().filter(function(e, i, arr) {
					return arr.indexOf(e, i + 1) === -1;
				}).reverse();

				metric = mvals[0].reverse().filter(function(e, i, arr) {
					return arr.indexOf(e, i + 1) === -1;
				}).reverse();


				//set the limits of the foor loop to calculate percentile results
				var period_rows = Object.keys(period).length;
				var metric_rows = Object.keys(metric).length;
				var max = 0;
				Object.keys(rows).forEach(function(k) {
					//////console.log(max + ' - ' + rows[k].length);
					max = max < rows[k].length ? rows[k].length : max;
				});
				var screen_rows = max;

				/*////console.log('Rows');
				////console.log(rows);
				////console.log('');
				////console.log('Period');
				////console.log(period);
				////console.log('');
				////console.log('Metric');
				////console.log(metric);
				////console.log('');*/
				//function to calculate quartiles of result set

				var Quartile = function(arr, quart) {
					var pos = (arr.length - 1) * quart;

					var base = Math.floor(pos);
					var rest = pos - base;
					try {
						if (arr[base + 1]) {
							return parseFloat(arr[base]).toFixed(4) + (rest * (parseFloat(arr[base + 1]).toFixed(4) - parseFloat(arr[base])).toFixed(4));
						} else {
							return parseFloat(arr[base]).toFixed(4);
						}
					} catch (e) {
						return parseFloat(arr[base]);
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
					Level: [],
					Rank: [],
					id_screen: [],
					Higher_Good_or_Bad: [],
					period: [],
					perf_rank: [],
					perf_count: [],
					pct: [],
					seg_0: [],
					seg_25: [],
					seg_50: [],
					seg_75: [],
					seg_100: []
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
							Level: [],
							Rank: [],
							id_screen: [],
							Higher_Good_or_Bad: [],
							period: [],
							perf_rank: [],
							perf_count: [],
							pct: [],
							seg_0: [],
							seg_25: [],
							seg_50: [],
							seg_75: [],
							seg_100: []
						};
						for (k = 0; k < screen_rows; k++) {
							if (rows['period'][k] == period[i]) {
								if (rows['metric'][k] == metric[j]) {
									if (rows['value'][k] != 0) {
										output['Name'].push(rows['name'][k]);
										output['id'].push(rows['id'][k]);
										output['id_segment'].push(rows['id_segment'][k]);
										output['id_client'].push(rows['id_client'][k]);
										output['Last_10_Years'].push(rows['last_10_years'][k]);
										output['Value'].push(parseFloat(rows['value'][k]).toFixed(4));
										output['Metric_Name'].push(rows['metric_name'][k]);
										output['metric'].push(rows['metric'][k]);
										output['Level'].push(rows['level'][k]);
										output['Rank'].push(rows['rank'][k]);
										output['id_screen'].push(rows['id_screen'][k]);
										output['Higher_Good_or_Bad'].push(rows['higher_good_or_bad'][k]);
										output['period'].push(rows['period'][k]);
										output['perf_rank'].push(rank);
										rank++;
									}
								}
							}

						}

						//calc quartiles before the for loop
						var seg_0 = Quartile(output['Value'], 0);
						var seg_25 = Quartile(output['Value'], 0.25);
						var seg_50 = Quartile(output['Value'], 0.50);
						var seg_75 = Quartile(output['Value'], 0.75);
						var seg_100 = Quartile(output['Value'], 1);

						//add percentile calcs to output array
						for (l = 0; l < (rank - 1); l++) {
							output['perf_count'][l] = rank - 1;
							output['pct'][l] = 1 - ((output['perf_rank'][l] - 1) / (output['perf_count'][l] - 1)); //this is the percentile value.
							output['seg_0'][l] = seg_0;
							output['seg_25'][l] = seg_25;
							output['seg_50'][l] = seg_50;
							output['seg_75'][l] = seg_75;
							output['seg_100'][l] = seg_100;

							//append entire output to a master array before output gets destroyed.
							output_agg['Name'].push(output['Name'][l]);
							output_agg['id'].push(output['id'][l]);
							output_agg['id_segment'].push(output['id_segment'][l]);
							output_agg['id_client'].push(output['id_client'][l]);
							output_agg['Last_10_Years'].push(output['Last_10_Years'][l]);
							output_agg['Value'].push(output['Value'][l]);
							output_agg['Metric_Name'].push(output['Metric_Name'][l]);
							output_agg['metric'].push(output['metric'][l]);
							output_agg['Level'].push(output['Level'][l]);
							output_agg['Rank'].push(output['Rank'][l]);
							output_agg['id_screen'].push(output['id_screen'][l]);
							output_agg['Higher_Good_or_Bad'].push(output['Higher_Good_or_Bad'][l]);
							output_agg['period'].push(output['period'][l]);
							output_agg['perf_rank'].push(output['perf_rank'][l]);
							output_agg['perf_count'].push(output['perf_count'][l]);
							output_agg['pct'].push(output['pct'][l]);
							output_agg['seg_0'].push(seg_0);
							output_agg['seg_25'].push(seg_25);
							output_agg['seg_50'].push(seg_50);
							output_agg['seg_75'].push(seg_75);
							output_agg['seg_100'].push(seg_100);

						}


					}
				}

				//var output_size = max(array_map('count', output_agg));
				//html += "<br>" + output_size;
				var inc = 0;

				var html = "";

				DB.query("SELECT * FROM tbl_segment WHERE USERID > 0", function(err, filters) {
					DB.query("SELECT * FROM tbl_screens ORDER BY RANK", function(err, screens) {
						html += '<form method="GET" id="form">'
						html += '<div class="col" style="display:inline-block; width:400px;">';
						html += '<h3>SELECT INDUSTRY SEGMENT</h3>';
						html += '<select name="segment" id="segment-list">';
						filters.forEach(function(row) {
							if (parseInt(segment_id) == parseInt(row.ID)) {
								html += '<option value="' + row.ID + '" selected>' + row.segment + '</option>';
							} else {
								html += '<option value="' + row.ID + '">' + row.segment + '</option>';
							}
						});
						html += '</select>';
						html += '</div>';

						html += '<div class="col" style="display:inline-block; width:400px;">';
						html += '<h3>SELECT RESULTS</h3>';
						html += '<select name="screen" id="screen-list">';
						screens.forEach(function(row) {
							if (parseInt(screen) == parseInt(row.ID)) {
								html += '<option value="' + row.ID + '" selected>' + row.Screen_Description + '</option>';
							} else {
								html += '<option value="' + row.ID + '">' + row.Screen_Description + '</option>';
							}
						});
						html += '</select>';
						html += '</div>';

						html += '<input type="submit" value="Submit">';

						html += '</form>';

						html += "<table>";
						html += "<tr>";
						html += "<th>Metric</th>";
						html += "<th>Period</th>";
						html += "<th>Name</th>";
						html += "<th>Value</th>";
						html += "<th>Rank</th>";
						html += "<th>segment 0</th>";
						html += "<th>segment 25</th>";
						html += "<th>segment 50</th>";
						html += "<th>segment 75</th>";
						html += "<th>segment 100</th>";
						html += "</tr>";
						for (i = 0; i < output_agg.metric.length; i++) {
							html += "<tr>";
							html += "<td>" + output_agg['metric'][i] + "</td>";
							html += "<td>" + output_agg['period'][i] + "</td>";
							html += "<td>" + output_agg['Name'][i] + "</td>";
							html += "<td>" + output_agg['Value'][i] + "</td>";
							html += "<td>" + output_agg['perf_rank'][i] + "</td>";
							//html += "<td>" + output_agg['perf_count'][i] + "</td>";
							//html += "<td>" + output_agg['pct'][i] + "</td>";
							html += "<td>" + output_agg['seg_0'][i] + "</td>";
							html += "<td>" + output_agg['seg_25'][i] + "</td>";
							html += "<td>" + output_agg['seg_50'][i] + "</td>";
							html += "<td>" + output_agg['seg_75'][i] + "</td>";
							html += "<td>" + output_agg['seg_100'][i] + "</td>";
							html += "</tr>";
							if (output_agg['metric'][i + 1] && output_agg['metric'][i + 1] != output_agg['metric'][i]) {
								html += "<tr>";
								html += "<td colspan=\"9\">&nbsp;</td>";
								html += "</tr>";
							}
						}

						html += "</table>";

						res.contentType = "text/html";
						res.send(html);
					});
				});
			} else {
				var html = "";

				DB.query("SELECT * FROM tbl_segment WHERE USERID > 0", function(err, filters) {
					html += '<form method="GET" id="form">'
					html += '<div class="col" style="display:inline-block; width:400px;">';
					html += '<h3>SELECT INDUSTRY SEGMENT</h3>';
					html += '<select name="segment" id="segment-list">';
					filters.forEach(function(row) {
						html += '<option value="' + row.ID + '">' + row.segment + '</option>';
					});
					html += '</select>';
					html += '</div>';

					html += '<div class="col" style="display:inline-block; width:400px;">';
					html += '<h3>SELECT RESULTS</h3>';
					html += '<select name="screen" id="screen-list">';
					html += '<option value="9">1. Total Return to Shareholders</option>';
					html += '<option value="6">2. Return on Average Equity (ROAE)</option>';
					html += '<option value="5">3. Return on Average Assets (ROAA)</option>';
					html += '<option value="2">4. Efficiency Ratio</option>';
					html += '<option value="1">5. Yield on Assets</option>';
					html += '<option value="4">6. Net Interest Margin</option>';
					html += '<option value="3">7. Loan Performance</option>';
					html += '<option value="7">8. Growth View</option>';
					html += '</select>';
					html += '</div>';

					html += '<input type="submit" value="Submit">';

					html += '</form>';
					res.contentType = "text/html";
					res.send(html);
				});
			}
		});
	},

	createSegment: function(req, res) {
		var selectco = req.querystring.company;
		var companies = req.body.companies;
		var segment = req.body.name;
		//////console.log(selectco);
		var next = function(id) {
			if (companies.length > 0) {
				var company = companies.pop();

				DB.query("INSERT INTO tbl_segment_client (id_segment, id_client, id_period) SELECT DISTINCT ?, ?, Current_Period FROM tbl_period WHERE tbl_period.Most_Recent_Period = 1", [id, company], function(err, segment) {
					////console.log(err);
					next(id);
				});

			} else {
				res.send({
					id: id
				});
			}
		};

		DB.query("INSERT INTO tbl_segment (segment, USERID) VALUES (?, ?)", [segment, req.auth_id], function(err, segment) {
			////console.log(err);
			next(segment.insertId);
		});

	},

	editSegment: function(req, res) {

		var segment = req.body.segment;
		var companies = req.body.companies;
		var segmentName = req.body.name;


		DB.query("Delete from tbl_segment_client where id_segment = " + segment, function(err, segment) {
			////console.log(err);
		});

		var next = function(id) {
			if (companies.length > 0) {
				var company = companies.pop();

				DB.query("INSERT INTO tbl_segment_client (id_segment, id_client, id_period) SELECT DISTINCT ?, ?, Current_Period FROM tbl_period WHERE tbl_period.Most_Recent_Period = 1", [segment, company], function(err, segmentName) {
					////console.log(err);
					next(id);
				});

			} else {
				res.send({
					id: segment
				});
			}
		};


		DB.query("Update tbl_segment set segment = '" + segmentName + "' where tbl_segment.id = " + segment, function(err, segmentName) {
			////console.log(err);
			next(segment.insertId);
		});

	},

	filterSegmentInd: function(req, res) {
		var segment = req.params.segment;
		////console.log("test")
		var userId = req.auth_id;
		////console.log(userId);

		if (userId == null) {
			var segmentSql = [
				'select distinct',
				'tbl_segment.id as id,',
				'tbl_segment.segment as segment,',
				'tbl_segment.userid as userId',
				'from tbl_segment',
				'WHERE (tbl_segment.USERID=1)',
				'order by tbl_segment.segment, USERID asc'
			].join(' ');
		} else {

			var segmentSql = [
				'select distinct',
				'tbl_segment.id as id,',
				'tbl_segment.segment as segment,',
				'tbl_segment.userid as userId',
				'from tbl_segment',
				'WHERE (tbl_segment.USERID=1 OR tbl_segment.USERID=' + userId + ')',
				'order by tbl_segment.segment, USERID asc'
			].join(' ');
		}
		////console.log(segmentSql);

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

			//////console.log(rows);
			var segments = {};
			segments = rows;
			//////console.log(segments);
			res.send(segments);
		});

	}
};
