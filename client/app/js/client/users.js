BlkLab.App.LoginView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/login.hbs']
});

BlkLab.App.LoginModalView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/login-modal.hbs']
});

BlkLab.App.PremiumModalView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/premium-modal.hbs']
});

BlkLab.App.CreateView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/create.hbs']
});

BlkLab.App.ResetView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/reset.hbs']
});

BlkLab.App.SendResetView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/send-reset.hbs']
});

BlkLab.App.AccountView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/account.hbs']
});

BlkLab.App.PremiumAccountView = BlkLab.View.extend({
    template: this.views['./app/js/views/users/premium-account.hbs']
});

BlkLab.App.LoginController = BlkLab.Controller.extend({
    actions:{
        login: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users/auth/login',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                 if(resp.token){
                    console.log('test');
                    BlkLab.Storage.set('access-token', resp.token);
                    location.href = "/";
                }else{
                    _$('#error').innerHTML = resp.msg || 'Error logging in.';
                }
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.LoginView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.LoginModalController = BlkLab.Controller.extend({
    company: '',

    actions:{
        close: function(){
            BlkLab.Storage.set('segment', 8);
            BlkLab.Storage.set('company', 1951350);
            _$('#modal').destroy();
            _$('#modal-background').destroy();
            console.log(BlkLab.Storage.get('company'));
            setTimeout(function(){
                location.reload(0);
            }, 1000);
        },

        login: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users/auth/login',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
               
                if(resp.token){
                    BlkLab.Storage.set('access-token', resp.token);
                    BlkLab.Storage.set('segment', BlkLab.App.LoginModalController.segment);
                    BlkLab.Storage.set('company', BlkLab.App.LoginModalController.company);
                    setTimeout(function(){
                        location.reload(0);
                    }, 1000);
                }else{
                    _$('#error').innerHTML = resp.msg || 'Error logging in.';
                }
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.LoginModalView();
        var modal = view.render();
        _$('#content').innerHTML += modal;
        this.refreshActions();
    }
});

BlkLab.App.PremiumModalController = BlkLab.Controller.extend({
    actions:{
        close: function(){
            BlkLab.Storage.set('segment', 8);
            BlkLab.Storage.set('company', 1951350);
            _$('#modal').destroy();
            _$('#modal-background').destroy();
            console.log(BlkLab.Storage.get('company'));
            setTimeout(function(){
                location.reload(0);
            }, 1000);
        },

        subscribe: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users/auth/premium',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);

            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.PremiumModalView();
        var modal = view.render();
        _$('#content').innerHTML += modal;

        BlkLab.get({
            url: '/api/users/auth/token'
        }).then(function(http){
            var res = JSON.parse(http.responseText);
            var token = res.token;

            var form = document.querySelector('#cardForm');
            var authorization = token;

            braintree.client.create({
              authorization: authorization
            }, function(err, clientInstance) {
              if (err) {
                console.error(err);
                return;
              }
              createHostedFields(clientInstance);
            });

            function createHostedFields(clientInstance) {
              braintree.hostedFields.create({
                client: clientInstance,
                styles: {
                  'input': {
                    'font-size': '16px',
                    'font-family': 'courier, monospace',
                    'font-weight': 'lighter',
                    'color': '#ccc'
                  },
                  ':focus': {
                    'color': 'black'
                  },
                  '.valid': {
                    'color': '#8bdda8'
                  }
                },
                fields: {
                  number: {
                    selector: '#card-number',
                    placeholder: '4111 1111 1111 1111'
                  },
                  cvv: {
                    selector: '#cvv',
                    placeholder: '123'
                  },
                  expirationDate: {
                    selector: '#expiration-date',
                    placeholder: 'MM/YYYY'
                  },
                  postalCode: {
                    selector: '#postal-code',
                    placeholder: '11111'
                  }
                }
              }, function (err, hostedFieldsInstance) {
                var teardown = function (event) {
                  event.preventDefault();
                    hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
                        if (tokenizeErr) {
                        // Handle error in Hosted Fields tokenization
                            return;
                        }

                        BlkLab.post({
                            url: '/api/users/auth/premium',
                            data: JSON.stringify({
                                payment_method_nonce: payload.nonce
                            })
                        }).then(function(http){
                            var resp = JSON.parse(http.responseText);
                            if(resp.token){
                                BlkLab.Storage.set('access-token', resp.token);
                                BlkLab.Storage.set('segment', BlkLab.App.PremiumModalController.segment);
                                BlkLab.Storage.set('company', BlkLab.App.PremiumModalController.company);
                                setTimeout(function(){
                                    location.reload(0);
                                }, 1000);
                            }
                        });

                        hostedFieldsInstance.teardown(function () {
                             createHostedFields(clientInstance);
                            form.removeEventListener('submit', teardown, false);
                        });
                    });
                };

                form.addEventListener('submit', teardown, false);
              });
            }
         });
        this.refreshActions();
    }
});

BlkLab.App.CreateController = BlkLab.Controller.extend({
    actions:{
        createAccount: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                if(resp.token){
                    BlkLab.Storage.set('access-token', resp.token);
                    location.href = "/";
                }else{
                    _$('#error').innerHTML = resp.msg || 'Error logging in.';
                }
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.CreateView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.ResetController = BlkLab.Controller.extend({
    actions:{
        resetAccount: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            /*BlkLab.post({
                url: '/api/users',
                data: payload
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                if(resp.token){
                    BlkLab.Storage.set('access-token', resp.token);
                    location.href = "/";
                }else{
                    _$('#error').innerHTML = resp.msg || 'Error logging in.';
                }
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });*/
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.ResetView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.SendResetController = BlkLab.Controller.extend({
    actions:{
        resetAccount: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form', true);
            BlkLab.post({
                url: '/api/users/send-reset',
                data: payload
            }).then(function(http){
                location.href = "/login";
            }, function(http){});
            return false;
        }
    },

    render: function(params){
        var view = new BlkLab.App.SendResetView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.AccountController = BlkLab.Controller.extend({
    actions:{
        createSubscription: function(){
            BlkLab.App.PremiumModalController.render();
        },

        cancelSubscription: function(){
            BlkLab.post({
                url: '/api/users/auth/cancel'
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                if(resp.token){
                    BlkLab.Storage.set('access-token', resp.token);
                    location.reload(0);
                }
            }, function(http){});
        }
    },

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AccountView();
        BlkLab.get({
            url: '/api/users/profile'
        }).then(function(http){
            var resp = JSON.parse(http.responseText);
            if(resp.level == 3){
                view = new BlkLab.App.PremiumAccountView();
            }
            view.model = {data: resp};
            view.render('#content');
            self.refreshActions();
        }, function(http){});
    }
});

BlkLab.App.LogoutController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        BlkLab.Storage.remove('type');
        BlkLab.Storage.remove('access-token');
        BlkLab.App.Segment = 8;
        BlkLab.Storage.set('segment', 8);
        BlkLab.App.Company = 1951350;
        BlkLab.Storage.set('company', 1951350);
        location.href = "/users/login";
    }
});

BlkLab.App.Router.routes({
    '/users/login': {
        controller: BlkLab.App.LoginController
    },

    '/users/logout': {
        controller: BlkLab.App.LogoutController
    },

    '/users/signup': {
        controller: BlkLab.App.CreateController
    },

    '/users/send-reset': {
        controller: BlkLab.App.SendResetController
    },

    '/users/reset': {
        controller: BlkLab.App.ResetController
    },

    '/users/account': {
        controller: BlkLab.App.AccountController
    }
});
