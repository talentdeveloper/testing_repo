BlkLab.App.AdminHomeView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/index.hbs']
});

BlkLab.App.AdminHomeController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var view = new BlkLab.App.AdminHomeView();
        view.render('#content');
        this.refreshActions();
    }
});

BlkLab.App.AdminPerspectivesView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/perspectives.hbs']
});

BlkLab.App.AdminPerspectivesController = BlkLab.Controller.extend({
    files: [],

    actions:{
        save: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form');
            var content = _$('.editor').first().innerHTML;
            payload.content = content;
            BlkLab.post({
                url: '/api/perspectives',
                data: JSON.stringify(payload)
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                location.reload(0);
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        },

        remove: function(){
            BlkLab.del({
                url: '/api/perspectives/' + _$(this).data('id')
            }).then(function(http){
                location.reload(0);
            }, function(http){});
        },

        loadFiles: function(ev){
            var self = BlkLab.App.AdminPerspectivesController;
            var files = Object.create(this.files);
            var i = 0;
            var len = this.files.length;
            var next = function(){
                var f = files[i];
                var fr = new FileReader;

                var name = f.name;
                var fn = name.split('.');
                var ext = fn.pop();

                fr.onload = function() {
                    var img = new Image;
                    img.onload = function() {
                        var w = img.width;
                        var h = img.height;
                        var orientation = w > h ? 'landscape' : 'portrait';
                        BlkLab.Uploader.add_to_queue(f, function(e){
                            _$('#title_image').value = name;
                        });

                        BlkLab.Uploader.start();
                        /*var model = BlkLab.App.MediaModel;
                        model.set('width', w);
                        model.set('height', h);
                        model.set('orientation', orientation);
                        model.set('filename', name);
                        model.set('basename', fn);
                        model.set('extension', ext);
                        model.set('type', 'image');
                        model.set('created', new Date());
                        model.set('date', new Date());*/
                    };
                    img.src = fr.result;

                    i++;
                    if(i < len){
                        next();
                    }else{
                        //submit.disabled = false;
                    }
                };
                self.files.push(f);
                fr.readAsDataURL(f);
            };
            next();
        },

        updateForm: function(){
            _$('#text-content').value = this.innerHTML;
        }
    },

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AdminPerspectivesView();
        BlkLab.get({
            url: '/api/perspectives?all=true'
        }).then(function(http){
            var results = JSON.parse(http.response);
            view.model = {
                data: {
                    data:results,
                    segments: BlkLab.Filters.segments,
                    screens: BlkLab.Filters.screens,
                    companies: BlkLab.Filters.companies
                }
            };
            view.render('#content');
            self.refreshActions();
            var editor = new MediumEditor('.editor', {
                placeholder: {
                    text: 'Type your text',
                    hideOnClick: true
                },
                anchor: {
                    placeholderText: 'Type a link',
                    customClassOption: 'btn',
                    customClassOptionText: 'Create Button'
                },
                paste: {
                    cleanPastedHTML: true,
                    cleanAttrs: ['style', 'dir'],
                    cleanTags: ['label', 'meta']
                },
                anchorPreview: {
                    hideDelay: 300
                },
                extensions: {
                    'imageDragging': {}
                }
            });

            var e = _$('#editor');

            editor.on(e, 'dragenter', function(ev){
                ev.preventDefault();
                console.log('enter');
                console.log(ev);
                return false;
            });

            editor.on(e, 'dragover', function(ev){
                ev.preventDefault();
                console.log('over');
                console.log(ev);
                return false;
            });

            editor.on(e, 'drop', function(ev){
                ev.preventDefault();
                ev.stopPropagation();

                var self = BlkLab.App.AdminPerspectivesController;
                var files = Object.create(ev.dataTransfer.files);
                var i = 0;
                var len = ev.dataTransfer.files.length;
                var next = function(){
                    var f = files[i];
                    var fr = new FileReader;

                    var name = f.name;
                    var fn = name.split('.');
                    var ext = fn.pop();

                    fr.onload = function() {
                        var img = new Image;
                        img.onload = function() {
                            var w = img.width;
                            var h = img.height;
                            var orientation = w > h ? 'landscape' : 'portrait';
                            //console.log(MediumEditor.selection)
                            BlkLab.Uploader.add_to_queue(f, function(e){
                                document.execCommand("insertImage", false, "/assets/images/" + name);
                            });

                            BlkLab.Uploader.start();
                            /*var model = BlkLab.App.MediaModel;
                            model.set('width', w);
                            model.set('height', h);
                            model.set('orientation', orientation);
                            model.set('filename', name);
                            model.set('basename', fn);
                            model.set('extension', ext);
                            model.set('type', 'image');
                            model.set('created', new Date());
                            model.set('date', new Date());*/
                        };
                        img.src = fr.result;

                        i++;
                        if(i < len){
                            next();
                        }else{
                            //submit.disabled = false;
                        }
                    };
                    //self.files.push(f);
                    fr.readAsDataURL(f);
                };
                next();


                return false;
            });

        });
    }
});

BlkLab.App.AdminEditPerspectiveView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/edit_perspective.hbs']
});

