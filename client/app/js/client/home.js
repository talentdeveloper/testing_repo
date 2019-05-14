BlkLab.App.Company = 1951350;
BlkLab.App.Segment = 8;
BlkLab.App.Actuals = true;

BlkLab.App.HomeView = BlkLab.View.extend({
    template: this.views['./app/js/views/home.hbs']
});

BlkLab.App.HomeController = BlkLab.Controller.extend({
    actions:{
        changeCompany: function(){
            BlkLab.App.Company = this.value;
            BlkLab.Storage.set('company', this.value);
        },

        changeSegment: function(){
            BlkLab.App.Segment = this.value;
            BlkLab.Storage.set('segment', this.value);
        },

    },



    render: function(params){
        var view = new BlkLab.App.HomeView();
		
        if(BlkLab.App.Segment== null){ 
			BlkLab.App.Segment = 8;
        	BlkLab.Storage.set('segment', 8);
		}
		
		if(BlkLab.App.Company == null){
           BlkLab.App.Company = 1951350;
     	   BlkLab.Storage.set('company', 1951350);
		}
		
		if(BlkLab.App.Actuals == null){
		BlkLab.App.Actuals = true;
		}

        var segment = BlkLab.Storage.get('segment');
        var company = BlkLab.Storage.get('company');
	
        if(segment){
            BlkLab.App.Segment = segment;
        }

        if(company){
            BlkLab.App.Company = company;
        }

        view.model = {
            data: {
                companies: BlkLab.Filters.companies,
                segments: BlkLab.Filters.segments,
				indSegments: BlkLab.Filters.indSegments
            }	
        }
		view.render('#content');

        _$('#company-list').value = company;
        _$('#segment-list').value = segment;

        this.refreshActions();
    }
});

BlkLab.App.Router.routes({
    '/': {
        controller:    BlkLab.App.HomeController
    }
});
