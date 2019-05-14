BlkLab.App.Company = 1951350;
BlkLab.App.Metric_Code = 1;
BlkLab.App.Actuals = true;
BlkLab.App.Segment = 8;

BlkLab.App.IndividualView = BlkLab.View.extend({
	template: this.views['./app/js/views/individual/index.hbs']
});

BlkLab.App.IndividualDetailedMetricsView = BlkLab.View.extend({
	template: this.views['./app/js/views/individual/detailed-metrics.hbs']
});

BlkLab.App.IndividualOutlookView = BlkLab.View.extend({
	template: this.views['./app/js/views/individual/outlook.hbs']
});

BlkLab.App.IndividualSimulationView = BlkLab.View.extend({
	template: this.views['./app/js/views/individual/simulation.hbs']
});

BlkLab.App.IndividualController = BlkLab.Controller.extend({
	charts: [],

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
			
			BlkLab.get({
				url: '/api/individual/reportcard/'+BlkLab.App.Segment,
				
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

		},

		filterSegment: function() {

			var company = BlkLab.App.Company;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/individual/companysegments/';
			} else {
				url = '/api/individual/companysegmentsauth/';
			}
			BlkLab.get({
				url: url + BlkLab.App.Company
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				////alert(JSON.stringify(segments));
				_$('#segment-list').length = 0;
				var test=0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);*/
					if(segments.id[i]==BlkLab.App.Segment){
						test++;
					}
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
				}
				
				if (!BlkLab.App.Segment == null) {
					////alert(BlkLab.App.Segment);
					BlkLab.Storage.set('segment',segments.id[0]);
					BlkLab.App.Segment = segments.id[0];
				} else if(test == 0){
					BlkLab.Storage.set('segment',segments.id[0]);
					BlkLab.App.Segment = segments.id[0];	
				}
				//BlkLab.Storage.set('segment', segments.id[0]);
				BlkLab.Storage.set('segment',BlkLab.App.Segment);
				_$('#segment-list').value = BlkLab.App.Segment;
				
				BlkLab.App.IndividualController.actions.loadGraphs();
			
			});
		},

		editSegment: function() {

			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");
			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. Please select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					//////alert(JSON.stringify(data));

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
						//////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndividualController.refreshActions();


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
				var client = BlkLab.App.Company;

				var container = BlkLab.create('div');
				container.innerHTML = html;
				container.id = "modal-container";
				_$('#content').append(container);



				for (var i = 0, len = data.length; i < len; i++) {
					if (data[i]['ID'] == client) {

						_$('#companies-list option[value = "' + data[i]['ID'] + '"]').remove();

						$('#added-companies-list').append("<option value='" + data[i]['ID'] + "'>" + data[i]['Name'] + "</option>");
					}
				}

				BlkLab.App.IndividualController.refreshActions();

			}, function(http) {
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
					BlkLab.App.IndividualController.actions.filterSegment();
					//BlkLab.App.IndividualController.actions.loadGraphs();

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
					BlkLab.App.IndividualController.actions.filterSegment();
					//BlkLab.App.IndividualController.actions.loadGraphs();

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
			
			var company = BlkLab.App.Company;
			
			var val = $('#added-companies-list option[value = "' + company + '"]:selected');
			var test = $('#added-companies-list').val();
			var check = 0;
			for(i=0; i<test.length; i++){
				if (test[i]==company) {
					check++;
				}
			}
			
			if (check==1) {
				if (confirm('You have chosen to remove ' + val.text() + ' from this Industry Segment.  However it is the Bank Holding Company currently being analysed.\n\nDo you wish to contine?')) {
					// Save it!
					!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

					$("#companies-list").html($("#companies-list option").sort(function(a, b) {
						return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
					}))
					$("#companies-list").prepend("<option value=''>Select Companies</option>");
				}
			} else {
				!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

				$("#companies-list").html($("#companies-list option").sort(function(a, b) {
					return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
				}))
				$("#companies-list").prepend("<option value=''>Select Companies</option>");
			}
		},


		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.App.IndividualController.actions.loadGraphs();
			//BlkLab.App.IndividualController.actions.loadGraphs();
		},


		changeCompany: function() {
			$('#peerDetails').hide();
			
			BlkLab.App.Company = this.value;
			BlkLab.Storage.set('company', this.value);
			BlkLab.App.IndividualController.actions.filterSegment();
			//BlkLab.App.IndividualController.actions.filterSegment();
		},

		/*		changeScreen: function() {
					BlkLab.App.Screen = this.value;
					BlkLab.Storage.set('company', this.value);
				},
		*/
		loadGraphs: function() {
			var self = BlkLab.App.IndividualController;
			_$('.graph').each(function(graph, idx) {
				var id = graph.id;
				var ident = graph.data('id');
				BlkLab.get({
					url: '/api/individual/report-card/' + BlkLab.App.Company + '?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + ident
				}).then(function(http) {
					var results = JSON.parse(http.response);
					_$('#segment-list').value = results[0]["segmentId"];
					BlkLab.App.Segment = results[0]["segmentId"];
					BlkLab.Storage.set('segment', results[0]["segmentId"]);

					//_$('#industry_segment').innerHTML = results[0]["segment"];

					var data;
					if (Object.keys(results).length > 0) {
						var v1 = results[0].PCT_val;
						var v2 = results[1].PCT_val;
						data = [{
							value: v1,
							color: results[0].colors,
							highlight: results[0].colors,
							label: results[0].Metric_Name || 'N/A'
						}, {
							value: v2,
							color: results[1].colors,
							highlight: results[1].colors,
							label: results[1].Metric_Name || 'N/A'
						}];
					} else {
						data = [{
							value: 0,
							color: '#e2e2e4',
							highlight: '#e2e2e4',
							label: 'N/A'
						}, {
							value: 0,
							color: '#e2e2e4',
							highlight: '#e2e2e4',
							label: 'N/A'
						}, ];
					}


					if (results[1].Value) {
						_$('#' + id + '_value').innerHTML = results[1].Value.toFixed(2) || 0;
						_$('#' + id + '_perc').innerHTML = "Last among peers";
						if (results[1].PCT_val < 1) {
							if (Math.round(results[1].PCT_val * 100).toPrecision(2) >= 50) {
								_$('#' + id + '_perc').innerHTML = "Top " + Math.abs(((Math.round((1 - results[1].PCT_val) * 100).toPrecision(2)))) + results[0].format + " of peers";
							} else if (results[1].PCT_val > 0) {
								_$('#' + id + '_perc').innerHTML = "Bottom " + Math.round(results[1].PCT_val * 100).toPrecision(2) + results[0].format + " of peers";
							}
						} else if (results[1].PCT_val == 1) {
							_$('#' + id + '_perc').innerHTML = "Best among peers";
						} else if (results[1].PCT_val == 0) {

						}
					} else {
						_$('#' + id + '_value').innerHTML = "";
						_$('#' + id + '_perc').innerHTML = "Unavailable.";
					}

					var chart;
					if (self.charts[idx]) {
						chart = self.charts[idx];
						chart.destroy();
					} else {
						self.charts[idx] = '';
					}

					var ctx = graph.getContext("2d");
					ctx.clearRect(0, 0, window.width * 0.184, window.width * 0.184); //graph.width, graph.height);
					chart = BlkLab.App.doughnutChart(ctx, data);
					self.charts[idx] = chart
				}, function(http) {
					BlkLab.Security.handle(http, true);
				});
			});
		}
	},

	render: function(params) {
		var view = new BlkLab.App.IndividualView();

		view.model = {
			data: {
				companies: BlkLab.Filters.companies,
				segments: BlkLab.Filters.segments,
				screens: BlkLab.Filters.screens
			}
		}


		view.render('#content');
		$('#peerDetails').hide();
		var screen = BlkLab.Storage.get('screen');
		var company = BlkLab.Storage.get('company');
		var segment = BlkLab.Storage.get('segment');
		var x = document.getElementById("peerMenu");
		       x.style.display = 'none';

		if (screen) {
			BlkLab.App.Screen = screen;
		}

		if (company) {
			BlkLab.App.Company = company;
		}

		if (segment) {
			BlkLab.App.Segment = segment;
		}


		_$('#company-list').value = company;
		_$('#screen-list').value = screen;


		this.actions.filterSegment();
		this.refreshActions();
		$('.donut').peity('donut');
	}
});

