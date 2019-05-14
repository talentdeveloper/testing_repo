(function(window, document) {
    'use strict';

    //XHR object
    window.XHR = function() {
        this.http = new XMLHttpRequest();
        this.callback = null;
        this.method = 'GET';
        this.querystring = null;
        this.content_type = "application/x-www-form-urlencoded";
        this.upload = null;

        this.listeners = function(listeners) {
            var lxhr = Coffea.find(this.http);
            for (var l in listeners) {
                if (l == 'progress') {
                    Coffea.find(this.upload).ev(l, listeners[l]);
                } else {
                    lxhr.ev(l, listeners[l]);
                }
            }
        };

        this.headers = function(fields) {
            for (var key in fields) {
                this.http.setRequestHeader(key, fields[key]);
            }
            if (this.content_type !== "") {
                this.http.setRequestHeader("Content-Type", this.content_type);
            }
        };
    };

    //Call the XHR object and handle the response
    XHR.prototype.call = function(url) {
        var xhr = this;
        var token = BlkLab.Storage.get('access-token');
        return new Promise(function(resolve, reject) {
            xhr.http.open(xhr.method, url);
            if(xhr.content_type !== "") {
                xhr.http.setRequestHeader("Content-Type", xhr.content_type);
            }

            if(token){
                xhr.http.setRequestHeader("x-access-token", token);
            }
            xhr.http.onload = function() {
                if (xhr.http.status === 200) {
                    resolve(xhr.http);
                }else{
                    reject(xhr.http);
                }
            };

            xhr.http.onerror = function() {
                reject(new Error("Network Error"));
            };

            xhr.http.send(xhr.querystring || null);
        });
    };


    BlkLab.debounce = function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    BlkLab.poll = function poll(fn, callback, errback, timeout, interval) {
        var endTime = Number(new Date()) + (timeout || 2000);
        interval = interval || 100;

        (function p() {
                // If the condition is met, we're done!
                if(fn()) {
                    callback();
                }
                // If the condition isn't met but the timeout hasn't elapsed, go again
                else if (Number(new Date()) < endTime) {
                    setTimeout(p, interval);
                }
                // Didn't match and too much time, reject!
                else {
                    errback(new Error('timed out for ' + fn + ': ' + arguments));
                }
        })();
    };

    BlkLab.once = function once(fn, context) {
        var result;

        return function() {
            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }

            return result;
        };
    };

    //Convenience methods for calling an AJAX GET, POST, PUT and DELETE requests
    //TODO: abstract internal function to generalize the calls
    BlkLab.get = function(params) {
        //url, data, success, err
        var success = params.success;
        var err = params.fail;
        var req = new XHR();
        if(params.dataType){
            req.content_type = params.dataType;
        }else{
            req.content_type = 'application/json';
        }
        req.method = 'GET';
        req.querystring = params.data;
        if(success || err){
            return req.call(params.url).then(success, err);
        }else{
            return req.call(params.url);
        }
    };

    BlkLab.post = function(params) {
        //url, data, success, err
        var success = params.success;
        var err = params.fail;
        var req = new XHR();
        if(params.dataType){
            req.content_type = params.dataType;
        }else{
            req.content_type = 'application/json';
        }
        req.method = 'POST';
        req.querystring = params.data;
        if(success || err){
            return req.call(params.url).then(success, err);
        }else{
            return req.call(params.url);
        }
    };

    BlkLab.put = function(params) {
        var success = params.success;
        var err = params.fail;
        var req = new XHR();
        if(params.dataType){
            req.content_type = params.dataType;
        }else{
            req.content_type = 'application/json';
        }
        req.method = 'PUT';
        req.querystring = params.data;
        if(success || err){
            return req.call(params.url).then(success, err);
        }else{
            return req.call(params.url);
        }
    };

    BlkLab.del = function(params) {
        var success = params.success || function(){};
        var err = params.fail || function(){};
        var req = new XHR();
        req.method = 'DELETE';
        if(success || err){
            return req.call(params.url).then(success, err);
        }else{
            return req.call(params.url);
        }
    };

    BlkLab.History = {
        type: 'push',
        base: '',
        callback: function(){},

        start: function(params) {
            this.base = location.protocol + '//' + location.hostname;
            if(params && params.callback){
                this.callback = params.callback;
                this.callback.call(this);
            }
            if (params && params.type == 'hash') {
                this.type = "hash";
            } else {
                this.type = "push";
                var pushState = window.history.pushState;
                window.history.pushState = function(state) {
                    var ret = pushState.apply(window.history, arguments);
                    if (typeof window.history.onpushstate == "function") {
                        window.history.onpushstate({
                            state: state
                        });
                    }
                    return ret;
                };
            }
            document.documentElement.addEventListener("click", this.intercept, false);
        },

        intercept: function(e) {
            var target = Evnt.target(e);
            if((target.href && target.href.indexOf(location.host.replace('www.', '')) != -1) && (target.tagName == 'A' || target.getAttribute('data-href')) && target.target != '_blank' && !target.getAttribute('data-target')) {
                e.stopPropagation();
                e.preventDefault();
                var tmp = target.href ? target.href : target.getAttribute('data-href');
                var href = tmp.replace(BlkLab.History.base, '');
                var cur = location.href.replace(BlkLab.History.base, '');
                if(cur != href){
                    if (BlkLab.History.type == 'push') {
                        window.history.pushState("", "", href);
                    } else if (BlkLab.History.type == 'hash') {
                        location.hash = href;
                    }
                }
                if(BlkLab.History.callback){
                    BlkLab.History.callback.call(this, href);
                }
                return false;
            }else if(target.getAttribute('data-href') && target.getAttribute != 'new'){
                location.href = target.getAttribute('data-href');
            }
        }
    }

    BlkLab.Storage = {
        has_support: function(){
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                return false;
            }
        },

        get: function(key){
            try{
                return localStorage.getItem(key);
            }catch(e){
                return null;
            }
        },

        set: function(key, val){
            try{
                localStorage.setItem(key, val);
            }catch(e){
                return null;
            }
        },

        remove: function(key){
            try{
                return localStorage.removeItem(key);
            }catch(e){
                return null;
            }
        }
    }

    BlkLab.Form = {
        collect: function(id, serialize){
            var form = _$(id);
            var elements = form.elements;
            var data = {};
            var len = form.elements.length;
            var key;
            for(var i=0;i<len;i++){
                key = elements[i].name;
                if(key){
                    data[key] = elements[i].value;
                }
            }
            return serialize ? JSON.stringify(data) :  data;
        }
    }

    BlkLab.Search = function(array, predicate){
        var matchingIndices = [];

        for(var j = 0; j < array.length; j++)
        {
            if(predicate(array[j]))
               matchingIndices.push(array[j]);
        }

        return matchingIndices;
    }

    BlkLab.Security = {
        secured: [],
        handle: function(http){}
    }

    BlkLab.Messages = {};

    BlkLab.Message = function(msg, type){
        var el = BlkLab.create('aside', {id: 'message', 'class': type});
        el.innerHTML = msg;
        el.add_class('active');
        document.documentElement.append(el);
        var timer = setTimeout(function(){
            el.remove_class('active');
            setTimeout(function(){
                el.destroy();
            },500);
        }, 5000);
    }

    //Base Event
    function E() {}
    //Expose Event
    window.Evnt = new E();

    //Return Event target
    Evnt.target = function(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    };

    BlkLab.imageProcessor = '/api/admin/media';

    XMLHttpRequestUpload.prototype.file = null;

    BlkLab.Frontend = {};

    BlkLab.Frontend.Uploader = {
        bytes_uploaded: 0,
        bytes_total: 0,
        previous_bytes_loaded: 0,
        max_file_size: 1048576,
        timer: 0,
        total_file_size: '',
        uploading: false,
        queue: {},
        cur: 1,
        total:0,
        cur_total:0,
        callback: null,
        progress_bar: '',
        dialog:null,
        running: [],
        table:null,
        header:null,
        close:null,
        urls: {
            'img': BlkLab.imageProcessor + '/images',
            'video': BlkLab.imageProcessor + '/videos',
            'pdf': BlkLab.imageProcessor + '/documents',
            'doc': BlkLab.imageProcessor + '/documents',
            'ppt': BlkLab.imageProcessor + '/documents',
        },

        check_type: function(file) {
            var file_type;

            var imgfilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
            if (imgfilter.test(file.type)) {
                return BlkLab.Frontend.Uploader.urls['img'];
            }

            var videofilter = /^(video\/mp4|video\/quicktime|video\/x-msvideo|video\/x-ms-wmv)$/i;
            if (videofilter.test(file.type)) {
                return BlkLab.Frontend.Uploader.urls['video'];
            }

            if (file.type == 'application/pdf') {
                return BlkLab.Frontend.Uploader.urls['pdf'];
            }

            if (file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type == 'application/msword') {
                return BlkLab.Frontend.Uploader.urls['doc'];
            }

            if (file.type == 'application/vnd.ms-powerpoint' || file.type == 'application/mspowerpoint' || file.type == 'application/powerpoint' || file.type == 'application/x-mspowerpoint') {
                return BlkLab.Frontend.Uploader.urls['ppt'];
            }

            return false;
        },

        seconds_to_time: function (secs){
            var hr = Math.floor(secs / 3600);
            var min = Math.floor((secs - (hr * 3600))/60);
            var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

            if (hr < 10) {
                hr = "0" + hr;
            }
            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            if (hr) {
                hr = "00";
            }
            return hr + ':' + min + ':' + sec;
        },

        bytes_to_size: function(bytes){
            var sizes = ['Bytes', 'KB', 'MB', 'GB'];
            if (bytes == 0) return 'n/a';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
        },

        add_to_queue: function(file, meta){
            meta = meta ? meta : {};
            meta.uuid = BlkLab.Utils.generateUUID();
            meta.bytes_loaded = 0;
            meta.previous_bytes_loaded = 0;
            BlkLab.Frontend.Uploader.queue[file.name] = {file: file, meta:meta};
            BlkLab.Frontend.Uploader.cur_total++;
        },

        start: function(){
            BlkLab.Frontend.Uploader.total = BlkLab.Frontend.Uploader.cur_total

            var key;
            var row;
            var url;
            for(key in BlkLab.Frontend.Uploader.queue){
                var file = BlkLab.Frontend.Uploader.queue[key];
                if(BlkLab.Frontend.Uploader.running.indexOf(file.meta.name) == -1){
                    url = BlkLab.Frontend.Uploader.check_type(file.file);
                    if(url){
                        this.process(file, url);
                    }else{
                        delete BlkLab.Frontend.Uploader.queue[key];
                        BlkLab.Frontend.Uploader.cur_total--;
                        if(file.meta.callback)
                            file.meta.callback()
                    }
                }
            }
        },

        process: function(file, url){
            BlkLab.Frontend.Uploader.running.push(file.meta.name);

            var form_data = new FormData();
            form_data.append('files',file.file);

            var oReq = new XMLHttpRequest();
            var token = BlkLab.Storage.get('access-token');
            oReq.open('POST', url, true);
            if(token){
                oReq.setRequestHeader("x-access-token", token);
            }
            oReq.upload.file = file.meta;
            oReq.upload.onprogress = BlkLab.Frontend.Uploader.progress;
            oReq.addEventListener("load", BlkLab.Frontend.Uploader.load, false);
            oReq.addEventListener("error", BlkLab.Frontend.Uploader.error, false);
            oReq.addEventListener("abort", BlkLab.Frontend.Uploader.abort, false);
            oReq.send(form_data);

            BlkLab.Frontend.Uploader.timer = setInterval(BlkLab.Frontend.Uploader.update, 300);
        },

        update: function(){
            var key;
            for(key in BlkLab.Frontend.Uploader.queue){
                var file = BlkLab.Frontend.Uploader.queue[key].meta;
                var current_bytes = file.bytes_uploaded;
                file.previous_bytes_loaded = current_bytes;
            }
        },

        progress: function(e){
            var file = e.target.file;
            if(e.lengthComputable) {
                file.bytes_uploaded = e.loaded;
                file.bytes_total = e.total;
                var precent_complete = Math.round(e.loaded * 100 / e.total);
                var bytes_transfered = BlkLab.Frontend.Uploader.bytes_to_size(BlkLab.Frontend.Uploader.bytes_uploaded);
                if(file.progress_bar){
                    file.progress_bar.css({
                        width: (precent_complete).toString() + '%'
                    });

                    if (precent_complete == 100){
                        file.row.css({
                            background:'#000000'
                        });
                    }
                }
            } else {
                delete BlkLab.Frontend.Uploader.queue[file.name];
                delete BlkLab.Frontend.Uploader.running[file.name];
                if(file.callback)
                    file.callback();
            }
        },

        load : function (e) {
            delete BlkLab.Frontend.Uploader.queue[e.target.upload.file.name];
            delete BlkLab.Frontend.Uploader.running[e.target.upload.file.name];

            BlkLab.Frontend.Uploader.cur_total--;
            BlkLab.Frontend.Uploader.finish(e);
        },

        finish: function(e){
            var response = e.target.response;
            var hash = JSON.parse(response);


            if(BlkLab.Frontend.Uploader.cur_total == 0){
                clearInterval(BlkLab.Frontend.Uploader.timer);
            }

            this.uploading = false;

            if(e.target.upload.file.callback){
                if(hash.files){
                    e.target.upload.file.callback(e.target.upload.file, hash.files[0]);
                }else{
                    e.target.upload.file.callback(e.target.upload.file, hash);
                }
            }
        },

        error: function(e){
            clearInterval(BlkLab.Frontend.Uploader.timer);
        },

        abort: function(e){
            clearInterval(BlkLab.Frontend.Uploader.timer);
        }
    }

    XMLHttpRequestUpload.prototype.file = null;

    BlkLab.Uploader = {
        bytes_uploaded: 0,
        bytes_total: 0,
        previous_bytes_loaded: 0,
        max_file_size: 1048576,
        timer: 0,
        total_file_size: '',
        uploading: false,
        queue: {},
        cur: 1,
        total:0,
        cur_total:0,
        callback: null,
        progress_bar: '',
        dialog:null,
        running: [],
        table:null,
        header:null,
        close:null,
        urls: {
            'img': BlkLab.imageProcessor + '/images/upload',
            'video': BlkLab.imageProcessor + '/videos/upload',
            'pdf': BlkLab.imageProcessor + '/documents/upload',
            'doc': BlkLab.imageProcessor + '/documents/upload',
            'ppt': BlkLab.imageProcessor + '/documents/upload',
        },

        check_type: function(file) {
            var file_type;

            var imgfilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
            if (imgfilter.test(file.type)) {
                return BlkLab.Uploader.urls['img'];
            }

            var videofilter = /^(video\/mp4|video\/quicktime|video\/x-msvideo|video\/x-ms-wmv)$/i;
            if (videofilter.test(file.type)) {
                return BlkLab.Uploader.urls['video'];
            }

            if (file.type == 'application/pdf') {
                return BlkLab.Uploader.urls['pdf'];
            }

            if (file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type == 'application/msword') {
                return BlkLab.Uploader.urls['doc'];
            }

            if (file.type == 'application/vnd.ms-powerpoint' || file.type == 'application/mspowerpoint' || file.type == 'application/powerpoint' || file.type == 'application/x-mspowerpoint') {
                return BlkLab.Uploader.urls['ppt'];
            }

            return false;
        },

        seconds_to_time: function (secs){
            var hr = Math.floor(secs / 3600);
            var min = Math.floor((secs - (hr * 3600))/60);
            var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

            if (hr < 10) {
                hr = "0" + hr;
            }
            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            if (hr) {
                hr = "00";
            }
            return hr + ':' + min + ':' + sec;
        },

        bytes_to_size: function(bytes){
            var sizes = ['Bytes', 'KB', 'MB', 'GB'];
            if (bytes == 0) return 'n/a';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
        },

        add_to_queue: function(file, callback){
            BlkLab.Uploader.queue[file.name] = {file: file, meta:{uuid: BlkLab.Utils.generateUUID(), bytes_loaded:0, previous_bytes_loaded:0, name: file.name, callback:callback}};
            BlkLab.Uploader.cur_total++;
        },

        start: function(){
            BlkLab.Uploader.total = BlkLab.Uploader.cur_total
            if(!BlkLab.Uploader.table){
                BlkLab.Uploader.table = BlkLab.create('div', {'class':'table'});
                BlkLab.Uploader.header = BlkLab.create('h2', {'id':'activity_title'});
                BlkLab.Uploader.close = BlkLab.create('div', {'id':'close'});
                BlkLab.Uploader.close.innerHTML = 'X';
                BlkLab.Uploader.table.append(BlkLab.Uploader.header);
                BlkLab.Uploader.table.append(BlkLab.Uploader.close);
            }
            BlkLab.Uploader.close.hide();
            BlkLab.Uploader.header.innerHTML = 'Uploading ' + BlkLab.Uploader.total + ' of ' + BlkLab.Uploader.cur_total + ' Files';


            var key;
            var row;
            var url;
            for(key in BlkLab.Uploader.queue){
                var file = BlkLab.Uploader.queue[key];
                if(BlkLab.Uploader.running.indexOf(file.meta.name) == -1){
                    row = BlkLab.create('div', {'class':'row', id:file.meta.uuid});
                    row.innerHTML = '<div class="text">' + key + ' | ' + this.bytes_to_size(file.file.size) + '</div>';
                    BlkLab.Uploader.table.appendChild(row);
                    file.meta.row = row;
                    url = BlkLab.Uploader.check_type(file.file);
                    if(url){
                        this.process(file, url);
                    }else{
                        row.innerHTML += ' Failed!';
                        row.add_class('fail');
                        delete BlkLab.Uploader.queue[key];
                        BlkLab.Uploader.cur_total--;
                        console.log(BlkLab.Uploader.queue);
                        console.log(BlkLab.Uploader.cur_total);
                    }
                }
            }

            if(!this.dialog){
                var dialog = this.dialog = new Activity(BlkLab.Uploader.table);
                BlkLab.Uploader.close.click(function(){
                    dialog.parentNode.removeChild(dialog);
                    BlkLab.Uploader.table = null;
                    BlkLab.Uploader.header = null;
                    BlkLab.Uploader.close = null;
                    BlkLab.Uploader.dialog = null;
                });
            }
        },

        process: function(file, url){
            BlkLab.Uploader.running.push(file.meta.name);
            file.meta.progress_bar = BlkLab.create('div', {'class': 'progress_bar', id: file.meta.uuid});
            file.meta.row.append(file.meta.progress_bar);

            var form_data = new FormData();
            form_data.append('files',file.file);

            var oReq = new XMLHttpRequest();
            var token = BlkLab.Storage.get('access-token');
            oReq.open('POST', url, true);
            if(token){
                oReq.setRequestHeader("x-access-token", token);
            }
            oReq.upload.file = file.meta;
            oReq.upload.onprogress = BlkLab.Uploader.progress;
            oReq.addEventListener("load", BlkLab.Uploader.load, false);
            oReq.addEventListener("error", BlkLab.Uploader.error, false);
            oReq.addEventListener("abort", BlkLab.Uploader.abort, false);
            oReq.send(form_data);

            BlkLab.Uploader.timer = setInterval(BlkLab.Uploader.update, 300);
        },

        update: function(){
            var key;
            for(key in BlkLab.Uploader.queue){
                var file = BlkLab.Uploader.queue[key].meta;
                var current_bytes = file.bytes_uploaded;
                file.previous_bytes_loaded = current_bytes;
            }
        },

        progress: function(e){
            var file = e.target.file;
            if(e.lengthComputable) {
                file.bytes_uploaded = e.loaded;
                file.bytes_total = e.total;
                var precent_complete = Math.round(e.loaded * 100 / e.total);
                var bytes_transfered = BlkLab.Uploader.bytes_to_size(BlkLab.Uploader.bytes_uploaded);
                file.progress_bar.css({
                    width: (precent_complete).toString() + '%'
                });

                if (precent_complete == 100){
                    file.row.css({
                        background:'#000000'
                    });
                }
            } else {
                file.row.innerHTML += ' Failed!';
                file.row.add_class('fail');
                delete BlkLab.Uploader.queue[file.name];
                delete BlkLab.Uploader.running[file.name];
            }
        },

        load : function (e) {
            delete BlkLab.Uploader.queue[e.target.upload.file.name];
            delete BlkLab.Uploader.running[e.target.upload.file.name];

            BlkLab.Uploader.cur_total--;
            BlkLab.Uploader.finish(e);
        },

        finish: function(e){
            var response = e.target.responseText;
            var hash = JSON.stringify(response);


            if(BlkLab.Uploader.cur_total == 0){
                clearInterval(BlkLab.Uploader.timer);
                BlkLab.Uploader.header.innerHTML = 'Uploading Complete';
                BlkLab.Uploader.close.show();
            }else{
                BlkLab.Uploader.header.innerHTML = 'Uploading ' + BlkLab.Uploader.cur_total + ' of ' + BlkLab.Uploader.total + ' Files';
            }

            this.uploading = false;

            if(e.target.upload.file.callback)
                e.target.upload.file.callback(e.target.upload.file);
        },

        error: function(e){
            clearInterval(BlkLab.Uploader.timer);
        },

        abort: function(e){
            clearInterval(BlkLab.Uploader.timer);
        }
    }

    window.Activity = function(table){
        var alrt = BlkLab.create('div', {'class': 'blklab-activity'});
        alrt.append(table);
        document.documentElement.appendChild(alrt);
        alrt.add_class('open');
        return alrt;
    }

    window.Alert = function(msg){
        var alrt = BlkLab.create('div', {'class': 'blklab-msg'});
        alrt.innerHTML = msg;
        alrt.click = function(){alrt.destroy();}
        document.documentElement.appendChild(alrt);
        var t = setTimeout(function(){
            clearTimeout(t);
            alrt.destroy();
        }, 5000);
    }

}(window, document));
