BlkLab.App.PerspectivesView = BlkLab.View.extend({
    template: this.views['./app/js/views/perspectives/index.hbs']
});

BlkLab.App.PerspectivesController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.PerspectivesView();
        BlkLab.get({
            url: '/api/perspectives?all=true'
        }).then(function(http){
                var results = JSON.parse(http.response);
                results.forEach(function(res){
                    var date = Date.parse(res.timestamp);
                    var d = new Date(date);

                    var day = d.getDate();
                    var monthIndex = d.getMonth();
                    var year = d.getFullYear();
                    res.timestamp = monthIndex + '.' + day + '.' + year;

                    res["descrip"] = res.content.split('</p>')[0] + '</p>';

                });
                view.model = {data:{
                    data: results
                }}
                view.render('#content');
                self.refreshActions();
        });
    }
});

BlkLab.App.PerspectivesIndustryController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.PerspectivesView();
        BlkLab.get({
            url: '/api/perspectives?segment=' + BlkLab.App.Segment
        }).then(function(http){
                var results = JSON.parse(http.response);
                results.forEach(function(res){
                    var date = Date.parse(res.timestamp);
                    var d = new Date(date);

                    var day = d.getDate();
                    var monthIndex = d.getMonth();
                    var year = d.getFullYear();
                    res.timestamp = monthIndex + '.' + day + '.' + year;
                });
                view.model = {data:{
                    data: results
                }}
                view.render('#content');
                self.refreshActions();
        });
    }
});

BlkLab.App.PerspectivesIndividualController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.PerspectivesView();
        BlkLab.get({
            url: '/api/perspectives?company=' + BlkLab.App.Company + '&metric=' + BlkLab.App.Metric
        }).then(function(http){
                var results = JSON.parse(http.response);
                results.forEach(function(res){
                    var date = Date.parse(res.timestamp);
                    var d = new Date(date);

                    var day = d.getDate();
                    var monthIndex = d.getMonth();
                    var year = d.getFullYear();
                    res.timestamp = monthIndex + '.' + day + '.' + year;
                });
                view.model = {data:{
                    data: results
                }}
                view.render('#content');
                self.refreshActions();
        });
    }
});

BlkLab.App.PerspectivesDetailView = BlkLab.View.extend({
    template: this.views['./app/js/views/perspectives/detail.hbs']
});

BlkLab.App.PerspectivesDetailController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.PerspectivesDetailView();
        BlkLab.get({
            url: '/api/perspectives/' + params.id
        }).then(function(http){
                var results = JSON.parse(http.response);
                var date = Date.parse(results.timestamp);
                var d = new Date(date);

                var day = d.getDate();
                var monthIndex = d.getMonth();
                var year = d.getFullYear();
                results.timestamp = monthIndex + '.' + day + '.' + year;
                view.model = {data:results};
                view.render('#content');
                var el = _$('#content').querySelectorAll('img:not(.no-lightense),.lightense');
                Lightense(el);
                self.refreshActions();
        });
    }
});

BlkLab.App.AboutView = BlkLab.View.extend({
    template: this.views['./app/js/views/about.hbs']
});

BlkLab.App.AboutController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var view = new BlkLab.App.AboutView();
        view.render('#content');
        this.refreshActions();
    }
});


BlkLab.App.Router.routes({
    '/perspectives': {
        controller:    BlkLab.App.PerspectivesController
    },

    '/perspectives/industry': {
        controller:    BlkLab.App.PerspectivesIndustryController
    },

    '/perspectives/individual': {
        controller:    BlkLab.App.PerspectivesIndividualController
    },

    '/perspectives/:id': {
        controller:    BlkLab.App.PerspectivesDetailController
    },

    '/about': {
        controller:    BlkLab.App.AboutController
    }
});