BlkLab.App.IndividualDetailedMetricsController = BlkLab.Controller.extend({
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
			*/
			var self = BlkLab.App.IndividualController;


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

					$('#peerDetails').hide();
					$('#peerMenu').hide();

				}

				_$('#peerClose').click(peerclose);

			});
			//			}

		},

		filterSegment: function() {

			var company = BlkLab.App.Company;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/individual/companysegments/';
			} else {
				url = '/api/individual/companysegmentsauth/';
			}
			BlkLab.get({
				url: url + BlkLab.App.Company
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				_$('#segment-list').length = 0;
				var test=0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);*/
					if(segments.id[i]==BlkLab.App.Segment){
						test++;
					}
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
				}


				if (!BlkLab.App.Segment == null) {
					////alert(BlkLab.App.Segment);
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				} else if(test == 0){
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				}
				//BlkLab.Storage.set('segment', segments.id[0]);
				BlkLab.Storage.set('segment',BlkLab.App.Segment);
				_$('#segment-list').value = BlkLab.App.Segment;
				
				BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
			

			});
		},


		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndividualDetailedMetricsController.actions.editSegment();

		},



		editSegment: function() {
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");

			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. Please select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					//////alert(JSON.stringify(data));

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
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndividualDetailedMetricsController.refreshActions();


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

				var client = BlkLab.App.Company;
				for (var i = 0, len = data.length; i < len; i++) {
					if (data[i]['ID'] == client) {

						_$('#companies-list option[value = "' + data[i]['ID'] + '"]').remove();

						$('#added-companies-list').append("<option value='" + data[i]['ID'] + "'>" + data[i]['Name'] + "</option>");
					}
				}
				BlkLab.App.IndividualDetailedMetricsController.refreshActions();


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
					BlkLab.App.IndividualDetailedMetricsController.actions.filterSegment();
					//BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();

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
					BlkLab.App.IndividualDetailedMetricsController.actions.filterSegment();
					//BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();

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
			var company = BlkLab.App.Company;
			var val = $('#added-companies-list option[value = "' + company + '"]:selected');
			var test = $('#added-companies-list').val();
			var check = 0;
			for(i=0; i<test.length; i++){
				if (test[i]==company) {
					check++;
				}
			}
			
			if (check==1) {
				if (confirm('You have chosen to remove ' + val.text() + ' from this Industry Segment.  However it is the Bank Holding Company currently being analysed.\n\nDo you wish to contine?')) {
					// Save it!
					!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

					$("#companies-list").html($("#companies-list option").sort(function(a, b) {
						return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
					}))
					$("#companies-list").prepend("<option value=''>Select Companies</option>");
				}
			} else {
				!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

				$("#companies-list").html($("#companies-list option").sort(function(a, b) {
					return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
				}))
				$("#companies-list").prepend("<option value=''>Select Companies</option>");
			}
		},

		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
		},


		changeCompany: function() {
			$('#peerDetails').hide();
			BlkLab.App.Company = this.value;
			BlkLab.Storage.set('company', this.value);
			BlkLab.App.IndividualDetailedMetricsController.actions.filterSegment();
			//BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
			//BlkLab.App.IndividualDetailedMetricsController.actions.filterSegment();
		},

		changeScreen: function() {
			$('#peerDetails').hide();
			BlkLab.App.Screen = this.value;
			BlkLab.Storage.set('screen', this.value);
			BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
		},

		changeMetric: function() {
			$('#peerDetails').hide();
			BlkLab.App.Metric_Code = _$(this).data('metric');
			BlkLab.Storage.set('metric', _$(this).data('metric'));
			BlkLab.App.IndividualDetailedMetricsController.actions.loadMetrics();
		},

		changeType: function() {
			BlkLab.App.Actuals = this.value == 'ACT' ? true : false;
			var base = '/api/graphs/individual/xy/pct';
			if (BlkLab.App.Actuals) {
				base = '/api/graphs/individual/xy';
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
					valueAxis.baseValue = YAxisPctAvg;
					valueAxis.titleBold = false;
					valueAxis.position = "left";
					valueAxis.inside = false;
					valueAxis.autoGridCount = false;
					valueAxis.gridCount = 25;
					valueAxis.minMaxMultiplier = 1;
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
					valueAxis2.baseValue = XAxisPctAvg;
					valueAxis2.title = XAxisTitle;
					valueAxis2.autoWrap = false;
					valueAxis2.titleBold = false;
					valueAxis2.position = "bottom";
					valueAxis2.inside = false;
					valueAxis2.autoGridCount = false;
					valueAxis2.gridCount = 50;
					valueAxis2.minMaxMultiplier = 1.05;
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
					guide.label = "Avg: 50%";
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
					guide2.label = "Avg: 50%";
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
					graph.maxBulletSize = 10;
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
					graph2.maxBulletSize = 12;
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
				url: '/api/individual/segment/screen?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric_code=' + BlkLab.App.Metric_Code
			}).then(function(http) {
				var results = JSON.parse(http.response);
				_$("#data").innerHTML = results.html;
				$('.donut').peity('donut');

				if (results.segment) {
					BlkLab.App.Segment = results.segment;
					BlkLab.Storage.set('segment', results.segment);
				}

				_$('#segment-list').value = BlkLab.App.Segment;
				//_$('#industry_segment').innerHTML = results.segmentDesc;
				$('#peerDetails').hide();
				_$('#chart-holder').hide();
				BlkLab.App.IndividualDetailedMetricsController.refreshActions();
			}, function(http) {
				BlkLab.Security.handle(http);
			});
		},

		showGraphs: function() {
			var self = BlkLab.App.IndividualDetailedMetricsController;
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
			_$("spiderdiv").innerHTML = '';

			if (self.lastSel) {
				self.lastSel.remove_class('selected');
			}

			ele.add_class('selected');
			self.lastSel = ele;
			/*
			            BlkLab.get({
			                url: '/api/graphs/individual/spider?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&metric=' + BlkLab.App.Metric
			            }).then(function(http){
			                var chartData = JSON.parse(http.response);
							
			                if(chartData.length > 0){
			                    var chart = AmCharts.makeChart("spiderdiv", {
			                        "type": "radar",
			                        "theme": "none",
			                        "dataProvider": chartData,
			                        "valueAxes": [{
			                        "gridType": "circles",
			                        "minimum": 0,
			                        "maximum": 1,
			                        "autoGridCount": false,
			                        "axisAlpha": 0.2,
			                        "fillAlpha": 0.05,
			                        "fillColor": "#FFFFFF",
			                        "gridAlpha": 0.08,

			                        "position": "left"
			                        }],
			                        "startDuration": 1,
			                        "graphs": [{
			                        "balloonText": "[[metric]]: [[Value]]",
			                        "bullet": "round",
			                        "fillAlphas": 0.3,
			                        "valueField": "Value"
			                        }],
			                        "categoryField": "metric"
			                    });

			                    // WRITE

			                    chart.write("spiderdiv");
			                    _$('#spiderdiv').show();
			                    //self.refreshActions();
			                }else{
			                    _$('#spiderdiv').hide();
			                }
			            }, function(http){
			                BlkLab.Security.handle(http, true);
			            });
			*/

			var base = '/api/graphs/individual/xy/pct';
			if (BlkLab.App.Actuals) {
				base = '/api/graphs/individual/xy';
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
					graph.valueField = "value";
					graph.lineAlpha = 0;
					graph.colorField = "color";
					graph.bulletBorderColor = "#0489d6";
					graph.bulletBorderThickness = 2;
					graph.maxBulletSize = 10;
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
				BlkLab.Security.handle(http, true);
			});


			BlkLab.get({
				url: '/api/graphs/individual/line?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);
				var company_name = chartData[0].Company;
				var format = chartData[0].format;
				var metric = chartData[0].metric;
				var period_start = chartData[0].Period;
				var period_end = chartData[(chartData.length - 1)].Period;


				// SERIAL CHART
				var chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.categoryField = "Period";
				chart.handDrawn = false;
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					text: company_name,
					bold: true,
					size: 14
				}, {
					text: metric + ": " + period_start + " - " + period_end,
					bold: false,
					size: 12
				}];
				

				// Category Axis

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;

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
				valueAxis.gridAlpha = 1;
				valueAxis.gridCount = 0;
				valueAxis.gridThickness = 0;
				valueAxis.gridColor = "Gray";
				valueAxis.baseValue = 0;
				chart.addValueAxis(valueAxis);


				var graph3 = new AmCharts.AmGraph();
				graph3.valueField = "Top";
				graph3.data_labels = "Percents";
				graph3.animationPlayed = true;
				graph3.type = "line";
				graph3.lineColor = "Green";
				graph3.title = "75th Percentile";
				graph3.lineThickness = 2;
				graph3.lineAlpha = 0;
				graph3.bullet = "round";
				graph3.bulletSize = 6;
				graph3.bulletBorderThickness = 2;
				graph3.bulletBorderAlpha = 1;
				graph3.bulletBorderColor = "Green";
				graph3.bulletColor = "White";
				if (format == "%") {
					graph3.balloonText = "[[Top]]%";
				} else if (format == "$") {
					graph3.balloonText = "$[[Top]]";
				} else {
					graph3.balloonText = "[[Top]]";
				}
				chart.addGraph(graph3);

				var graph2 = new AmCharts.AmGraph();
				graph2.valueField = "Avg";
				graph2.type = "line";
				graph2.animationPlayed = true;
				graph2.lineColor = "Orange";
				graph2.lineThickness = 2;
				graph2.lineAlpha = 0;
				graph2.title = "Median";
				graph2.bullet = "round";
				graph2.bulletBorderThickness = 2;
				graph2.bulletBorderAlpha = 1;
				graph2.bulletBorderColor = "Orange";
				graph2.bulletColor = "White";
				graph2.bulletSize = 6;
				if (format == "%") {
					graph2.balloonText = "[[Avg]]%";
				} else if (format == "$") {
					graph2.balloonText = "$[[Avg]]";
				} else {
					graph2.balloonText = "[[Avg]]";
				}
				chart.addGraph(graph2);

				var graph4 = new AmCharts.AmGraph();
				graph4.valueField = "Bottom";
				graph4.data_labels = "Percents";
				graph4.animationPlayed = true;
				graph4.type = "line";
				graph4.lineColor = "DarkRed";
				graph4.title = "25th Percentile";
				graph4.lineThickness = 2;
				graph4.lineAlpha = 0;
				graph4.bullet = "round";
				graph4.bulletSize = 6;
				graph4.bulletBorderThickness = 2;
				graph4.bulletBorderAlpha = 1;
				graph4.bulletBorderColor = "DarkRed";
				graph4.bulletColor = "White";
				if (format == "%") {
					graph4.balloonText = "[[Bottom]]%";
				} else if (format == "$") {
					graph4.balloonText = "$[[Bottom]]";
				} else {
					graph4.balloonText = "[[Bottom]]";
				}
				chart.addGraph(graph4);



				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "Value";
				graph1.type = "column";
				graph1.lineColor = "Gray";
				graph1.animationPlayed = false;
				graph1.title = company_name;
				graph1.lineAlpha = 0.8;
				graph1.lineThickness = 1;
				graph1.lineThickness = 1;
				graph1.cornerRadiusTop = 0;
				graph1.fillColors = "Silver";
				graph1.fillAlphas = 1;
				// if(format == "%") {graph1.labelText  = "[[Value]]%";} else if(format == "$") {graph1.labelText  = "$[[Value]]";} else {graph1.labelText  = "[[Value]]";}
				if (format == "%") {
					graph1.balloonText = "[[Value]]%";
				} else if (format == "$") {
					graph1.balloonText = "$[[Value]]";
				} else {
					graph1.balloonText = "[[Value]]";
				}

				chart.addGraph(graph1);


				var legend = new AmCharts.AmLegend();
				legend.useGraphSettings = true;
				legend.position = "bottom";
				legend.verticalGap = 2;
				legend.align = "center";
				//legend.data = [{title: company_name, color: "Gray", markerType: "square", markerBorderColor: "Black", markerBorderThickness: 2},{title: "Top 25%", color: "Green", markerType: "round", markerBorderColor: "Black", markerBorderThickness: 1},{title:"Median", color: "Orange", markerType: "circle",  markerBorderColor: "Black", markerBorderThickness: 2}];
				legend.equalWidths = false;
				legend.spacing = 5;
				legend.valueWidth = 0;
				legend.fontSize = 10;
				legend.markerSize = 10;

				chart.addLegend(legend);


				chart.write("chartdiv");

			}, function(http) {
				BlkLab.Security.handle(http, true);
			});



			BlkLab.get({
				url: '/api/graphs/individual/bar?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen + '&metric=' + BlkLab.App.Metric
			}).then(function(http) {
				var chartData = JSON.parse(http.response);

				var format = chartData[0].format;
				var metric = chartData[0].Metric;
				var segment_name = chartData[0].Segment_Name;
				var company = BlkLab.App.Company;

				// SERIAL CHART
				chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.categoryField = "Company";
				chart.marginLeft = 200;
				chart.rotate = "true";
				chart.handDrawn = false;
				chart.usePrefixes = true;
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					text: metric,
					bold: true,
					size: 14
				}, {
					text: "Industry Segment: " + segment_name,
					bold: false,
					size: 10
				}];

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;
				categoryAxis.fontSize = 8;
				categoryAxis.gridPosition = "start";
				categoryAxis.position = "left";
				categoryAxis.ignoreAxisWidth = true;
				categoryAxis.autoWrap = true;

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

				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "Value";
				graph1.type = "column";
				graph1.colorField = 'Line_Color';
				graph1.lineColorField = "Color";
				graph1.lineThickness = 2;
				graph1.fillAlphas = 0.8;
				if (format == "%") {
					graph1.balloonText = "[[Company]]" + ":<br>" + "[[Value]]%";
				} else if (format == "$") {
					graph1.balloonText = "[[Company]]" + ":<br>" + "$[[Value]]";
				} else {
					graph1.balloonText = "[[Company]]" + ":<br>" + "[[Value]]";
				}
				// if(format == "%") {graph1.labelText  = "[[Value]]%";} else if(format == "$") {graph1.labelText  = "$[[Value]]";} else {graph1.labelText  = "[[Value]]";}
				graph1.labelBold = false;
				graph1.fontSize = 10;
				chart.addGraph(graph1);

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

				chart.write("bardiv");
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});

			//var h =  _$('#segment_metrics').offsetHeight > 665 ?  (_$('#segment_metrics').offsetHeight - 46) : 665;
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
		var view = new BlkLab.App.IndividualDetailedMetricsView();
		BlkLab.get({
			url: '/api/individual/segment/screen?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment + '&screen=' + BlkLab.App.Screen
		}).then(function(http) {
			var results = JSON.parse(http.response);


			view.model = {
				data: {
					table: results.html,
					segments: BlkLab.Filters.segments,
					companies: BlkLab.Filters.companies,
					screens: BlkLab.Filters.screens
				}
			}
			view.render('#content');
			$('.donut').peity('donut');

			var x = document.getElementById("peerMenu");
			       x.style.display = 'none';
				   
			var screen = BlkLab.Storage.get('screen');
			var segment = BlkLab.Storage.get('segment');
			var company = BlkLab.Storage.get('company');

			if (screen) {
				BlkLab.App.Screen = screen;
			}

			if (company) {
				BlkLab.App.Company = company;
			}

			if (segment) {
				BlkLab.App.Segment = segment;
			}
			$('#peerDetails').hide();

			//BlkLab.App.Segment = results.segment;
			//BlkLab.Storage.set('segment', results.segment);
			_$('#company-list').value = BlkLab.App.Company;
			_$('#screen-list').value = BlkLab.App.Screen;
			_$('#segment-list').value = BlkLab.App.Segment;
			//_$('#industry_segment').innerHTML = results.segmentDesc;

			self.actions.filterSegment();
			self.refreshActions();
		}, function(http) {
			BlkLab.Security.handle(http);
		});
	}
});

