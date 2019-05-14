var fs = require('fs');
var sys = require('sys');
var Security = require('../lib/security');
var Config = require('../config/config');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var uuid = require('uuid');
var MySQL = require('mysql');
var DB = require('../lib/mysql_conn').Connection;

var internals = {};

exports = module.exports = internals.GraphsController = {


	industryXY: function(req, res) {
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;
		var company = req.querystring.company;
		var segment = req.querystring.segment || 11;
		var graph = req.querystring.graph || 2;

		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {

			var query = [
				"Select Distinct",
				"tbl_roe_analysis_ltm.ID,",
				"If(tbl_metrics.Format = '%', format(tbl_roe_analysis_ltm.Value*100,2), format(tbl_roe_analysis_ltm.Value,2))  as value,",
				"If(tbl_metrics1.Format = '%',format(tbl_roe_analysis_ltm1.Value*100,2), format(tbl_roe_analysis_ltm1.Value,2)) As value1,",
				"tbl_roe_analysis_ltm_pct.Value as Actual,",
				"concat(SUBSTRING_INDEX(tbl_client_segment_ytd.Name, ' ', 4)) As Client_Name,",
				"tbl_metrics.Metric_Name as YAxis_Name,",
				"tbl_metrics.Higher_Good_or_Bad As YHigher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"tbl_metrics1.Metric_Name As XAxis_Name,",
				"tbl_metrics1.Higher_Good_or_Bad As XHigher_Good_or_Bad,",
				"tbl_metrics1.Format As Format1,",
				"If(tbl_metrics2.Higher_Good_or_Bad = 1, If(tbl_roe_analysis_ltm_pct.Value >=",
				"0.75, 'Green', If(tbl_roe_analysis_ltm_pct.Value >= 0.5, 'LightGreen',",
				"If(tbl_roe_analysis_ltm_pct.Value >= 0.25, 'Orange', 'Red'))), If((1 -",
				"tbl_roe_analysis_ltm_pct.Value) >= 0.75, 'Green', If((1 -",
				"tbl_roe_analysis_ltm_pct.Value) >= 0.5, 'LightGreen', If((1 -",
				"tbl_roe_analysis_ltm_pct.Value) >= 0.25, 'Orange', 'Red')))) As PCT_Color,",
				"tbl_roe_analysis_ltm_pct.Value As Value2,",
				"tbl_period.current_period_name as period,",
				"tbl_metrics3.metric_name as metric_name",
				"From",
				"tbl_roe_analysis_ltm Inner Join",
				"tbl_Client_Segment_YTD",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm.ID Inner Join",
				"tbl_roe_analysis_ltm tbl_roe_analysis_ltm1",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm1.ID Inner Join",
				"tbl_metrics",
				"On tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric Inner Join",
				"tbl_metrics tbl_metrics1",
				"On tbl_metrics1.Metric = tbl_roe_analysis_ltm1.Metric Inner Join",
				"tbl_graph_metrics tbl_graph_metrics1",
				"On tbl_graph_metrics1.id_metric = tbl_metrics1.ID Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm1.Period And",
				"tbl_period.Current_Period = tbl_Client_Segment_YTD.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
				"tbl_roe_analysis_ltm_pct",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm_pct.Period And",
				"tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct.ID Inner Join",
				"tbl_metrics tbl_metrics2",
				"On tbl_metrics2.Metric = tbl_roe_analysis_ltm_pct.Metric Inner Join",
				"tbl_graph_metrics",
				"On tbl_graph_metrics.id_metric = tbl_metrics.ID Inner Join",
				"tbl_graphs tbl_graphs1",
				"On tbl_graphs1.id = tbl_graph_metrics.id_Graph Inner Join",
				"tbl_graphs tbl_graphs2",
				"On tbl_graphs2.id = tbl_graph_metrics1.id_Graph,",
				"tbl_graphs Inner Join",
				"tbl_metrics tbl_metrics3",
				"On tbl_metrics3.ID = tbl_graphs.metric_id",
				"Where",
				"If(tbl_roe_analysis_ltm.Metric <> tbl_roe_analysis_ltm1.Metric, 1, 0) = 1 And",
				"tbl_Client_Segment_YTD.Prev_YE_Spec_Code = " + segment + " And",
				/*            "Case When " + segment + " = 11 Then tbl_Client_Segment_YTD.State = (Select",
				            "tbl_Client_Segment_YTD.State",
				            "From",
				            "tbl_Client_Segment_YTD Inner Join",
				            "tbl_period",
				            "On tbl_period.Current_Period = tbl_Client_Segment_YTD.Period",
				            "Where",
				            "tbl_period.Most_Recent_Period = 1 And",
				            "tbl_Client_Segment_YTD.Prev_YE_Spec_Code = " + segment + ") Else 1 = 1 End = True And", */
				"tbl_graph_metrics.id_metric = (Select",
				"tbl_graph_metrics.id_metric",
				"From",
				"tbl_graphs Inner Join",
				"tbl_graph_metrics",
				"On tbl_graphs.id = tbl_graph_metrics.id_Graph",
				"Where",
				"tbl_graphs.metric_id =" + metric + " and tbl_graphs.graph_type = 2 Limit 1) And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_graphs1.metric_id = " + metric + " And",
				"tbl_graphs1.graph_type = 2 And",
				"tbl_metrics2.ID = " + metric + " And",
				"tbl_metrics3.ID = " + metric + " And",
				"tbl_graphs2.metric_id = " + metric + " AND",
				"tbl_graphs2.graph_type = 2"
			].join(' ');

			var customQuery = [
				"Select Distinct",
				"tbl_roe_analysis_ltm.ID,",
				"If(tbl_metrics.Format = '%', format(tbl_roe_analysis_ltm.Value*100,2), format(tbl_roe_analysis_ltm.Value,2))  as value,",
				"If(tbl_metrics1.Format = '%',format(tbl_roe_analysis_ltm1.Value*100,2), format(tbl_roe_analysis_ltm1.Value,2)) As value1,",
				"tbl_roe_analysis_ltm2.Value as Actual,",
				"concat(SUBSTRING_INDEX(tbl_client_segment_ytd.Name, ' ', 4)) As Client_Name,",
				"tbl_metrics.Metric_Name as YAxis_Name,",
				"tbl_metrics.Higher_Good_or_Bad As YHigher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"tbl_metrics1.Metric_Name As XAxis_Name,",
				"tbl_metrics1.Higher_Good_or_Bad As XHigher_Good_or_Bad,",
				"tbl_metrics1.Format As Format1,",
				"tbl_segment.segment as segment,",
				"tbl_roe_analysis_ltm2.Value as targetMetric,",
				"right(tbl_period.current_period_name,4) as period,",
				"tbl_metrics3.metric_name as metric_name,",
				"tbl_metrics3.Higher_Good_or_Bad As HGB",
				"From",
				"tbl_roe_analysis_ltm Inner Join",
				"tbl_Client_Segment_YTD",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm.ID Inner Join",
				"tbl_roe_analysis_ltm tbl_roe_analysis_ltm1",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm1.ID Inner Join",
				"tbl_metrics",
				"On tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric Inner Join",
				"tbl_metrics tbl_metrics1",
				"On tbl_metrics1.Metric = tbl_roe_analysis_ltm1.Metric Inner Join",
				"tbl_graph_metrics tbl_graph_metrics1",
				"On tbl_graph_metrics1.id_metric = tbl_metrics1.ID Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm1.Period And",
				"tbl_period.Current_Period = tbl_Client_Segment_YTD.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
				"tbl_roe_analysis_ltm tbl_roe_analysis_ltm2",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm2.Period And",
				"tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm2.ID Inner Join",
				"tbl_metrics tbl_metrics2",
				"On tbl_metrics2.Metric = tbl_roe_analysis_ltm2.Metric Inner Join",
				"tbl_graph_metrics",
				"On tbl_graph_metrics.id_metric = tbl_metrics.ID Inner Join",
				"tbl_graphs tbl_graphs1",
				"On tbl_graphs1.id = tbl_graph_metrics.id_Graph Inner Join",
				"tbl_graphs tbl_graphs2",
				"On tbl_graphs2.id = tbl_graph_metrics1.id_Graph inner join",
				"tbl_metrics tbl_metrics3",
				"On tbl_metrics3.ID = tbl_graphs2.metric_id inner join",
				"tbl_segment_client on tbl_segment_client.id_client = tbl_client_segment_ytd.id inner join",
				"tbl_segment on tbl_segment_client.id_segment = tbl_segment.id",
				"Where",
				"If(tbl_roe_analysis_ltm.Metric <> tbl_roe_analysis_ltm1.Metric, 1, 0) = 1 And",
				"tbl_segment.id = " + segment + " And",
				"tbl_graph_metrics.id_metric = (Select",
				"tbl_graph_metrics.id_metric",
				"From",
				"tbl_graphs Inner Join",
				"tbl_graph_metrics",
				"On tbl_graphs.id = tbl_graph_metrics.id_Graph",
				"Where",
				"tbl_graphs.metric_id =" + metric + " and tbl_graphs.graph_type = 2 Limit 1) And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_graphs1.metric_id = " + metric + " And",
				"tbl_graphs1.graph_type = 2 And",
				"tbl_metrics2.ID = " + metric + " And",
				"tbl_graphs2.metric_id = " + metric + " AND",
				"tbl_graphs2.graph_type = 2",
				"ORDER BY",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 0 Then tbl_roe_analysis_ltm2.Value",
				"End Desc,",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 1 Then tbl_roe_analysis_ltm2.Value",
				"End "
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
			//////////console.log(query);

			var decider = [
				"Select",
				"tbl_graphs.id as id,",
				"tbl_graphs.metric_id as metric_id,",
				"tbl_graphs.graph_type as graph_type,",
				"tbl_graphs.Graph_Name as graph_name,",
				"tbl_graphs.Rank as rank",
				"From",
				"tbl_graphs",
				"Where",
				"tbl_graphs.metric_id =" + metric + " Order By",
				"tbl_graphs.Rank"
			].join(' ');

			DB.query(decider, function(err1, dec) {
				var has_spider = false;
				dec.forEach(function(g) {
					if (g.graph_type == 2) {
						has_spider = true;
					}
				});


				if (has_spider) {

					DB.query(query, function(err1, result) {
						(err1);
						if (!err1) {
							var firstrow = result[0];

							var yaxis_name = firstrow['YAxis_Name'];
							var xaxis_name = firstrow['XAxis_Name'];
							var YHigher_Good_or_Bad = firstrow["YHigher_Good_or_Bad"];
							var XHigher_Good_or_Bad = firstrow["XHigher_Good_or_Bad"];

							var yaverage = 0;
							var xaverage = 0;
							var count = 0;

							var ret = [];
							var act = [];

							result.forEach(function(row) {

								act.push(row['Actual']);

								if (row['value'] == null) {
									yaverage = yaverage + 0;
								} else {
									yaverage = yaverage + parseFloat(row['value']);
								}

								if (row['value1'] == null) {
									xaverage = xaverage + 0;
								} else {
									xaverage = xaverage + parseFloat(row['value1']);
								}

								count = count + 1;
							});

							yaverage = (yaverage / count).toFixed(2);
							xaverage = (xaverage / count).toFixed(2);


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
										////////console.log(">half");
										var baseVal = arr[len - base];
										var baseValPlus = arr[len - base - 1];
										var odd = baseVal - (rest * (baseVal - baseValPlus));
									}

									if (quart < 0.5) {
										////////console.log("<half");
										var baseVal = arr[base];
										var baseValPlus = arr[base + 1];
										var odd = baseVal + (rest * (baseValPlus - baseVal));
									}

									if (quart == 0.5) {
										////////console.log("half");
										var baseVal = arr[base];
										var baseValPlus = arr[base + 1];
										if (rest == 0) {
											var odd = (baseValPlus + baseVal) / 2;
										} else {
											var odd = baseValPlus;
										}
									}

									/*//////console.log(arr);
									//////console.log('qt' + quart);
									//////console.log('pos' + pos);
									//////console.log('base' + base);
									//////console.log('baseVal' + baseVal);
									//////console.log('baseValPlus' + baseValPlus);
									//////console.log('rest' + rest);
									//////console.log('odd' + odd);
									//////console.log('even' + arr[base]);
									//////console.log('rest' + rest);*/
									if (rest > 0) {
										return (odd);
									} else {
										return (odd);
									}
								}
							};



							if (result[0]['HGB'] == 0) {
								var seg_25 = Quartile(act, 0.25);
								var seg_50 = Quartile(act, 0.50);
								var seg_75 = Quartile(act, 0.75);
							} else {
								var seg_25 = Quartile(act, 0.75);
								var seg_50 = Quartile(act, 0.50);
								var seg_75 = Quartile(act, 0.25);
							}


							result.forEach(function(row) {
								if (r) {
									var userid = r[0].USERID;
									if (userid != 1) {

										if (row['HGB'] == 0) {
											if (row['Actual'] > seg_75) {
												var color = "Green";
											} else if (row['Actual'] >= seg_50) {
												var color = "LightGreen";
											} else if (row['Actual'] >= seg_25) {
												var color = "Orange";
											} else {
												var color = "Red";
											}
										} else {
											if (row['Actual'] < seg_75) {
												var color = "Green";
											} else if (row['Actual'] <= seg_50) {
												var color = "LightGreen";
											} else if (row['Actual'] <= seg_25) {
												var color = "Orange";
											} else {
												var color = "Red";
											}
										}
									} else {
										//(row.PCT_Color);
										var color = row.PCT_Color;
									}
								}
								var d = {
									Company: row.Client_Name,
									y: row.value,
									x: row.value1,
									yaxis: row.YAxis_Name,
									xaxis: row.XAxis_Name,
									yaxisavg: yaverage,
									xaxisavg: xaverage,
									yaxishgb: YHigher_Good_or_Bad,
									xaxishgb: XHigher_Good_or_Bad,
									color: color,
									//lastBullet: "none",
									metric_name: row.metric_name,
									period: row.period,
									value: row.Actual
								}

								/*
								                            if(!row.value){
								                                d.y2 = row.value3;
								                            }else{
								                                d.y = row.value;
								                            }

								                            if(!row.value1){
								                                d.x2 = row.value4;
								                                d.value2 = 0.2;
								                            }else{
								                                d.x = row.value1;
								                                d.value = 0.2;
								                            }
								*/
								ret.push(d);

							});
							//(ret);
							res.send(ret);
						} else {
							res.send([]);
						}
					});
				} else {
					res.send([]);
				}
			});
		});
	},

	industryXYPCT: function(req, res) {
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;
		var company = req.querystring.company;
		var segment = req.querystring.segment || 11;
		var graph = req.querystring.graph || 2;

		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {

			var query = [
				"Select Distinct",
				"tbl_roe_analysis_ltm_pct.ID,",
				"If(tbl_metrics.Format = '%', format(tbl_roe_analysis_ltm_pct.Value*100,2), format(tbl_roe_analysis_ltm_pct.Value,2))  as value,",
				"If(tbl_metrics1.Format = '%',format(tbl_roe_analysis_ltm_pct1.Value*100,2), format(tbl_roe_analysis_ltm_pct1.Value,2)) As value1,",
				"Concat(SubString_Index(tbl_Client_Segment_YTD.Name, ' ', 4)) As Client_Name,",
				"tbl_metrics.Metric_Name As YAxis_Name,",
				"tbl_metrics.Higher_Good_or_Bad As YHigher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"tbl_metrics1.Metric_Name As XAxis_Name,",
				"tbl_metrics1.Higher_Good_or_Bad As XHigher_Good_or_Bad,",
				"tbl_metrics1.Format As Format1,",
				"tbl_graphs.metric_id,",
				"tbl_graphs.graph_type,",
				"tbl_metrics2.Metric_Name as metric_name,",
				"tbl_roe_analysis_ltm_pct.Value As Value2,",
				"tbl_period.current_period_name as period,",
				"If(tbl_metrics2.Higher_Good_or_Bad = 1, If(tbl_roe_analysis_ltm_pct2.Value >=",
				"0.75, 'Green', If(tbl_roe_analysis_ltm_pct2.Value >= 0.5, 'LightGreen',",
				"If(tbl_roe_analysis_ltm_pct2.Value >= 0.25, 'Orange', 'Red'))), If((1 -",
				"tbl_roe_analysis_ltm_pct2.Value) >= 0.75, 'Green', If((1 -",
				"tbl_roe_analysis_ltm_pct2.Value) >= 0.5, 'LightGreen', If((1 -",
				"tbl_roe_analysis_ltm_pct2.Value) >= 0.25, 'Orange', 'Red')))) As PCT_Color",
				"From",
				"tbl_roe_analysis_ltm_pct Inner Join",
				"tbl_Client_Segment_YTD",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct.ID Inner Join",
				"tbl_roe_analysis_ltm_pct tbl_roe_analysis_ltm_pct1",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct1.ID Inner Join",
				"tbl_metrics",
				"On tbl_metrics.Metric = tbl_roe_analysis_ltm_pct.Metric Inner Join",
				"tbl_graph_metrics",
				"On tbl_graph_metrics.id_metric = tbl_metrics.ID Inner Join",
				"tbl_metrics tbl_metrics1",
				"On tbl_metrics1.Metric = tbl_roe_analysis_ltm_pct1.Metric Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_Client_Segment_YTD.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm_pct.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm_pct1.Period Inner Join",
				"tbl_roe_analysis_ltm_pct tbl_roe_analysis_ltm_pct2",
				"On tbl_roe_analysis_ltm_pct2.Period = tbl_period.Current_Period And",
				"tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct2.ID Inner Join",
				"tbl_metrics tbl_metrics2",
				"On tbl_metrics2.Metric = tbl_roe_analysis_ltm_pct2.Metric Inner Join",
				"tbl_graphs",
				"On tbl_metrics2.ID = tbl_graphs.metric_id Inner Join",
				"tbl_graph_metrics tbl_graph_metrics2",
				"On tbl_graphs.id = tbl_graph_metrics2.id_Graph Inner Join",
				"tbl_graph_metrics tbl_graph_metrics1",
				"On tbl_metrics1.ID = tbl_graph_metrics1.id_metric Inner Join",
				"tbl_graphs tbl_graphs1",
				"On tbl_graphs1.id = tbl_graph_metrics1.id_Graph Inner Join",
				"tbl_graphs tbl_graphs2",
				"On tbl_graphs2.id = tbl_graph_metrics.id_Graph",
				"Where",
				"If(tbl_roe_analysis_ltm_pct.Metric <> tbl_roe_analysis_ltm_pct1.Metric, 1,",
				"0) = 1 And",
				"tbl_Client_Segment_YTD.Prev_YE_Spec_Code = " + segment + " And",
				"tbl_graphs2.metric_id = " + metric + " And",
				"tbl_graphs2.graph_type = 2 And",
				"tbl_graphs1.metric_id = " + metric + " And",
				"tbl_graphs1.graph_type = 2 And",
				/*"Case When " + segment + " = 11 Then tbl_Client_Segment_YTD.State = (Select",
				"tbl_Client_Segment_YTD.State",
				"From",
				"tbl_Client_Segment_YTD Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_Client_Segment_YTD.Period",
				"Where",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_Client_Segment_YTD.Prev_YE_Spec_Code = " + segment + ") Else 1 = 1 End = True And", */
				"tbl_graph_metrics.id_metric = (Select",
				"tbl_graph_metrics.id_metric",
				"From",
				"tbl_graph_metrics Inner Join",
				"tbl_graphs",
				"On tbl_graphs.id = tbl_graph_metrics.id_Graph",
				"Where",
				"tbl_graphs.metric_id = " + metric + " and tbl_graphs.graph_type=2",
				"Limit 1) And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_graphs.metric_id = " + metric + " And",
				"tbl_graphs.graph_type = 2 And",
				"tbl_metrics2.ID =" + metric,
			].join(' ');

			var customQuery = [
				"Select Distinct",
				"tbl_roe_analysis_ltm.ID,",
				"If(tbl_metrics.Format = '%', format(tbl_roe_analysis_ltm.Value*100,2), format(tbl_roe_analysis_ltm.Value,2))  as value,",
				"If(tbl_metrics1.Format = '%',format(tbl_roe_analysis_ltm1.Value*100,2), format(tbl_roe_analysis_ltm1.Value,2)) As value1,",
				"tbl_roe_analysis_ltm2.Value as Actual,",
				"concat(SUBSTRING_INDEX(tbl_client_segment_ytd.Name, ' ', 4)) As Client_Name,",
				"tbl_metrics.Metric_Name as YAxis_Name,",
				"tbl_metrics.Higher_Good_or_Bad As YHigher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"tbl_metrics1.Metric_Name As XAxis_Name,",
				"tbl_metrics1.Higher_Good_or_Bad As XHigher_Good_or_Bad,",
				"tbl_metrics1.Format As Format1,",
				"tbl_segment.segment as segment,",
				"tbl_roe_analysis_ltm2.Value as targetMetric,",
				"right(tbl_period.current_period_name,4) as period,",
				"tbl_metrics3.metric_name as metric_name,",
				"tbl_metrics3.Higher_Good_or_Bad As HGB",
				"From",
				"tbl_roe_analysis_ltm Inner Join",
				"tbl_Client_Segment_YTD",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm.ID Inner Join",
				"tbl_roe_analysis_ltm tbl_roe_analysis_ltm1",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm1.ID Inner Join",
				"tbl_metrics",
				"On tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric Inner Join",
				"tbl_metrics tbl_metrics1",
				"On tbl_metrics1.Metric = tbl_roe_analysis_ltm1.Metric Inner Join",
				"tbl_graph_metrics tbl_graph_metrics1",
				"On tbl_graph_metrics1.id_metric = tbl_metrics1.ID Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm1.Period And",
				"tbl_period.Current_Period = tbl_Client_Segment_YTD.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
				"tbl_roe_analysis_ltm tbl_roe_analysis_ltm2",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm2.Period And",
				"tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm2.ID Inner Join",
				"tbl_metrics tbl_metrics2",
				"On tbl_metrics2.Metric = tbl_roe_analysis_ltm2.Metric Inner Join",
				"tbl_graph_metrics",
				"On tbl_graph_metrics.id_metric = tbl_metrics.ID Inner Join",
				"tbl_graphs tbl_graphs1",
				"On tbl_graphs1.id = tbl_graph_metrics.id_Graph Inner Join",
				"tbl_graphs tbl_graphs2",
				"On tbl_graphs2.id = tbl_graph_metrics1.id_Graph inner join",
				"tbl_metrics tbl_metrics3",
				"On tbl_metrics3.ID = tbl_graphs2.metric_id inner join",
				"tbl_segment_client on tbl_segment_client.id_client = tbl_client_segment_ytd.id inner join",
				"tbl_segment on tbl_segment_client.id_segment = tbl_segment.id",
				"Where",
				"If(tbl_roe_analysis_ltm.Metric <> tbl_roe_analysis_ltm1.Metric, 1, 0) = 1 And",
				"tbl_segment.id = " + segment + " And",
				"tbl_graph_metrics.id_metric = (Select",
				"tbl_graph_metrics.id_metric",
				"From",
				"tbl_graphs Inner Join",
				"tbl_graph_metrics",
				"On tbl_graphs.id = tbl_graph_metrics.id_Graph",
				"Where",
				"tbl_graphs.metric_id =" + metric + " and tbl_graphs.graph_type = 2 Limit 1) And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_graphs1.metric_id = " + metric + " And",
				"tbl_graphs1.graph_type = 2 And",
				"tbl_metrics2.ID = " + metric + " And",
				"tbl_graphs2.metric_id = " + metric + " AND",
				"tbl_graphs2.graph_type = 2",
				"ORDER BY",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 0 Then tbl_roe_analysis_ltm2.Value",
				"End Desc,",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 1 Then tbl_roe_analysis_ltm2.Value",
				"End "
			].join(' ');

			if (r) {
				var userid = r[0].USERID;
				if (userid == 1) {
					query = query;
				} else {
					query = customQuery;
				}
			} else {
				query = query;
			}
			//(query);


			var decider = [
				"Select",
				"tbl_graphs.id as id,",
				"tbl_graphs.metric_id as metric_id,",
				"tbl_graphs.graph_type as graph_type,",
				"tbl_graphs.Graph_Name as graph_name,",
				"tbl_graphs.Rank as rank",
				"From",
				"tbl_graphs",
				"Where",
				"tbl_graphs.metric_id =" + metric + " Order By",
				"tbl_graphs.Rank"
			].join(' ');

			DB.query(decider, function(err1, dec) {
				var has_spider = false;
				dec.forEach(function(g) {
					if (g.graph_type == 2) {
						has_spider = true;
					}
				});


				if (has_spider) {

					DB.query(query, function(err1, result) {
						if (!err1) {
							var firstrow = result[0];

							var yaxis_name = firstrow['YAxis_Name'];
							var xaxis_name = firstrow['XAxis_Name'];
							var YHigher_Good_or_Bad = firstrow["YHigher_Good_or_Bad"];
							var XHigher_Good_or_Bad = firstrow["XHigher_Good_or_Bad"];
							var yFormat = firstrow["Format"];
							var xFormat = firstrow['Format1'];
							var yaverage = 0;
							var xaverage = 0;
							var count = 0;




							var ret = [];
							var act = [];

							var len = result.length;
							var i = 1;

							if (r) {
								var userid = r[0].USERID;
								if (userid != 1) {

									if (YHigher_Good_or_Bad == 0) {
										result.sort(function(a, b) {
											return a.value - b.value;
										});
									} else {
										result.sort(function(a, b) {
											return b.value - a.value;
										});
									}
								}
							}

							result.forEach(function(row) {
								act.push(row['Actual']);
								//(r);
								if (r) {
									//////////console.log("does this work?");
									var userid = r[0].USERID;
									if (userid != 1) {
										result[i - 1]['value_pct'] = [];
										//////////console.log('i: ' + i + ' len: ' + len);
										result[i - 1]['value_pct'].push(((i - 1) / (len - 1) * 100)).toFixed(2);
									}
								}
								if (!row['value']) {
									yaverage = yaverage + 0;
								} else {
									yaverage = yaverage + row['value'];
								}

								if (!row['value3']) {
									yaverage = yaverage + 0;
								} else {
									yaverage = yaverage + row['value3'];
								}
								if (!row['value1']) {
									xaverage = xaverage + 0;
								} else {
									xaverage = xaverage + row['value1'];
								}
								if (!row['value4']) {
									xaverage = xaverage + 0;
								} else {
									xaverage = xaverage + row['value4'];
								}
								count = count + 1;
								i++;
							});

							yaverage = (yaverage / count).toFixed(2);
							xaverage = (xaverage / count).toFixed(2);
							//////////console.log(result);
							if (r) {
								var userid = r[0].USERID;
								if (userid != 1) {

									if (XHigher_Good_or_Bad == 0) {
										result.sort(function(a, b) {
											return a.value1 - b.value1;
										});
									} else {
										result.sort(function(a, b) {
											return b.value1 - a.value1;
										});
									}

									var i = 1;
									result.forEach(function(row) {
										result[i - 1]['value1_pct'] = [];
										result[i - 1]['value1_pct'].push(((i - 1) / (len - 1) * 100).toFixed(2));
										i++;
									});
								}
							}
							//////////console.log(result);

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
										////////console.log(">half");
										var baseVal = arr[len - base];
										var baseValPlus = arr[len - base - 1];
										var odd = baseVal - (rest * (baseVal - baseValPlus));
									}

									if (quart < 0.5) {
										////////console.log("<half");
										var baseVal = arr[base];
										var baseValPlus = arr[base + 1];
										var odd = baseVal + (rest * (baseValPlus - baseVal));
									}

									if (quart == 0.5) {
										////////console.log("half");
										var baseVal = arr[base];
										var baseValPlus = arr[base + 1];
										if (rest == 0) {
											var odd = (baseValPlus + baseVal) / 2;
										} else {
											var odd = baseValPlus;
										}
									}

									/*//////console.log(arr);
									//////console.log('qt' + quart);
									//////console.log('pos' + pos);
									//////console.log('base' + base);
									//////console.log('baseVal' + baseVal);
									//////console.log('baseValPlus' + baseValPlus);
									//////console.log('rest' + rest);
									//////console.log('odd' + odd);
									//////console.log('even' + arr[base]);
									//////console.log('rest' + rest);*/
									if (rest > 0) {
										return (odd);
									} else {
										return (odd);
									}
								}
							};



							if (result[0]['HGB'] == 0) {
								var seg_25 = Quartile(act, 0.25);
								var seg_50 = Quartile(act, 0.50);
								var seg_75 = Quartile(act, 0.75);
							} else {
								var seg_25 = Quartile(act, 0.75);
								var seg_50 = Quartile(act, 0.50);
								var seg_75 = Quartile(act, 0.25);
							}

							result.forEach(function(row) {
								if (r) {
									var userid = r[0].USERID;
									if (userid != 1) {
										//////////console.log(row['Actual']);
										var value_pct = row['value_pct'];
										var value1_pct = row['value1_pct'];
										if (row['HGB'] == 0) {
											if (row['Actual'] > seg_75) {
												var color = "Green";
											} else if (row['Actual'] >= seg_50) {
												var color = "LightGreen";
											} else if (row['Actual'] >= seg_25) {
												var color = "Orange";
											} else {
												var color = "Red";
											}
										} else {
											if (row['Actual'] < seg_75) {
												var color = "Green";
											} else if (row['Actual'] <= seg_50) {
												var color = "LightGreen";
											} else if (row['Actual'] <= seg_25) {
												var color = "Orange";
											} else {
												var color = "Red";
											}
										}
									} else {
										var color = row.PCT_Color;
										if (YHigher_Good_or_Bad == 0) {
											if (yFormat != '%') {
												var value_pct = 100 - (row.value * 100);
											} else {
												var value_pct = 100 - (row.value);
											}
										} else {
											if (yFormat != '%') {
												var value_pct = row.value * 100;
											} else {
												var value_pct = row.value;
											}
										}
										if (XHigher_Good_or_Bad == 0) {
											if (xFormat != '%') {
												var value1_pct = 100 - (row.value1 * 100);
											} else {
												var value1_pct = 100 - (row.value1);
											}
										} else {
											if (xFormat != '%') {
												var value1_pct = row.value1 * 100;
											} else {
												var value1_pct = row.value1;
											}
										}
									}
								}

								var d = {
									Company: row.Client_Name,
									yaxis: row.YAxis_Name,
									xaxis: row.XAxis_Name,
									y: value_pct,
									x: value1_pct,
									yaxisavg: yaverage,
									xaxisavg: xaverage,
									yaxishgb: YHigher_Good_or_Bad,
									xaxishgb: XHigher_Good_or_Bad,
									color: color,
									lastBullet: "lastBullet",
									metric_name: row.metric_name,
									period: row.period,
								}

								/*if (!row.value) {
									d.y2 = row.value3;
								} else {
									d.y = row.value;
								}

								if (!row.value1) {
									d.x2 = row.value4;
									d.value2 = 0.2;
								} else {
									d.x = row.value1;
									d.value = 0.2;
								}
*/
								ret.push(d);

							});

							res.send(ret);
						} else {
							res.send([]);
						}
					});
				} else {
					res.send([]);
				}
			});
		});
	},

	industryLine: function(req, res) {
		var segment = req.querystring.segment;
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;

		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {
			var query = [
				"Select Distinct",
				"tbl_screens.ID As Screen_ID,",
				"tbl_metrics.Metric As Metric,",
				"tbl_metrics.Format As Format,",
				"tbl_metrics.Metric_Name As metric,",
				"tbl_segment.segment as segment_name,",
				"tbl_period.Current_Period As Period,",
				"substr(tbl_period.Current_Period_Name,6,10) As Period_Name,",
				"If(tbl_metrics.Format = '%',",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_50 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_50 * 100, 2)),",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_50 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_50, 2))) As Avg,",
				"If(tbl_metrics.Format = '%', If(tbl_metrics.Higher_Good_or_Bad = 1,",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 * 100, 2)),",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 * 100, 2))),",
				"If(tbl_metrics.Higher_Good_or_Bad = 1,",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_25, 2)),",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_75, 2)))) As Top,",
				"If(tbl_metrics.Format = '%', If(tbl_metrics.Higher_Good_or_Bad = 1,",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 * 100, 2)),",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 * 100, 2))),",
				"If(tbl_metrics.Higher_Good_or_Bad = 1,",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_75, 2)),",
				"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 Is Null, 0,",
				"Format(tbl_roe_analysis_ltm_pct_segment.segmentrank_25, 2)))) As Bottom",
				"From",
				"tbl_screens Inner Join",
				"tbl_screen_metrics On tbl_screen_metrics.id_screen = tbl_screens.ID Inner Join",
				"tbl_metrics On tbl_metrics.ID = tbl_screen_metrics.id_metric Inner Join",
				"tbl_roe_analysis_ltm_pct_segment On tbl_roe_analysis_ltm_pct_segment.Metric =",
				"tbl_metrics.Metric Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm_pct_segment.Period",
				"Inner Join",
				"tbl_segment On tbl_segment.ID = tbl_roe_analysis_ltm_pct_segment.Segment",
				"Where",
				"tbl_segment.ID = " + segment + " And",
				"tbl_screens.id = " + screen + " And",
				"tbl_metrics.id = " + metric + " And",
				"tbl_period.Last_10_Years < 11",
				"Order By",
				"tbl_period.last_10_years DESC"
			].join(' ');

			var customQuery = [
				"Select Distinct",
				"tbl_screens.ID As Screen_ID,",
				"tbl_metrics.Metric As Metric,",
				"tbl_metrics.Format As Format,",
				"tbl_metrics.Metric_Name As metric,",
				"tbl_metrics.Higher_Good_or_Bad as HGB,",
				"tbl_segment.segment as segment_name,",
				"tbl_period.Current_Period As Period,",
				"substr(tbl_period.Current_Period_Name,6,10) As Period_Name,",
				"tbl_roe_analysis_ltm.value as value",
				"From",
				"tbl_screens Inner Join",
				"tbl_screen_metrics On tbl_screen_metrics.id_screen = tbl_screens.ID Inner Join",
				"tbl_metrics On tbl_metrics.ID = tbl_screen_metrics.id_metric Inner Join",
				"tbl_roe_analysis_ltm On tbl_roe_analysis_ltm.Metric = tbl_metrics.Metric Inner Join",
				"tbl_period On tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
				"tbl_segment_client ON tbl_roe_analysis_ltm.id = tbl_segment_client.id_client INNER JOIN",
				"tbl_segment ON tbl_segment.ID = tbl_segment_client.id_segment",
				"Where",
				"tbl_segment.ID = " + segment + " And",
				"tbl_screens.id = " + screen + " And",
				"tbl_metrics.id = " + metric + " And",
				"tbl_period.Last_10_Years < 11",
				"Order By",
				"tbl_period.last_10_years DESC"
			].join(' ');

			var periodQuery = [
				"select",
				"current_period as period,",
				"substr(tbl_period.Current_Period_Name,6,10) As Period_Name",
				"From",
				"tbl_period",
				"where",
				"tbl_period.last_10_years <11",
				"Order By",
				"tbl_period.last_10_years DESC"
			].join(' ');

			if (r) {
				var userid = r[0].USERID;
				if (userid == 1) {
					query = query;
				} else {
					query = customQuery;
				}
			} else {
				query = query;
			}
			////////console.log(query);
			////////console.log(periodQuery);

			DB.query(query, function(err1, result) {
				DB.query(periodQuery, function(err1, periodResult) {

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
								////////console.log(">half");
								var baseVal = arr[len - base];
								var baseValPlus = arr[len - base - 1];
								var odd = baseVal - (rest * (baseVal - baseValPlus));
							}

							if (quart < 0.5) {
								////////console.log("<half");
								var baseVal = arr[base];
								var baseValPlus = arr[base + 1];
								var odd = baseVal + (rest * (baseValPlus - baseVal));
							}

							if (quart == 0.5) {
								////////console.log("half");
								var baseVal = arr[base];
								var baseValPlus = arr[base + 1];
								if (rest == 0) {
									var odd = (baseValPlus + baseVal) / 2;
								} else {
									var odd = baseValPlus;
								}
							}

							/*//////console.log(arr);
							//////console.log('qt' + quart);
							//////console.log('pos' + pos);
							//////console.log('base' + base);
							//////console.log('baseVal' + baseVal);
							//////console.log('baseValPlus' + baseValPlus);
							//////console.log('rest' + rest);
							//////console.log('odd' + odd);
							//////console.log('even' + arr[base]);
							//////console.log('rest' + rest);*/
							if (rest > 0) {
								return (odd);
							} else {
								return (odd);
							}
						}
					};


					ret = [];
					var i = 0;

					periodResult.forEach(function(periodRow) {
							var pct = {};
							pct.value = [];
							pct.bottom = [];
							pct.avg = [];
							pct.top = []

							result.forEach(function(row) {
								if (periodRow.period == row.Period) {
									pct.value.push(parseFloat(row.value));
									pct.bottom.push(row.Bottom);
									pct.avg.push(row.Avg);
									pct.top.push(row.Top);
								}
							})

							if (r) {
								var userid = r[0].USERID;
								if (userid != 1) {
									//////////console.log("test: " + pct.value);

									if (result[0]['Format'] == "%") {
										if (result[0]['HGB'] == 0) {
											var seg_25_pct = (Quartile(pct.value, 0.25) * 100).toFixed(2);
											var seg_50_pct = (Quartile(pct.value, 0.50) * 100).toFixed(2);
											var seg_75_pct = (Quartile(pct.value, 0.75) * 100).toFixed(2);
										} else {
											var seg_25_pct = (Quartile(pct.value, 0.75) * 100).toFixed(2);
											var seg_50_pct = (Quartile(pct.value, 0.50) * 100).toFixed(2);
											var seg_75_pct = (Quartile(pct.value, 0.25) * 100).toFixed(2);
										}
									} else {
										if (result[0]['HGB'] == 0) {
											var seg_25_pct = (Quartile(pct.value, 0.25)).toFixed(2);
											var seg_50_pct = (Quartile(pct.value, 0.50)).toFixed(2);
											var seg_75_pct = (Quartile(pct.value, 0.75)).toFixed(2);
										} else {
											var seg_25_pct = (Quartile(pct.value, 0.75)).toFixed(2);
											var seg_50_pct = (Quartile(pct.value, 0.50)).toFixed(2);
											var seg_75_pct = (Quartile(pct.value, 0.25)).toFixed(2);
										}
									}
								}
							}

							if (r) {
								var userid = r[0].USERID;
								if (userid != 1) {
									var seg_25 = seg_25_pct;
									var seg_50 = seg_50_pct;
									var seg_75 = seg_75_pct;
								} else {
									////////console.log("standard: " + pct['bottom'][i]);
									var seg_25 = pct['bottom'];
									var seg_50 = pct['avg'];
									var seg_75 = pct['top'];
								}
							}
							ret.push({
								segment_description: result[0]['segment_name'],
								Period: periodRow.Period_Name,
								metric_description: result[0]['metric'],
								format: result[0]['Format'],
								Bottom: seg_25,
								Avg: seg_50,
								Top: seg_75
							});
							i++;
						})
						//////////console.log(ret);
					res.send(ret);
				})


			});
		});
	},

	industryBarLine: function(req, res) {
		res.send({});
	},

	industryBar: function(req, res) {
		var segment = req.querystring.segment;
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;

		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {
			var query = [
				"Select distinct",
				"tbl_client_segment_ytd.ID As Client_ID,",
				"If(tbl_metrics.Higher_Good_or_Bad = 1, if(tbl_roe_analysis_ltm_pct.Value <= 0.25, 'Red', if(tbl_roe_analysis_ltm_pct.Value <= 0.5, 'Orange', if(tbl_roe_analysis_ltm_pct.Value <= 0.75, 'LightGreen', 'Green'))), if((1-tbl_roe_analysis_ltm_pct.Value) < 0.25, 'Red', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.5, 'Orange', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.75, 'LightGreen', 'Green')))) As Column_color,",
				"concat(SUBSTRING_INDEX(tbl_client_segment_ytd.Name, ' ', 4)) As Client_Name,",
				"tbl_screens.ID As Screen_ID,",
				"tbl_metrics.format As Format,",
				"tbl_metrics.Metric As Metric,",
				"tbl_metrics.Metric_Name as Metric_Name,",
				"tbl_period.Current_Period As Period,",
				"substr(tbl_period.Current_Period_Name,6,10) As Period_Name,",
				"If(tbl_metrics.Format = '%', format(tbl_roe_analysis_ltm.Value*100,2), format(tbl_roe_analysis_ltm.Value,2))  as Value,",
				"tbl_segment.ID,",
				"tbl_period.Most_Recent_Period,",
				"tbl_metrics.Higher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"tbl_segment.segment as Segment",
				"From",
				"tbl_screens Inner Join",
				"tbl_screen_metrics On tbl_screen_metrics.id_screen = tbl_screens.ID Inner Join",
				"tbl_metrics On tbl_metrics.ID = tbl_screen_metrics.id_metric Inner Join",
				"tbl_roe_analysis_ltm On tbl_roe_analysis_ltm.Metric = tbl_metrics.Metric",
				"Inner Join",
				"tbl_client_segment_ytd On tbl_roe_analysis_ltm.ID = tbl_client_segment_ytd.ID",
				"Inner Join",
				"tbl_period On tbl_client_segment_ytd.Period = tbl_period.Current_Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
				"tbl_segment_client on tbl_segment_client.id_client = tbl_client_segment_ytd.id Inner Join",
				"tbl_segment on tbl_segment.id = tbl_segment_client.id_segment inner join",
				"tbl_roe_analysis_ltm_pct On tbl_roe_analysis_ltm_pct.ID = tbl_Client_Segment_YTD.ID And",
				"tbl_roe_analysis_ltm_pct.Period = tbl_period.Current_Period And",
				"tbl_roe_analysis_ltm_pct.Metric = tbl_metrics.Metric",
				"Where",
				"tbl_screens.ID = " + screen + " And",
				"tbl_metrics.id = " + metric + " And",
				"tbl_segment.ID = " + segment + " And",
				"tbl_period.Most_Recent_Period = 1 AND",
				"tbl_roe_analysis_ltm.Value is not null",
				"Order By",
				"Case When tbl_metrics.Higher_Good_or_Bad = 0 Then tbl_roe_analysis_ltm.Value END DESC,",
				"Case When tbl_metrics.Higher_Good_or_Bad = 1 Then tbl_roe_analysis_ltm.Value END ASC"
			].join(" ");

			////////console.log(query);

			DB.query(query, function(err1, result) {

				var Quartile = function(arr, quart) {
					/*var pos = (arr.length - 1) * quart;
					//////////console.log(pos);
					//arr = arr.sort();
					var base = Math.floor(pos);

					//////////console.log(base);
					var rest = pos - base;
					////////console.log(arr[base] + arr[base + 1]);
					try {
						if (arr[base + 1]) {
							////////console.log((arr[base] + arr[base + 1]) / 2);
							return ((arr[base] + arr[base + 1]) / 2);
						} else {
							return (arr[base]);
						}
					} catch (e) {
						return parseFloat(arr[base]);
					}
				};*/
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
							////////console.log(">half");
							var baseVal = arr[len - base];
							var baseValPlus = arr[len - base - 1];
							var odd = baseVal - (rest * (baseVal - baseValPlus));
						}

						if (quart < 0.5) {
							////////console.log("<half");
							var baseVal = arr[base];
							var baseValPlus = arr[base + 1];
							var odd = baseVal + (rest * (baseValPlus - baseVal));
						}

						if (quart == 0.5) {
							////////console.log("half");
							var baseVal = arr[base];
							var baseValPlus = arr[base + 1];
							if (rest == 0) {
								var odd = (baseValPlus + baseVal) / 2;
							} else {
								var odd = baseValPlus;
							}
						}

						/*//////console.log(arr);
						//////console.log('qt' + quart);
						//////console.log('pos' + pos);
						//////console.log('base' + base);
						//////console.log('baseVal' + baseVal);
						//////console.log('baseValPlus' + baseValPlus);
						//////console.log('rest' + rest);
						//////console.log('odd' + odd);
						//////console.log('even' + arr[base]);
						//////console.log('rest' + rest);*/
						if (rest > 0) {
							return (odd);
						} else {
							return (odd);
						}
					}
				};
				if (result.length > 0) {
					if (r) {
						var userid = r[0].USERID;
						if (userid != 1) {
							var value = [];
							result.forEach(function(row) {
									value.push(parseFloat(row.Value));
								})
								//////////console.log("test: " + value);
							if (result[0]['Higher_Good_or_Bad'] == 0) {
								var seg_25_pct = Quartile(value, 0.25);
								var seg_50_pct = Quartile(value, 0.50);
								var seg_75_pct = Quartile(value, 0.75);
							} else {
								var seg_25_pct = Quartile(value, 0.75);
								var seg_50_pct = Quartile(value, 0.50);
								var seg_75_pct = Quartile(value, 0.25);
							}
						}
					}
				}
				var ret = [];
				//////////console.log("hello"+seg_75_pct);
				result.forEach(function(row) {

					if (r) {
						var userid = r[0].USERID;
						if (userid != 1) {
							if (row['Higher_Good_or_Bad'] == 0) {
								//////console.log("seg750: " + seg_75_pct + " value: " + row.Value+" seg25: "+seg_25_pct+" hbg:"+row.Higher_Good_or_Bad);
								if (parseFloat(row['Value']) >= seg_75_pct) {
									var color = "Green";
								} else if (parseFloat(row['Value']) >= seg_50_pct) {
									var color = "LightGreen";
								} else if (parseFloat(row['Value']) > seg_25_pct) {
									var color = "Orange";
								} else {
									var color = "Red";
								}
							} else {
								////////console.log("seg751: " + seg_75_pct + " value: " + row.Value);
								if (row['Value'] <= seg_75_pct) {
									var color = "Green";
								} else if (row['Value'] <= seg_50_pct) {
									var color = "LightGreen";
								} else if (row['Value'] < seg_25_pct) {
									var color = "Orange";
								} else {
									var color = "Red";
								}
							}
						} else {
							var color = row.Column_color;
						}
					}
					ret.push({
						Company: row.Client_Name,
						Color: color,
						format: row.Format,
						Metric: row.Metric_Name,
						Segment: row.Segment,
						Value: row.Value,
						ID: row.Client_ID,
						Period: row.Period_Name
					})
				})
				res.send(ret);
			});
		});
	},

	individualLine: function(req, res) {
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;
		var company = req.querystring.company;
		var segment = req.querystring.segment;

		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {
			if (r) {
				var userid = r[0].USERID;
				if (userid == 1) {
					internals.GraphsController.prepopGraphs(req, res);
				} else {
					internals.GraphsController.realTimeGraphs(req, res);
				}
			} else {
				internals.IndividualController.prepopGraphs(req, res);
			}
		});

	},

	prepopGraphs: function(req, res) {
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;
		var company = req.querystring.company;

		var query = [
			"Select Distinct",
			"tbl_client_segment_ytd.ID As Client_ID,",
			"Concat(SubString_Index(tbl_client_segment_ytd.Name, ' ', 4)) As Client_Name,",
			"tbl_screens.ID As Screen_ID,",
			"tbl_metrics.Metric As Metric,",
			"tbl_metrics.Format As Format,",
			"tbl_metrics.Metric_Name As metric_name,",
			"right(tbl_period.Current_Period_Name,4) As Period,",
			"If(tbl_metrics.Format = '%', If(tbl_roe_analysis_ltm.Value Is Null, 0,",
			"format(tbl_roe_analysis_ltm.Value * 100, 1)), If(tbl_roe_analysis_ltm.Value Is",
			"Null, 0, round(tbl_roe_analysis_ltm.Value, 1))) As Value,",
			"If(tbl_metrics.Format = '%', If(tbl_roe_analysis_ltm_pct_segment.segmentrank_50 Is Null, 0,",
			"format(tbl_roe_analysis_ltm_pct_segment.segmentrank_50*100, 2 )), If(tbl_roe_analysis_ltm_pct_segment.segmentrank_50 Is Null, 0,",
			"round(tbl_roe_analysis_ltm_pct_segment.segmentrank_50, 2))) As Avg,",
			"If(tbl_metrics.Format = '%', If(tbl_metrics.Higher_Good_or_Bad = 1,",
			"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 Is Null, 0,",
			"format(tbl_roe_analysis_ltm_pct_segment.segmentrank_25*100,2)),",
			"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 Is Null, 0,",
			"round(tbl_roe_analysis_ltm_pct_segment.segmentrank_75*100, 2))),",
			"If(tbl_metrics.Higher_Good_or_Bad = 1, If(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 Is Null, 0,",
			"format(tbl_roe_analysis_ltm_pct_segment.segmentrank_25,2)),",
			"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 Is Null, 0,",
			"round(tbl_roe_analysis_ltm_pct_segment.segmentrank_75, 2))))  As Top,",
			"If(tbl_metrics.Format = '%', If(tbl_metrics.Higher_Good_or_Bad = 1,",
			"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 Is Null, 0,",
			"format(tbl_roe_analysis_ltm_pct_segment.segmentrank_75*100,2)),",
			"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 Is Null, 0,",
			"format(tbl_roe_analysis_ltm_pct_segment.segmentrank_25*100, 2))),",
			"If(tbl_metrics.Higher_Good_or_Bad = 1, If(tbl_roe_analysis_ltm_pct_segment.segmentrank_75 Is Null, 0,",
			"round(tbl_roe_analysis_ltm_pct_segment.segmentrank_75,2)),",
			"If(tbl_roe_analysis_ltm_pct_segment.segmentrank_25 Is Null, 0,",
			"round(tbl_roe_analysis_ltm_pct_segment.segmentrank_25, 2)))) As Bottom,",
			"Convert(0, Unsigned Integer) AS Base",
			"From",
			"tbl_screens Inner Join",
			"tbl_screen_metrics On tbl_screen_metrics.id_screen = tbl_screens.ID Inner Join",
			"tbl_metrics On tbl_metrics.ID = tbl_screen_metrics.id_metric Inner Join",
			"tbl_roe_analysis_ltm_pct_segment On tbl_roe_analysis_ltm_pct_segment.Metric =",
			"tbl_metrics.Metric Inner Join",
			"tbl_client_segment_ytd On tbl_roe_analysis_ltm_pct_segment.Segment =",
			"tbl_client_segment_ytd.Prev_YE_Spec_Code Inner Join",
			"tbl_period",
			"On tbl_period.Current_Period = tbl_roe_analysis_ltm_pct_segment.Period And",
			"tbl_client_segment_ytd.Period = tbl_period.Current_Period Inner Join",
			"tbl_roe_analysis_ltm On tbl_roe_analysis_ltm.ID = tbl_client_segment_ytd.ID",
			"And tbl_period.Current_Period = tbl_roe_analysis_ltm.Period And",
			"tbl_roe_analysis_ltm.Metric = tbl_metrics.Metric",
			"Where",
			"tbl_client_segment_ytd.ID = " + company + " And",
			"tbl_screens.id = " + screen + " And",
			"tbl_metrics.id = " + metric + " And",
			"tbl_period.Last_10_Years < 17",
			"Order By",
			"tbl_period.last_10_years DESC"
		].join(' ');


		DB.query(query, function(err1, result) {
			var ret = [];
			result.forEach(function(row) {
				ret.push({
					Period: row.Period,
					Value: row.Value,
					metric: row.metric_name,
					format: row.Format,
					Bottom: row.Bottom,
					Avg: row.Avg,
					Top: row.Top,
					Company: row.Client_Name,
					Base: row.Base
				});
			});
			res.send(ret);
		});
	},

	realTimeGraphs: function(req, res) {
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;
		var segment = req.querystring.segment;
		var company = req.querystring.company;


		var customQuery = [
			"select",
			"tbl_metrics.id as metricId,",
			"tbl_metrics.format as format,",
			"tbl_metrics.higher_good_or_bad as higherGoodOrBad,",
			"tbl_period.Current_Period as currentPeriod,",
			"tbl_roe_analysis_ltm.ID as customerId,",
			"tbl_segment.id as segmentId,",
			"tbl_segment.segment as segmentName,",
			"tbl_roe_analysis_ltm.value as value,",
			"tbl_metrics.Metric_Name as metricName,",
			"tbl_client_segment_ytd.Name as companyName",
			"from",
			"tbl_segment inner join",
			"tbl_segment_client on tbl_segment.id = tbl_segment_client.id_segment inner join",
			"tbl_roe_analysis_ltm",
			"on tbl_roe_analysis_ltm.id = tbl_segment_client.id_client inner join",
			"tbl_period",
			"on tbl_period.current_period = tbl_roe_analysis_ltm.period inner join",
			"tbl_metrics",
			"on tbl_metrics.metric = tbl_roe_analysis_ltm.metric inner join",
			"tbl_client_segment_ytd",
			"on tbl_client_Segment_ytd.id=tbl_segment_client.id_client and tbl_client_segment_ytd.period = tbl_period.current_period",
			"where",
			"tbl_period.last_10_years <17 and",
			"tbl_metrics.id=" + metric + " and",
			"tbl_segment.id =" + segment + " ",
			"order by",
			"tbl_period.current_period,",
			"tbl_roe_analysis_ltm.value"
		].join(' ');
		//////console.log(customQuery);
		var periodQuery = [
			"select",
			"tbl_period.current_period as currentPeriod,",
			"right(tbl_period.current_period_name,4) as periodName",
			"from",
			"tbl_period",
			"where",
			"tbl_period.last_10_years < 17",
			"order by",
			"tbl_period.current_period"
		].join(' ');



		DB.query(customQuery, function(err1, customResult) {
			DB.query(periodQuery, function(err2, periodResult) {

				var periods = {};
				var custom = {};


				periodResult.forEach(function(periodRow) {
					for (var key in periodRow) {
						if (!periods[key]) {
							periods[key] = [];
						}
						periods[key].push(periodRow[key]);
					}
				});

				customResult.forEach(function(customRow) {
					for (var key in customRow) {
						if (!custom[key]) {
							custom[key] = [];
						}

						custom[key].push(customRow[key]);
					}

				});


				var j = periods.currentPeriod.length;

				var ret = {};
				ret['Period'] = [];
				ret['Value'] = [];
				ret['format'] = [];
				ret['metric'] = [];
				ret['Bottom'] = [];
				ret['Avg'] = [];
				ret['Top'] = [];
				ret['Bottom'] = [];
				ret['Company'] = [];
				ret['Base'] = [];

				for (i = 0; i < j; i++) {
					var l = custom.currentPeriod.length;

					var result = {};
					result['period'] = [];
					result['company'] = [];
					result['value'] = [];

					var companyResult = {};
					companyResult['period'] = [];
					companyResult['company'] = [];
					companyResult['value'] = [];

					for (k = 0; k < l; k++) {

						if (custom.currentPeriod[k] == periods.currentPeriod[i]) {
							result.period.push(custom.currentPeriod[k]);
							result.company.push(custom.customerId[k]);
							if (custom.format[0] == "%") {
								result.value.push(parseFloat(custom.value[k] * 100).toFixed(2));
							} else {
								result.value.push(parseFloat(custom.value[k]).toFixed(2));
							}
						}



						if (custom.currentPeriod[k] == periods.currentPeriod[i]) {
							if (custom.customerId[k] == company) {
								companyResult.period.push(custom.currentPeriod[k]);
								companyResult.company.push(custom.companyName[k]);
								if (custom.format[0] == "%") {
									companyResult.value.push(parseFloat(custom.value[k] * 100).toFixed(2));
								} else {
									companyResult.value.push(parseFloat(custom.value[k]).toFixed(2));
								}
							}
						}


					}


					if (result.period.length == 0) {
						result.period.push(periods.currentPeriod[i]);
						result.company.push(0);
						result.value.push(0);
					}

					if (companyResult.period.length == 0) {
						companyResult.period.push(periods.currentPeriod[i]);
						companyResult.company.push(company);
						companyResult.value.push(0);
					}

					//function to calculate quartiles of result set

					var Quartile = function(arr, quart) {
						////////console.log(arr);
						//var pos = (arr.length - 1) * quart;

						//////////console.log(pos);
						//arr = arr.sort();
						/*arr = arr.sort(function(a, b) {
							return a - b;
						});*/

						/*var base = Math.floor(pos);

						//////////console.log(base);
						var rest = pos - base;
						var baseVal=parseFloat(arr[base]).toFixed(2);
						var baseValPlus=parseFloat(arr[base+1]).toFixed(2);
						var odd = parseFloat((parseFloat(baseVal) + parseFloat(baseValPlus)) / 2).toFixed(2);

						if (rest > 0) {
							return (odd);
						} else {
							return (parseFloat(arr[base]).toFixed(2));
						}*/
						/*	} catch (e) {
								return parseFloat(arr[base+1]);
							}
						} else {
							try {

								if (arr[base 1]) {
									return ((arr[base] + arr[base + 1]) / 2);
								} else {
									return arr[base];
								}
							} catch (e) {
								return parseFloat(arr[base]);
							}
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
									////////console.log(">half");
									var baseVal = parseFloat(arr[len - base]).toFixed(2);
									var baseValPlus = parseFloat(arr[len - base - 1]).toFixed(2);
									var odd = parseFloat(baseVal - (rest * (baseVal - baseValPlus))).toFixed(2);
								}

								if (quart < 0.5) {
									////////console.log("<half");
									var baseVal = parseFloat(arr[base]).toFixed(2);
									var baseValPlus = parseFloat(arr[base + 1]).toFixed(2);
									var remainder = parseFloat(rest * (baseValPlus - baseVal)).toFixed(6);
									var odd = parseFloat(parseFloat(baseVal) + parseFloat(remainder)).toFixed(2);
								}

								if (quart == 0.5) {
									////////console.log("half");
									var baseVal = parseFloat(arr[base]).toFixed(2);
									var baseValPlus = parseFloat(arr[base + 1]).toFixed(2);
									if (rest == 0) {
										var odd = (parseFloat(baseValPlus) + parseFloat(baseVal)) / 2;
									} else {
										var odd = baseValPlus;
									}
								}

								/*//////console.log(arr);
								//////console.log('qt' + quart);
								//////console.log('pos' + pos);
								//////console.log('base' + base);
								//////console.log('baseVal' + baseVal);
								//////console.log('baseValPlus' + baseValPlus);
								//////console.log('rest' + rest);
								//////console.log('odd' + odd);
								//////console.log('even' + arr[base]);
								//////console.log('rest' + rest);*/
								if (rest > 0) {
									return (odd);
								} else {
									return (odd);
								}
							}
						
					
					};

					if (custom.higherGoodOrBad[0] == 0) {
						var seg_0 = Quartile(result['value'], 1);
						var seg_25 = Quartile(result['value'], 0.75);
						var seg_50 = Quartile(result['value'], 0.50);
						var seg_75 = Quartile(result['value'], 0.25);
						var seg_100 = Quartile(result['value'], 0);
					} else {
						var seg_0 = Quartile(result['value'], 0);
						var seg_25 = Quartile(result['value'], 0.25);
						var seg_50 = Quartile(result['value'], 0.50);
						var seg_75 = Quartile(result['value'], 0.75);
						var seg_100 = Quartile(result['value'], 1);
					}



					ret.Period.push(periods.periodName[i]);
					ret.Value.push(companyResult.value[0]);
					ret.metric.push(custom.metricName[0]);
					ret.format.push(custom.format[0])
					ret.Bottom.push(seg_75);
					ret.Avg.push(seg_50);
					ret.Top.push(seg_25);
					ret.Company.push(companyResult.company[0]);
					ret.Base.push(0);
					////////console.log(ret);

				}
				//////console.log(ret);

				var n = ret.Period.length;

				var ret2 = [];

				for (m = 0; m < n; m++) {
					ret2.push({
						Period: ret.Period[m],
						Value: ret.Value[m],
						metric: ret.metric[m],
						format: ret.format[m],
						Bottom: ret.Bottom[m],
						Avg: ret.Avg[m],
						Top: ret.Top[m],
						Company: ret.Company[m],
						Base: ret.Base[m]
					});
				}
				////////console.log(ret2);
				var ret = ret2;
				res.send(ret);
			});
		});
	},

	individualBarLine: function(req, res) {
		res.send({});
	},

	individualBar: function(req, res) {
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;
		var company = req.querystring.company;
		var segment = req.querystring.segment;

		////////console.log(segment);

		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {

			var screen = req.querystring.screen;
			var metric = req.querystring.metric;
			var company = req.querystring.company;
			var segment = req.querystring.segment;

			var query = [
				"Select Distinct",
				"tbl_client_segment_ytd.ID As Client_ID,",
				"If(tbl_client_segment_ytd.ID = " + company + ", '#0489d6', If(tbl_metrics.Higher_Good_or_Bad = 1, if(tbl_roe_analysis_ltm_pct.Value < 0.25, 'Red', if(tbl_roe_analysis_ltm_pct.Value < 0.5, 'Orange', if(tbl_roe_analysis_ltm_pct.Value < 0.75, 'LightGreen', 'Green'))), if((1-tbl_roe_analysis_ltm_pct.Value) < 0.25, 'Red', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.5, 'Orange', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.75, 'LightGreen', 'Green'))))) As Column_color,",
				"Concat(SubString_Index(tbl_client_segment_ytd.Name, ' ', 4)) As Client_Name,",
				"tbl_screens.ID As Screen_ID,",
				"tbl_metrics.Format As Format,",
				"tbl_metrics.Metric As Metric,",
				"tbl_metrics.Metric_Name As Metric_Name,",
				"tbl_period.Current_Period As Period,",
				"If(tbl_metrics.Format = '%', Format(tbl_roe_analysis_ltm.Value * 100, 2),",
				"Round(tbl_roe_analysis_ltm.Value, 1)) As Value,",
				"tbl_segment.ID,",
				"tbl_segment.segment AS Segment_Name,",
				"tbl_period.Most_Recent_Period,",
				"tbl_metrics.Higher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"If(tbl_metrics.Higher_Good_or_Bad = 1, if(tbl_roe_analysis_ltm_pct.Value < 0.25, 'Red', if(tbl_roe_analysis_ltm_pct.Value < 0.5, 'Orange', if(tbl_roe_analysis_ltm_pct.Value < 0.75, 'LightGreen', 'Green'))), if((1-tbl_roe_analysis_ltm_pct.Value) < 0.25, 'Red', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.5, 'Orange', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.75, 'LightGreen', 'Green')))) As Display_Color",
				"From",
				"tbl_screens Inner Join",
				"tbl_screen_metrics On tbl_screen_metrics.id_screen = tbl_screens.ID Inner Join",
				"tbl_metrics On tbl_metrics.ID = tbl_screen_metrics.id_metric Inner Join",
				"tbl_roe_analysis_ltm On tbl_roe_analysis_ltm.Metric = tbl_metrics.Metric",
				"Inner Join",
				"tbl_client_segment_ytd On tbl_roe_analysis_ltm.ID = tbl_client_segment_ytd.ID Inner Join",
				"tbl_period On tbl_client_segment_ytd.Period = tbl_period.Current_Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
				"tbl_segment On tbl_segment.ID = tbl_client_segment_ytd.Prev_YE_Spec_Code Inner Join",
				"tbl_roe_analysis_ltm_pct On tbl_roe_analysis_ltm_pct.ID = tbl_Client_Segment_YTD.ID And",
				"tbl_roe_analysis_ltm_pct.Period = tbl_period.Current_Period And",
				"tbl_roe_analysis_ltm_pct.Metric = tbl_metrics.Metric",
				"Where",
				"tbl_screens.ID = " + screen + " And",
				"tbl_segment.ID = (Select",
				"tbl_client_segment_ytd.Prev_YE_Spec_Code",
				"From",
				"tbl_client_segment_ytd Inner Join",
				"tbl_period On tbl_client_segment_ytd.Period = tbl_period.Current_Period",
				"Where",
				"tbl_client_segment_ytd.ID = " + company + " And",
				"tbl_period.Most_Recent_Period = 1) And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_metrics.ID =" + metric + " And",
				"tbl_roe_analysis_ltm.Value Is Not Null And",
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
				"Order By",
				"Case When tbl_metrics.Higher_Good_or_Bad = 0 Then tbl_roe_analysis_ltm.Value",
				"End Desc,",
				"Case When tbl_metrics.Higher_Good_or_Bad = 1 Then tbl_roe_analysis_ltm.Value",
				"End"
			].join(' ');

			var customQuery = [
				"Select Distinct",
				"tbl_client_segment_ytd.ID As Client_ID,",
				"If(tbl_client_segment_ytd.ID = " + company + ", '#0489d6', If(tbl_metrics.Higher_Good_or_Bad = 1, if(tbl_roe_analysis_ltm_pct.Value < 0.25, 'Red', if(tbl_roe_analysis_ltm_pct.Value < 0.5, 'Orange', if(tbl_roe_analysis_ltm_pct.Value < 0.75, 'LightGreen', 'Green'))), if((1-tbl_roe_analysis_ltm_pct.Value) < 0.25, 'Red', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.5, 'Orange', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.75, 'LightGreen', 'Green'))))) As Column_color,",
				"Concat(SubString_Index(tbl_client_segment_ytd.Name, ' ', 4)) As Client_Name,",
				"tbl_screens.ID As Screen_ID,",
				"tbl_metrics.Format As Format,",
				"tbl_metrics.Metric As Metric,",
				"tbl_metrics.Metric_Name As Metric_Name,",
				"tbl_period.Current_Period As Period,",
				"If(tbl_metrics.Format = '%', Format(tbl_roe_analysis_ltm.Value * 100, 4),",
				"Round(tbl_roe_analysis_ltm.Value, 1)) As Value,",
				"tbl_segment.ID,",
				"tbl_segment.segment AS Segment_Name,",
				"tbl_period.Most_Recent_Period,",
				"tbl_metrics.Higher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"If(tbl_metrics.Higher_Good_or_Bad = 1, if(tbl_roe_analysis_ltm_pct.Value < 0.25, 'Red', if(tbl_roe_analysis_ltm_pct.Value < 0.5, 'Orange', if(tbl_roe_analysis_ltm_pct.Value < 0.75, 'LightGreen', 'Green'))), if((1-tbl_roe_analysis_ltm_pct.Value) < 0.25, 'Red', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.5, 'Orange', if((1-tbl_roe_analysis_ltm_pct.Value) < 0.75, 'LightGreen', 'Green')))) As Display_Color",
				"From",
				"tbl_screens Inner Join",
				"tbl_screen_metrics On tbl_screen_metrics.id_screen = tbl_screens.ID Inner Join",
				"tbl_metrics On tbl_metrics.ID = tbl_screen_metrics.id_metric Inner Join",
				"tbl_roe_analysis_ltm On tbl_roe_analysis_ltm.Metric = tbl_metrics.Metric",
				"Inner Join",
				"tbl_client_segment_ytd On tbl_roe_analysis_ltm.ID = tbl_client_segment_ytd.ID Inner Join",
				"tbl_segment_client on tbl_segment_client.id_client = tbl_client_segment_ytd.id Inner Join",
				"tbl_period On tbl_client_segment_ytd.Period = tbl_period.Current_Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
				"tbl_segment On tbl_segment.ID = tbl_segment_client.id_segment Inner Join",
				"tbl_roe_analysis_ltm_pct On tbl_roe_analysis_ltm_pct.ID = tbl_Client_Segment_YTD.ID And",
				"tbl_roe_analysis_ltm_pct.Period = tbl_period.Current_Period And",
				"tbl_roe_analysis_ltm_pct.Metric = tbl_metrics.Metric",
				"Where",
				"tbl_screens.id = " + screen + " And",
				"tbl_segment.ID = " + segment + " And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_metrics.id = '" + metric + "' And",
				"tbl_roe_analysis_ltm.Value Is Not Null And",
				"Case When (" + segment + ") = 11 Then tbl_client_segment_ytd.State",
				"= (Select",
				"tbl_client_segment_ytd.State",
				"From",
				"tbl_client_segment_ytd Inner Join",
				"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period",
				"Where",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_client_segment_ytd.ID = " + company + ") Else 1 = 1 End = True",
				"Order By",
				"Case When tbl_metrics.Higher_Good_or_Bad = 0 Then tbl_roe_analysis_ltm.Value",
				"End Desc,",
				"Case When tbl_metrics.Higher_Good_or_Bad = 1 Then tbl_roe_analysis_ltm.Value",
				"End "
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


			DB.query(query, function(err1, result) {
				var ret = [];
				var count = result.length;
				var i = 0;
				var mid = count/2;
				var base = Math.floor(mid);
				var rest = mid-base;
				//////console.log('rest'+rest);
				if(rest == 0){
					var median = -1;
				} else {
					var median = base;
					
				}
				
				
				
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
								////////console.log(">half");
								var baseVal = parseFloat(arr[len - base]).toFixed(6);
								var baseValPlus = parseFloat(arr[len - base - 1]).toFixed(6);
								var odd = parseFloat(baseVal - (rest * (baseVal - baseValPlus))).toFixed(6);
							}

							if (quart < 0.5) {
								////////console.log("<half");
								var baseVal = parseFloat(arr[base]).toFixed(6);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(6);
								var remainder = parseFloat(rest * (baseValPlus - baseVal)).toFixed(6);
								var odd = parseFloat(parseFloat(baseVal) + parseFloat(remainder)).toFixed(6);
							}

							if (quart == 0.5) {
								////////console.log("half");
								var baseVal = parseFloat(arr[base]).toFixed(6);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(6);
								if (rest == 0) {
									var odd = (parseFloat(baseValPlus) + parseFloat(baseVal)) / 2;
								} else {
									var odd = parseFloat(baseValPlus).toFixed(6);
								}
							}

							/*//////console.log(arr);
							//////console.log('qt' + quart);
							//////console.log('pos' + pos);
							//////console.log('base' + base);
							//////console.log('baseVal' + baseVal);
							//////console.log('baseValPlus' + baseValPlus);
							//////console.log('rest' + rest);
							//////console.log('odd' + odd);
							//////console.log('even' + arr[base]);
							//////console.log('rest' + rest);*/
							if (rest > 0) {
								return (odd);
							} else {
								return (odd);
							}
						}
					
				
				};
				
				var val = [];
				result.forEach(function(row){
					val.push(row.Value);
				})
				
				
				var seg_25 = Quartile(val, 0.25);
				var seg_50 = Quartile(val, 0.5);
				var seg_75 = Quartile(val, 0.75);
				
				result.forEach(function(row) {
				
					if (i==median){
						var pct = 0.5;
					} else if(i<=base){
						var pct = 1 - ((i+1) / (count));
					} else {
							var left = count-i-1;
							//////console.log('left'+left);
							var pct = left/count;
					
					}
					
					//var pct = 1 - ((i+1) / (count));
					var columnColor;
					//console.log("seg750: " + seg_75 + " value: " + row.Value + " seg50: " +seg_50+" seg25: "+seg_25+" hbg:"+row.Higher_Good_or_Bad);
					if(row.Higher_Good_or_Bad==0){
					if (parseFloat(row.Value).toFixed(6) >= parseFloat(seg_75)) {
						columnColor = "Green";
					} else if (parseFloat(row.Value).toFixed(6) >= parseFloat(seg_50)) {
						columnColor = "LightGreen";
					} else if (parseFloat(row.Value).toFixed(6) > parseFloat(seg_25)) {
						columnColor = "Orange";
					} else {
						columnColor = "Red";
					}
				} else {
					if (parseFloat(row.Value).toFixed(6) <= parseFloat(seg_25)) {
						columnColor = "Green";
					} else if (parseFloat(row.Value).toFixed(6) <= seg_50) {
						columnColor = "LightGreen";
					} else if (parseFloat(row.Value).toFixed() < parseFloat(seg_75)) {
						columnColor = "Orange";
					} else {
						columnColor = "Red";
					}
				}
					//////console.log(columnColor);

					i++
					ret.push({
						Company: row.Client_Name,
						Color: columnColor,
						format: row.Format,
						Metric: row.Metric_Name,
						Segment: row.Segment,
						Value: row.Value,
						ID: row.Client_ID,
						Line_Color: columnColor,
						Segment_Name: row.Segment_Name
					})
				})

				res.send(ret);
			});

		});

	},


	individualXY: function(req, res) {
		////////console.log("XY Baby");
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;
		var company = req.querystring.company;
		var segment = req.querystring.segment || 9;
		var graph = req.querystring.graph || 2;

		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {

			var screen = req.querystring.screen;
			var metric = req.querystring.metric;
			var company = req.querystring.company;
			var segment = req.querystring.segment;

			var query = [
				"Select Distinct",
				"tbl_roe_analysis_ltm.ID,",
				"If(tbl_metrics.Format = '%', format(if(tbl_roe_analysis_ltm.id <> " + company + ", tbl_roe_analysis_ltm.Value, null)*100,2), format(if(tbl_roe_analysis_ltm.id <> " + company + ", tbl_roe_analysis_ltm.Value, null),2))  as value,",
				"If(tbl_metrics1.Format = '%',format(if(tbl_roe_analysis_ltm.id <> " + company + ",tbl_roe_analysis_ltm1.Value, null)*100,2), format(if(tbl_roe_analysis_ltm.id <> " + company + ",tbl_roe_analysis_ltm1.Value, null),2)) As value1,",
				"If(tbl_metrics.Format = '%',format(if(tbl_roe_analysis_ltm.id = " + company + ",tbl_roe_analysis_ltm.Value, null)*100,2), format(if(tbl_roe_analysis_ltm.id = " + company + ",tbl_roe_analysis_ltm.Value, null),2)) as value3,",
				"If(tbl_metrics1.Format = '%',format(if(tbl_roe_analysis_ltm.id = " + company + ",tbl_roe_analysis_ltm1.Value, null)*100,2),format(if(tbl_roe_analysis_ltm.id = " + company + ",tbl_roe_analysis_ltm1.Value, null),2)) As value4,",
				"concat(SUBSTRING_INDEX(tbl_client_segment_ytd.Name, ' ', 4)) As Client_Name,",
				"tbl_metrics.Metric_Name as YAxis_Name,",
				"tbl_metrics.Higher_Good_or_Bad As YHigher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"tbl_metrics1.Metric_Name As XAxis_Name,",
				"tbl_metrics1.Higher_Good_or_Bad As XHigher_Good_or_Bad,",
				"tbl_metrics1.Format As Format1,",
				"tbl_segment.segment as segment,",
				"If(tbl_metrics2.Higher_Good_or_Bad = 1, If(tbl_roe_analysis_ltm_pct.Value >=",
				"0.75, 'Green', If(tbl_roe_analysis_ltm_pct.Value >= 0.5, 'LightGreen',",
				"If(tbl_roe_analysis_ltm_pct.Value >= 0.25, 'Orange', 'Red'))), If((1 -",
				"tbl_roe_analysis_ltm_pct.Value) >= 0.75, 'Green', If((1 -",
				"tbl_roe_analysis_ltm_pct.Value) >= 0.5, 'LightGreen', If((1 -",
				"tbl_roe_analysis_ltm_pct.Value) >= 0.25, 'Orange', 'Red')))) As PCT_Color,",
				"right(tbl_period.current_period_name,4) as period,",
				"tbl_metrics3.metric_name as metric_name",
				"From",
				"tbl_roe_analysis_ltm Inner Join",
				"tbl_Client_Segment_YTD",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm.ID Inner Join",
				"tbl_roe_analysis_ltm tbl_roe_analysis_ltm1",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm1.ID Inner Join",
				"tbl_metrics",
				"On tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric Inner Join",
				"tbl_metrics tbl_metrics1",
				"On tbl_metrics1.Metric = tbl_roe_analysis_ltm1.Metric Inner Join",
				"tbl_graph_metrics tbl_graph_metrics1",
				"On tbl_graph_metrics1.id_metric = tbl_metrics1.ID Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm1.Period And",
				"tbl_period.Current_Period = tbl_Client_Segment_YTD.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
				"tbl_roe_analysis_ltm_pct",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm_pct.Period And",
				"tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct.ID Inner Join",
				"tbl_metrics tbl_metrics2",
				"On tbl_metrics2.Metric = tbl_roe_analysis_ltm_pct.Metric Inner Join",
				"tbl_graph_metrics",
				"On tbl_graph_metrics.id_metric = tbl_metrics.ID Inner Join",
				"tbl_graphs tbl_graphs1",
				"On tbl_graphs1.id = tbl_graph_metrics.id_Graph Inner Join",
				"tbl_graphs tbl_graphs2",
				"On tbl_graphs2.id = tbl_graph_metrics1.id_Graph inner join",
				"tbl_metrics tbl_metrics3",
				"On tbl_metrics3.ID = tbl_graphs2.metric_id inner join",
				"tbl_segment",
				"On tbl_segment.id = tbl_client_segment_ytd.prev_ye_spec_code",
				"Where",
				"If(tbl_roe_analysis_ltm.Metric <> tbl_roe_analysis_ltm1.Metric, 1, 0) = 1 And",
				"tbl_Client_Segment_YTD.Prev_YE_Spec_Code = " + segment + " And",
				"Case When " + segment + " = 11 Then tbl_Client_Segment_YTD.State = (Select",
				"tbl_Client_Segment_YTD.State",
				"From",
				"tbl_Client_Segment_YTD Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_Client_Segment_YTD.Period",
				"Where",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_Client_Segment_YTD.ID = " + company + ") Else 1 = 1 End = True And",
				"tbl_graph_metrics.id_metric = (Select",
				"tbl_graph_metrics.id_metric",
				"From",
				"tbl_graphs Inner Join",
				"tbl_graph_metrics",
				"On tbl_graphs.id = tbl_graph_metrics.id_Graph",
				"Where",
				"tbl_graphs.metric_id =" + metric + " and tbl_graphs.graph_type = 2 Limit 1) And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_graphs1.metric_id = " + metric + " And",
				"tbl_graphs1.graph_type = 2 And",
				"tbl_metrics2.ID = " + metric + " And",
				"tbl_graphs2.metric_id = " + metric + " AND",
				"tbl_graphs2.graph_type = 2",
				"Order By",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 0 Then tbl_roe_analysis_ltm_pct.Value",
				"End,",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 1 Then tbl_roe_analysis_ltm_pct.Value",
				"End Desc"
			].join(' ');

			var customQuery = [
				"Select Distinct",
				"tbl_roe_analysis_ltm.ID,",
				"If(tbl_metrics.Format = '%', format(if(tbl_roe_analysis_ltm.id <> " + company + ", tbl_roe_analysis_ltm.Value, null)*100,2), format(if(tbl_roe_analysis_ltm.id <> " + company + ", tbl_roe_analysis_ltm.Value, null),2))  as value,",
				"If(tbl_metrics1.Format = '%',format(if(tbl_roe_analysis_ltm.id <> " + company + ",tbl_roe_analysis_ltm1.Value, null)*100,2), format(if(tbl_roe_analysis_ltm.id <> " + company + ",tbl_roe_analysis_ltm1.Value, null),2)) As value1,",
				"If(tbl_metrics.Format = '%',format(if(tbl_roe_analysis_ltm.id = " + company + ",tbl_roe_analysis_ltm.Value, null)*100,2), format(if(tbl_roe_analysis_ltm.id = " + company + ",tbl_roe_analysis_ltm.Value, null),2)) as value3,",
				"If(tbl_metrics1.Format = '%',format(if(tbl_roe_analysis_ltm.id = " + company + ",tbl_roe_analysis_ltm1.Value, null)*100,2),format(if(tbl_roe_analysis_ltm.id = " + company + ",tbl_roe_analysis_ltm1.Value, null),2)) As value4,",
				"concat(SUBSTRING_INDEX(tbl_client_segment_ytd.Name, ' ', 4)) As Client_Name,",
				"tbl_metrics.Metric_Name as YAxis_Name,",
				"tbl_metrics.Higher_Good_or_Bad As YHigher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"tbl_metrics1.Metric_Name As XAxis_Name,",
				"tbl_metrics1.Higher_Good_or_Bad As XHigher_Good_or_Bad,",
				"tbl_metrics1.Format As Format1,",
				"tbl_segment.segment as segment,",
				"tbl_roe_analysis_ltm2.Value as targetMetric,",
				"right(tbl_period.current_period_name,4) as period,",
				"tbl_metrics3.higher_good_or_bad as Higher_Good_or_Bad,",
				"tbl_metrics3.metric_name as metric_name",
				"From",
				"tbl_roe_analysis_ltm Inner Join",
				"tbl_Client_Segment_YTD",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm.ID Inner Join",
				"tbl_roe_analysis_ltm tbl_roe_analysis_ltm1",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm1.ID Inner Join",
				"tbl_metrics",
				"On tbl_metrics.Metric = tbl_roe_analysis_ltm.Metric Inner Join",
				"tbl_metrics tbl_metrics1",
				"On tbl_metrics1.Metric = tbl_roe_analysis_ltm1.Metric Inner Join",
				"tbl_graph_metrics tbl_graph_metrics1",
				"On tbl_graph_metrics1.id_metric = tbl_metrics1.ID Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm1.Period And",
				"tbl_period.Current_Period = tbl_Client_Segment_YTD.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm.Period Inner Join",
				"tbl_roe_analysis_ltm tbl_roe_analysis_ltm2",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm2.Period And",
				"tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm2.ID Inner Join",
				"tbl_metrics tbl_metrics2",
				"On tbl_metrics2.Metric = tbl_roe_analysis_ltm2.Metric Inner Join",
				"tbl_graph_metrics",
				"On tbl_graph_metrics.id_metric = tbl_metrics.ID Inner Join",
				"tbl_graphs tbl_graphs1",
				"On tbl_graphs1.id = tbl_graph_metrics.id_Graph Inner Join",
				"tbl_graphs tbl_graphs2",
				"On tbl_graphs2.id = tbl_graph_metrics1.id_Graph inner join",
				"tbl_metrics tbl_metrics3",
				"On tbl_metrics3.ID = tbl_graphs2.metric_id inner join",
				"tbl_segment_client on tbl_segment_client.id_client = tbl_client_segment_ytd.id inner join",
				"tbl_segment on tbl_segment_client.id_segment = tbl_segment.id",
				"Where",
				"If(tbl_roe_analysis_ltm.Metric <> tbl_roe_analysis_ltm1.Metric, 1, 0) = 1 And",
				"tbl_segment.id = " + segment + " And",
				"Case When " + segment + " = 11 Then tbl_Client_Segment_YTD.State = (Select",
				"tbl_Client_Segment_YTD.State",
				"From",
				"tbl_Client_Segment_YTD Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_Client_Segment_YTD.Period",
				"Where",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_Client_Segment_YTD.ID = " + company + ") Else 1 = 1 End = True And",
				"tbl_graph_metrics.id_metric = (Select",
				"tbl_graph_metrics.id_metric",
				"From",
				"tbl_graphs Inner Join",
				"tbl_graph_metrics",
				"On tbl_graphs.id = tbl_graph_metrics.id_Graph",
				"Where",
				"tbl_graphs.metric_id =" + metric + " and tbl_graphs.graph_type = 2 Limit 1) And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_graphs1.metric_id = " + metric + " And",
				"tbl_graphs1.graph_type = 2 And",
				"tbl_metrics2.ID = " + metric + " And",
				"tbl_graphs2.metric_id = " + metric + " AND",
				"tbl_graphs2.graph_type = 2",
				"ORDER BY",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 0 Then tbl_roe_analysis_ltm2.Value",
				"End Desc,",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 1 Then tbl_roe_analysis_ltm2.Value",
				"End "
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
			var decider = [
				"Select",
				"tbl_graphs.id as id,",
				"tbl_graphs.metric_id as metric_id,",
				"tbl_graphs.graph_type as graph_type,",
				"tbl_graphs.Graph_Name as graph_name,",
				"tbl_graphs.Rank as rank",
				"From",
				"tbl_graphs",
				"Where",
				"tbl_graphs.metric_id =" + metric + " Order By",
				"tbl_graphs.Rank"
			].join(' ');

			DB.query(decider, function(err1, dec) {
				var has_spider = false;
				dec.forEach(function(g) {
					if (g.graph_type == 2) {
						has_spider = true;
					}
				});

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
								////////console.log(">half");
								var baseVal = parseFloat(arr[len - base]).toFixed(6);
								var baseValPlus = parseFloat(arr[len - base - 1]).toFixed(6);
								var odd = parseFloat(baseVal - (rest * (baseVal - baseValPlus))).toFixed(6);
							}

							if (quart < 0.5) {
								////////console.log("<half");
								var baseVal = parseFloat(arr[base]).toFixed(6);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(6);
								var remainder = parseFloat(rest * (baseValPlus - baseVal)).toFixed(6);
								var odd = parseFloat(parseFloat(baseVal) + parseFloat(remainder)).toFixed(6);
							}

							if (quart == 0.5) {
								////////console.log("half");
								var baseVal = parseFloat(arr[base]).toFixed(6);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(6);
								if (rest == 0) {
									var odd = (parseFloat(baseValPlus) + parseFloat(baseVal)) / 2;
								} else {
									var odd = parseFloat(baseValPlus).toFixed(6);
								}
							}

							/*//////console.log(arr);
							//////console.log('qt' + quart);
							//////console.log('pos' + pos);
							//////console.log('base' + base);
							//////console.log('baseVal' + baseVal);
							//////console.log('baseValPlus' + baseValPlus);
							//////console.log('rest' + rest);
							//////console.log('odd' + odd);
							//////console.log('even' + arr[base]);
							//////console.log('rest' + rest);*/
							if (rest > 0) {
								return (odd);
							} else {
								return (odd);
							}
						}
					
				
				};

				////////console.log(has_spider);
				if (has_spider) {

					DB.query(query, function(err1, result) {
						if (!err1) {
							var firstrow = result[0];

							var yaxis_name = firstrow['YAxis_Name'];
							var xaxis_name = firstrow['XAxis_Name'];
							var YHigher_Good_or_Bad = firstrow["YHigher_Good_or_Bad"];
							var XHigher_Good_or_Bad = firstrow["XHigher_Good_or_Bad"];

							var yaverage = 0;
							var xaverage = 0;
							var count = 0;

							var ret = [];
						
							var val = [];


							result.forEach(function(row) {
								val.push(row.targetMetric);

								if (row['value'] == null) {
									yaverage = yaverage + 0;
								} else {
									yaverage = yaverage + parseFloat(row['value']);
								}

								if (row['value3'] == null) {
									yaverage = yaverage + 0;
								} else {
									yaverage = yaverage + parseFloat(row['value3']);
								}
								if (row['value1'] == null) {
									xaverage = xaverage + 0;
								} else {
									xaverage = xaverage + parseFloat(row['value1']);
								}
								if (row['value4'] == null) {
									xaverage = xaverage + 0;
								} else {
									xaverage = xaverage + parseFloat(row['value4']);
								}
								count = count + 1;
							});
							
							var ret = [];
							var count = result.length;
							var i = 0;
							var mid = count/2;
							var base = Math.floor(mid);
							var rest = mid-base;
							//////console.log('rest'+rest);
							if(rest == 0){
								var median = -1;
							} else {
								var median = base;
					
							}
							
							var seg_25 = Quartile(val, 0.25);
							var seg_50 = Quartile(val, 0.5);
							var seg_75 = Quartile(val, 0.75);
							
							yaverage = (yaverage / count).toFixed(2);
							xaverage = (xaverage / count).toFixed(2);
							var dcount = result.length;
							var i = 0;
							
							
							result.forEach(function(row) {

								if (i==median){
									var pct = 0.5;
								} else if(i<=base){
									var pct = 1 - ((i+1) / (count));
								} else {
										var left = count-i-1;
										//////console.log('left'+left);
										var pct = left/count;
					
								}
								if(row.Higher_Good_or_Bad == null){
									columnColor = row.PCT_Color;
								} else{
								//var pct = 1 - ((i+1) / (count));
								var columnColor;
								console.log("seg750: " + seg_75 + " value: " + row.targetMetric + " seg50: " +seg_50+" seg25: "+seg_25+" hbg:"+row.Higher_Good_or_Bad);
								if(row.Higher_Good_or_Bad==0){
								if (parseFloat(row.targetMetric).toFixed(6) >= parseFloat(seg_75).toFixed(6) ) {
									columnColor = "Green";
								} else if (parseFloat(row.targetMetric).toFixed(6) >= parseFloat(seg_50).toFixed(6) ) {
									columnColor = "LightGreen";
								} else if (parseFloat(row.targetMetric).toFixed(6) > parseFloat(seg_25).toFixed(6) ) {
									columnColor = "Orange";
								} else {
									columnColor = "Red";
								}
							} else {
								if (parseFloat(row.targetMetric).toFixed(6) <= parseFloat(seg_25).toFixed(6) ) {
									columnColor = "Green";
								} else if (parseFloat(row.targetMetric).toFixed(6) <= parseFloat(seg_50).toFixed(6) ) {
									columnColor = "LightGreen";
								} else if (parseFloat(row.targetMetric).toFixed(6) < parseFloat(seg_75).toFixed(6) ) {
									columnColor = "Orange";
								} else {
									columnColor = "Red";
								}
							}
						}
								i++;
								////////console.log(columnColor);

								var d = {
									Company: row.Client_Name,
									yaxis: row.YAxis_Name,
									xaxis: row.XAxis_Name,
									yaxisavg: yaverage,
									xaxisavg: xaverage,
									yaxishgb: YHigher_Good_or_Bad,
									xaxishgb: XHigher_Good_or_Bad,
									color: columnColor,
									lastBullet: "lastBullet",
									metric_name: row.metric_name,
									period: row.period,
									segment_name: row.segment
								}



								if (!row.value) {
									d.y2 = row.value3;
								} else {
									d.y = row.value;
								}

								if (!row.value1) {
									d.x2 = row.value4;
									d.value2 = 0.2;
								} else {
									d.x = row.value1;
									d.value = 0.2;
								}
								////////console.log(d);
								ret.push(d);

							});

							res.send(ret);
						} else {
							res.send([]);
						}
					});
				} else {
					res.send([]);
				}
			});

		});

	},

	individualXYPCT: function(req, res) {
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;
		var company = req.querystring.company;
		var segment = req.querystring.segment || 9;
		var graph = req.querystring.graph || 2;

		var isAdmin = [
			"SELECT USERID FROM tbl_segment WHERE ID=" + segment
		].join(" ");

		DB.query(isAdmin, function(err1, r) {

			var screen = req.querystring.screen;
			var metric = req.querystring.metric;
			var company = req.querystring.company;
			var segment = req.querystring.segment;

			var query = [
				"Select Distinct",
				"tbl_roe_analysis_ltm_pct.ID,",
				"If(tbl_roe_analysis_ltm_pct.ID = " + company + " , Null,",
				"Format(If(tbl_metrics.Higher_Good_or_Bad = 0, 1 -",
				"tbl_roe_analysis_ltm_pct.Value, tbl_roe_analysis_ltm_pct.Value) * 100,",
				"2)) As value,",
				"If(tbl_roe_analysis_ltm_pct.ID = " + company + " , Null,",
				"Format(If(tbl_metrics1.Higher_Good_or_Bad = 0, 1 -",
				"tbl_roe_analysis_ltm_pct1.Value, tbl_roe_analysis_ltm_pct1.Value) * 100,",
				"2)) As value1,",
				"If(tbl_roe_analysis_ltm_pct.ID <> " + company + " , Null,",
				"Format(If(tbl_metrics.Higher_Good_or_Bad = 0, 1 -",
				"tbl_roe_analysis_ltm_pct.Value, tbl_roe_analysis_ltm_pct.Value) * 100,",
				"2)) As value3,",
				"If(tbl_roe_analysis_ltm_pct.ID <> " + company + " , Null,",
				"Format(If(tbl_metrics1.Higher_Good_or_Bad = 0, 1 -",
				"tbl_roe_analysis_ltm_pct1.Value, tbl_roe_analysis_ltm_pct1.Value) * 100,",
				"2)) As value4,",
				"Concat(SubString_Index(tbl_Client_Segment_YTD.Name, ' ', 4)) As Client_Name,",
				"tbl_metrics.Metric_Name As YAxis_Name,",
				"tbl_metrics.Higher_Good_or_Bad As YHigher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"tbl_metrics1.Metric_Name As XAxis_Name,",
				"tbl_metrics1.Higher_Good_or_Bad As XHigher_Good_or_Bad,",
				"tbl_metrics1.Format As Format1,",
				"tbl_segment.segment as segment,",
				"tbl_graphs.metric_id,",
				"tbl_graphs.graph_type,",
				"tbl_metrics2.Metric_Name as metric_name,",
				"tbl_roe_analysis_ltm_pct2.Value As Value2,",
				"right(tbl_period.current_period_name,4) as period,",
				"If(tbl_metrics2.Higher_Good_or_Bad = 1, If(tbl_roe_analysis_ltm_pct2.Value >=",
				"0.75, 'Green', If(tbl_roe_analysis_ltm_pct2.Value >= 0.5, 'LightGreen',",
				"If(tbl_roe_analysis_ltm_pct2.Value >= 0.25, 'Orange', 'Red'))), If((1 -",
				"tbl_roe_analysis_ltm_pct2.Value) >= 0.75, 'Green', If((1 -",
				"tbl_roe_analysis_ltm_pct2.Value) >= 0.5, 'LightGreen', If((1 -",
				"tbl_roe_analysis_ltm_pct2.Value) >= 0.25, 'Orange', 'Red')))) As PCT_Color",
				"From",
				"tbl_roe_analysis_ltm_pct Inner Join",
				"tbl_Client_Segment_YTD",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct.ID Inner Join",
				"tbl_roe_analysis_ltm_pct tbl_roe_analysis_ltm_pct1",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct1.ID Inner Join",
				"tbl_metrics",
				"On tbl_metrics.Metric = tbl_roe_analysis_ltm_pct.Metric Inner Join",
				"tbl_graph_metrics",
				"On tbl_graph_metrics.id_metric = tbl_metrics.ID Inner Join",
				"tbl_metrics tbl_metrics1",
				"On tbl_metrics1.Metric = tbl_roe_analysis_ltm_pct1.Metric Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_Client_Segment_YTD.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm_pct.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm_pct1.Period Inner Join",
				"tbl_roe_analysis_ltm_pct tbl_roe_analysis_ltm_pct2",
				"On tbl_roe_analysis_ltm_pct2.Period = tbl_period.Current_Period And",
				"tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct2.ID Inner Join",
				"tbl_metrics tbl_metrics2",
				"On tbl_metrics2.Metric = tbl_roe_analysis_ltm_pct2.Metric Inner Join",
				"tbl_graphs",
				"On tbl_metrics2.ID = tbl_graphs.metric_id Inner Join",
				"tbl_graph_metrics tbl_graph_metrics2",
				"On tbl_graphs.id = tbl_graph_metrics2.id_Graph Inner Join",
				"tbl_graph_metrics tbl_graph_metrics1",
				"On tbl_metrics1.ID = tbl_graph_metrics1.id_metric Inner Join",
				"tbl_graphs tbl_graphs1",
				"On tbl_graphs1.id = tbl_graph_metrics1.id_Graph Inner Join",
				"tbl_graphs tbl_graphs2",
				"On tbl_graphs2.id = tbl_graph_metrics.id_Graph Inner Join",
				"tbl_segment",
				"On tbl_segment.id = tbl_client_segment_ytd.prev_ye_spec_code",
				"Where",
				"If(tbl_roe_analysis_ltm_pct.Metric <> tbl_roe_analysis_ltm_pct1.Metric, 1,",
				"0) = 1 And",
				"tbl_Client_Segment_YTD.Prev_YE_Spec_Code = " + segment + " And",
				"tbl_graphs2.metric_id = " + metric + " And",
				"tbl_graphs2.graph_type = 2 And",
				"tbl_graphs1.metric_id = " + metric + " And",
				"tbl_graphs1.graph_type = 2 And",
				"Case When " + segment + " = 11 Then tbl_Client_Segment_YTD.State = (Select",
				"tbl_Client_Segment_YTD.State",
				"From",
				"tbl_Client_Segment_YTD Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_Client_Segment_YTD.Period",
				"Where",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_Client_Segment_YTD.ID = " + company + ") Else 1 = 1 End = True And",
				"tbl_graph_metrics.id_metric = (Select",
				"tbl_graph_metrics.id_metric",
				"From",
				"tbl_graph_metrics Inner Join",
				"tbl_graphs",
				"On tbl_graphs.id = tbl_graph_metrics.id_Graph",
				"Where",
				"tbl_graphs.metric_id = " + metric + " and tbl_graphs.graph_type=2",
				"Limit 1) And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_graphs.metric_id = " + metric + " And",
				"tbl_graphs.graph_type = 2 And",
				"tbl_metrics2.ID =" + metric,
				"Order By",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 0 Then tbl_roe_analysis_ltm_pct2.Value",
				"End,",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 1 Then tbl_roe_analysis_ltm_pct2.Value",
				"End Desc"
			].join(' ');

			var customQuery = [
				"Select Distinct",
				"tbl_roe_analysis_ltm_pct.ID,",
				"If(tbl_roe_analysis_ltm_pct.ID = " + company + " , Null,",
				"Format(If(tbl_metrics.Higher_Good_or_Bad = 0, 1 -",
				"tbl_roe_analysis_ltm_pct.Value, tbl_roe_analysis_ltm_pct.Value) * 100,",
				"2)) As value,",
				"If(tbl_roe_analysis_ltm_pct.ID = " + company + " , Null,",
				"Format(If(tbl_metrics1.Higher_Good_or_Bad = 0, 1 -",
				"tbl_roe_analysis_ltm_pct1.Value, tbl_roe_analysis_ltm_pct1.Value) * 100,",
				"2)) As value1,",
				"If(tbl_roe_analysis_ltm_pct.ID <> " + company + " , Null,",
				"Format(If(tbl_metrics.Higher_Good_or_Bad = 0, 1 -",
				"tbl_roe_analysis_ltm_pct.Value, tbl_roe_analysis_ltm_pct.Value) * 100,",
				"2)) As value3,",
				"If(tbl_roe_analysis_ltm_pct.ID <> " + company + " , Null,",
				"Format(If(tbl_metrics1.Higher_Good_or_Bad = 0, 1 -",
				"tbl_roe_analysis_ltm_pct1.Value, tbl_roe_analysis_ltm_pct1.Value) * 100,",
				"2)) As value4,",
				"Concat(SubString_Index(tbl_Client_Segment_YTD.Name, ' ', 4)) As Client_Name,",
				"tbl_metrics.Metric_Name As YAxis_Name,",
				"tbl_metrics.Higher_Good_or_Bad As YHigher_Good_or_Bad,",
				"tbl_metrics.Format,",
				"tbl_metrics1.Metric_Name As XAxis_Name,",
				"tbl_metrics1.Higher_Good_or_Bad As XHigher_Good_or_Bad,",
				"tbl_metrics1.Format As Format1,",
				"tbl_segment.segment as segment,",
				"tbl_graphs.metric_id,",
				"tbl_graphs.graph_type,",
				"tbl_metrics2.Metric_Name as metric_name,",
				"tbl_roe_analysis_ltm_pct2.Value As Value2,",
				"right(tbl_period.current_period_name,4) as period,",
				"tbl_metrics3.higher_good_or_bad as Higher_Good_or_Bad,",
				"tbl_roe_analysis_ltm.Value as targetMetric",

				"From",
				"tbl_roe_analysis_ltm_pct Inner Join",
				"tbl_Client_Segment_YTD",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct.ID Inner Join",
				"tbl_roe_analysis_ltm_pct tbl_roe_analysis_ltm_pct1",
				"On tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct1.ID Inner Join",
				"tbl_metrics",
				"On tbl_metrics.Metric = tbl_roe_analysis_ltm_pct.Metric Inner Join",
				"tbl_graph_metrics",
				"On tbl_graph_metrics.id_metric = tbl_metrics.ID Inner Join",
				"tbl_metrics tbl_metrics1",
				"On tbl_metrics1.Metric = tbl_roe_analysis_ltm_pct1.Metric Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_Client_Segment_YTD.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm_pct.Period And",
				"tbl_period.Current_Period = tbl_roe_analysis_ltm_pct1.Period Inner Join",
				"tbl_roe_analysis_ltm_pct tbl_roe_analysis_ltm_pct2",
				"On tbl_roe_analysis_ltm_pct2.Period = tbl_period.Current_Period And",
				"tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm_pct2.ID Inner Join",

				"tbl_roe_analysis_ltm",
				"On tbl_period.Current_Period = tbl_roe_analysis_ltm.Period And",
				"tbl_Client_Segment_YTD.ID = tbl_roe_analysis_ltm.ID Inner Join",
				"tbl_metrics tbl_metrics2",
				"On tbl_metrics2.Metric = tbl_roe_analysis_ltm_pct2.Metric AND",
				"tbl_roe_analysis_ltm.metric = tbl_metrics2.Metric Inner Join",
				"tbl_graphs",
				"On tbl_metrics2.ID = tbl_graphs.metric_id Inner Join",
				"tbl_graph_metrics tbl_graph_metrics2",
				"On tbl_graphs.id = tbl_graph_metrics2.id_Graph Inner Join",
				"tbl_graph_metrics tbl_graph_metrics1",
				"On tbl_metrics1.ID = tbl_graph_metrics1.id_metric Inner Join",
				"tbl_graphs tbl_graphs1",
				"On tbl_graphs1.id = tbl_graph_metrics1.id_Graph Inner Join",
				"tbl_graphs tbl_graphs2",
				"On tbl_graphs2.id = tbl_graph_metrics.id_Graph Inner Join",
				"tbl_segment_client",
				"On tbl_client_segment_ytd.id = tbl_segment_client.id_client inner join",
				"tbl_segment",
				"On tbl_segment.id = tbl_segment_client.id_segment",
				"Where",
				"If(tbl_roe_analysis_ltm_pct.Metric <> tbl_roe_analysis_ltm_pct1.Metric, 1,",
				"0) = 1 And",
				"tbl_segment.id = " + segment + " And",
				"tbl_graphs2.metric_id = " + metric + " And",
				"tbl_graphs2.graph_type = 2 And",
				"tbl_graphs1.metric_id = " + metric + " And",
				"tbl_graphs1.graph_type = 2 And",
				"Case When " + segment + " = 11 Then tbl_Client_Segment_YTD.State = (Select",
				"tbl_Client_Segment_YTD.State",
				"From",
				"tbl_Client_Segment_YTD Inner Join",
				"tbl_period",
				"On tbl_period.Current_Period = tbl_Client_Segment_YTD.Period",
				"Where",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_Client_Segment_YTD.ID = " + company + ") Else 1 = 1 End = True And",
				"tbl_graph_metrics.id_metric = (Select",
				"tbl_graph_metrics.id_metric",
				"From",
				"tbl_graph_metrics Inner Join",
				"tbl_graphs",
				"On tbl_graphs.id = tbl_graph_metrics.id_Graph",
				"Where",
				"tbl_graphs.metric_id = " + metric + " and tbl_graphs.graph_type=2",
				"Limit 1) And",
				"tbl_period.Most_Recent_Period = 1 And",
				"tbl_graphs.metric_id = " + metric + " And",
				"tbl_graphs.graph_type = 2 And",
				"tbl_metrics2.ID =" + metric,
				"Order By",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 0 Then tbl_roe_analysis_ltm.Value",
				"End Desc,",
				"Case When tbl_metrics2.Higher_Good_or_Bad = 1 Then tbl_roe_analysis_ltm.Value",
				"End "
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


			var decider = [
				"Select",
				"tbl_graphs.id as id,",
				"tbl_graphs.metric_id as metric_id,",
				"tbl_graphs.graph_type as graph_type,",
				"tbl_graphs.Graph_Name as graph_name,",
				"tbl_graphs.Rank as rank",
				"From",
				"tbl_graphs",
				"Where",
				"tbl_graphs.metric_id =" + metric + " Order By",
				"tbl_graphs.Rank"
			].join(' ');

			////////console.log(query);

			DB.query(decider, function(err1, dec) {
				var has_spider = false;
				dec.forEach(function(g) {
					if (g.graph_type == 2) {
						has_spider = true;
					}
				});

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
								////////console.log(">half");
								var baseVal = parseFloat(arr[len - base]).toFixed(2);
								var baseValPlus = parseFloat(arr[len - base - 1]).toFixed(2);
								var odd = parseFloat(baseVal - (rest * (baseVal - baseValPlus))).toFixed(2);
							}

							if (quart < 0.5) {
								////////console.log("<half");
								var baseVal = parseFloat(arr[base]).toFixed(2);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(2);
								var remainder = parseFloat(rest * (baseValPlus - baseVal)).toFixed(6);
								var odd = parseFloat(parseFloat(baseVal) + parseFloat(remainder)).toFixed(2);
							}

							if (quart == 0.5) {
								////////console.log("half");
								var baseVal = parseFloat(arr[base]).toFixed(2);
								var baseValPlus = parseFloat(arr[base + 1]).toFixed(2);
								if (rest == 0) {
									var odd = (parseFloat(baseValPlus) + parseFloat(baseVal)) / 2;
								} else {
									var odd = parseFloat(baseValPlus).toFixed(2);
								}
							}

							/*//////console.log(arr);
							//////console.log('qt' + quart);
							//////console.log('pos' + pos);
							//////console.log('base' + base);
							//////console.log('baseVal' + baseVal);
							//////console.log('baseValPlus' + baseValPlus);
							//////console.log('rest' + rest);
							//////console.log('odd' + odd);
							//////console.log('even' + arr[base]);
							//////console.log('rest' + rest);*/
							if (rest > 0) {
								return (odd);
							} else {
								return (odd);
							}
						}
					
				
				};
				
				if (has_spider) {

					DB.query(query, function(err1, result) {
						if (!err1) {
							var firstrow = result[0];
							////////console.log(firstrow);
							var yaxis_name = firstrow['YAxis_Name'];
							var xaxis_name = firstrow['XAxis_Name'];
							var YHigher_Good_or_Bad = firstrow["YHigher_Good_or_Bad"];
							var XHigher_Good_or_Bad = firstrow["XHigher_Good_or_Bad"];

							var yaverage = 0;
							var xaverage = 0;
							var count = 0;

							var ret = [];
							var val = [];

							result.forEach(function(row) {
								
								val.push(row.targetMetric);
								
								if (!row['value']) {
									yaverage = yaverage + 0;
								} else {
									yaverage = yaverage + row['value'];
								}

								if (!row['value3']) {
									yaverage = yaverage + 0;
								} else {
									yaverage = yaverage + row['value3'];
								}
								if (!row['value1']) {
									xaverage = xaverage + 0;
								} else {
									xaverage = xaverage + row['value1'];
								}
								if (!row['value4']) {
									xaverage = xaverage + 0;
								} else {
									xaverage = xaverage + row['value4'];
								}
								count = count + 1;
							});
							
							var ret = [];
							var count = result.length;
							var i = 0;
							var mid = count/2;
							var base = Math.floor(mid);
							var rest = mid-base;
							//////console.log('rest'+rest);
							if(rest == 0){
								var median = -1;
							} else {
								var median = base;
					
							}
							
							
							var seg_25 = Quartile(val, 0.25);
							var seg_50 = Quartile(val, 0.5);
							var seg_75 = Quartile(val, 0.75);

							yaverage = (yaverage / count).toFixed(2);
							xaverage = (xaverage / count).toFixed(2);

							var dcount = result.length;
							var i = 0;

							////////console.log(dcount);
							result.forEach(function(row) {
								if (i==median){
									var pct = 0.5;
								} else if(i<=base){
									var pct = 1 - ((i+1) / (count));
								} else {
										var left = count-i-1;
										//////console.log('left'+left);
										var pct = left/count;
					
								}
					
								//var pct = 1 - ((i+1) / (count));
								var columnColor;
								if(row.Higher_Good_or_Bad == null){
									columnColor = row.PCT_Color;
								} else{
								console.log("seg750: " + seg_75 + " value: " + row.targetMetric + " seg50: " +seg_50+" seg25: "+seg_25+" hbg:"+row.Higher_Good_or_Bad);
								if(row.Higher_Good_or_Bad==0){
								if (parseFloat(row.targetMetric).toFixed(6) >= parseFloat(seg_75)) {
									columnColor = "Green";
								} else if (parseFloat(row.targetMetric).toFixed(6) >= parseFloat(seg_50)) {
									columnColor = "LightGreen";
								} else if (parseFloat(row.targetMetric).toFixed(6) > parseFloat(seg_25)) {
									columnColor = "Orange";
								} else {
									columnColor = "Red";
								}
							} else {
								if (parseFloat(row.targetMetric).toFixed(6) <= parseFloat(seg_25)) {
									columnColor = "Green";
								} else if (parseFloat(row.targetMetric).toFixed(6) <= seg_50) {
									columnColor = "LightGreen";
								} else if (parseFloat(row.targetMetric).toFixed(6) < parseFloat(seg_75)) {
									columnColor = "Orange";
								} else {
									columnColor = "Red";
								}
							}
						}
								i++;
								////////console.log(columnColor);

								var d = {
									Company: row.Client_Name,
									yaxis: row.YAxis_Name,
									xaxis: row.XAxis_Name,
									yaxisavg: yaverage,
									xaxisavg: xaverage,
									yaxishgb: YHigher_Good_or_Bad,
									xaxishgb: XHigher_Good_or_Bad,
									color: columnColor,
									lastBullet: "lastBullet",
									metric_name: row.metric_name,
									period: row.period,
									segment_name: row.segment,
								}

								if (!row.value) {
									d.y2 = row.value3;
								} else {
									d.y = row.value;
								}

								if (!row.value1) {
									d.x2 = row.value4;
									d.value2 = 0.2;
								} else {
									d.x = row.value1;
									d.value = 0.2;
								}

								ret.push(d);

							});

							res.send(ret);
						} else {
							res.send([]);
						}
					});
				} else {
					res.send([]);
				}
			});
		});

	},

	individualSpider: function(req, res) {
		var screen = req.querystring.screen;
		var metric = req.querystring.metric;
		var company = req.querystring.company;
		var segment = req.querystring.segment || 9;
		var graph = req.querystring.graph || 3;
		var query = [
			"Select",
			"tbl_client_segment_ytd.ID As id,",
			"tbl_roe_analysis_ltm_pct_segment.Period As period,",
			"tbl_metrics1.Metric_Name As Graph_Metric_Names,",
			"If(tbl_metrics1.Higher_Good_or_Bad = 1,",
			"1-tbl_roe_analysis_ye_matrix_pct_10.X1, tbl_roe_analysis_ye_matrix_pct_10.X1) As",
			"value,",
			"tbl_graph_metrics.id_metric As metric_id,",
			"tbl_metrics.Metric_Name As metric_name,",
			"tbl_graphs.id As graph_id,",
			"tbl_metrics1.ID As ID1,",
			"tbl_metrics1.Higher_Good_or_Bad As higher_good_or_bad,",
			"tbl_graph_metrics.id_metric",
			"From",
			"tbl_client_segment_ytd Inner Join",
			"tbl_roe_analysis_ye_matrix_pct_10 On tbl_client_segment_ytd.ID =",
			"tbl_roe_analysis_ye_matrix_pct_10.ID Inner Join",
			"tbl_segment On tbl_client_segment_ytd.Prev_YE_Spec_Code = tbl_segment.ID",
			"Inner Join",
			"tbl_roe_analysis_ltm_pct_segment",
			"On tbl_segment.ID = tbl_roe_analysis_ltm_pct_segment.Segment Inner Join",
			"tbl_period On tbl_period.Current_Period = tbl_client_segment_ytd.Period And",
			"tbl_period.Current_Period = tbl_roe_analysis_ltm_pct_segment.Period",
			"Inner Join",
			"tbl_metrics tbl_metrics1",
			"On tbl_metrics1.Metric = tbl_roe_analysis_ltm_pct_segment.Metric And",
			"tbl_roe_analysis_ye_matrix_pct_10.Metric = tbl_metrics1.Metric Inner Join",
			"tbl_graph_metrics On tbl_metrics1.ID = tbl_graph_metrics.id_metric Inner Join",
			"tbl_graphs On tbl_graph_metrics.id_Graph = tbl_graphs.id Inner Join",
			"tbl_metrics On tbl_metrics.ID = tbl_graphs.metric_id",
			"Where",
			"tbl_client_segment_ytd.ID = " + company + " And",
			"tbl_graphs.id = " + graph + " And",
			"tbl_period.Most_Recent_Period = 1"
		].join(' ');

		var decider = [
			"Select",
			"tbl_graphs.id as id,",
			"tbl_graphs.metric_id as metric_id,",
			"tbl_graphs.graph_type as graph_type,",
			"tbl_graphs.Graph_Name as graph_name,",
			"tbl_graphs.Rank as rank",
			"From",
			"tbl_graphs",
			"Where",
			"tbl_graphs.metric_id =" + metric + " Order By",
			"tbl_graphs.Rank"
		].join(' ');

		DB.query(decider, function(err1, dec) {
			var has_spider = false;
			dec.forEach(function(g) {
				if (g.graph_type == 3) {
					has_spider = true;
				}
			});


			if (has_spider) {
				DB.query(query, function(err1, result) {
					if (!err1) {
						var ret = [];
						result.forEach(function(row) {
							ret.push({
								metric: row.Graph_Metric_Names,
								Value: (1 - row.value)
							})
						})
						res.send(ret);
					} else {
						res.send([]);
					}
				});
			} else {
				res.send([]);
			}
		});
	},
};