BlkLab.App.AdminEditPerspectivesController = BlkLab.Controller.extend({
    actions:{
        save: function(e){
            e.preventDefault();
            var payload = BlkLab.Form.collect('form');
            var content = _$('.editor').first().innerHTML;
            payload.content = content;
            BlkLab.put({
                url: '/api/perspectives/' + payload.id,
                data: JSON.stringify(payload)
            }).then(function(http){
                var resp = JSON.parse(http.responseText);
                location.reload(0);
            }, function(http){
                var resp = JSON.parse(http.responseText);
                _$('#error').innerHTML = resp.msg;
            });
            return false;
        },

        loadFiles: function(ev){
            var self = BlkLab.App.AdminPerspectivesController;
            var files = Object.create(this.files);
            var i = 0;
            var len = this.files.length;
            var next = function(){
                var f = files[i];
                var fr = new FileReader;

                var name = f.name;
                var fn = name.split('.');
                var ext = fn.pop();

                fr.onload = function() {
                    var img = new Image;
                    img.onload = function() {
                        var w = img.width;
                        var h = img.height;
                        var orientation = w > h ? 'landscape' : 'portrait';
                        BlkLab.Uploader.add_to_queue(f, function(e){
                            _$('#title_image').value = name;
                        });

                        BlkLab.Uploader.start();
                        /*var model = BlkLab.App.MediaModel;
                        model.set('width', w);
                        model.set('height', h);
                        model.set('orientation', orientation);
                        model.set('filename', name);
                        model.set('basename', fn);
                        model.set('extension', ext);
                        model.set('type', 'image');
                        model.set('created', new Date());
                        model.set('date', new Date());*/
                    };
                    img.src = fr.result;

                    i++;
                    if(i < len){
                        next();
                    }else{
                        //submit.disabled = false;
                    }
                };
                self.files.push(f);
                fr.readAsDataURL(f);
            };
            next();
        }
    },

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AdminEditPerspectiveView();
        BlkLab.get({
            url: '/api/perspectives/' + params.id
        }).then(function(http){
            var results = JSON.parse(http.response);
            view.model = {data: results};
            view.render('#content');
            self.refreshActions();

            var editor = new MediumEditor('.editor', {
                placeholder: {
                    text: 'Type your text',
                    hideOnClick: true
                },
                anchor: {
                    placeholderText: 'Type a link',
                    customClassOption: 'btn',
                    customClassOptionText: 'Create Button'
                },
                paste: {
                    cleanPastedHTML: true,
                    cleanAttrs: ['style', 'dir'],
                    cleanTags: ['label', 'meta']
                },
                anchorPreview: {
                    hideDelay: 300
                },
                extensions: {
                    'imageDragging': {}
                }
            });

            var e = _$('#editor');

            editor.on(e, 'dragenter', function(ev){
                ev.preventDefault();
                console.log('enter');
                console.log(ev);
                return false;
            });

            editor.on(e, 'dragover', function(ev){
                ev.preventDefault();
                console.log('over');
                console.log(ev);
                return false;
            });

            editor.on(e, 'drop', function(ev){
                ev.preventDefault();
                ev.stopPropagation();

                var self = BlkLab.App.AdminPerspectivesController;
                var files = Object.create(ev.dataTransfer.files);
                var i = 0;
                var len = ev.dataTransfer.files.length;
                var next = function(){
                    var f = files[i];
                    var fr = new FileReader;

                    var name = f.name;
                    var fn = name.split('.');
                    var ext = fn.pop();

                    fr.onload = function() {
                        var img = new Image;
                        img.onload = function() {
                            var w = img.width;
                            var h = img.height;
                            var orientation = w > h ? 'landscape' : 'portrait';
                            //console.log(MediumEditor.selection)
                            BlkLab.Uploader.add_to_queue(f, function(e){
                                document.execCommand("insertImage", false, "/assets/images/" + name);
                            });

                            BlkLab.Uploader.start();
                            /*var model = BlkLab.App.MediaModel;
                            model.set('width', w);
                            model.set('height', h);
                            model.set('orientation', orientation);
                            model.set('filename', name);
                            model.set('basename', fn);
                            model.set('extension', ext);
                            model.set('type', 'image');
                            model.set('created', new Date());
                            model.set('date', new Date());*/
                        };
                        img.src = fr.result;

                        i++;
                        if(i < len){
                            next();
                        }else{
                            //submit.disabled = false;
                        }
                    };
                    //self.files.push(f);
                    fr.readAsDataURL(f);
                };
                next();


                return false;
            });

        });
    }
});

BlkLab.App.AdminUsersView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/users.hbs']
});

BlkLab.App.AdminUsersController = BlkLab.Controller.extend({
    actions:{},

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AdminUsersView();
        BlkLab.get({
            url: '/api/users'
        }).then(function(http){
            var results = JSON.parse(http.response);
            view.model = {data: {data:results}};
            view.render('#content');
            self.refreshActions();
        });
    }
});

BlkLab.App.AdminSecurityView = BlkLab.View.extend({
    template: this.views['./app/js/views/admin/security.hbs']
});

BlkLab.App.AdminSecurityController = BlkLab.Controller.extend({
    actions:{
        changeLevel: function(){
            console.log(this.value);
            BlkLab.put({
                url: '/api/admin/security/' + _$(this).data('id'),
                data: JSON.stringify({level: this.value})
            }).then(function(http){
                alert('Saved');
            });
        }
    },

    render: function(params){
        var self = this;
        var view = new BlkLab.App.AdminSecurityView();
        BlkLab.get({
            url: '/api/admin/security'
        }).then(function(http){
            var results = JSON.parse(http.response);
            view.model = {data: {data:results}};
            view.render('#content');
            self.refreshActions();
        });
    }
});

BlkLab.App.Router.routes({
    '/admin': {
        controller:BlkLab.App.AdminHomeController
    },

    '/admin/perspectives': {
        controller:BlkLab.App.AdminPerspectivesController
    },

    '/admin/perspectives/:id': {
        controller:BlkLab.App.AdminEditPerspectivesController
    },

    '/admin/users': {
        controller:BlkLab.App.AdminUsersController
    },

    '/admin/security': {
        controller:BlkLab.App.AdminSecurityController
    }
});
