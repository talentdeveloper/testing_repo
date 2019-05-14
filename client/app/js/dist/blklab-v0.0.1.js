//Todo off function

(function(window, document) {
    'use strict'

    Function.prototype.on = function() {
        this.__on__ = Array.prototype.slice.call(arguments);
        return this;
    };

    window.BlkLab = function() {}

	BlkLab.Utils = {
		generateUUID: function(){
			var d = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = (d + Math.random()*16)%16 | 0;
				d = Math.floor(d/16);
				return (c=='x' ? r : (r&0x7|0x8)).toString(16);
			});
			return uuid;
		},
		
		timeDifference: function(current, previous) {
    		var msPerMinute = 60 * 1000;
			var msPerHour = msPerMinute * 60;
			var msPerDay = msPerHour * 24;
			var msPerMonth = msPerDay * 30;
			var msPerYear = msPerDay * 365;
			var passed;
			var label;
			var elapsed = current - previous;

			if (elapsed < msPerMinute) {
				passed = Math.round(elapsed/1000); 
				label = passed > 1 ? ' seconds ' : ' second ';
			}

			else if (elapsed < msPerHour) {
				passed = Math.round(elapsed/msPerMinute);
				label = passed > 1 ? ' minutes ' : ' minute ';
			}

			else if (elapsed < msPerDay ) {
				passed = Math.round(elapsed/msPerHour);
				label = passed > 1 ? ' hours ' : ' hour ';
				  
			}

			else if (elapsed < msPerMonth) {
				passed = Math.round(elapsed/msPerDay) 
				label = passed > 1 ? ' days ' : ' day ';
			}

			else if (elapsed < msPerYear) {
				passed = Math.round(elapsed/msPerMonth);
				label = passed > 1 ? ' months ' : ' month ';
			}

			else {
				passed = Math.round(elapsed/msPerYear );
				label = passed > 1 ? ' years ' : ' year ';
			}
			
			return passed + label + 'ago'; 
		},
		
		titleCase: function(str){
    		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}
	}

	BlkLab.create = function (t, vars) {
        if (typeof t === 'string') {
            var ele = document.createElement(t);
            for (var key in vars) {
                ele.setAttribute(key, vars[key]);
            }
            return _$(ele);
        } else if (typeof t === 'object') {
            var ret = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = arguments[i];
                ret.push(BlkLab.create(arg[0], arg[1]));
            }
            return ret;
        }
    };

    BlkLab.DataBind = {
        bound: {},

        fire: function(flag, ev) {
            if (this.bound[flag]) {
                var i;
                var elements = this.bound[flag];
                var len = this.bound[flag].length;
                for (i = 0; i < len; i++) {
                    elements[i].call(ev);
                }
            }
        },

        on: function(flag, callback) {
            var bound = this.bound;
            if (bound[flag]) {
                bound[flag].push(callback);
            } else {
                bound[flag] = [];
                bound[flag].push(callback);
            }
            return this;
        },

        off: function() {}
    }

    BlkLab.extend = function(obj, methods) {
        var method;
        for (method in methods) {
            if (obj && obj.hasOwnProperty(method) === false) {
                obj[method] = methods[method];
            }
        }
        return obj;
    };

    BlkLab.on = function(obj, method) {
        var o = _$(obj);
        var prop = method.__on__;
        if (o)
            o.on(prop, method);
    }

    BlkLab.DOM = {
        registry: {},

        find: function(selector) {
            var ele;
            if (typeof selector === 'string') {
                if (typeof selector !== 'object') {
                    ele = document.querySelector(selector);
                    if (!ele) {
                        ele = document.getElementById(selector);
                    }
                } else {
                    ele = selector;
                }
            } else if (typeof selector === 'object') {
                ele = selector;
            }

			var parent;
			try{
				if(ele.parentNode){
					parent = _$(ele.parentNode);
				}
			}catch(e){}

            BlkLab.extend(ele, {
				parent: parent,

                listeners: {},

                off: function(type, fn) {
                    if (window.removeEventListener) {
                        this.removeEventListener(type, fn, false);
                    } else if (window.detachEvent) {
                        this.detachEvent('on' + type, fn);
                    }
                },

                on: function(type, fn) {
                    if (!this.listeners[type]) {
                        this.listeners[type] = [];
                    }
                    this.listeners[type].push(fn);
                    
                    this.off(type, fn);
                    if (window.addEventListener) {
                        this.removeEventListener(type, fn, false);
                        this.addEventListener(type, fn, false);
                    } else if (window.attachEvent) {
                        this.detachEvent('on' + type, fn);
                        this.attachEvent('on' + type, fn);
                    }

                    return this;
                },

				css: function (props) {
					if (typeof props === 'object') {
						var prop;
						for (prop in props) {
							this.style[prop] = props[prop];
						}
						return this;
					} else {
						return this.style[props];
					}
				},

				data: function(attr, value){
					var prefix = 'data';
					attr = prefix + '-' + attr
					if(!value){
						try{
						return this.getAttribute(attr);
						}catch(e){
							return null;
						}
					}else{
						this.setAttribute(attr, value);
						return this;
					}
				},
				
				blklab: function(attr, value){
					var prefix = 'blklab';
					attr = prefix + '-' + attr
					if(!value){
						try{
							return this.getAttribute(attr);
						}catch(e){
							return null;
						}
					}else{
						this.setAttribute(attr, value);
						return this;
					}
				},

				remove_data: function(attr, value, prefix){
					prefix = prefix || 'data-';
					this.removeAttribute('data-' + attr);
					return this;
				},

				toggle_class: function (nm) {
					if (this.classList) {
						this.classList.toggle(nm);
					} else {
						//TODO: implement cross browser class toggle
					}
					return this;
				},

				has_class: function(nm){
					if(this.className){
						var m = this.className.match(new RegExp('(\\s|^)' + nm + '(\\s|$)'));
						if(m){
							return true;
						}else{
							return false;
						}
					}else{
						return false;
					}
				},

				add_class: function (nm) {
					if (this.classList) {
						if (!this.classList.contains(nm)) {
							this.classList.toggle(nm);
						}
					} else {
						if (!this.has_class(nm)) this.className += " " + nm;
					}
					return this;
				},

				remove_class: function (nm) {
					if (this.classList) {
						this.classList.remove(nm);
					} else {
						if(this.has_class(nm)) {
							var reg = new RegExp('(\\s|^)' + nm + '(\\s|$)');
							this.className = this.className.replace(reg, ' ');
						}
					}
					return this;
				},

				preg_remove_class: function(nm){
					try{
						var reg = new RegExp('(\\s|^)' + nm + '(\\s|$)');
						this.className = this.className.replace(reg, ' ').trim();
					}catch(e){
						console.error(e);
					}
					return this;
				},

                show: function(inline) {
                    this.style.display = inline ? 'inline-block' : 'block';
                },

                hide: function() {
                    this.style.display = 'none';
                },

				onfocus: function (fn) {
					this.on('focus', fn);
					return this;
            	},

				onblur: function (fn) {
					this.on('blur', fn);
					return this;
				},

				click: function (fn) {
					this.on('click', fn);
					return this;
				},

				change: function (fn) {
                    if(!this.contentEditable){
                        this.on('change', fn);
                    }else{
                        this.on('blur', fn);
                    }
                    return this;
				},

				doubleclick: function (fn) {
					this.on('dblclick', fn);
					return this;
				},

				drag: function (fn) {
					this.on('drag', fn);
					return this;
				},

				drop: function (fn) {
					this.on('drop', fn);
					return this;
				},

				dragstart: function (fn) {
					this.on('dragstart', fn);
					return this;
				},

				dragenter: function (fn) {
					this.on('dragenter', fn);
					return this;
				},

				dragover: function (fn) {
					this.on('dragover', fn);
					return this;
				},

				dragleave: function (fn) {
					this.on('dragleave', fn);
					return this;
				},

				dragend: function (fn) {
					this.on('dragend', fn);
					return this;
				},

				typing: function (fn) {
					this.on('keyup', fn);
				},

				enter: function (fn) {
					this.on('keyup', function inputKeyUp(e) {
						var w = e.which || e.keyCode;
						if (w == 13) {
							fn();
						}
					});
					return this;
				},

				over: function (fn) {
					this.on('mouseover', fn);
					return this;
				},

				out: function (fn) {
					this.on('mouseleave', fn);
					return this;
				},

				destroy: function () {
					try {
						if (this.parentNode) {
							this.parentNode.removeChild(this);
						}
					} catch (e) {}
					return this;
				},

				prepend: function (ele) {
					var arr = this.childNodes;
					if (Object.prototype.toString.call(ele) === '[object Array]') {
						var frag = document.createDocumentFragment();
						for (var i = 0; i < ele.length; i++) {
							frag.appendChild(ele[i]);
						}
						this.insertBefore(frag, arr[0]);
					} else {
						this.insertBefore(ele, arr[0]);
					}
				},

				append: function (ele) {
					if (Object.prototype.toString.call(ele) === '[object Array]') {
						var frag = document.createDocumentFragment();
						for (var i = 0; i < ele.length; i++) {
							frag.appendChild(ele[i]);
						}
						this.appendChild(frag);
					} else {
						this.appendChild(ele);
					}
				},

				observe: function (callback) {
					this.on('change', callback);
					//Coffea.update();
				},

				bounds: function () {
					var b = {};
					var x = this.getBoundingClientRect().left;
					var y = this.getBoundingClientRect().top;
					var bot = this.getBoundingClientRect().bottom;
					var r = this.getBoundingClientRect().right;
					var h, w;
					if (this.getBoundingClientRect().width)
						w = this.getBoundingClientRect().width;
					else
						w = this.offsetWidth;

					if (this.getBoundingClientRect().height)
						h = this.getBoundingClientRect().height;
					else
						h = this.offsetHeight;
					b.x = x;
					b.y = y;
					b.h = h;
					b.w = w;
					b.b = bot;
					b.r = r;
					return b;
				},

				get_children: function(){
					return this.childNodes;
				},

				children_by_class: function(selector){
					return _$(this.getElementsByClassName(selector), 'true');
				},

				children_by_tag: function(selector){
					return _$(this.getElementsByTagName(selector), 'true');
				}
			});

            return ele;
        },

        findAll: function(selector) {
            var ele = {};
            var idx = -1;
            ele.data = [];
			var col;
			if (typeof selector === 'string') {
            	col = document.querySelectorAll(selector);
			}else{
				col = selector;
			}
            if (col.length > 0) {
                var i;
                for (i = 0; i < col.length; i++) {
                    var el = this.find(col[i]);
                    ele.data.push(el);
                }
            }

            BlkLab.extend(ele, {
				length: ele.data.length,

                on: function(type, fn) {
                    var i;
                    for (i = 0; i < ele.data.length; i++) {
                        ele.data[i].on(type, fn);
                    }
                },

				filter: function(fn){
					return ele.data.filter(fn);
				},

				off: function(type, fn) {
                    var i;
                    for (i = 0; i < ele.data.length; i++) {
                        ele.data[i].off(type, fn);
                    }
                },

				css: function (styles) {
					if (ele.data.length > 0) {
						ele.data.forEach(function (el, i) {
							el.css(styles);
						});
					}
				},

				each: function (callback) {
					if (ele.data.length > 0) {
						ele.data.forEach(function (el, i) {
							callback.call(this, _$(el), i);
						});
					}
				},

				removeAll: function() {
					if (ele.data.length > 0) {
						ele.data.forEach(function (el, i) {
							_$(el).destroy();
						});
					}
				},

				click: function(callback){
					var i;
                    for (i = 0; i < ele.data.length; i++) {
                        ele.data[i].on('click', callback);
                    }
				},

				first: function () {
					return _$(ele.data[0]);
				},

				last: function () {
					return _$(ele.data[ele.data.length - 1]);
				},
                
                next: function(){
                    if(idx + 1 < ele.data.length){
                        idx++;
                    }else{
                        idx = 0   
                    }
                    return ele.data[idx];   
                },
                
                prev: function(){
                    if(idx - 1 >= 0){
                        idx--;
                    }else{
                        idx = ele.data.length - 1;   
                    }
                    return ele.data[idx];   
                },

				splice: function(i,e){
					return ele.data.splice(i,e);
				}
            });
            return ele;
        }
    }

    window._$ = function(selector, all) {
		if (typeof selector === 'string') {
			var first = selector[0];
			var last = selector[selector.length - 1];
			if (first == '.' || first == '[' && last == ']') {
				return BlkLab.DOM.findAll(selector);
			} else {
				return BlkLab.DOM.find(selector);
			}
		}else{
			if(!all){
				return BlkLab.DOM.find(selector);
			}else{
				return BlkLab.DOM.findAll(selector);
			}
		}
    }

}(window, document));


