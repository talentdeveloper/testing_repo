BlkLab.App.Segment = 8;
BlkLab.App.Screen = 9;
BlkLab.App.Metric = 173;

BlkLab.App.doughnutChart = function(ctx, data, options) {
	return new Chart(ctx).Doughnut(data, {
		responsive: false,
		animationEasing: "easeOutQuart",
		percentageInnerCutout: 75,
		legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
	});
}


BlkLab.App.IndustryView = BlkLab.View.extend({
	template: this.views['./app/js/views/industry/index.hbs']
});

BlkLab.App.IndustryDetailedMetricsView = BlkLab.View.extend({
	template: this.views['./app/js/views/industry/detailed-metrics.hbs']
});

BlkLab.App.AddSegmentView = BlkLab.View.extend({
	template: this.views['./app/js/views/industry/add-segment.hbs']
});

BlkLab.App.EditSegmentView = BlkLab.View.extend({
	template: this.views['./app/js/views/industry/edit-segment.hbs']
});

BlkLab.App.IndustryController = BlkLab.Controller.extend({
	actions: {
		peerMenu: function() {
			var x = document.getElementById("peerMenu");
			var y = document.getElementById("peerDetails");
		    if (x.style.display == 'none') {
		        x.style.display = 'block';
		
		    } else {
		        x.style.display = 'none';
		
		    }
		    if (y.style.display != 'none') {
		        y.style.display = 'none';
		
		    }
		
		
		},

		showPeers: function() {

/*			if ($('#peerMenu').is(':visible')) {

				$('#peerMenu').hide();
			} else
*/				var self = BlkLab.App.IndividualController;

			
				BlkLab.get({
					url: '/api/individual/reportcard/' + BlkLab.App.Segment
				}).then(function(http) {
					var segmentDetails = JSON.parse(http.response);
					var segmentDetails = segmentDetails[0]["rows"];

					var length = segmentDetails.name.length;
					var html = "";
					html += '<div class="arrow_box" id="peerDetails">';
					html += '<header><div class="inner"><h2>INDUSTRY SEGMENT PARTICIPANTS</h2></div><div id="peerClose">Close X</div></header>';
					html += '<div class="arrow_box_contents"><table id="peerSetList"><tr>';
					html += '<TH align="center"><b>' + segmentDetails["segment"][0] + '</b></TH><TR>';

					for (l = 0; l < length; l++) {
						html += '<TR><TD>' + (l + 1) + ". " + segmentDetails["name"][l] + '<TD></TR>';
					}
					html += '</table></div></div>';
					$('#peerDetails').replaceWith(html);
					$('#peerDetails').show();

					var peerclose = function() {
						//var container = BlkLab.create('div');
						//container.id = "peerDetails";
						//_$('#peerDtls').append(container);
						$('#peerDetails').hide();
						$('#peerMenu').hide();

					}

					_$('#peerClose').click(peerclose);
					
				});
//			}

		},

		filterSegment: function() {
			//var self = BlkLab.App.IndustryController;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/industry/reportcardfilter/';
			} else {
				url = '/api/industry/reportcardfilterauth/';
			}
			
			BlkLab.get({
				url: url + BlkLab.App.Segment
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				_$('#segment-list').length = 0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					//opt.data('name', segments.userId[i]);
					//opt.name = segments.userId[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);
					var sel = _$('#segment-list').option[i];
					sel.data("foo",segments.userId[i]);*/
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
					////alert(check);
				}
				if (BlkLab.App.Segment == null) {
					BlkLab.App.Segment = segments.id[0];
				}

				var segment = BlkLab.App.Segment;

				BlkLab.Storage.set('segment', segment);
				_$('#segment-list').value = BlkLab.App.Segment;

			});
		},

		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndustryController.actions.editSegment();

		},



		editSegment: function() {
			//var check = _$('#segment-list').find('option:selected').attr("name");
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");
			
			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. PLease select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					////alert(JSON.stringify(data));

					var segments = data.segment;
					var company = data.company;
					data = segment;

					view.model = {
						data: {
							data: segments
						}
					};


					var html = view.render();

					var container = BlkLab.create('div');
					container.innerHTML = html;
					container.id = "modal-container";
					_$('#content').append(container);
					_$('#editSegment-list').value = segment;
					for (var i = 0, len = company.length; i < len; i++) {
						if (company[i]['selected'] == 0) {
							$('#companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						} else {
							$('#added-companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						}
					}
				
					var sel = _$('#added-companies-list');
					var nonSel = _$('#companies-list');

					for (var i = 1, len = sel.options.length; i < len; i++) {
						var opt = sel.options[i];
						////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndustryController.refreshActions();
					BlkLab.App.IndustryDetailedMetricsController.refreshActions();

				});
			}
		},

		addSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.AddSegmentView();
			BlkLab.get({
				url: '/api/industry/companies'
			}).then(function(http) {
				var data = JSON.parse(http.responseText);

				view.model = {
					data: {
						data: data
					}
				};

				var html = view.render();

				var container = BlkLab.create('div');
				container.innerHTML = html;
				container.id = "modal-container";
				_$('#content').append(container);
				BlkLab.App.IndustryController.refreshActions();
				

			},function(http) {
					BlkLab.Security.handle(http, true);
				});
		},

		updateSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);
			var segment = BlkLab.App.Segment;
			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}

			var name = payload["name"];
			var selValue = $('#editSegment-list option[value ="' + segment + '"]').text();
			var txtValue = $('#name').val();
			if (selValue != txtValue) {
				payload["name"] = txtValue;
			} else {
				payload["name"] = selValue;
			}


			payload["segment"] = segment;
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				//alert("Please enter a segment name");
			} else if (opts.length < 2) {

				//alert("Please select at least 2 participating companies");

			} else {


				BlkLab.post({
					url: '/api/industry/editSegment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);

					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndividualController.actions.filterSegment();
					BlkLab.App.IndustryController.actions.loadGraphs();
					

				});

				return false;
			}
		},

		createSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);

			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}


			var name = payload["name"];
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 3) {

				alert("Please select at least 2 participating companies");

			} else {
				BlkLab.post({
					url: '/api/industry/segment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#segment-list').append(opt);
					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndustryController.actions.filterSegment();
					BlkLab.App.IndustryController.actions.loadGraphs();

				});

				return false;
			}
		},

		cancel: function() {
			_$('#modal-container').destroy();
		},

		add: function() {
			var select = _$('#added-companies-list');
			select.options[0].remove();
			!$('#companies-list option:selected').remove().appendTo('#added-companies-list');
			$("#added-companies-list").html($("#added-companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#added-companies-list").prepend("<option value=''>Companies Selected</option>");


		},

		delete: function() {
			!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

			$("#companies-list").html($("#companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#companies-list").prepend("<option value=''>Select Companies</option>");
		},



		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			BlkLab.App.IndustryController.actions.loadGraphs();
		},

		changeScreen: function() {
			BlkLab.Storage.set('screen', this.value);
			BlkLab.App.Screen = this.value;
		},

		loadGraphs: function() {
			_$('.graph').each(function(graph) {
				var id = graph.id;
				var ident = graph.data('id');

				BlkLab.get({
					url: '/api/industry/report-card/segment/' + ident + '?segment=' + BlkLab.App.Segment
				}).then(function(http) {
					var results = JSON.parse(http.response);
					////alert(JSON.stringify(http.response));
					if (Object.keys(results).length > 0) {
						var data = [{
							value: results[0].PCT_val,
							color: results[0].colors,
							highlight: results[0].colors,
							label: results[0].Metric_Name
						}, {
							value: results[1].PCT_val,
							color: results[1].colors,
							highlight: results[1].colors,
							label: results[1].Metric_Name
						}];
					} else {
						var data = [{
							value: 0,
							color: '#e2e2e4',
							highlight: '#e2e2e4',
							label: 'N/A'
						}];
					}

					if (results) {
						_$('#' + id + '_value').innerHTML = results[1].Value.toFixed(2) || 0;
						if (results[1].PCT_val < 1) {
							_$('#' + id + '_perc').innerHTML = Math.round(results[1].PCT_val * 100).toPrecision(2) + results[0].format;
						} else {
							_$('#' + id + '_perc').innerHTML = "100" + results[0].format;
						}
					} else {
						_$('#' + id + '_value').innerHTML = "";
						_$('#' + id + '_perc').innerHTML = "";
					}

					var ctx = graph.getContext("2d");
					ctx.clearRect(0, 0, graph.width, graph.height);
					var chart = BlkLab.App.doughnutChart(ctx, data);

				}, function(http) {
					BlkLab.Security.handle(http);
				});
			})
		}
	},

	render: function(params) {
		var view = new BlkLab.App.IndustryView();
		view.model = {
			data: {
				segments: BlkLab.Filters.segments,
				screens: BlkLab.Filters.screens,
				indSegments: BlkLab.Filters.indSegments
			}
		}
		view.render('#content');

		var segment = BlkLab.Storage.get('segment');
		var screen = BlkLab.Storage.get('screen');

		if (segment) {
			BlkLab.App.Segment = segment;
		}

		var x = document.getElementById("peerMenu");
		       x.style.display = 'none';
		if (screen) {
			BlkLab.App.Screen = screen;
		}

		_$('#segment-list').value = BlkLab.App.Segment;
		_$('#screen-list').value = BlkLab.App.Screen;


		this.actions.filterSegment();
		this.actions.loadGraphs();
		this.refreshActions();
	}
});