BlkLab.App.IndividualOutlookController = BlkLab.Controller.extend({
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
			*/
			var self = BlkLab.App.IndividualController;


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

			var company = BlkLab.App.Company;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/individual/companysegments/';
			} else {
				url = '/api/individual/companysegmentsauth/';
			}
			BlkLab.get({
				url: url + BlkLab.App.Company
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				_$('#segment-list').length = 0;
				var test=0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);*/
					if(segments.id[i]==BlkLab.App.Segment){
						test++;
					}
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
				}

			
				if (!BlkLab.App.Segment == null) {
					////alert(BlkLab.App.Segment);
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				} else if(test == 0){
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				}
				//BlkLab.Storage.set('segment', segments.id[0]);
				BlkLab.Storage.set('segment',BlkLab.App.Segment);
				_$('#segment-list').value = BlkLab.App.Segment;
				
				BlkLab.App.IndividualOutlookController.actions.loadCharts();
			

			});
		},


		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndividualOutlookController.actions.editSegment();

		},



		editSegment: function() {
			//var check = _$('#segment-list').find('option:selected').attr("name");
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");

			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. Please select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					//////alert(JSON.stringify(data));

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
						//////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndividualOutlookController.refreshActions();


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

				var client = BlkLab.App.Company;
				for (var i = 0, len = data.length; i < len; i++) {
					if (data[i]['ID'] == client) {

						_$('#companies-list option[value = "' + data[i]['ID'] + '"]').remove();

						$('#added-companies-list').append("<option value='" + data[i]['ID'] + "'>" + data[i]['Name'] + "</option>");
					}
				}

				BlkLab.App.IndividualOutlookController.refreshActions();


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
					BlkLab.App.IndividualOutlookController.actions.filterSegment();
					//BlkLab.App.IndividualOutlookController.actions.loadCharts();

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
					BlkLab.App.IndividualOutlookController.actions.filterSegment();
					//BlkLab.App.IndividualOutlookController.actions.loadCharts();

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
			var company = BlkLab.App.Company;
			var val = $('#added-companies-list option[value = "' + company + '"]:selected');
			var test = $('#added-companies-list').val();
			var check = 0;
			for(i=0; i<test.length; i++){
				if (test[i]==company) {
					check++;
				}
			}
			
			if (check==1) {
				if (confirm('You have chosen to remove ' + val.text() + ' from this Industry Segment.  However it is the Bank Holding Company currently being analysed.\n\nDo you wish to contine?')) {
					// Save it!
					!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

					$("#companies-list").html($("#companies-list option").sort(function(a, b) {
						return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
					}))
					$("#companies-list").prepend("<option value=''>Select Companies</option>");
				}
			} else {
				!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

				$("#companies-list").html($("#companies-list option").sort(function(a, b) {
					return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
				}))
				$("#companies-list").prepend("<option value=''>Select Companies</option>");
			}
		},

		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.App.IndividualOutlookController.actions.loadCharts();
		},

		changeCompany: function() {
			$('#peerDetails').hide();
			BlkLab.App.Company = this.value;
			BlkLab.Storage.set('company', this.value);
			BlkLab.App.IndividualOutlookController.actions.filterSegment();
			BlkLab.App.IndividualOutlookController.actions.loadCharts();
			//.App.IndividualOutlookController.actions.filterSegment();
		},

		changeScreen: function() {
			BlkLab.App.Screen = this.value;
			BlkLab.Storage.set('screen', this.value)
			BlkLab.App.IndividualOutlookController.actions.loadCharts();
		},

		loadCharts: function() {
			var self = BlkLab.App.IndividualOutlookController;

			_$("#peers_cht").innerHTML = "";
			_$("#pct_cht").innerHTML = "";
			_$("tradeoff_chrt").innerHTML = "";
			_$("#fgv_vco_chrt").innerHTML = "";
			_$("#TRS_chrt").innerHTML = "";
			_$("#hide").hide();
			_$("#hide1").hide();

			BlkLab.get({
				url: '/api/individual/assessment/assumptions?company=' + BlkLab.App.Company
			}).then(function(http) {
				var chartData = JSON.parse(http.response);

				Object.keys(chartData).forEach(function(key) {
					_$('#' + key).innerHTML = chartData[key];
				});
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});


			BlkLab.get({
				url: '/api/individual/assessment/sp?company=' + BlkLab.App.Company
			}).then(function(http) {
				var chartData = JSON.parse(http.response);

				var chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.categoryField = "Period";
				chart.handDrawn = false;
				chart.height = "100%";
				chart.handDrawn = false;
				chart.columnWidth = 0.8;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.export = {
					enabled: true
				};
				chart.titles = [{
					"text": chartData[0].Company,
					"size": 12
				}, {
					"text": "Estimated Share Price (" + chartData[0].Period + "-" + chartData[5].Period + ")",
					"size": 10
				}]

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;

				var valueAxis = new AmCharts.ValueAxis();
				valueAxis.unit = "$";
				valueAxis.unitPosition = "left";
				valueAxis.gridAlpha = 0.0;
				chart.addValueAxis(valueAxis);

				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "Share_Price";
				graph1.type = "column";
				graph1.lineColor = "Silver";
				graph1.fillAlphas = 1;
				graph1.labelText = "$[[Share_Price]]";
				graph1.balloonText = "$[[Share_Price]]";
				chart.addGraph(graph1);
				chart.write("TRS_chrt");

				self.refreshActions();
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});
			x
			BlkLab.get({
				url: '/api/individual/assessment/peers?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment
			}).then(function(http) {
				var result = JSON.parse(http.response);
				//+'&segment='+BlkLab.App.Segment 
				var chartData = result.peers;

				//////alert(JSON.stringify(chartData));
				_$('#segment-list').value = chartData[0].SegmentId;
				//_$('#industry_segment').innerHTML = chartData[0].Segment;
				//
				BlkLab.App.Segment = chartData[0].SegmentId;
				BlkLab.Storage.set('segment', chartData[0].SegmentId);
				var format = chartData.length > 0 ? chartData[0].format : "%";
				var chart = new AmCharts.AmSerialChart();
				chart.pathToImages = "http://www.amcharts.com/lib/images/";
				chart.dataProvider = chartData;
				chart.categoryField = "Company";
				chart.rotate = "true";
				chart.addClassNames = true;
				chart.classNamePrefix = "amcharts";
				chart.sequencedAnimation = true;
				chart.startDuration = 1;
				chart.startEffect = "elastic";
				chart.handDrawn = false;
				chart.export = {
					enabled: true
				};

				var categoryAxis = chart.categoryAxis;
				categoryAxis.gridAlpha = 0;
				categoryAxis.fontSize = 9;
				categoryAxis.position = "left"

				var valueAxis = new AmCharts.ValueAxis();
				valueAxis.unit = "%";
				valueAxis.Position = "right";
				valueAxis.gridAlpha = 0.2;
				valueAxis.boldLabels = false;
				valueAxis.gridAlpha = 1;
				valueAxis.gridCount = 0;
				valueAxis.gridThickness = 0;
				valueAxis.gridColor = "Gray";
				valueAxis.baseValue = 0;
				valueAxis.minimum = -1;
				chart.addValueAxis(valueAxis);

				var graph1 = new AmCharts.AmGraph();
				graph1.id = "TRS";
				graph1.valueField = "TRS";
				graph1.type = "column";
				graph1.lineColorField = "color_peer";
				graph1.colorField = "color_peer";
				graph1.fillAlphas = 1;
				graph1.balloonText = "[[TRS]]%";
				graph1.labelText = "[[TRS]]%";
				graph1.classNameField = "classname";
				graph1.labelBold = false;
				graph1.fontSize = 10;
				chart.addGraph(graph1);
				chart.write("peers_cht");

				var chartData2 = result.percentile;
				//////alert(JSON.stringify(chartData2));
				var label_text;
				if (parseFloat(chartData2[1]["PCT_val"]).toFixed(2) == 1) {
					label_text = "Best among peers";
				} else if (parseFloat(chartData2[1]["PCT_val"]).toFixed(2) == 0) {
					label_text = "Last among peers";
				} else if (parseFloat(chartData2[1]["PCT_val"]).toFixed(2) >= 0.5) {
					label_text = "Top:" + parseFloat(chartData2[0].PCT_val * 100).toFixed(0) + "% of peers";
				} else {
					label_text = "Bottom:" + parseFloat(chartData2[1].PCT_val * 100).toFixed(0) + "% of peers";
				}
				var chart2 = new AmCharts.AmPieChart();
				chart2.pathToImages = "http://www.amcharts.com/lib/images/";
				chart2.dataProvider = chartData2;
				chart2.categoryField = "Period";
				chart2.startDuration = 2;
				chart2.startEffect = "easeOutSine";
				chart2.handDrawn = false;
				chart2.titleField = "Metric_Name";
				chart2.startDuration = 0;
				chart2.valueField = "PCT";
				chart2.labelRadius = -130;
				chart2.radius = "45%";
				chart2.innerRadius = "70%";
				chart2.outlineColor = "LightGray";
				chart2.outlineAlpha = 1;
				chart2.labelText = "";
				chart2.colorField = "colors";
				chart2.allLabels = [{
					"text": chartData2[1].Metric_Name + ":",
					"align": "center",
					"bold": true,
					"size": 12,
					"y": 100
				}, {
					"text": parseFloat(chartData2[0].Value).toFixed(2),
					"align": "center",
					"bold": true,
					"size": 16,
					"y": 115
				}, {
					"text": label_text,
					"align": "center",
					"bold": false,
					"size": 12,
					"y": 140
				}];
				chart2.export = {
					enabled: true
				};
				chart2.write("pct_cht");

				var chartTradeoffData = result.tradeoff;
				var chartTradeoff = new AmCharts.AmXYChart();
				chartTradeoff.pathToImages = "amchartTradeoffs/images";
				chartTradeoff.marginRight = 1;
				chartTradeoff.dataProvider = chartTradeoffData;
				chartTradeoff.export = {
					enabled: true
				};
				chartTradeoff.titles = [{
					text: "Top Quartile Shareholder Returns",
					bold: true,
					size: 14
				}, {
					text: "ROE vs. Equity Growth Rate Trade  Off",
					bold: false,
					size: 12
				}];

				var YAxisTitle = "ROE";
				var XAxisTitle = "Equity Growth Rate";

				var valueAxis = new AmCharts.ValueAxis();
				valueAxis.title = YAxisTitle;
				valueAxis.position = "left";
				valueAxis.inside = false;
				valueAxis.autoGridCount = false;
				valueAxis.gridCount = 50;
				valueAxis.gridAplha = 0.2;
				valueAxis.gridThickness = 0.1;
				valueAxis.minimum = 0;
				valueAxis.labelFrequency = 5;
				valueAxis.includeGuidesInMinMax = false;
				chartTradeoff.addValueAxis(valueAxis);
				var valueAxis2 = new AmCharts.ValueAxis();
				valueAxis2.title = XAxisTitle;
				valueAxis2.position = "bottom";
				valueAxis2.inside = false;
				valueAxis2.autoGridCount = false;
				valueAxis2.gridCount = 50;
				valueAxis2.gridAplha = 0.6;
				valueAxis2.gridThickness = 0.1;
				valueAxis2.labelFrequency = 5;
				valueAxis2.includeGuidesInMinMax = false;
				chartTradeoff.addValueAxis(valueAxis2);
				var graph = new AmCharts.AmGraph();
				graph.xField = "Growth";
				graph.yField = "ROE";
				graph.lineAlpha = 1;
				graph.bullet = "none";
				graph.lineColor = "DarkGreen";
				graph.fillColor = "DarkGreen";
				//graph.bulletSize= 1;
				chartTradeoff.addGraph(graph);

				var graph2 = new AmCharts.AmGraph();
				graph2.xField = "Current_Growth";
				graph2.yField = "Current_ROE";
				graph2.lineAlpha = 1;
				graph2.bullet = "round";
				graph2.label = "Current Position";
				graph2.lineColor = "Red";
				graph2.fillColor = "Red";
				graph2.labelText = "Today";
				graph2.labelPosition = "right";
				graph2.maxBulletSize = 10;
				chartTradeoff.addGraph(graph2);
				chartTradeoff.write("tradeoff_chrt");

				var chartVCOData = result.vco;
				var chartVCO = new AmCharts.AmSerialChart();
				chartVCO.pathToImages = "http://www.amchartVCOs.com/lib/images/";
				chartVCO.dataProvider = chartVCOData;
				chartVCO.categoryField = "Period";
				chartVCO.handDrawn = false;
				chartVCO.height = "100%";
				chartVCO.columnWidth = 0.8;
				chartVCO.export = {
					enabled: true
				};
				
				var categoryAxis = chartVCO.categoryAxis;
				categoryAxis.gridAlpha = 0;
				// Value Axis
				var valueAxis = new AmCharts.ValueAxis();
				valueAxis.stackType = "regular";
				valueAxis.unit = "%";
				valueAxis.unitPosition = "right";
				valueAxis.gridAlpha = 0;
				valueAxis.baseValue = 0;
				chartVCO.addValueAxis(valueAxis);
				var graph1 = new AmCharts.AmGraph();
				graph1.valueField = "VCO";
				graph1.type = "column";
				graph1.lineColor = "#9B1717";
				graph1.fillAlphas = 0.8;
				graph1.color = "White";
				graph1.labelText = "[[VCO]]%";
				graph1.balloonText = "VCO ([[Year]]):[[VCO]]%";
				graph1.showAllValueLabels = true;
				graph1.title = "Current Operations Value";
				chartVCO.addGraph(graph1);
				var graph2 = new AmCharts.AmGraph();
				graph2.valueField = "FGV";
				graph2.type = "column";
				graph2.lineColor = "#778242";
				graph2.fillAlphas = 0.6;
				graph2.color = "Black";
				graph2.labelText = "[[FGV]]%";
				graph2.balloonText = "FGV ([[Year]]):[[FGV]]%";
				graph2.title = "Future Growth Value";
				graph2.showAllValueLabels = true;
				chartVCO.addGraph(graph2)
				chartVCO.write("fgv_vco_chrt");

				self.refreshActions();
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});


		}
	},

	render: function(params) {
		var view = new BlkLab.App.IndividualOutlookView();
		view.model = {
			data: {
				companies: BlkLab.Filters.companies,
				segments: BlkLab.Filters.segments,
				screens: BlkLab.Filters.screens
			}
		};
		view.render('#content');
		var x = document.getElementById("peerMenu");
		       x.style.display = 'none';
		var screen = BlkLab.Storage.get('screen');
		var company = BlkLab.Storage.get('company');
		var segment = BlkLab.Storage.get('segment');

		if (screen) {
			BlkLab.App.Screen = screen;
		}

		if (company) {
			BlkLab.App.Company = company;
		}

		if (segment) {
			BlkLab.App.Segment = segment;
		}

		_$('#company-list').value = company;
		_$('#segment-list').value = segment;
		_$('#screen-list').value = screen;
		$('.donut').peity('donut');
		$('#peerDetails').hide();
		this.actions.filterSegment();
		//this.actions.loadCharts();
		this.refreshActions();
	}
});