if (!String.prototype.toSlug) {
  String.prototype.toSlug = function () {
    return this.toLowerCase()
      .replace(/\s/g, '-')
      .replace(/&/g, 'and')
      .replace(/[^\w-]+/g,'')
      .replace(/[-*]+/g,'-')
      .trim();
  };
}

Handlebars.registerHelper('select', function(value, options) {
    // Create a select element 
    var select = document.createElement('select');

    // Populate it with the option HTML
    select.innerHTML = options.fn(this);

    // Set the value
    select.value = value;

    // Find the selected node, if it exists, add the selected attribute to it
    if (select.children[select.selectedIndex])
        select.children[select.selectedIndex].setAttribute('selected', 'selected');

    return select.innerHTML;
});

Handlebars.registerHelper('checked', function(value, options) {
   console.log(value, options); 
});;if(location.hostname == 'mosaiscope'){
    BlkLab.Config = {
	api_base: 'http://api.mosaiscope'
    }
}else{
    BlkLab.Config = {
        api_base: 'http://104.130.141.92:8080'
    }
}
;(function(window, document) {
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

   // XMLHttpRequestUpload.prototype.file = null;

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

    // XMLHttpRequestUpload.prototype.file = null;

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
;BlkLab.dataStore = {}

window._String = '';
window._Number = 0;
window._Boolean = true;
window._ObjectID = '';

BlkLab.Model = function(options) {
    this.super_ = {};
    this._schema = {};
    this.data = {};
    this.url;
    this.path;
    this.observers = {};
    this.insert = true;
    this.primary;
	this.state = 0;
}

BlkLab.Model.prototype = {
    init: function(defaults) {
		for (var key in defaults) {
            this.data[key] = defaults[key];
        }
    },

    on: function(flag, callback) {
        if (!this.observers[flag]) {
            this.observers[flag] = [];
        }

        this.observers[flag].push(callback);
    },
	
	emit: function(flag){
		var args = Array.prototype.slice.call(arguments, 1);
		var i;
        var callbacks = this.observers[flag];
		if(callbacks){
			callbacks.forEach(function(fn){
				fn.apply(this, args);
			});
		}
	},

    dispatch: function(flag) {
        var args = arguments.splice(0, 1);        
    },

    schema: function(obj) {
        var self = this;
        var keys = Object.keys(obj);
		var i;
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (self._schema.hasOwnProperty(obj[key]) === false) {
                self._schema[key] = obj[key];
                var def = obj[key].default;
                if (def) {
                    self.data[key] = self[key] = def;
                } else {
                    self.data[key] = self[key] = null;
                }
            }
        }
        return self;
    },

    get: function(key) {
        if (key in this.data) {
            return this.data[key];
        } else {
            return null;
        }
    },

    set: function(key, val) {
		this.emit('update', key, val, this.data[key]);
		this.data[key] = val;
        return this;
    },
	
	push: function(key, val){
		this.emit('update', key, val, this.data[key]);
		if(this.data[key] === null || this.data[key].constructor !== Array){
			this.data[key] = [];
		}
		this.data[key].push(val);
        return this;
	},

    setData: function(data) {
        this.data = data;
        return this;
    },

    find: function(query) {
		this.state = 1;
        var self = this;
        var url = this.url;
        if(this.path){
            url += this.path;   
        }
        var self = this;
        var id = query ? '/' + query._id : '';
        return BlkLab.get({
			url: url + id,
			data: JSON.stringify(query)
		}).then(function(http) {
			try{
				var ret = JSON.parse(http.response);
				self.data = ret;
				BlkLab.dataStore[url] = self.data;
			}catch(e){}
        }, function(http){
			if(http.status == 401){
				BlkLab.Security.handle(http);
			}
		}).then(function() {
            return new Promise(function(resolve, reject) {
                resolve(self);
            })
        })
    },

    length: function() {
        return this.data.length;
    },

    eachKey: function(callback) {
        var keys = Object.keys(this.data);
        var len = keys.length;
        var i;
        for (i = 0; i < len; i++) {
            var key = keys[i];
            var val = this.data[key];
            callback.call(this, key, val);
        }
    },

    each: function(data, callback) {
        var len = data.length;
        if (len > 1) {
            var i;
            for (i = 0; i < len; i++) {
                callback.call(self, data[i], i);
            }
        } else {
            callback.call(self, data);
        }
    },

    save: function(query) {
        var self = this;
		var url = this.state == 0 ? this.url : this.url + '/' + this.data._id;
        if(!this.data._id){
            url  = this.url;    
        }
		this.emit('preCommit', this.data);
		var payload = JSON.stringify(this.data);
		var params = {
			url: url,
			data: payload
		};
		console.log(this.data);
		if(this.state == 1 && this.data._id){
			return BlkLab.put(params);
		}else{
			return BlkLab.post(params);
		}
    },

    update: function(query) {
        var self = this;
        return new Promise(function(resolve, reject) {
            resolve(self);
        })
    },

    del: function(id) {
        var self = this;
		if(id){
			var url = this.url + '/' + id;
			return BlkLab.del({
				url: url,
				dataType: 'application/json'
			})
		}
    }
}

BlkLab.Model.extend = function(methods, options) {
    if (arguments.length == 1) {
        options = methods;
    }
    var self = function(options) {
        BlkLab.Model.call(this, options);
    }

    self.prototype = Object.create(BlkLab.Model.prototype);
    self.prototype.constructor = self;

    if (arguments.length > 1) {
        for (method in methods) {
            if (self.prototype.hasOwnProperty(method) === false) {
                self.prototype[method] = methods[method];
            }
        }
    }

    var obj = new self(options);
    obj.init();
    return obj;
}
;BlkLab.View = function(){}

BlkLab.View.prototype = {
	template: '',

	init: function(){},
	title:'Test',
	sub_title:'Sub',
    onRender: function(){},
	model: {},

	render: function(el, ret){
		var template = typeof this.template === 'string' ? Handlebars.compile(this.template) : this.template;
		var data = this.model.data || {};
		var html;
		//var d;
		/*if(data.length <= 1){
			d = {data: data};
			html = template(d);
		}else{
			d = {data: this.model.data};
			html = template(d);
		}*/
		html = template(data);

		if(el){
			var ele = document.querySelector(el);
			ele.innerHTML = html;
			
			var key = '[blklab-model]';
			_$(key).each(function(input){
				var i = _$(input);
				var parts = i.blklab('model').split('.');
				var model = BlkLab.Utils.titleCase(parts[0])+'Model';
				var field = parts[1];
				
				i.change(function(e){
					BlkLab.App[model].set(field, (this.value || this.innerHTML));
				});
			});
            this.onRender.call(this);
			
		}else{
			return html;
            this.onRender.call(this);
		}
	}
}

BlkLab.View.extend = function(methods){
	var self =  function(){
		BlkLab.View.call(this);
	}

	self.prototype = Object.create(BlkLab.View.prototype);
	self.prototype.constructor = self;

	for(method in methods){
		if(self.prototype.hasOwnProperty(method) === false) {
			self.prototype[method] = methods[method];
		}
	}
	return self;
}
;BlkLab.Controller = function() {}

BlkLab.Controller.prototype = {
    actions: null,
	route:null,

    render: function() {
        console.log('base');
    },

    refreshActions: function() {
        var actions = this.actions;
        for (action in actions) {
            var avail = {
                'click': '[blklab-click="' + action + '"]',
				'change': '[blklab-change="' + action + '"]',
                'mouseover': '[blklab-over="' + action + '"]',
                'mouseout': '[blklab-out="' + action + '"]',				
                'dblclick': '[blklab-dblclick="' + action + '"]',
				'typing':  '[blklab-typing="' + action + '"]',
				'drag':  '[blklab-drag="' + action + '"]',
				'dragenter': '[blklab-dragenter="' + action + '"]',
				'dragover': '[blklab-dragover="' + action + '"]',
				'drop':  '[blklab-drop="' + action + '"]',
                'enter':  '[blklab-enter="' + action + '"]',
                'submit':  '[blklab-submit="' + action + '"]',
                'focus':  '[blklab-focus="' + action + '"]',
                'blur':  '[blklab-blur="' + action + '"]'
            }
            var tmp;
            for (key in avail) {
                tmp = _$(avail[key]);
                if (tmp.length > 0) {
                    tmp.on(key, actions[action]);
                }
            }
        }
    }
}

BlkLab.Controller.extend = function(methods) {
    var self = function() {
        BlkLab.Controller.call(this);
    }

    self.prototype = Object.create(BlkLab.Controller.prototype);
    self.prototype.constructor = self;

    for (method in methods) {
        if (method != 'actions') {
            if (self.prototype.hasOwnProperty(method) === false) {
                self.prototype[method] = methods[method];
            }
        } else {
            var actions = methods['actions'];
        }
    }

    var obj = new self();
    obj.actions = actions;
    obj.refreshActions();
    return obj;
}
;(function(history){
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {String} str
	 * @return {Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
		var m = res[0]
		var escaped = res[1]
		var offset = res.index
		path += str.slice(index, offset)
		index = offset + m.length

		// Ignore already escaped sequences.
		if (escaped) {
		  path += escaped[1]
		  continue
		}

		// Push the current path onto the tokens.
		if (path) {
		  tokens.push(path)
		  path = ''
		}

		var prefix = res[2]
		var name = res[3]
		var capture = res[4]
		var group = res[5]
		var suffix = res[6]
		var asterisk = res[7]

		var repeat = suffix === '+' || suffix === '*'
		var optional = suffix === '?' || suffix === '*'
		var delimiter = prefix || '/'
		var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

		tokens.push({
		  name: name || key++,
		  prefix: prefix || '',
		  delimiter: delimiter,
		  optional: optional,
		  repeat: repeat,
		  pattern: escapeGroup(pattern)
		})
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
		path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
		tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {String}   str
	 * @return {Function}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
		if (typeof tokens[i] === 'object') {
		  matches[i] = new RegExp('^' + tokens[i].pattern + '$')
		}
	  }

	  return function (obj) {
		var path = ''

		obj = obj || {}

		for (var i = 0; i < tokens.length; i++) {
		  var key = tokens[i]

		  if (typeof key === 'string') {
			path += key

			continue
		  }

		  var value = obj[key.name]

		  if (value == null) {
			if (key.optional) {
			  continue
			} else {
			  throw new TypeError('Expected "' + key.name + '" to be defined')
			}
		  }

		  if (isarray(value)) {
			if (!key.repeat) {
			  throw new TypeError('Expected "' + key.name + '" to not repeat')
			}

			if (value.length === 0) {
			  if (key.optional) {
				continue
			  } else {
				throw new TypeError('Expected "' + key.name + '" to not be empty')
			  }
			}

			for (var j = 0; j < value.length; j++) {
			  if (!matches[i].test(value[j])) {
				throw new TypeError('Expected all "' + key.name + '" to match "' + key.pattern + '"')
			  }

			  path += (j === 0 ? key.prefix : key.delimiter) + encodeURIComponent(value[j])
			}

			continue
		  }

		  if (!matches[i].test(value)) {
			throw new TypeError('Expected "' + key.name + '" to match "' + key.pattern + '"')
		  }

		  path += key.prefix + encodeURIComponent(value)
		}

		return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {String} group
	 * @return {String}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {RegExp} re
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {String}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {RegExp} path
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
		for (var i = 0; i < groups.length; i++) {
		  keys.push({
			name: i,
			prefix: null,
			delimiter: null,
			optional: false,
			repeat: false,
			pattern: null
		  })
		}
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {Array}  path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
		parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {String} path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)

	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
		if (typeof tokens[i] !== 'string') {
		  keys.push(tokens[i])
		}
	  }

	  return attachKeys(re, keys)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {Array}  tokens
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i]

		if (typeof token === 'string') {
		  route += escapeString(token)
		} else {
		  var prefix = escapeString(token.prefix)
		  var capture = token.pattern

		  if (token.repeat) {
			capture += '(?:' + prefix + capture + ')*'
		  }

		  if (token.optional) {
			if (prefix) {
			  capture = '(?:' + prefix + '(' + capture + '))?'
			} else {
			  capture = '(' + capture + ')?'
			}
		  } else {
			capture = prefix + '(' + capture + ')'
		  }

		  route += capture
		}
	  }

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
		route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }

	  if (end) {
		route += '$'
	  } else {
		// In non-ending mode, we need the capturing groups to match as much as
		// possible by using a positive lookahead to the end or next path segment.
		route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }

	  return new RegExp('^' + route, flags(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(String|RegExp|Array)} path
	 * @param  {Array}                 [keys]
	 * @param  {Object}                [options]
	 * @return {RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []

	  if (!isarray(keys)) {
		options = keys
		keys = []
	  } else if (!options) {
		options = {}
	  }

	  if (path instanceof RegExp) {
		return regexpToRegexp(path, keys, options)
	  }

	  if (isarray(path)) {
		return arrayToRegexp(path, keys, options)
	  }

	  return stringToRegexp(path, keys, options)
	}
	
	function isarray(arr){
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};
	
	/*function pathToRegexp(path, keys, options) {
		keys = keys || [];
		options = options || {};

		if (path instanceof RegExp) return path;
		if (path instanceof Array) path = '(' + path.join('|') + ')';

		path = path
			.concat(options.strict ? '' : '/?')
			.replace(/\/\(/g, '(?:/')
			.replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?(\*)?/g, function(_, slash, format, key, capture, optional, star){
			keys.push({ name: key, optional: !! optional });
			slash = slash || '';
			return ''
				+ (optional ? '' : slash)
				+ '(?:'
				+ (optional ? slash : '')
				+ (format || '') + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')'
				+ (optional || '')
				+ (star ? '(/*)?' : '');
			})
			.replace(/([\/.])/g, '\\$1')
			.replace(/\*\/g, '(.*)');

		return new RegExp('^' + path + '$', options.sensitive ? '' : 'i');
	};*/

	BlkLab.Router = function(){
		var self = this;
		var struct = {
			'GET': []
		};

		function load(){
			var methStruct = struct.GET;
			if(methStruct){
				var resource;
				var regex;
				var params;
				var i;
				var len;
				var secured = false;
				methStruct.some(function(el){
					params = {};
					regex = el.pattern.exec(location.pathname);
					console.log(regex)
					if(regex){
						resource = el.resource;
						len = parseInt(el.keys.length) + 1;
						for(i=1;i<len;i++){
							params[el.keys[i-1].name] = regex[i];
						}
						return true;
					}
					return false;
				});
				
				if(resource){
					if(!resource.secured || (resource.secured && BlkLab.Storage.get('access-token'))){
						resource.controller.render.call(resource.controller, params);
					}else{
						BlkLab.Security.handle();	
					}
				}else{
					console.log('not found');	
				}
			}
		}

		function routes(data){
			for(var key in data){
				get(key, data[key]);
			}
		}

		function get(url, resource, secured){
			var keys = [];
			var pattern = pathToRegexp(url, keys);
			struct.GET.push({
				pattern: pattern,
				resource: resource,
				keys:keys
			});
		}

		this.dispatch = load;
		this.routes = routes;
		this.load = load;
		this.get = get;

		window.onpopstate = history.onpushstate = function(ev){
			if(BlkLab.History.type == 'push'){
				self.load(location.pathname);
			}

			window.onhashchange = function(){
				if(BlkLab.History.type == 'hash')
					self.load(location.hash.replace('#', ''));
			}
		};
	};
})(window.history);
;BlkLab.App = {
	run: function () {
		BlkLab.App.Router.dispatch();
	},
	
	redirect: function(url){
		window.history.pushState("", "", url);
	},
	
	serialize: function (obj) {
		var str = [];
		for (var p in obj)
			if (obj.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			}
		return str.join("&");
	},

	serializeForm: function (form) {
		var elements = form.elements;
		var len = elements.length;
		var i;
		var str = {};
		for (i = 0; i < len; i++) {
			if (elements[i].name) {
				str[elements[i].name] = elements[i].value;
			}
		}
		return JSON.stringify(str);
	},

	validateForm: function (form) {
		var elements = form.elements;
		var len = elements.length;
		var i;
		var str = {};
		var valid = true;
		for (i = 0; i < len; i++) {
			if (elements[i].name && elements[i].getAttribute('required') && elements[i].value.trim() === '') {
				valid = false;
			}
		}
		return valid;
	},

	lazyLoad: function () {
		function loadImage(el, fn) {
			if(!el.src){
				var img = new Image();
				var src = el.getAttribute('data-src');
				img.onload = function () {
					el.src = src;
					el.add_class('fade');
					fn ? fn() : null;
				}
				img.src = src;
			}
		}
		function elementInViewport(el) {
			var rect = el.getBoundingClientRect()

			return (
				rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
			)
		}

		try{
			var images = _$('.lazy');
		}catch(e){}
		var processScroll = function () {
			images.each(function(image, i){
				console.log(image);
				if (elementInViewport(image)) {
					loadImage(image, function () {
						images.splice(i, i);
					});
				}
			});
		};

		processScroll();
		_$(window).on('scroll', processScroll);
	}
}

BlkLab.App.Router = new BlkLab.Router();