BlkLab.App.IndustryDetailedMetricsController = BlkLab.Controller.extend({
	lastSel: '',

	actions: {

		peerMenu: function() {
			var x = document.getElementById("peerMenu");
			var y = document.getElementById("peerDetails");
		    if (x.style.display == 'none') {
		        x.style.display = 'block';
		
		    } else {
		        x.style.display = 'none';
		
		    }
		    if (y.style.display != 'none') {
		        y.style.display = 'none';
		
		    }
		
		
		},

		showPeers: function() {

/*			if ($('#peerMenu').is(':visible')) {

				$('#peerMenu').hide();
			} else
*/				var self = BlkLab.App.IndividualController;

			
				BlkLab.get({
					url: '/api/individual/reportcard/' + BlkLab.App.Segment
				}).then(function(http) {
					var segmentDetails = JSON.parse(http.response);
					var segmentDetails = segmentDetails[0]["rows"];

					var length = segmentDetails.name.length;
					var html = "";
					html += '<div class="arrow_box" id="peerDetails">';
					html += '<header><div class="inner"><h2>INDUSTRY SEGMENT PARTICIPANTS</h2></div><div id="peerClose">Close X</div></header>';
					html += '<div class="arrow_box_contents"><table id="peerSetList"><tr>';
					html += '<TH align="center"><b>' + segmentDetails["segment"][0] + '</b></TH><TR>';

					for (l = 0; l < length; l++) {
						html += '<TR><TD>' + (l + 1) + ". " + segmentDetails["name"][l] + '<TD></TR>';
					}
					html += '</table></div></div>';
					$('#peerDetails').replaceWith(html);
					$('#peerDetails').show();

					var peerclose = function() {
						//var container = BlkLab.create('div');
						//container.id = "peerDetails";
						//_$('#peerDtls').append(container);
						$('#peerDetails').hide();
						$('#peerMenu').hide();

					}

					_$('#peerClose').click(peerclose);
					
				});
//			}

		},

		filterSegment: function() {
			//var self = BlkLab.App.IndustryController;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/industry/reportcardfilter/';
			} else {
				url = '/api/industry/reportcardfilterauth/';
			}
			
			BlkLab.get({
				url: url + BlkLab.App.Segment
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				
				_$('#segment-list').length = 0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					//opt.data('name', segments.userId[i]);
					//opt.name = segments.userId[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);
					var sel = _$('#segment-list').option[i];
					sel.data("foo",segments.userId[i]);*/
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
					////alert(check);
				}
				if (BlkLab.App.Segment == null) {
					BlkLab.App.Segment = segments.id[0];
				}

				var segment = BlkLab.App.Segment;

				BlkLab.Storage.set('segment', segment);
				_$('#segment-list').value = BlkLab.App.Segment;

			});
		},

		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndustryDetailedMetricsController.actions.editSegment();

		},



		editSegment: function() {
			//var check = _$('#segment-list').find('option:selected').attr("name");
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");
			
			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. PLease select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					////alert(JSON.stringify(data));

					var segments = data.segment;
					var company = data.company;
					data = segment;

					view.model = {
						data: {
							data: segments
						}
					};


					var html = view.render();

					var container = BlkLab.create('div');
					container.innerHTML = html;
					container.id = "modal-container";
					_$('#content').append(container);
					_$('#editSegment-list').value = segment;
					for (var i = 0, len = company.length; i < len; i++) {
						if (company[i]['selected'] == 0) {
							$('#companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						} else {
							$('#added-companies-list').append("<option value='" + company[i]['id'] + "'>" + company[i]['name'] + "</option>");
						}
					}
				
					var sel = _$('#added-companies-list');
					var nonSel = _$('#companies-list');

					for (var i = 1, len = sel.options.length; i < len; i++) {
						var opt = sel.options[i];
						////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndustryDetailedMetricsController.refreshActions();
					

				});
			}
		},

		addSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.AddSegmentView();
			BlkLab.get({
				url: '/api/industry/companies'
			}).then(function(http) {
				var data = JSON.parse(http.responseText);

				view.model = {
					data: {
						data: data
					}
				};

				var html = view.render();

				var container = BlkLab.create('div');
				container.innerHTML = html;
				container.id = "modal-container";
				_$('#content').append(container);
				BlkLab.App.IndustryDetailedMetricsController.refreshActions();
				

			},function(http) {
					BlkLab.Security.handle(http, true);
				});
		},

		updateSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);
			var segment = BlkLab.App.Segment;
			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}

			var name = payload["name"];
			var selValue = $('#editSegment-list option[value ="' + segment + '"]').text();
			var txtValue = $('#name').val();
			if (selValue != txtValue) {
				payload["name"] = txtValue;
			} else {
				payload["name"] = selValue;
			}


			payload["segment"] = segment;
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				alert("Please enter a segment name");
			} else if (opts.length < 2) {

				alert("Please select at least 2 participating companies");

			} else {


				BlkLab.post({
					url: '/api/industry/editSegment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);

					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndustryDetailedMetricsController.actions.filterSegment();
					BlkLab.App.IndustryDetailedMetricsController.actions.loadMetrics();

				});

				return false;
			}
		},

		createSegment: function(ev) {
			ev.preventDefault();
			var payload = BlkLab.Form.collect('form', false);

			var opts = [],
				opt;
			var sel = _$('#added-companies-list');

			for (var i = 1, len = sel.options.length; i < len; i++) {
				opt = sel.options[i];
				if (opt.value) {
					opts.push(opt.value);
				}
			}


			var name = payload["name"];
			payload["companies"] = opts;
			payload = JSON.stringify(payload);
			if (!name) {
				//alert("Please enter a segment name");
			} else if (opts.length < 3) {

				//alert("Please select at least 2 participating companies");

			} else {
				BlkLab.post({
					url: '/api/industry/segment',
					data: payload
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					var id = data.id;
					var opt = document.createElement('option');
					opt.value = id;
					opt.innerHTML = name;

					_$('#segment-list').append(opt);
					_$('#modal-container').destroy();

					BlkLab.App.Segment = opt.value;
					_$('#segment-list').value = BlkLab.App.Segment;
					BlkLab.App.IndustryDetailedMetricsController.actions.filterSegment();
					BlkLab.App.IndustryDetailedMetricsController.actions.loadMetrics();

				});

				return false;
			}
		},

		cancel: function() {
			_$('#modal-container').destroy();
		},

		add: function() {
			var select = _$('#added-companies-list');
			select.options[0].remove();
			!$('#companies-list option:selected').remove().appendTo('#added-companies-list');
			$("#added-companies-list").html($("#added-companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#added-companies-list").prepend("<option value=''>Companies Selected</option>");


		},

		delete: function() {
			!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

			$("#companies-list").html($("#companies-list option").sort(function(a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}))
			$("#companies-list").prepend("<option value=''>Select Companies</option>");
		},

		
		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			BlkLab.App.IndustryDetailedMetricsController.actions.loadMetrics();
		},

		changeScreen: function() {
			BlkLab.App.Screen = this.value;
			BlkLab.Storage.set('screen', this.value);
			BlkLab.App.IndustryDetailedMetricsController.actions.loadMetrics();
		},

		changeMetric: function() {
			BlkLab.App.Metric_Code = _$(this).data('metric');
			BlkLab.Storage.set('metric', _$(this).data('metric'));
			BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
		},


		changeType: function() {
			BlkLab.App.Actuals = this.value == 'ACT' ? true : false;
			var base = '/api/graphs/industry/xy/pct';
			if (BlkLab.App.Actuals) {
				//base = '/api/graphs/individual/xy';
				base = '/api/graphs/industry/xy';
			}

			BlkLab.get({
				url: base + '?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				////alert(JSON.stringify(chartData));
				if (chartData.length > 0) {
					var chart = new AmCharts.AmXYChart();
					chart.addClassNames = true;
					chart.classNamePrefix = "amcharts";
					chart.sequencedAnimation = true;
					chart.startEffect = "easeInSine";
					chart.startDuration = 1;
					chart.pathToImages = "amcharts/images";
					chart.marginRight = 1;
					chart.dataProvider = chartData;
					chart.export = {
						enabled: true
					};

					var YAxisTitle = chartData[0].yaxis;
					var XAxisTitle = chartData[0].xaxis;
					var YAxisAvg = chartData[0].yaxisavg;
					var XAxisAvg = chartData[0].xaxisavg;
					var metric_name = chartData[0].metric_name;
					var YAxisPctAvg = 50;
					var XAxisPctAvg = 50;
					var YHigher_Good_or_Bad = chartData[0].yaxishgb;
					var XHigher_Good_or_Bad = chartData[0].xaxishgb;
					var period = chartData[0].period;

					chart.titles = [{
						text: metric_name + " drivers",
						bold: true,
						size: 14
					}, {
						text: "Period:" + period + " (TTM)",
						bold: false,
						size: 12
					}];

					var valueAxis = new AmCharts.ValueAxis();
					valueAxis.title = YAxisTitle;
					BlkLab.App.Actuals
					if (!BlkLab.App.Actuals) {
						valueAxis.baseValue = YAxisPctAvg;
					} else {
						valueAxis.baseValue = YAxisAvg;
					}
					valueAxis.titleBold = false;
					valueAxis.position = "left";
					valueAxis.inside = false;
					valueAxis.autoGridCount = false;
					valueAxis.gridCount = 25;
					valueAxis.minMaxMultiplier = 1;
					valueAxis.gridAplha = 0.0;
					valueAxis.gridThickness = 0;
					valueAxis.labelFrequency = 5;
					valueAxis.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis.reversed = false;
					} else {
						valueAxis.reversed = (YHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis);


					var valueAxis2 = new AmCharts.ValueAxis();
					if (!BlkLab.App.Actuals) {
						valueAxis2.baseValue = XAxisPctAvg;
					} else {
						valueAxis2.baseValue = XAxisAvg;
					}
					valueAxis2.title = XAxisTitle;
					valueAxis2.autoWrap = false;
					valueAxis2.titleBold = false;
					valueAxis2.position = "bottom";
					valueAxis2.inside = false;
					valueAxis2.autoGridCount = false;
					valueAxis2.gridCount = 50;
					valueAxis2.minMaxMultiplier = 1.05;
					valueAxis2.gridAplha = 0.0;
					valueAxis2.gridThickness = 0;
					valueAxis2.labelFrequency = 5;
					valueAxis2.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis2.reversed = false;
					} else {
						valueAxis2.reversed = (XHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis2);

					var guide = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide.value = YAxisPctAvg;
					} else {
						guide.value = YAxisAvg;
					}
					guide.lineColor = "Gray";
					if (!BlkLab.App.Actuals) {
						guide.label = "Avg: 50%";
					} else {
						guide.label = "Avg: " + YAxisAvg;
					}
					guide.inside = true;
					guide.lineThickness = 1;
					valueAxis.addGuide(guide);

					var guide2 = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide2.value = XAxisPctAvg;
					} else {
						guide2.value = XAxisAvg;
					}
					guide2.lineColor = "Gray";
					if (!BlkLab.App.Actuals) {
						guide2.label = "Avg: 50%";
					} else {
						guide2.label = "Avg: " + XAxisAvg;
					}
					guide2.inside = true;
					guide2.labelRotation = 90;
					guide2.lineThickness = 1;
					valueAxis2.addGuide(guide2);

					var graph = new AmCharts.AmGraph();
					graph.bullet = "round";
					graph.animationPlayed = false;
					graph.xField = "x";
					graph.yField = "y";
					graph.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					graph.valueField = "value";
					graph.lineAlpha = 0;
					graph.colorField = "color";
					graph.bulletBorderColor = "#0489d6";
					graph.bulletBorderThickness = 2;
					graph.bulletSize = 8;
					graph.maxBulletSize = 8;
					graph.minBulletSize = 8;
					chart.addGraph(graph);


					var graph2 = new AmCharts.AmGraph();
					graph2.id = "company";
					graph.animcationPlayed = false;
					graph2.bullet = "round";
					graph2.classNameField = "lastBullet";
					graph2.xField = "x2";
					graph2.yField = "y2";
					graph2.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					graph2.valueField = "value2";
					graph2.lineAlpha = 0.2;
					graph2.colorField = "color";
					graph2.bulletBorderColor = "Black";
					graph2.bulletBorderAlpha = 1;
					graph2.bulletBorderThickness = 0;
					graph2.bulletSize = 8;
					graph2.maxBulletSize = 8;
					graph2.minBulletSize = 8;
					chart.addGraph(graph2);

					var legend = new AmCharts.AmLegend();
					legend.position = "bottom";
					legend.verticalGap = 2;
					legend.align = "center";
					legend.data = [{
						title: metric_name + ":<br>",
						color: "white",
						markerType: "none"
					}, {
						title: "1st Quartile",
						color: "Green",
						markerType: "round"
					}, {
						title: "2nd Quartile",
						color: "LightGreen",
						markerType: "round"
					}, {
						title: "3rd Quartile",
						color: "Orange",
						markerType: "round"
					}, {
						title: "4th Quartile",
						color: "Red",
						markerType: "round"
					}];
					legend.equalWidths = false;
					legend.spacing = 5;
					legend.valueWidth = 0;
					legend.marginLeft = 0;
					legend.marginRight = 0;
					legend.fontSize = 10;
					legend.markerSize = 10;

					chart.addLegend(legend);


					chart.write("xydiv");
					_$('#xydiv').show();
					_$('#XY_Radio').show();
				} else {
					_$('#xydiv').hide();
					_$('#XY_Radio').hide();
				}

			}, function(http) {
				BlkLab.Security.handle(http);
			});

		},

		loadMetrics: function() {
			BlkLab.get({
				url: '/api/industry/segment/screen?segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen
			}).then(function(http) {
				var results = JSON.parse(http.response);
				_$("#data").innerHTML = results.html;
				_$('#chart-holder').hide();
				BlkLab.App.IndustryDetailedMetricsController.refreshActions();
			}, function(http) {
				BlkLab.Security.handle(http);
			});
		},

		showGraphs: function() {
			var self = BlkLab.App.IndustryDetailedMetricsController;
			var ele = _$(this);
			var table = ele.parent.parent;
			var header = table.children_by_tag('tr').first().cloneNode(true);
			var row = ele.cloneNode(true);
			var tbl = BlkLab.create('table');
			tbl.append(header);
			tbl.append(row);

			BlkLab.App.Metric = ele.data('id');

			_$("chartdiv").innerHTML = '';
			_$("bardiv").innerHTML = '';
			_$("xydiv").innerHTML = '';

			if (self.lastSel) {
				self.lastSel.remove_class('selected');
			}

			ele.add_class('selected');
			self.lastSel = ele;


			var base = '/api/graphs/individual/xy/pct';
			if (BlkLab.App.Actuals) {
				base = '/api/graphs/industry/xy';
			}

			BlkLab.get({
				url: base + '?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				if (chartData.length > 0) {
					var chart = new AmCharts.AmXYChart();
					chart.addClassNames = true;
					chart.classNamePrefix = "amcharts";
					chart.sequencedAnimation = true;
					chart.startEffect = "easeInSine";
					chart.startDuration = 1;
					chart.pathToImages = "amcharts/images";
					chart.marginRight = 1;
					chart.dataProvider = chartData;
					chart.export = {
						enabled: true
					};

					var YAxisTitle = chartData[0].yaxis;
					var XAxisTitle = chartData[0].xaxis;
					var YAxisAvg = chartData[0].yaxisavg;
					var XAxisAvg = chartData[0].xaxisavg;
					var metric_name = chartData[0].metric_name;
					var YAxisPctAvg = 50;
					var XAxisPctAvg = 50;
					var YHigher_Good_or_Bad = chartData[0].yaxishgb;
					var XHigher_Good_or_Bad = chartData[0].xaxishgb;
					var period = chartData[0].period;
					var segment_name = chartData[0].segment_name;


					chart.titles = [{
						text: metric_name + " drivers (" + period + ")",
						bold: true,
						size: 14
					}, {
						text: "Industry segment: " + segment_name,
						bold: false,
						size: 12
					}];

					var valueAxis = new AmCharts.ValueAxis();
					valueAxis.title = YAxisTitle;
					valueAxis.baseValue = YAxisAvg;
					valueAxis.titleBold = false;
					valueAxis.position = "left";
					valueAxis.inside = false;
					valueAxis.autoGridCount = false;
					valueAxis.gridCount = 25;
					valueAxis.minMaxMultiplier = 1.2;
					valueAxis.gridAplha = 0.2;
					valueAxis.gridThickness = 0;
					valueAxis.labelFrequency = 5;
					valueAxis.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis.reversed = false;
					} else {
						valueAxis.reversed = (YHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis);


					var valueAxis2 = new AmCharts.ValueAxis();
					valueAxis2.baseValue = XAxisAvg;
					valueAxis2.title = XAxisTitle;
					valueAxis2.autoWrap = false;
					valueAxis2.titleBold = false;
					valueAxis2.position = "bottom";
					valueAxis2.inside = false;
					valueAxis2.autoGridCount = false;
					valueAxis2.gridCount = 50;
					valueAxis2.minMaxMultiplier = 1.2;
					valueAxis2.gridAplha = 0.2;
					valueAxis2.gridThickness = 0;
					valueAxis2.labelFrequency = 5;
					valueAxis2.includeGuidesInMinMax = false;
					if (!BlkLab.App.Actuals) {
						valueAxis2.reversed = false;
					} else {
						valueAxis2.reversed = (XHigher_Good_or_Bad == '1');
					}
					chart.addValueAxis(valueAxis2);

					var guide = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide.value = YAxisPctAvg;
					} else {
						guide.value = YAxisAvg;
					}
					guide.lineColor = "Gray";
					guide.label = "Avg: " + YAxisAvg;
					guide.inside = true;
					guide.lineThickness = 1;
					valueAxis.addGuide(guide);

					var guide2 = new AmCharts.Guide();
					if (!BlkLab.App.Actuals) {
						guide2.value = XAxisPctAvg;
					} else {
						guide2.value = XAxisAvg;
					}
					guide2.lineColor = "Gray";
					guide2.label = "Avg: " + XAxisAvg;
					guide2.inside = true;
					guide2.labelRotation = 90;
					guide2.lineThickness = 1;
					valueAxis2.addGuide(guide2);

					var graph = new AmCharts.AmGraph();
					graph.bullet = "round";
					graph.animationPlayed = false;
					graph.xField = "x";
					graph.yField = "y";
					graph.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
					//graph.valueField = "value";
					graph.lineAlpha = 0;
					graph.colorField = "color";
					graph.bulletBorderColor = "#0489d6";
					graph.bulletBorderThickness = 2;
					graph.bulletSize = 8;
					graph.minBulletSize = 8;
					graph.maxBulletSize = 8;
					chart.addGraph(graph);
					/*
										var graph = new AmCharts.AmGraph();
										graph.bullet = "round";
										graph.animationPlayed = false;
										graph.xField = "x";
										graph.yField = "y";
										graph.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
										graph.valueField = "value";
										graph.lineAlpha = 0;
										graph.colorField = "color";
										graph.bulletBorderColor = "#0489d6";
										graph.bulletBorderThickness = 2;
										//graph.maxBulletSize = 10;
										chart.addGraph(graph);


										var graph2 = new AmCharts.AmGraph();
										graph2.id = "company";
										graph2.bullet = "round";
										graph2.animationPlayed = false;
										graph2.classNameField = "lastBullet";
										graph2.xField = "x2";
										graph2.yField = "y2";
										graph2.balloonText = "<b>[[Company]]</b><br>" + YAxisTitle + ":[[y]] " + XAxisTitle + ":[[x]]";
										graph2.valueField = "value2";
										graph2.lineAlpha = 0.2;
										graph2.colorField = "color";
										graph2.bulletBorderColor = "Black";
										graph2.bulletBorderAlpha = 1;
										graph2.bulletBorderThickness = 0;
										graph2.maxBulletSize = 12;
										chart.addGraph(graph2);
					*/
					var legend = new AmCharts.AmLegend();
					legend.position = "bottom";
					legend.verticalGap = 2;
					legend.align = "center";
					legend.data = [{
						title: metric_name + ":<br>",
						color: "white",
						markerType: "none"
					}, {
						title: "1st Quartile",
						color: "Green",
						markerType: "round"
					}, {
						title: "2nd Quartile",
						color: "LightGreen",
						markerType: "round"
					}, {
						title: "3rd Quartile",
						color: "Orange",
						markerType: "round"
					}, {
						title: "4th Quartile",
						color: "Red",
						markerType: "round"
					}];
					legend.equalWidths = false;
					legend.spacing = 5;
					legend.valueWidth = 0;
					legend.marginLeft = 0;
					legend.marginRight = 0;
					legend.fontSize = 10;
					legend.markerSize = 10;

					chart.addLegend(legend);
					chart.write("xydiv");
					_$('#xydiv').show();
					_$('#XY_Radio').show();
				} else {
					_$('#xydiv').hide();
					_$('#XY_Radio').hide();
				}

			}, function(http) {
				BlkLab.Security.handle(http);
			});


			BlkLab.get({
				url: '/api/graphs/industry/line?segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				var segment_description = chartData[0].segment_description;
				var metric_description = chartData[0].metric_description;
				var period_start = chartData[0].Period;
				var period_end = chartData[(chartData.length - 1)].Period;

				var format = chartData[0].format;

				// SERIAL CHART
				chart = new AmCharts.AmSerialChart();
				chart.addClassNames = true;
				chart.classNamePrefix = "amcharts";
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.backgroundColor = "#ffffff";
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.categoryField = "Period";
				chart.handDrawn = false;
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					text: metric_description + ": " + period_start + " - " + period_end,
					bold: true,
					size: 14
				}, {
					text: segment_description,
					bold: false,
					size: 12
				}];


				// Category Axis

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;
				//   categoryAxis.labelFunction = formatcategory;



				// Value Axis

				var valueAxis = new AmCharts.ValueAxis();
				if (format == "%") {
					valueAxis.unit = "%";
				} else if (format == "$") {
					valueAxis.unit = "$";
				}
				if (format == "%") {
					valueAxis.Position = "right";
				} else {
					valueAxis.unitPosition = "left";
				}
				//valueAxis.labelFunction = formatLabel;
				valueAxis.gridAlpha = 1;
				valueAxis.gridCount = 0;
				valueAxis.gridThickness = 0;
				valueAxis.gridColor = "Gray";
				chart.addValueAxis(valueAxis);


				// GRAPHS

				var graph1 = new AmCharts.AmGraph();
				graph1.id = "median";
				//graph1.classNameField = "movingLine";
				graph1.animationPlayed = false;
				graph1.valueField = "Avg";
				graph1.type = "line";
				graph1.lineColor = "Orange";
				graph1.lineAlpha = 0.8;
				graph1.dashLength = 4;
				graph1.lineThickness = 2;
				graph1.cornerRadiusTop = 0;
				graph1.title = "Median";
				//graph1.fillColors = "Orange";
				// graph1.fillAlphas = 1;
				graph1.bullet = "round";
				graph1.bulletBorderThickness = 2;
				graph1.bulletBorderAlpha = 1;
				graph1.bulletBorderColor = "Orange";
				graph1.bulletSize = 8;
				graph1.bulletColor = "White";
				graph1.backgroundColor = "#FFFFFF";
				//if(format == "%") {graph1.labelText  = "[[Avg]]%";} else if(format == "$") {graph1.labelText  = "$[[Avg]]";} else {graph1.labelText  = "[[Avg]]";}
				if (format == "%") {
					graph1.balloonText = "[[Avg]]%";
				} else if (format == "$") {
					graph1.balloonText = "$[[Avg]]";
				} else {
					graph1.balloonText = "[[Avg]]";
				}
				chart.addGraph(graph1);

				var graph2 = new AmCharts.AmGraph();
				graph2.animationPlayed = true;
				graph2.valueField = "Bottom";
				graph2.type = "line";
				graph2.lineColor = "DarkRed";
				graph2.lineThickness = 2;
				graph2.lineAlpha = 0;
				graph2.title = "Bottom 25%";
				graph2.bullet = "round";
				graph2.bulletBorderThickness = 2;
				graph2.bulletBorderAlpha = 1;
				graph2.bulletBorderColor = "DarkRed";
				graph2.bulletSize = 4;
				graph2.bulletColor = "White";
				graph2.backgroundColor = "#FFFFFF";
				if (format == "%") {
					graph2.balloonText = "[[Bottom]]%";
				} else if (format == "$") {
					graph2.balloonText = "$[[Bottom]]";
				} else {
					graph2.balloonText = "[[Bottom]]";
				}
				chart.addGraph(graph2);


				var graph3 = new AmCharts.AmGraph();
				graph3.animationPlayed = true;
				graph3.valueField = "Top";
				graph3.data_labels = "Percents"
				graph3.type = "line";
				graph3.lineColor = "Green";
				graph3.lineThickness = 2;
				graph3.lineAlpha = 0;
				graph3.title = "Top 25%";
				graph3.bullet = "round";
				graph3.bulletBorderThickness = 2;
				graph3.bulletBorderAlpha = 1;
				graph3.bulletBorderColor = "Green";
				graph3.bulletSize = 4;
				graph3.bulletColor = "White";
				graph3.backgroundColor = "#FFFFFF";
				// if(format == "%") {graph3.balloonText = "[[Top]]%";} else if(format == "$") {graph3.balloonText = "$[[Top]]";} else {graph3.balloonText = "[[Top]]";}
				chart.addGraph(graph3);

				//legend
				var legend = new AmCharts.AmLegend();
				legend.position = "bottom";
				legend.verticalGap = 2;
				legend.align = "center";
				legend.useGraphSettings = true;
				//legend.data = [{title: "Peer Median" },{title: "Bottom 25%"},{title:"Top 25%"}];
				legend.equalWidths = false;
				legend.spacing = 5;
				legend.valueWidth = 0;
				legend.fontSize = 10;
				legend.markerSize = 10;

				chart.addLegend(legend);

				// WRITE
				chart.write("chartdiv");

			}, function(http) {
				BlkLab.Security.handle(http);
			});

			BlkLab.get({
				url: '/api/graphs/industry/bar?segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				var metric = chartData[0].Metric;
				var segment_name = chartData[0].Segment;
				var period_start = chartData[0].Period;
				var format = chartData[0].format;

				// SERIAL CHART
				chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.categoryField = "Company";
				chart.rotate = "true";
				chart.handDrawn = false;
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					text: metric + ": " + period_start,
					bold: true,
					size: 14
				}, {
					text: segment_name,
					bold: false,
					size: 12
				}];


				// Category Axis

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;
				categoryAxis.fontSize = 9;
				categoryAxis.position = "left";




				// Value Axis

				var valueAxis = new AmCharts.ValueAxis();
				if (format == "%") {
					valueAxis.unit = "%";
				} else if (format == "$") {
					valueAxis.unit = "$";
				}
				if (format == "%") {
					valueAxis.Position = "right";
				} else {
					valueAxis.unitPosition = "left";
				}
				//valueAxis.labelFunction = formatLabel;
				valueAxis.gridAlpha = 1;
				valueAxis.gridCount = 0;
				valueAxis.gridThickness = 0;
				valueAxis.gridColor = "Gray";
				valueAxis.baseValue = 0;
				chart.addValueAxis(valueAxis);


				// GRAPHS

				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "Value";
				graph1.type = "column";
				graph1.colorField = 'Color';
				graph1.lineColorField = 'Color';
				graph1.fillAlphas = 1;
				graph1.balloonText = "[[value]]%";
				//if(format == "%") {graph1.labelText  = "[[Value]]%";} else if(format == "$") {graph1.labelText  = "$[[Value]]";} else {graph1.labelText  = "[[Value]]";}
				graph1.labelBold = false;
				graph1.fontSize = 10;
				chart.addGraph(graph1);

				// LEGEND

				var legend = new AmCharts.AmLegend();
				legend.position = "bottom";
				legend.verticalGap = 2;
				legend.equalWidths = false;
				legend.align = "left";
				legend.marginLeft = 5;
				legend.marginRight = 5;
				legend.fontSize = 9;
				legend.valueWidth = 0;
				legend.data = [{
					title: "1st Quartile",
					color: "Green",
					markerType: "square"
				}, {
					title: "2nd Quartile",
					color: "LightGreen",
					markerType: "square"
				}, {
					title: "3rd Quartile",
					color: "Orange",
					markerType: "square"
				}, {
					title: "4th Quartile",
					color: "Red",
					markerType: "square"
				}];
				legend.markerSize = 8;
				chart.addLegend(legend);

				// WRITE

				chart.write("bardiv");
			}, function(http) {
				BlkLab.Security.handle(http);
			});

			/*var h =  _$('#segment_metrics').offsetHeight > 665 ?  (_$('#segment_metrics').offsetHeight - 46) : 665;
			_$('#chart-holder').show();
			 _$('#chart-holder').css({
			     left:  _$('#segment_metrics').offsetLeft + 260 + "px",
			     width:  _$('#segment_metrics').offsetWidth - 259 + "px",
			     height: h + 'px',
			     top: '810px'
			});

			_$('#holder').css({
			    height: h + 49 + 'px',
			})

			_$('#chart-holder').click(function(){
			    _$('#chart-holder').hide();
			    _$('#holder').css({
			        height: 'auto',
			    })
			    ele.remove_class('selected');
			})*/

			var tbl_container = _$('#single-table');
			tbl_container.innerHTML = "";
			tbl_container.append(tbl);


			_$('#chart-holder').show();
			_$('#background').show();
			/*_$('#chart-holder').css({
			     left:  _$('#segment_metrics').offsetLeft + 404 + "px",
			     width:  _$('#segment_metrics').offsetWidth - 404 + "px",
			     height: h + 'px',
			     top: '812px'
			});

			_$('#holder').css({
			    height: h + 49 + 'px',
			})
			*/
			document.body.style.overflow = "hidden";

			var close = function() {
				_$('#chart-holder').hide();
				_$('#background').hide();
				ele.remove_class('selected');
				document.body.style.overflow = "auto";
			}

			_$('#background').click(close);
			_$('#close').click(close);
		}
	},

	render: function(params) {
		var self = this;
		var view = new BlkLab.App.IndustryDetailedMetricsView();
		BlkLab.get({
			url: '/api/industry/segment/screen?segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen
		}).then(function(http) {
			var results = JSON.parse(http.response);
			view.model = {
				data: {
					table: results.html,
					segments: BlkLab.Filters.segments,
					screens: BlkLab.Filters.screens,
					indSegments: BlkLab.Filters.indSegments
				}
			}
			view.render('#content');
			
			var x = document.getElementById("peerMenu");
			       x.style.display = 'none';

			var segment = BlkLab.Storage.get('segment');
			var screen = BlkLab.Storage.get('screen');

			if (segment) {
				BlkLab.App.Segment = segment;
			}

			if (screen) {
				BlkLab.App.Screen = screen;
			}

			_$('#segment-list').value = BlkLab.App.Segment;
			_$('#screen-list').value = BlkLab.App.Screen;

			BlkLab.App.IndustryController.actions.filterSegment();
			self.refreshActions();
		}, function(http) {
			BlkLab.Security.handle(http);
		});
	}
});


BlkLab.App.Router.routes({
	'/industry': {
		controller: BlkLab.App.IndustryController
	},

	'/industry/detailed-metrics': {
		controller: BlkLab.App.IndustryDetailedMetricsController
	}
});
