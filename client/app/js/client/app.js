(function() {
    var content = _$('#content');

    _$(window).on('load', function(){});
    _$(window).on('resize', function(){});
    var last;

    function refresh(){
        var loc = location.pathname;
		
        var base = loc.split('/')[1];
        var cur = _$(base + '-main');
        if(cur){
            cur.add_class('selected');
        }

        if(last){
            last.remove_class('selected');
        }

        last = cur;


        var token = BlkLab.Storage.get('access-token');
        var accountOptions = _$('#account-options');
        if(accountOptions){
            if(token){
                accountOptions.innerHTML = '<li><a href="/users/account">My Account</a></li><li> | </li><li><a href="/users/logout">Logout</a></li>';
            }else{
                accountOptions.innerHTML = '<li><a href="/users/login">My Account</a></li><li> |  </li><li><a href="/users/login">Login</a></li>';
            }
        }
    };



    BlkLab.Security.handle = function(http, premium){
        var type = BlkLab.Storage.get('type');
        var token = BlkLab.Storage.get('access-token');
		
		
		//BlkLab.Storage.remove('type');
        //BlkLab.Storage.remove('access-token');
        //location.href = "/users/login";
        var seg = BlkLab.App.Segment;
        var comp = BlkLab.App.Company;



        BlkLab.App.Segment = 8;
        BlkLab.Storage.set('segment', 8);
        BlkLab.App.Company = 1951350;
        BlkLab.Storage.set('company', 1951350);

        if(!_$('#modal')){
            if(!premium || !token){
		        
                BlkLab.App.LoginModalController.segment = seg;
                BlkLab.App.LoginModalController.company = comp;
                BlkLab.App.LoginModalController.render();
            }else{
                BlkLab.App.PremiumModalController.segment = seg;
                BlkLab.App.PremiumModalController.company = comp;
                BlkLab.App.PremiumModalController.render();
            }
        }
    }

    BlkLab.Filters = {};

    BlkLab.get({
        url: '/api/filters'
    }).then(function(http){
        BlkLab.History.start({
            callback: function(){
                refresh();
            }
        });

        BlkLab.App.Segment = BlkLab.Storage.get('segment');
        BlkLab.App.Company = BlkLab.Storage.get('company');

        var results = JSON.parse(http.response);
        BlkLab.Filters = results;

        BlkLab.App.run();
        refresh();
    });

})();