BlkLab.App.ER = 0;
BlkLab.App.ER2 = 0;
BlkLab.App.ER_Orig = 0;
BlkLab.App.LLR = 0;
BlkLab.App.LLR2 = 0;
BlkLab.App.LLR_Orig = 0;
BlkLab.App.AY = 0;
BlkLab.App.AY2 = 0;
BlkLab.App.AY_Orig = 0;
BlkLab.App.Lev = 0;
BlkLab.App.Lev2 = 0;
BlkLab.App.Lev_Orig = 0;
BlkLab.App.simulationSliders = {};
BlkLab.App.simulationSlidersKeys = {};
BlkLab.App.simulationSlidersValue = {};
BlkLab.App.simulationSlidersValue2 = {};
BlkLab.App.simulationSlidersValue_Orig = {};

BlkLab.App.simulationKeys = [
	"ER",
	"ER2",
	"ER_Orig",
	"LLR",
	"LLR2",
	"LLR_Orig",
	"AY",
	"AY2",
	"AY_Orig",
	"Lev",
	"Lev2",
	"Lev_Orig"
];

BlkLab.App.IndividualSimulationController = BlkLab.Controller.extend({


	actions: {

		resultsDiv: function() {

			var stickyEl = $('#results');
			var anchor = $('#anchor');
			var hold = stickyEl.offset().top;

			$(document).scroll(function() {

				var offset = stickyEl.offset().top;

				if ($(document).scrollTop() > offset) {
					stickyEl.addClass("sticky");
					anchor.height(stickyEl.outerHeight());
				}

				if ($(document).scrollTop() <= hold) {
					stickyEl.removeClass("sticky");
					anchor.height(0);
				}
			});
		},

		hide_tag: function() {
			$(document).mouseup(function(e) {
				var container = BlkLab.App.simulationSlidersKeys;
				$.each(container, function(key, value) {
					value = "#" + value + "_tag";
					if (!$(value).is(e.target) // if the target of the click isn't the container...
						&&
						$(value).has(e.target).length === 0) // ... nor a descendant of the container
					{
						$(value).hide();
					}
				});
			});
		},
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
			*/
			var self = BlkLab.App.IndividualController;


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

			var company = BlkLab.App.Company;
			var token = BlkLab.Storage.get('access-token');
			
			var url;
			if(token==null){
				url ='/api/individual/companysegments/';
			} else {
				url = '/api/individual/companysegmentsauth/';
			}
			BlkLab.get({
				url: url + BlkLab.App.Company
			}).then(function(http) {
				var segments = JSON.parse(http.response);
				_$('#segment-list').length = 0;
				var test=0;
				for (var i = 0; i < segments.id.length; i++) {
					/*var opt = document.createElement('option');
					opt.value = segments.id[i];
					opt.innerHTML = segments.segment[i];
					_$('#segment-list').append(opt);*/
					if(segments.id[i]==BlkLab.App.Segment){
						test++;
					}
					$('#segment-list').append("<option value='" + segments.id[i] + "' data-name='" + segments.userId[i] + "'>" + segments.segment[i] + "</option>");
				}


				if (!BlkLab.App.Segment == null) {
					////alert(BlkLab.App.Segment);
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				} else if(test == 0){
					BlkLab.App.Segment = segments.id[0];
					BlkLab.Storage.set('segment',segments.id[0]);
				}
				//BlkLab.Storage.set('segment', segments.id[0]);
				BlkLab.Storage.set('segment',BlkLab.App.Segment);
				_$('#segment-list').value = BlkLab.App.Segment;
				
				BlkLab.App.IndividualSimulationController.actions.loadSimulation();
			

			});
		},


		changeSegmentEdit: function() {
			BlkLab.App.Segment = this.value;
			BlkLab.Storage.set('segment', this.value);
			_$('#modal-container').destroy();
			BlkLab.App.IndividualSimulationController.actions.editSegment();

		},



		editSegment: function() {
			//var check = _$('#segment-list').find('option:selected').attr("name");
			$('#peerMenu').hide();
			var view = new BlkLab.App.EditSegmentView();
			var segment = BlkLab.App.Segment;
			var check = _$('#segment-list option[value ="' + segment + '"]').data("name");

			if (check == 1) {
				alert("Unfortuantely you cannot edit a default industry segment. Please select another segment to edit")
			} else {

				BlkLab.get({
					url: '/api/industry/segmentCompanies/' + segment
				}).then(function(http) {
					var data = JSON.parse(http.responseText);
					//////alert(JSON.stringify(data));

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
						//////alert(opt.value);
						_$('#companies-list option[value = "' + opt.value + '"]').remove();

					}

					var test = $('#editSegment-list option[value ="' + segment + '"]').text();

					_$('#name').value = test;

					BlkLab.App.IndividualSimulationController.refreshActions();


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

				var client = BlkLab.App.Company;
				for (var i = 0, len = data.length; i < len; i++) {
					if (data[i]['ID'] == client) {

						_$('#companies-list option[value = "' + data[i]['ID'] + '"]').remove();

						$('#added-companies-list').append("<option value='" + data[i]['ID'] + "'>" + data[i]['Name'] + "</option>");
					}
				}

				BlkLab.App.IndividualSimulationController.refreshActions();


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
			} else if (opts.length < 3) {

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
					BlkLab.App.IndividualSimulationController.actions.filterSegment();
					BlkLab.App.IndividualSimulationController.actions.loadSimulation();

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
					BlkLab.App.IndividualSimulationController.actions.filterSegment();
					BlkLab.App.IndividualSimulationController.actions.loadSimulation();

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
			var company = BlkLab.App.Company;
			var val = $('#added-companies-list option[value = "' + company + '"]:selected');
			var test = $('#added-companies-list').val();
			var check = 0;
			for(i=0; i<test.length; i++){
				if (test[i]==company) {
					check++;
				}
			}
			
			if (check==1) {
				if (confirm('You have chosen to remove ' + val.text() + ' from this Industry Segment.  However it is the Bank Holding Company currently being analysed.\n\nDo you wish to contine?')) {
					// Save it!
					!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

					$("#companies-list").html($("#companies-list option").sort(function(a, b) {
						return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
					}))
					$("#companies-list").prepend("<option value=''>Select Companies</option>");
				}
			} else {
				!$('#added-companies-list option:selected').remove().appendTo('#companies-list');

				$("#companies-list").html($("#companies-list option").sort(function(a, b) {
					return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
				}))
				$("#companies-list").prepend("<option value=''>Select Companies</option>");
			}
		},

		changeSegment: function() {
			BlkLab.App.Segment = this.value;
			//////alert(BlkLab.App.Segment);
			BlkLab.Storage.set('segment', this.value);
			BlkLab.App.IndividualSimulationController.actions.loadSimulation();
		},


		changeCompany: function() {
			$('#peerDetails').hide();
			var self = BlkLab.App.IndividualSimulationController;
			BlkLab.App.Company = this.value;
			BlkLab.Storage.set('company', this.value);
			
			BlkLab.App.IndividualSimulationController.actions.filterSegment();
		
			self.actions.collapseroaa();
			self.actions.collapsecoe();
			//BlkLab.App.IndividualSimulationController.actions.filterSegment();

		},

		update_slider: function() {
			var self = BlkLab.App.IndividualSimulationController;
			var ele = _$(this).getAttribute('id');

			var code = ele.replace("-slider", "");
			var index = BlkLab.App.simulationSlidersKeys.indexOf(code);
			BlkLab.App.simulationSlidersValue[index] = this.value / 10;
			if (code == "Leverage1") {
				_$('#' + "Leverage" + '-slider').value = _$('#' + "Leverage1" + '-slider').value;
				BlkLab.App["Leverage"][0] = this.value / 10;
				BlkLab.App["Leverage1"][0] = this.value / 10;
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage" + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				HTML1 = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage1" + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + "Leverage" + '_tag]').replaceWith(HTML);
				$('div[data-id=' + "Leverage1" + '_tag]').replaceWith(HTML1);
				_$('#' + "Leverage" + '-delete').show();
				_$('#' + "Leverage1" + '-delete').show();

			} else if (code == "Leverage") {
				_$('#' + "Leverage1" + '-slider').value = _$('#' + "Leverage" + '-slider').value;
				BlkLab.App["Leverage"][0] = this.value / 10;
				BlkLab.App["Leverage1"][0] = this.value / 10;
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage" + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				HTML1 = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage1" + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + "Leverage" + '_tag]').replaceWith(HTML);
				$('div[data-id=' + "Leverage1" + '_tag]').replaceWith(HTML1);
				_$('#' + "Leverage" + '-delete').show();
				_$('#' + "Leverage1" + '-delete').show();

			} else {
				BlkLab.App[code][0] = this.value / 10;
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + code + '_tag"><div class="circlecontrol selected"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + code + '_tag]').replaceWith(HTML);
				_$('#' + code + '-delete').show();
			}


			self.actions.updateSimulation();

		},

		removeWhatIf: function() {
			var self = BlkLab.App.IndividualSimulationController;
			var ele = _$(this).getAttribute('id');

			var code = ele.replace("-delete", "");
			if (code == "Leverage1" || code == "Leverage") {

				BlkLab.App["Leverage"][0] = BlkLab.App["Leverage" + "_Orig"][0];
				BlkLab.App["Leverage1"][0] = BlkLab.App["Leverage1" + "_Orig"][0];
				_$('#' + "Leverage" + '-slider').value = Math.round(BlkLab.App[code][0] * 10);
				_$('#' + "Leverage1" + '-slider').value = Math.round(BlkLab.App[code][0] * 10);
				_$('#' + "Leverage" + '-slider-output').style.display = 'none';
				_$('#' + "Leverage1" + '-slider-output').style.display = 'none';
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage" + '_tag"><div class="circlecontrol light"><img src="/app/assets/images/graph-icon.png"></div></div>';
				HTML1 = '<div class="controls" blklab-click="slider_show" data-id="' + "Leverage1" + '_tag"><div class="circlecontrol light"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + "Leverage" + '_tag]').replaceWith(HTML);
				$('div[data-id=' + "Leverage1" + '_tag]').replaceWith(HTML1);
				_$('#' + "Leverage" + '-delete').hide();
				_$('#' + "Leverage1" + '-delete').hide();
			} else {
				BlkLab.App[code][0] = BlkLab.App[code + "_Orig"][0];
				_$('#' + code + '-slider').value = Math.round(BlkLab.App[code][0] * 10);
				_$('#' + code + '-slider-output').style.display = 'none';
				HTML = '<div class="controls" blklab-click="slider_show" data-id="' + code + '_tag"><div class="circlecontrol light"><img src="/app/assets/images/graph-icon.png"></div></div>';
				$('div[data-id=' + code + '_tag]').replaceWith(HTML);
				_$('#' + code + '-delete').hide();
			}


			self.actions.updateSimulation();
		},
		/*
		updateER: function(){
		    var self = BlkLab.App.IndividualSimulationController;
		    BlkLab.App.ER = this.value;


		   self.actions.updateSimulation();
		},

		updateLLR: function(){
		    var self = BlkLab.App.IndividualSimulationController;
		    BlkLab.App.LLR = this.value;
		    self.actions.updateSimulation();
		},

		updateAY: function(){
		    var self = BlkLab.App.IndividualSimulationController;
		    BlkLab.App.AY = this.value;
		    self.actions.updateSimulation();
		},

		updateLev: function(){
		    var self = BlkLab.App.IndividualSimulationController;
		    BlkLab.App.Lev = this.value;
		    self.actions.updateSimulation();
		}, */

		expandroaa: function() {
			_$('#plus-roaa-results').show();
			_$('#plus-roaa').hide();
			_$('#minus-roaa').show();
			_$('#plus-nim-results').hide();
			_$('#plus-er-results').hide();
			_$('#plus-llr-results').hide();
			_$('#plus-coe-results').hide();
			//            _$('#plus-otherequitygrowth-results').hide();

			_$('#plus-coe').show();
			_$('#minus-coe').hide();
			//            _$('#plus-otherequitygrowth').show();
			//            _$('#minus-otherequitygrowth').hide();
			_$('#minus-er').hide();
			_$('#plus-er').show();
			_$('#minus-llr').hide();
			_$('#plus-llr').show();
			_$('#minus-nim').hide();
			_$('#plus-nim').show();
			_$('#minus-nonintmargin').hide();
			_$('#plus-nonintmargin').show();

			_$('#plus-assetgrowth-results').hide();
			//            _$('#plus-assetgrowth').show();
			//            _$('#minus-assetgrowth').hide();



			//self.actions.updateSimulation();
		},

		collapseroaa: function() {

			_$('#plus-roaa-results').hide();
			_$('#plus-roaa').show();
			_$('#minus-roaa').hide();

		},

		/*        expandotherequitygrowth: function(){
		            _$('#plus-otherequitygrowth-results').show();
		            _$('#plus-otherequitygrowth').hide();
		            _$('#minus-otherequitygrowth').show();
		            _$('#plus-roaa-results').hide();
		            _$('#plus-coe-results').hide();


		            _$('#plus-coe').show();
		            _$('#minus-coe').hide();
		            _$('#plus-roaa').show();
		            _$('#minus-roaa').hide();
		            _$('#plus-assetgrowth-results').hide();
		            _$('#plus-assetgrowth').show();
		            _$('#minus-assetgrowth').hide();

		            //self.actions.updateSimulation();
		        },

		        collapseotherequitygrowth: function(){

		            _$('#plus-otherequitygrowth-results').hide();
		            _$('#plus-otherequitygrowth').show();
		            _$('#minus-otherequitygrowth').hide();
		            //self.actions.updateSimulation();
		        },
		*/
		expandcoe: function() {
			_$('#plus-roaa-results').hide();
			//            _$('#plus-otherequitygrowth-results').hide();
			_$('#plus-coe-results').show();
			_$('#plus-coe').hide();
			_$('#minus-coe').show();
			_$('#plus-roaa').show();
			_$('#minus-roaa').hide();
			//            _$('#plus-otherequitygrowth').show();
			//            _$('#minus-otherequitygrowth').hide();

			_$('#plus-assetgrowth-results').hide();
			//            _$('#plus-assetgrowth').show();
			//            _$('#minus-assetgrowth').hide();

		},

		collapsecoe: function() {
			_$('#plus-coe-results').hide();
			_$('#plus-coe').show();
			_$('#minus-coe').hide();
			//self.actions.updateSimulation();
		},
		/*
		        expandassetgrowth: function(){
		            _$('#plus-roaa-results').hide();
		//            _$('#plus-otherequitygrowth-results').hide();
		            _$('#plus-coe-results').hide();
		            _$('#plus-coe').show();
		            _$('#minus-coe').hide();
		            _$('#plus-roaa').show();
		            _$('#minus-roaa').hide();

		//            _$('#plus-otherequitygrowth').show();
		//            _$('#minus-otherequitygrowth').hide();

		            _$('#plus-assetgrowth-results').show();
		            _$('#plus-assetgrowth').hide();
		            _$('#minus-assetgrowth').show();

		            _$('#plus-wgtloangrowth-results').hide();
		            _$('#plus-wgtloangrowth').show();
		            _$('#minus-wgtloangrowth').hide();

		            _$('#plus-wgtreloangrowth').show();
		            _$('#minus-wgtreloangrowth').hide();

		            _$('#plus-wgtciloangrowth').show();
		            _$('#minus-wgtciloangrowth').hide();

		            _$('#plus-wgtotherloangrowth').show();
		            _$('#minus-wgtotherloangrowth').hide();

		        },

		        collapseassetgrowth: function(){
		            _$('#plus-assetgrowth-results').hide();
		            _$('#plus-assetgrowth').show();
		            _$('#minus-assetgrowth').hide();

		        },
		*/
		expandwgtloangrowth: function() {
			_$('#plus-wgtloangrowth-results').show();
			_$('#plus-wgtloangrowth').hide();
			_$('#minus-wgtloangrowth').show();

			_$('#plus-wgtreloangrowth').show();
			_$('#minus-wgtreloangrowth').hide();

			_$('#plus-wgtciloangrowth').show();
			_$('#minus-wgtciloangrowth').hide();

			_$('#plus-wgtotherloangrowth').show();
			_$('#minus-wgtotherloangrowth').hide();

		},

		collapsewgtloangrowth: function() {
			_$('#plus-wgtloangrowth-results').hide();
			_$('#plus-wgtloangrowth').show();
			_$('#minus-wgtloangrowth').hide();

		},

		expander: function() {

			_$('#plus-er-results').show();
			_$('#plus-nim-results').hide();
			_$('#plus-llr-results').hide();
			_$('#plus-nim').show();
			_$('#minus-nim').hide();
			_$('#plus-llr').show();
			_$('#minus-llr').hide();
			_$('#plus-er').hide();
			_$('#minus-er').show();
			_$('#plus-salaryer-results').hide();
			_$('#plus-salaryer').show();
			_$('#minus-salaryer').hide();
			_$('#plus-externaler-results').hide();
			_$('#plus-externaler').show();
			_$('#minus-externaler').hide();

			//self.actions.updateSimulation();
		},

		collapseer: function() {
			_$('#plus-er-results').hide();
			_$('#plus-er').show();
			_$('#minus-er').hide();
			//self.actions.updateSimulation();
		},


		expandllr: function() {
			_$('#plus-llr-results').show();
			_$('#plus-er-results').hide();
			_$('#plus-nim-results').hide();
			_$('#plus-nim').show();
			_$('#minus-nim').hide();
			_$('#plus-er').show();
			_$('#minus-er').hide();
			_$('#plus-llr').hide();
			_$('#minus-llr').show();

			//self.actions.updateSimulation();
		},

		collapsellr: function() {
			_$('#plus-llr-results').hide();
			_$('#plus-llr').show();
			_$('#minus-llr').hide();
			//self.actions.updateSimulation();
		},

		expandsalaryer: function() {

			_$('#plus-salaryer-results').show();
			_$('#plus-salaryer').hide();
			_$('#minus-salaryer').show();



			//self.actions.updateSimulation();
		},

		collapsesalaryer: function() {
			_$('#plus-salaryer-results').hide();
			_$('#plus-salaryer').show();
			_$('#minus-salaryer').hide();
			//self.actions.updateSimulation();
		},

		expandexternaler: function() {
			_$('#plus-externaler-results').show();
			_$('#plus-externaler').hide();
			_$('#minus-externaler').show();

			_$('#plus-salaryer-results').hide();
			_$('#plus-salaryer').show();
			_$('#minus-salaryer').hide();



			//self.actions.updateSimulation();
		},

		collapseexternaler: function() {
			_$('#plus-externaler-results').hide();
			_$('#plus-externaler').show();
			_$('#minus-externaler').hide();
			//self.actions.updateSimulation();
		},

		expandnim: function() {

			_$('#plus-nim-results').show();
			_$('#plus-grossintyield-results').hide();
			_$('#plus-costoffunds-results').hide();
			_$('#plus-er-results').hide();
			_$('#plus-llr-results').hide();
			_$('#plus-nim').hide();
			_$('#minus-nim').show();
			_$('#minus-grossintyield').hide();
			_$('#plus-grossintyield').show();
			_$('#minus-costoffunds').hide();
			_$('#plus-costoffunds').show();
			_$('#minus-er').hide();
			_$('#plus-er').show();
			_$('#minus-llr').hide();
			_$('#plus-llr').show();


			//self.actions.updateSimulation();
		},

		collapsenim: function() {
			_$('#plus-nim-results').hide();
			_$('#plus-nim').show();
			_$('#minus-nim').hide();
			//self.actions.updateSimulation();
		},

		expandgrossintyield: function() {
			_$('#plus-costoffunds').show();
			_$('#minus-costoffunds').hide();
			_$('#plus-costoffunds-results').hide();
			_$('#plus-grossintyield').hide();
			_$('#minus-grossintyield').show();
			_$('#plus-grossintyield-results').show();
			//self.actions.updateSimulation();
		},

		collapsegrossintyield: function() {
			_$('#plus-grossintyield').show();
			_$('#minus-grossintyield').hide();
			_$('#plus-grossintyield-results').hide();
		},

		expandcostoffunds: function() {
			_$('#plus-grossintyield').show();
			_$('#minus-grossintyield').hide();
			_$('#plus-grossintyield-results').hide();
			_$('#plus-costoffunds').hide();
			_$('#minus-costoffunds').show();
			_$('#plus-costoffunds-results').show();
			//self.actions.updateSimulation();
		},

		collapsecostoffunds: function() {
			_$('#plus-costoffunds').show();
			_$('#minus-costoffunds').hide();
			_$('#plus-costoffunds-results').hide();
		},

		slider_show: function() {
			var ele = _$(this).getAttribute('data-id');

			//ele = '#'+ele;
			if ($('#' + ele).is(':visible')) {
				_$('#' + ele).hide();
			} else {
				_$('#' + ele).show();
			}
		},

		loadSimulation: function() {
			var self = BlkLab.App.IndividualSimulationController;
			//////alert(BlkLab.App.Segment);
			//////alert(BlkLab.App.Segment);
			BlkLab.get({
				url: '/api/individual/scenario/sliders?company=' + BlkLab.App.Company + '&segment=' + BlkLab.App.Segment
			}).then(function(http) {
				var result = JSON.parse(http.response);
				//
				BlkLab.App.simulationSliders = result;

				BlkLab.App.simulationSlidersKeys = result.Metric;

				BlkLab.App.simulationSlidersValue = result.Metric_Value;
				BlkLab.App.simulationSlidersValue2 = result.Metric_Value;
				BlkLab.App.simulationSlidersValue_Orig = result.Metric_Value;


				Object.keys(result).forEach(function(key) {
					if (BlkLab.App.simulationKeys.indexOf(key) != -1) {
						BlkLab.App[key] = result[key];
					}
				});



				var sliders = result;
				var metricLength = sliders["Metric"].length;

				//_$('#segment-list').value = sliders["segmentID"][0];
				//////alert(sliders["segmentDesc"][0]);
				//_$('#industry_segment').innerHTML = sliders["segmentDesc"][0];

				//////alert(BlkLab.App.Segment); 
				BlkLab.App.Segment = BlkLab.App.Segment;
				BlkLab.Storage.set('segment', BlkLab.App.Segment);

				//BlkLab.App.Segment = sliders["segmentID"][0];
				//BlkLab.Storage.set('segment', sliders["segmentID"][0]);
				$('#peerDetails').hide();
				var string = "";

				for (l = 0; l < metricLength; l++) {


					BlkLab.App[sliders["Metric"][l]] = [];
					BlkLab.App[sliders["Metric"][l] + "2"] = [];
					BlkLab.App[sliders["Metric"][l] + "_Orig"] = [];

					BlkLab.App[sliders["Metric"][l]].push(sliders["Metric_Value"][l]);
					BlkLab.App[sliders["Metric"][l] + "2"].push(sliders["Metric_Value"][l]);
					BlkLab.App[sliders["Metric"][l] + "_Orig"].push(sliders["Metric_Value"][l]);

					if (sliders["Metric_Value"][l] < sliders["segmentrank_25"][l]) {
						if (sliders["Metric_Value"][l] < 0) {
							min = (Math.round(sliders["Metric_Value"][l] * 10 * 2));

						} else {
							min = parseInt(Math.round(sliders["Metric_Value"][l] * 10 * 0.2)) - 100;
						}
					} else {
						if (sliders["segmentrank_25"][l] < 0) {
							min = parseInt(Math.round(sliders["segmentrank_25"][l] * 10 * 2));

						} else {
							min = parseInt(Math.round(sliders["segmentrank_25"][l] * 10 * 0.2)) - 100;
						}
					}

					if (sliders["Metric_Value"][l] > sliders["segmentrank_75"][l]) {
						max = parseInt(Math.round(sliders["Metric_Value"][l] * 10 * 2)) + 100;
					} else {
						max = parseInt(Math.round(sliders["segmentrank_75"][l] * 10 * 2)) + 100;
					}

					value = Math.round(sliders["Metric_Value"][l] * 10);

					//create the html for the metric tag
					var html_tag = "";

					html_tag += '<div class="circle light"><img src="/app/assets/images/graph-icon.png"></div>';
					html_tag += '<div class="col">';
					html_tag += '<label>' + sliders["Metric_Name"][l] + '</label><div id="' + sliders["Metric"][l] + '-delete" class= "delete" blklab-click="removeWhatIf" ><img src="/app/assets/images/delete.png"></div>';
					html_tag += '<div id="' + sliders["Metric"][l] + '-slider-output" class="tooltip"></div>';
					html_tag += '<input type="range" id="' + sliders["Metric"][l] + '-slider" min="' + min + '" max="' + max + '" value="' + value + '" blklab-click="update_slider" ';
					if (sliders["hgb"][l] == 1) {
						html_tag += 'class="reverse"  />';
					} else {
						html_tag += ' />';
					}
					html_tag += '<div id="' + sliders["Metric"][l] + '-years" class="buttons"></div>';
					html_tag += '</div>';


					var ele = _$('#' + sliders["Metric"][l] + '_tag');

					ele.innerHTML = html_tag;


					Slider = _$('#' + sliders["Metric"][l]);
					ele.hide();
					_$('#' + sliders["Metric"][l] + '-delete').hide();

				}






				//////alert(JSON.stringify(BlkLab.App));
				/*
				var erSlider= _$('#er-slider');
				erSlider.min = BlkLab.App.simulationSliders.min;
				erSlider.max = BlkLab.App.simulationSliders.max;
				erSlider.value = BlkLab.App.ER;


				var llrSlider = _$('#llr-slider');
				llrSlider.min = BlkLab.App.simulationSliders.LLRmin;
				llrSlider.max = BlkLab.App.simulationSliders.LLRmax;
				llrSlider.value = BlkLab.App.LLR;


				var aySlider = _$('#ay-slider');
				aySlider.min = BlkLab.App.simulationSliders.AYmin;
				aySlider.max = BlkLab.App.simulationSliders.AYmax;
				aySlider.value = BlkLab.App.AY;

				var levSlider = _$('#lev-slider');
				levSlider.min = BlkLab.App.simulationSliders.Levmin;
				levSlider.max = BlkLab.App.simulationSliders.Levmax;
				levSlider.value = BlkLab.App.Lev;
				*/

				//hide additional section results
				_$('#plus-roaa-results').hide();
				_$('#plus-coe-results').hide();
				//                _$('#plus-otherequitygrowth-results').hide();
				_$('#plus-assetgrowth-results').hide();




				//hide minus signs
				//                _$('#minus-otherequitygrowth').hide();
				_$('#minus-roaa').hide();
				_$('#minus-coe').hide();
				//                _$('#minus-assetgrowth').hide();

				//show plus signs
				//                _$('#plus-otherequitygrowth').show();
				_$('#plus-roaa').show();
				_$('#plus-coe').show();
				//                _$('#plus-assetgrowth').show();



				self.actions.updateSimulation();
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});
		},

		updateSimulation: function() {
			var self = BlkLab.App.IndividualSimulationController;
			var slider_metrics = BlkLab.App.simulationSliders.Metric;
			var slider_values = BlkLab.App.simulationSliders.Metric_Value;

			var slider_length = slider_metrics.length;
			//////alert(JSON.stringify(slider_metrics));
			var qstring = '';

			for (s = 0; s < slider_length; s++) {
				qstring += "&" + slider_metrics[s] + "=" + BlkLab.App[slider_metrics[s]];
				qstring += "&" + slider_metrics[s] + "2=" + BlkLab.App[slider_metrics[s] + "2"];
				qstring += "&" + slider_metrics[s] + "_Orig=" + BlkLab.App[slider_metrics[s] + "_Orig"];
			}

			//var qstring = '&ER=' + BlkLab.App.ER + '&ER2=' + BlkLab.App.ER2 + '&ER_Orig=' +  BlkLab.App.ER_Orig + '&LLR=' + BlkLab.App.LLR + '&LLR2=' + BlkLab.App.LLR2 + '&LLR_Orig=' + BlkLab.App.LLR_Orig + '&AY=' + BlkLab.App.AY + '&AY2=' + BlkLab.App.AY2 + '&AY_Orig=' + BlkLab.App.AY_Orig + '&Lev=' + BlkLab.App.Lev + '&Lev2=' + BlkLab.App.Lev2 + '&Lev_Orig=' + BlkLab.App.Lev_Orig;
			//////alert(BlkLab.App.Segment);
			BlkLab.get({
				url: '/api/individual/scenario/forecast?company=' + BlkLab.App.Company + qstring + '&segment=' + BlkLab.App.Segment
			}).then(function(http) {
				var result = JSON.parse(http.response);

				var chartData = result;


				var length = chartData.length - 1;

				var current = length - 5;

				var outcomes = $('#simulation_outcomes');


				var HTML = ''
				HTML += '<div id = "simulation_outcomes" class="col">';
				if (chartData[current]["TR_5"] != null) {
					HTML += '<div class="simulation"><label> Total Returns (5 Yrs): </label> <span>' + chartData[current]["TR_5"] + '%<img src="/app/assets/images/outcome-arrow.png">' + chartData[length]["TR_5"] + '%</span></div>';
				}
				if (chartData[current]["actual_closing"] != null) {
					HTML += '<div class="simulation"><label> Share Price: </label> <span>$' + chartData[current]["actual_closing"] + '<img src="/app/assets/images/outcome-arrow.png">$' + chartData[length]["actual_closing"] + '</span></div>';
				}

				if (chartData[current]["Total_NI"] != null) {
					curr_ni = chartData[current]["Total_NI"] / 1000;
					curr_ni = curr_ni.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
					//curr_ni = curr_ni.replace(".00","");
					tgt_ni = chartData[length]["Total_NI"] / 1000;
					tgt_ni = tgt_ni.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
					//tgt_ni = tgt_ni.replace(".00","");
					HTML += '<div class="simulation"><label> Net Income (\'M): </label> <span>$' + curr_ni + '<img src="/app/assets/images/outcome-arrow.png">$' + tgt_ni + '</span></div>';
				}

				if (chartData[current]["Total_Assets"] != null) {
					curr_ni = chartData[current]["Total_Assets"] / 1000000;
					curr_ni = curr_ni.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
					//curr_ni = curr_ni.replace(".00","");

					tgt_ni = chartData[length]["Total_Assets"] / 1000000;
					tgt_ni = tgt_ni.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
					//tgt_ni = tgt_ni.replace(".00","");
					HTML += '<div class="simulation"><label> Total Assets (BN): </label> <span>$' + curr_ni + '<img src="/app/assets/images/outcome-arrow.png">$' + tgt_ni + '</span></div>';
				}

				HTML += '<div>';

				outcomes.replaceWith(HTML);



				var chart_tree_metrics = [
					"ROAE",
					"Operating_ROE",
					"Extra_Adj_Other_ROAA",
					"Extra_Adj_Other",
					"Op_Margin",
					"ROAA_Effective_Tax_Rate",
					"Capital_Utilization",
					"Efficiency_Ratio",
					"LLR",
					"Asset_Yield",
					"Leverage",
					"ROAA",
					"EA_Asset_Growth",
					//  "dividend_payout",
					"Cost_of_Capital",
					"spread",
					"equity_growth",
					// "equity_other_growth_rate",
					"mkt_cap",
					"Common_share_growth",
					"actual_closing",
					"dividend_yield",
					"op_roaa",
					"total_return_1",
					"EA_Mix",
					"net_int_margin",
					"non_int_margin",
					"gross_int_yield",
					"cost_of_funds_ea",
					"cost_of_funds",
					"ibl_ea_ratio",
					"int_yield_loans_wgt",
					"other_int_yield_wgt",
					"cost_of_deposits_wgt",
					"cost_of_other_borrowings_wgt",
					"loan_yield",
					"loan_lease_mix",
					"cost_of_deposits",
					"deposit_mix",
					"cost_of_other_funds",
					"Total_Asset_Growth_Rate",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"Beta",
					"shares_yield",
					"net_int_margin_grossed",
					"non_int_margin_grossed",
					"Leverage1",
					"Costs_EA",
					"Asset_Yield_EA",
					"salaryexpense",
					"gaexpense",
					"externalexpense",
					"salaryperfte",
					"eaperfte",
					"dataprocessingexpense",
					"advertisingexpense",
					"premisesexpense",
					"otherexpense",
					"llploans",
					"ncoloans",
					"llpnco",
					"llpea",
					"Asset_Yield_EA1",
					"loan_lease_mix1",
					"otherintyield",

				];

				var chart_tree_metrics_seg50 = [
					"\"ROAE_pct50\"",
					"Operating_ROE",
					"\"Extra_Adj_Other_ROAA_pct50\"",
					"Extra_Adj_Other",
					"\"Op_Margin_pct50\"",
					"\"ROAA_Effective_Tax_Rate_pct50\"",
					"Capital_Utilization",
					"\"Efficiency_Ratio_pct50\"",
					"\"LLR_pct50\"",
					"\"Asset_Yield_pct50\"",
					"\"Leverage_pct50\"",
					"\"ROAA_pct50\"",
					"\"EA_Asset_Growth_pct50\"",
					//   "\"Dividend_Payout_pct50\"",
					"\"Cost_of_Capital_pct50\"",
					"\"Spread_pct50\"",
					"\"Equity_Growth_Rate_pct50\"",
					//   "\"equity_other_growth_rate_pct50\"",
					"\"Mkt_Cap_pct50\"",
					"\"Common_share_growth_pct50\"",
					"actual_closing",
					"\"DY_1_pct50\"",
					"\"ROAA_Pre_Tax_Excl_Security_Gains_pct50\"",
					"\"TR_1_pct50\"",
					"\"EA_Mix_pct50\"",
					"\"Net_Int_Margin_pct50\"",
					"\"Non_Int_Yield_pct50\"",
					"\"Gross_Int_Inc_EA_Yield_pct50\"",
					"\"Int_Exp_EA_pct50\"",
					"\"Total_Int_Bearing_Liab_Cost_pct50\"",
					"ibl_ea_ratio",
					"\"Inc_Int_on_Loans_Leases_Yield_Weighted_pct50\"",
					"\"other_int_yield_wgt_pct50\"",
					"\"Int_Exp_Deposits_Cost_Wgt_pct50\"",
					"\"cost_of_other_borrowings_wgt\"",
					"\"Inc_Int_on_Loans_Leases_Yield_pct50\"",
					"\"EA_Loans_Leases_Mix_Yield_pct50\"",
					"\"Int_Exp_Deposits_Cost_pct50\"",
					"\"IBL_Deposits_Mix_pct50\"",
					"\"cost_of_other_funds_pct50\"",
					"\"Total_Asset_Growth_Rate_pct50\"",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"\"Beta_pct50\"",
					"\"SP_1_pct50\"",
					"\"net_int_margin_grossed_pct50\"",
					"\"non_int_margin_grossed_pct50\"",
					"\"Leverage_pct50\"",
					"\"Costs_Avg_EA_Dep_pct50\"",
					"\"Op_Inc_Avg_EA_Dep_pct50\"",
					"\"Exp_Salary_Benefits_Avg_EA_Dep_pct50\"",
					"\"gaexpense_pct50\"",
					"\"externalexpense_pct50\"",
					"\"Exp_Salary_Benefits_Per_FTE_pct50\"",
					"\"Avg_EA_Dep_Per_FTE_pct50\"",
					"\"Exp_Data_Process_Avg_EA_Dep_pct50\"",
					"\"Exp_Advertising_Avg_EA_Dep_pct50\"",
					"\"Exp_Premises_Fixed_Assets_Inc_pvt50\"",
					"\"otherexpense_pct50\"",
					"\"LLP_Loans_pct50\"",
					"\"ncoloans_pct50\"",
					"\"LLP_NCO_pct50\"",
					"\"llpea_pct50\"",
					"\"Op_Inc_Avg_EA_Dep_pct50\"",
					"\"EA_Loans_Leases_Mix_Yield_pct50\"",
					"\"otherintyield_pct50\"",
				];

				var chart_tree_metrics_seg75 = [
					"\"ROAE_pct75\"",
					"Operating_ROE",
					"\"Extra_Adj_Other_ROAA_pct75\"",
					"Extra_Adj_Other",
					"\"Op_Margin_pct75\"",
					"\"ROAA_Effective_Tax_Rate_pct75\"",
					"Capital_Utilization",
					"\"Efficiency_Ratio_pct75\"",
					"\"LLR_pct75\"",
					"\"Asset_Yield_pct75\"",
					"\"Leverage_pct75\"",
					"\"ROAA_pct75\"",
					"\"EA_Asset_Growth_pct75\"",
					//    "\"Dividend_Payout_pct75\"",
					"\"Cost_of_Capital_pct75\"",
					"\"Spread_pct75\"",
					"\"Equity_Growth_Rate_pct75\"",
					//   "\"equity_other_growth_rate_pct75\"",
					"\"Mkt_Cap_pct75\"",
					"\"Common_share_growth_pct75\"",
					"actual_closing",
					"\"DY_1_pct75\"",
					"\"ROAA_Pre_Tax_Excl_Security_Gains_pct75\"",
					"\"TR_1_pct75\"",
					"\"EA_Mix_pct75\"",
					"\"Net_Int_Margin_pct75\"",
					"\"Non_Int_Yield_pct75\"",
					"\"Gross_Int_Inc_EA_Yield_pct75\"",
					"\"Int_Exp_EA_pct75\"",
					"\"Total_Int_Bearing_Liab_Cost_pct75\"",
					"ibl_ea_ratio",
					"\"Inc_Int_on_Loans_Leases_Yield_Weighted_pct75\"",
					"\"other_int_yield_wgt_pct75\"",
					"\"Int_Exp_Deposits_Cost_Wgt_pct75\"",
					"\"cost_of_other_borrowings_wgt\"",
					"\"Inc_Int_on_Loans_Leases_Yield_pct75\"",
					"\"EA_Loans_Leases_Mix_Yield_pct75\"",
					"\"Int_Exp_Deposits_Cost_pct75\"",
					"\"IBL_Deposits_Mix_pct75\"",
					"\"cost_of_other_funds_pct75\"",
					"\"Total_Asset_Growth_Rate_pct75\"",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"\"Beta_pct75\"",
					"\"SP_1_pct75\"",
					"\"net_int_margin_grossed_pct75\"",
					"\"non_int_margin_grossed_pct75\"",
					"\"Leverage_pct75\"",
					"\"Costs_Avg_EA_Dep_pct75\"",
					"\"Op_Inc_Avg_EA_Dep_pct75\"",
					"\"Exp_Salary_Benefits_Avg_EA_Dep_pct75\"",
					"\"gaexpense_pct75\"",
					"\"externalexpense_pct75\"",
					"\"Exp_Salary_Benefits_Per_FTE_pct75\"",
					"\"Avg_EA_Dep_Per_FTE_pct75\"",
					"\"Exp_Data_Process_Avg_EA_Dep_pct75\"",
					"\"Exp_Advertising_Avg_EA_Dep_pct75\"",
					"\"Exp_Premises_Fixed_Assets_Inc_pvt50\"",
					"\"otherexpense_pct75\"",
					"\"LLP_Loans_pct75\"",
					"\"ncoloans_pct75\"",
					"\"LLP_NCO_pct75\"",
					"\"llpea_pct75\"",
					"\"Op_Inc_Avg_EA_Dep_pct75\"",
					"\"EA_Loans_Leases_Mix_Yield_pct75\"",
					"\"otherintyield_pct75\"",
				];

				var chart_tree_metrics_seg25 = [
					"\"ROAE_pct25\"",
					"Operating_ROE",
					"\"Extra_Adj_Other_ROAA_pct25\"",
					"Extra_Adj_Other",
					"\"Op_Margin_pct25\"",
					"\"ROAA_Effective_Tax_Rate_pct25\"",
					"Capital_Utilization",
					"\"Efficiency_Ratio_pct25\"",
					"\"LLR_pct25\"",
					"\"Asset_Yield_pct25\"",
					"\"Leverage_pct25\"",
					"\"ROAA_pct25\"",
					"\"EA_Asset_Growth_pct25\"",
					//    "\"Dividend_Payout_pct25\"",
					"\"Cost_of_Capital_pct25\"",
					"\"Spread_pct25\"",
					"\"Equity_Growth_Rate_pct25\"",
					//     "\"equity_other_growth_rate_pct25\"",
					"\"Mkt_Cap_pct25\"",
					"\"Common_share_growth_pct25\"",
					"actual_closing",
					"\"DY_1_pct25\"",
					"\"ROAA_Pre_Tax_Excl_Security_Gains_pct25\"",
					"\"TR_1_pct25\"",
					"\"EA_Mix_pct25\"",
					"\"Net_Int_Margin_pct25\"",
					"\"Non_Int_Yield_pct25\"",
					"\"Gross_Int_Inc_EA_Yield_pct25\"",
					"\"Int_Exp_EA_pct25\"",
					"\"Total_Int_Bearing_Liab_Cost_pct25\"",
					"ibl_ea_ratio",
					"\"Inc_Int_on_Loans_Leases_Yield_Weighted_pct25\"",
					"\"other_int_yield_wgt_pct25\"",
					"\"Int_Exp_Deposits_Cost_Wgt_pct25\"",
					"\"cost_of_other_borrowings_wgt\"",
					"\"Inc_Int_on_Loans_Leases_Yield_pct25\"",
					"\"EA_Loans_Leases_Mix_Yield_pct25\"",
					"\"Int_Exp_Deposits_Cost_pct25\"",
					"\"IBL_Deposits_Mix_pct25\"",
					"\"cost_of_other_funds_pct25\"",
					"\"Total_Asset_Growth_Rate_pct25\"",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"\"Beta_pct25\"",
					"\"SP_1_pct25\"",
					"\"net_int_margin_grossed_pct25\"",
					"\"non_int_margin_grossed_pct25\"",
					"\"Leverage_pct25\"",
					"\"Costs_Avg_EA_Dep_pct25\"",
					"\"Op_Inc_Avg_EA_Dep_pct25\"",
					"\"Exp_Salary_Benefits_Avg_EA_Dep_pct25\"",
					"\"gaexpense_pct25\"",
					"\"externalexpense_pct25\"",
					"\"Exp_Salary_Benefits_Per_FTE_pct25\"",
					"\"Avg_EA_Dep_Per_FTE_pct25\"",
					"\"Exp_Data_Process_Avg_EA_Dep_pct25\"",
					"\"Exp_Advertising_Avg_EA_Dep_pct25\"",
					"\"Exp_Premises_Fixed_Assets_Inc_pvt50\"",
					"\"otherexpense_pct25\"",
					"\"LLP_Loans_pct25\"",
					"\"ncoloans_pct25\"",
					"\"LLP_NCO_pct25\"",
					"\"llpea_pct25\"",
					"\"Op_Inc_Avg_EA_Dep_pct25\"",
					"\"EA_Loans_Leases_Mix_Yield_pct25\"",
					"\"otherintyield_pct25\"",
				];
				var chart_tree_metrics_hgb = [
					"\"ROAE_higher_good_or_bad\"",
					"Operating_ROE",
					"\"Extra_Adj_Other_ROAA_higher_good_or_bad\"",
					"Extra_Adj_Other",
					"\"Op_Margin_higher_good_or_bad\"",
					"\"ROAA_Effective_Tax_Rate_higher_good_or_bad\"",
					"Capital_Utilization",
					"\"Efficiency_Ratio_higher_good_or_bad\"",
					"\"LLR_higher_good_or_bad\"",
					"\"Asset_Yield_higher_good_or_bad\"",
					"\"Leverage_higher_good_or_bad\"",
					"\"ROAA_higher_good_or_bad\"",
					"\"EA_Asset_Growth_higher_good_or_bad\"",
					//      "\"Dividend_Payout_higher_good_or_bad\"",
					"\"Cost_of_Capital_higher_good_or_bad\"",
					"\"Spread_higher_good_or_bad\"",
					"\"Equity_Growth_Rate_higher_good_or_bad\"",
					//      "\"equity_other_growth_rate_higher_good_or_bad\"",
					"\"Mkt_Cap_higher_good_or_bad\"",
					"\"Common_share_growth_higher_good_or_bad\"",
					"actual_closing",
					"\"DY_1_higher_good_or_bad\"",
					"\"ROAA_Pre_Tax_Excl_Security_Gains_higher_good_or_bad\"",
					"\"TR_1_higher_good_or_bad\"",
					"\"EA_Mix_higher_good_or_bad\"",
					"\"Net_Int_Margin_higher_good_or_bad\"",
					"\"Non_Int_Yield_higher_good_or_bad\"",
					"\"Gross_Int_Inc_EA_Yield_higher_good_or_bad\"",
					"\"Int_Exp_EA_higher_good_or_bad\"",
					"\"Total_Int_Bearing_Liab_Cost_higher_good_or_bad\"",
					"ibl_ea_ratio",
					"\"Inc_Int_on_Loans_Leases_Yield_Weighted_higher_good_or_bad\"",
					"\"other_int_yield_wgt_higher_good_or_bad\"",
					"\"Int_Exp_Deposits_Cost_Wgt_higher_good_or_bad\"",
					"\"cost_of_other_borrowings_wgt\"",
					"\"Inc_Int_on_Loans_Leases_Yield_higher_good_or_bad\"",
					"\"EA_Loans_Leases_Mix_Yield_higher_good_or_bad\"",
					"\"Int_Exp_Deposits_Cost_higher_good_or_bad\"",
					"\"IBL_Deposits_Mix_higher_good_or_bad\"",
					"\"cost_of_other_funds_higher_good_or_bad\"",
					"\"Total_Asset_Growth_Rate_higher_good_or_bad\"",
					"Risk_Free_Rate",
					"Equity_Risk_Premium",
					"\"Beta_higher_good_or_bad\"",
					"\"SP_1_higher_good_or_bad\"",
					"\"net_int_margin_grossed_higher_good_or_bad\"",
					"\"non_int_margin_grossed_higher_good_or_bad\"",
					"\"Leverage_higher_good_or_bad\"",
					"\"Costs_Avg_EA_Dep_higher_good_or_bad\"",
					"\"Op_Inc_Avg_EA_Dep_higher_good_or_bad\"",
					"\"Exp_Salary_Benefits_Avg_EA_Dep_higher_good_or_bad\"",
					"\"gaexpense_higher_good_or_bad\"",
					"\"externalexpense_higher_good_or_bad\"",
					"\"Exp_Salary_Benefits_Per_FTE_higher_good_or_bad\"",
					"\"Avg_EA_Dep_Per_FTE_higher_good_or_bad\"",
					"\"Exp_Data_Process_Avg_EA_Dep_higher_good_or_bad\"",
					"\"Exp_Advertising_Avg_EA_Dep_higher_good_or_bad\"",
					"\"Exp_Premises_Fixed_Assets_Inc_pvt50\"",
					"\"otherexpense_higher_good_or_bad\"",
					"\"LLP_Loans_higher_good_or_bad\"",
					"\"ncoloans_higher_good_or_bad\"",
					"\"LLP_NCO_higher_good_or_bad\"",
					"\"llpea_higher_good_or_bad\"",
					"\"Op_Inc_Avg_EA_Dep_higher_good_or_bad\"",
					"\"EA_Loans_Leases_Mix_Yield_higher_good_or_bad\"",
					"\"otherintyield_higher_good_or_bad\"",
				];
				// Create array of graphs to create
				var i = 0;
				var j = chart_tree_metrics.length;
				var cyear = 0;

				for (slider_number = 0; slider_number < slider_length; slider_number++) {
					var metric = _$('#' + slider_metrics[slider_number] + '-years');

					metric.innerHTML = "";


					/*
                    var er = _$('#er-years');
                    var llr = _$('#LLR-years');
                    var ay = _$('#Asset_Yield-years');
                    var lev = _$('#Leverage-years');

                er.innerHTML = "";
                llr.innerHTML = "";
                ay.innerHTML = "";
                lev.innerHTML = "";
*/
					//Number of years/columns to display in the assumptions section.
					var n = chartData.length;
					var w = (5 * 2); //Math.round(100/(chartData.length - 3));
					var y = n - (w / 2);

					chartData.forEach(function(year, idx) {
						if (idx > (y - 3) && year.Year != null) {

							var metric_col = BlkLab.create('div', {
								"class": 'col'
							});

							metric_col.css({
								width: w + '%'
							});

							/* var er_col = BlkLab.create('div', {"class": 'col'});
							 var llr_col = BlkLab.create('div', {"class": 'col'});
							 var ay_col = BlkLab.create('div', {"class": 'col'});
							 var lev_col = BlkLab.create('div', {"class": 'col'});

							 er_col.css({width: w + '%'});
							 llr_col.css({width: w + '%'});
							 ay_col.css({width: w + '%'});
							 lev_col.css({width: w + '%'});

							 */

							if (year.Year != null) {
								cyear = parseFloat(year.Year);
							} else {
								cyear++;
							}

							//var ref = "year." +  slider_metrics[slider_number];
							//var check = year.indexOf(slider_metrics[slider_number]);
							//////
							metric_col.innerHTML = cyear + '<div class="box">' + parseFloat(year[slider_metrics[slider_number]]).toFixed(2) + '</div>';
							metric.append(metric_col);

							/*
							er_col.innerHTML = cyear  + '<div class="box">' + parseFloat(year.Efficiency_Ratio).toFixed(2) + '</div>';
							llr_col.innerHTML = cyear + '<div class="box">' + parseFloat(year.LLR).toFixed(2) + '</div>';
							ay_col.innerHTML = cyear  + '<div class="box">' + parseFloat(year.Asset_Yield).toFixed(2) + '</div>';
							lev_col.innerHTML = cyear + '<div class="box">' + parseFloat(year.Leverage).toFixed(2) + '</div>';

							er.append(er_col);
							llr.append(llr_col);
							ay.append(ay_col);
							lev.append(lev_col);
							*/
						}
					});

					if (chartData[4].Year != null) {

						var metric_col_button = BlkLab.create('div', {
							"class": 'col line'
						});
						metric_col_button.css({
							width: w + '%'
						});
						metric_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';
						/*
						    var er_col_button = BlkLab.create('div', {"class": 'col line'});
						    var llr_col_button = BlkLab.create('div', {"class": 'col line'});
						    var ay_col_button = BlkLab.create('div', {"class": 'col line'});
						    var lev_col_button = BlkLab.create('div', {"class": 'col line'});

						    er_col_button.css({width: w + '%'});
						    llr_col_button.css({width: w + '%'});
						    ay_col_button.css({width: w + '%'});
						    lev_col_button.css({width: w + '%'});

						    er_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';
						    llr_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';
						    ay_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';
						    lev_col_button.innerHTML = '<img src="/assets/images/curve-linear.png">';

						    //er.append(er_col_button);
						    //llr.append(llr_col_button);
						    //ay.append(ay_col_button);
						    //lev.append(lev_col_button); */
					}



					// set the tool tip for the slider and color according to segment
					var ref = slider_metrics[slider_number];

					var Slider = _$('#' + slider_metrics[slider_number] + '-slider');

					Slider.on("input", function(Slider) {
						var ele = _$(this).getAttribute('id');
						// ////alert(JSON.stringify(BlkLab.App.simulationSliders));
						Slider = _$('#' + ele);

						var code = ele.replace("-slider", "");

						var index = slider_metrics.indexOf(code);

						var SliderOutput = _$('#' + ele + '-output');
						BlkLab.App.simulationSliders.Metric
						var posPerc = (((Slider.value) / Slider.max) * 100);
						var display_resulta = parseInt(Slider.value);
						var seg_75_resulta = parseInt(BlkLab.App.simulationSliders.segmentrank_75[index] * 10);
						var seg_50_resulta = parseInt(BlkLab.App.simulationSliders.segmentrank_50[index] * 10);
						var seg_25_resulta = parseInt(BlkLab.App.simulationSliders.segmentrank_25[index] * 10);
						var hgb_resulta = BlkLab.App.simulationSliders.hgb[index];

						if (hgb_resulta == 1) {
							var pixPos = (-((posPerc / 100 - 1)) * (Slider.clientWidth * 0.77));
						} else {
							var pixPos = (((posPerc / 100)) * (Slider.clientWidth * 0.77));
						}
						pixPos += Slider.offsetLeft;

						SliderOutput.style.display = 'block';
						SliderOutput.style.left = pixPos + 'px';

						if (BlkLab.App.simulationSliders.format[index] == "%") {
							SliderOutput.innerHTML = Slider.value / 10;
						} else {
							SliderOutput.innerHTML = Math.round(Slider.value / 100) / 10;
						}

						//get color to format tooltip


						var color_a;
						var color_b;
						if (hgb_resulta == 1) {

							if (display_resulta < seg_25_resulta) {
								color_a = "Green";
								color_b = "White";
							} else if (display_resulta < seg_50_resulta) {
								color_a = "LightGreen";
								color_b = "Black";
							} else if (display_resulta < seg_75_resulta) {
								color_a = "Orange";
								color_b = "Black";
							} else {
								color_a = "Red";
								color_b = "White";
							}
						} else {
							if (display_resulta > seg_75_resulta) {
								color_a = "Green";
								color_b = "White";
							} else if (display_resulta > seg_50_resulta) {
								color_a = "LightGreen";
								color_b = "Black";
							} else if (display_resulta > seg_25_resulta) {
								color_a = "Orange";
								color_b = "Black";
							} else {
								color_a = "Red";
								color_b = "White";
							}
						}
						SliderOutput.style.background = color_a;
						SliderOutput.style.color = color_b;


					});
					//_$('#'+sliders[slider_number]+'-slider-output').style.display = "none";
				}

				while (i <= j) {
					// SERIAL CHART
					var chart = new AmCharts.AmSerialChart();
					chart.pathToImages = "/amcharts/images/";
					chart.dataProvider = chartData;
					chart.categoryField = "Year";
					chart.height = "100%";
					chart.handDrawn = false;
					chart.columnWidth = 0.8;



					// Category Axis

					var categoryAxis = chart.categoryAxis;
					categoryAxis.gridAlpha = 0;
					categoryAxis.labelsEnabled = true;
					categoryAxis.axisAlpha = 0;


					// Value Axis

					var valueAxis = new AmCharts.ValueAxis();
					if (chart_tree_metrics[i] == "mkt_cap" || chart_tree_metrics[i] == "salaryperfte" || chart_tree_metrics[i] == "eaperfte") {
						valueAxis.unit = "$";
						valueAxis.unitPosition = "left";
					} else {
						valueAxis.unit = "%";
					}
					valueAxis.gridAlpha = 0;
					valueAxis.lineColor = "White";
					valueAxis.labelsEnabled = true;
					valueAxis.axisAlpha = 0;
					chart.addValueAxis(valueAxis);



					// GRAPHS

					var graph1 = new AmCharts.AmGraph();
					graph1.valueField = chart_tree_metrics[i];
					graph1.precision = -1;
					graph1.alphaField = "columncolor";
					graph1.type = "column";
					graph1.lineColor = "Gray";
					chart.addGraph(graph1);

					var graph2 = new AmCharts.AmGraph();
					graph2.valueField = chart_tree_metrics_seg50[i];
					graph2.alphaField = "columncolor";
					graph2.type = "line";
					graph2.bullet = "round";
					graph2.bulletColor = "Orange";
					graph2.bulletSize = 4;
					graph2.lineAlpha = 0;
					chart.addGraph(graph2);

					var graph3 = new AmCharts.AmGraph();
					graph3.valueField = chart_tree_metrics_seg75[i];
					graph3.alphaField = "columncolor";
					graph3.type = "line";
					graph3.bullet = "round";
					graph3.bulletColor = "DarkGreen";
					graph3.bulletSize = 4;
					graph3.lineAlpha = 0;
					chart.addGraph(graph3);

					var graph4 = new AmCharts.AmGraph();
					graph4.valueField = chart_tree_metrics_seg25[i];
					graph4.alphaField = "columncolor";
					graph4.type = "line";
					graph4.bullet = "round";
					graph4.bulletColor = "Red";
					graph4.bulletSize = 4;
					graph4.lineAlpha = 0;
					chart.addGraph(graph4);


					var legend = new AmCharts.AmLegend();
					legend.position = "bottom";
					legend.verticalGap = 2;
					legend.equalWidths = false;
					legend.align = "center";
					legend.marginTop = 0;
					legend.marginLeft = 25;
					legend.marginRight = 5;
					legend.fontSize = 9;
					legend.valueWidth = 30;
					legend.data = [{
						title: "Actual",
						color: "DarkGray",
						markerType: "square"
					}, {
						title: "Forecast",
						color: "LightGray",
						markerType: "square"
					}];
					legend.markerSize = 8;
					chart.addLegend(legend);

					// WRITE
					chart.write(chart_tree_metrics[i]);


					//add traffic light for metric based on last year results

					var traffic_light = _$('#controls_' + chart_tree_metrics[i]);
					if (traffic_light === null) {} else {
						var color = "Gray";
						var length = chartData.length;

						if (chart_tree_metrics_seg50[i] != null) {

							if (chart_tree_metrics[i] == "mkt_cap") {
								var display_result = chartData[length - 1][chart_tree_metrics[i]] * 1000000000;
							} else {
								var display_result = chartData[length - 1][chart_tree_metrics[i]];
							}
							var seg_75_result = chartData[length - 1][chart_tree_metrics_seg75[i]];
							var seg_50_result = chartData[length - 1][chart_tree_metrics_seg50[i]];
							var seg_25_result = chartData[length - 1][chart_tree_metrics_seg25[i]];

							var hgb_result = chartData[length - 1][chart_tree_metrics_hgb[i]];

							if (hgb_result != null) {

								if (hgb_result == 1) {
									if (display_result < seg_25_result) {
										traffic_light.innerHTML = "<div class='circlegreen'></div><div class='circle'></div><div class = 'circle'></div>";
									} else if (display_result < seg_50_result) {
										traffic_light.innerHTML = "<div class='circlelightgreen'></div><div class='circle'></div><div class = 'circle'></div>";
										color3 = "#eeeeee";
									} else if (display_result < seg_75_result) {
										traffic_light.innerHTML = "<div class='circle'></div><div class='circleorange'></div><div class = 'circle'></div>";
									} else {
										traffic_light.innerHTML = "<div class='circle'></div><div class='circle'></div><div class = 'circlered'></div>";
									}
								} else {
									if (display_result > seg_75_result) {
										traffic_light.innerHTML = "<div class='circlegreen'></div><div class='circle'></div><div class = 'circle'></div>";

									} else if (display_result > seg_50_result) {
										traffic_light.innerHTML = "<div class='circlelightgreen'></div><div class='circle'></div><div class = 'circle'></div>";

									} else if (display_result > seg_25_result) {
										traffic_light.innerHTML = "<div class='circle'></div><div class='circleorange'></div><div class = 'circle'></div>";

									} else {
										traffic_light.innerHTML = "<div class='circle'></div><div class='circle'></div><div class = 'circlered'></div>";
									}
								}
							}

						}

					}
					i++;
				}

				self.refreshActions();
				$('.donut').peity('donut');
			}, function(http) {
				BlkLab.Security.handle(http, true);
			});
		}
	},

	render: function(params) {
		var self = this;
		var view = new BlkLab.App.IndividualSimulationView();

		view.model = {
			data: {
				companies: BlkLab.Filters.companies,
				segments: BlkLab.Filters.segments
			}
		};
		view.render('#content');
		var x = document.getElementById("peerMenu");
		       x.style.display = 'none';
		var company = BlkLab.Storage.get('company');
		var segment = BlkLab.Storage.get('segment');
		//////alert(segment);
		//console.log(company);

		if (company) {
			BlkLab.App.Company = company;
		}

		if (segment) {
			BlkLab.App.Segment = segment;
		}



		_$('#company-list').value = company;
		_$('#segment-list').value = segment;
		this.actions.filterSegment();
		//this.actions.loadSimulation();
		this.actions.resultsDiv();


		self.refreshActions();
	}
});


BlkLab.App.Router.routes({
	'/individual': {
		controller: BlkLab.App.IndividualController
	},

	'/individual/detailed-metrics': {
		controller: BlkLab.App.IndividualDetailedMetricsController
	},

	'/individual/outlook': {
		controller: BlkLab.App.IndividualOutlookController
	},

	'/individual/simulation': {
		controller: BlkLab.App.IndividualSimulationController
	}
});
