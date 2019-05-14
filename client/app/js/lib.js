(function (window, document) {
    'use strict';

	FileReader.prototype.__progress__ = null;

	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	Function.prototype.__observes__ = null;
	Function.prototype.__on__ = null;

	Function.prototype.observes = function () {
		this.__observes__ = Array.prototype.slice.call(arguments);
		return this;
	};

	Function.prototype.on = function () {
		this.__on__ = Array.prototype.slice.call(arguments);
		return this;
	};

	//Base object for extending the Coffea
	function N() {
		this.methods = {};
		this.collections = [];

		this.applyMethods = function (obj, methods) {
			var method;
			for(method in methods) {
				if (obj.hasOwnProperty(method) === false) {
					if(methods[method]){
						if (methods[method].__observes__) {
							this.observe(obj, methods[method]);
						}

						if(methods[method].__on__){
							this.on(obj, methods[method]);
						}
					}
					try{
						obj[method] = methods[method];
					}catch(e){}
					this.methods[method] = methods[method];
				}
			}
			return obj;
		};

		this.on = function(obj, method){
			var o = $(obj);
			var prop = method.__on__;
			o.ev(prop, method);
		};

		this.observe = function (obj, method) {
			var prop = method.__observes__;
			var o;
			var oldval;
			var newval;
			if (prop == 'value' || prop == 'enter') {
				o = $(obj);
				oldval = o.value;
				var ret = function(e){
					newval = o.value;
					method.bind(o).call(null, o, oldval, newval);
					oldval = newval;
				};

				if(prop == 'value'){
					o.bind('change', ret);
				}else{
					o.enter(ret);
				}
			} else if (prop == 'html') {
				o = $(obj);
				oldval = o.html();
				o.on('html', function (e) {
					newval = o.html();
					method.bind(o).call(null, o, oldval, newval);
					oldval = newval;
				});
			} else if (prop == 'style' || prop == 'id' || prop == 'class') {
				var observer = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						console.log(mutation);
					});
				});

				observer.observe(obj, {
					attributes: true,
					childList: true,
					characterData: true
				});
			} else {
				obj.watch(prop, method);
			}
		};
	}

	//Expose the Coffea object
	window.Coffea = new N(document);

	//Shim for watching object for changes
	Function.prototype.watch = function (prop, handler) {
		var oldval = this[prop],
			newval = oldval,
			getter = function () {
				return newval;
			},
			setter = function (val) {
				oldval = newval;
				newval = handler.call(this, prop, oldval, val);
				return newval;
			};

		if (delete this[prop]) { // can't watch constants
			if (Object.defineProperty) { // ECMAScript 5
				Object.defineProperty(this, prop, {
					get: getter,
					set: setter
				});
			} else if (Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) { // legacy
				Object.prototype.__defineGetter__.call(this, prop, getter);
				Object.prototype.__defineSetter__.call(this, prop, setter);
			}
		}
		return this;
	};


    //Watching for Coffea read and onLoad...Needs more work
    var callbacks = [];
    var loadedCallbacks = [];
    var CoffeaLoaded = function () {
        //callbacks.forEach(Coffea.dispatch);
    };
    Coffea.ready = function (callback) {
        callbacks.push(callback);
    };

    var pageLoaded = function () {
        //loadedCallbacks.forEach(Coffea.dispatch);
    };
    Coffea.loaded = function (callback) {
        loadedCallbacks.push(callback);
    };


    //Creates and returns a new Coffea object, you can also pass multiple objects to create
    Coffea.create = function (t, vars) {
        if (typeof t === 'string') {
            var ele = document.createElement(t);
            for (var key in vars) {
                ele.setAttribute(key, vars[key]);
            }
            return $(ele);
        } else if (typeof t === 'object') {
            var ret = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = arguments[i];
                ret.push(Coffea.create(arg[0], arg[1]));
            }
            return ret;
        }
    };

    //Finds an object or collections of objects in the Coffea and adds the methods passed to the object
    Coffea.extend = function (selector, all, methods) {
        var ele;
		if(typeof selector === 'string' && (selector[0] == '#' || !all)) {
            if(typeof selector !== 'object') {
                ele = document.querySelector(selector);
                if (!ele) {
                    ele = document.getElementById(selector);
                }
            } else {
                ele = selector;
            }
            if (ele) {
                this.applyMethods(ele, methods);
                if (ele.hasOwnProperty('init') && ele.init) {
                    ele.init();
                }
            }
		}else if(typeof selector === 'object'){
			ele = selector;
			if(ele){
				this.applyMethods(ele, methods);
				if (ele.hasOwnProperty('init') && ele.init) {
					ele.init();
				}
			}
        } else {
            ele = [];
            var col = document.querySelectorAll(selector);
            if (col) {
                var i;
                for (i = 0; i < col.length; i++) {
                    this.applyMethods(col[i], methods);
                    if (col[i].hasOwnProperty('init') && col[i].init) {
                        col[i].init();
                    }
                    ele.push(col[i]);
                }
            }
        }
        return ele;
    };

	var agent = navigator.userAgent.toLowerCase();
	Coffea.Browser = {
		version: (agent.match( /.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/ ) || [])[1],
		is_chrome : /chrome/.test(agent),
		is_safari : /webkit/.test(agent) && !/chrome/.test(agent),
		is_opera : /opera/.test(agent),
		is_ie : /msie/.test(agent) && !/opera/.test(agent),
		is_mozilla : /mozilla/.test(agent) && !/(compatible|webkit)/.test(agent),
		is_ipad : /iPad/i.test(agent),
		is_iphone : /iPhone/i.test(agent)
	}

	Coffea.Utils = {
		generateUUID: function(){
			var d = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = (d + Math.random()*16)%16 | 0;
				d = Math.floor(d/16);
				return (c=='x' ? r : (r&0x7|0x8)).toString(16);
			});
			return uuid;
		}
	}

    //Base Event
    function E() {}
    //Expose Event
    window.Evnt = new E();

    //Return Event target
    Evnt.target = function (e) {
        e = e || window.event;
        return $(e.target || e.srcElement);
    };

    //Bind the Coffea load and onLoad functions
    var readyState = document.readyState;
    document.addEventListener("DOMContentLoaded", CoffeaLoaded, false);
    window.addEventListener("load", pageLoaded, false);

	var toggle;
	var checkSize = function(){
		var m = window.matchMedia("(max-width: 1024px)");
		if(m.matches){
			var body = $('wrapper');
			if(!toggle){
				toggle = Coffea.create('span', {title:"list", id:"toggle", "class": 'fa fa-navicon'});
				var nav = $('nav');
				var wrapper = $('wrapper');
				toggle.click(function(){
					nav.toggle_class('open');
					wrapper.toggle_class('open');
					toggle.toggle_class('open');
				});
				body.appendChild(toggle);
			}
		}else{
			if(toggle){
				toggle.destroy();
				toggle = null;
			}
		}
	}

	var defaultLoad = function(){
		checkSize();
	}

	window.addEventListener("resize", checkSize, false);


	//Dialog object

	window.openDialog = null;

	window.Dialog =  function(type, msg, ele, append, callback){
		this.init = function(type){
			console.log('test');
			return this[type]();
		}

		this.tooltip = function(){
			var tooltip = Coffea.create('div', {'class':'tooltip'});
			tooltip.innerHTML = this.msg;
			if(this.append)
				tooltip.append(this.append);
			var bounds = this.ele.bounds();
			var body = document.querySelector('body');
			body.appendChild(tooltip);
			tooltip.css({
				left:bounds.r + 25 + 'px',
				top: (bounds.b + 25) - (tooltip.bounds().h/2) + 'px',
			});
			return tooltip;
		}

		this.modal = function(){
			console.log('test');
			var modalBackground = Coffea.create('div', {'class':'modal-bg'});
			var modal = Coffea.create('div', {'class':'modal-open'});
			modal.innerHTML = this.msg;
			var body = document.querySelector('body');
			modalBackground.appendChild(modal);
			body.appendChild(modalBackground);
			modal.add_class('open');
			return modalBackground;
		}

		this.dialog = function(){
			var modal = Coffea.create('div', {'class':'blklab-modal'});
			modal.innerHTML = this.msg;
			var body = document.querySelector('body');
			body.appendChild(modal);
			modal.add_class('open');
			$('blklab-submit').click(this.submit);
			$('blklab-cancel').click(function(){
				modal.destroy();
			});
			return modal;
		}

		this.submit = callback;

		this.ele = ele;
		this.msg = msg;
		this.append = append;
		return this.init(type, ele);
	};

	window.FilePicker = function(data, callback){
		this.heights = []
		this.images = null;

		this.init = function(){
			var body = $('#body');
			var background = Coffea.create('div', {'lb-picker':'', 'class':'fade'}, this.data);
			body.appendChild(background);
			this.images = $('img');
			var scope = this;


			this.run(background);

			$(window).ev('resize', function(){
				scope.run(background);
			});

			Coffea.extend('[lb-image-search]', true, {
				oblur: function(ev){
					var inp = this;
					var value = inp.value.toLowerCase();

					if(value != '' && value.length > 3){
						scope.images.each(function(el){
							if(el.getAttribute('src').toLowerCase().indexOf(value) != -1 || el.getAttribute('data-caption').toLowerCase().indexOf(value) != -1){
								el.parentNode.style.display = 'inline-block';
							}else{
								el.parentNode.style.display = 'none';
							}
						});
					}else{
						scope.images.each(function(el){
							el.parentNode.style.display = 'inline-block';
						});
					}
					scope.run(background);
				}.on('blur')
			});
		}

		this.run = function(background){
			var max_height = 300;
			var size = background.querySelector('.container').offsetWidth;//window.innerWidth;
			var n = 0;
			var images = this.images;
			images.each(function(el){
				el.click(function(){
					background.destroy();
					callback.bind(el).call(null, el.src);
				});
			});
			var scope = this;
			w: while(images.length > 0){
				for(var i = 1; i <= images.length; ++i){
					var slice = images.slice(0 , i);
					var h = scope.getHeight(slice, size);
					if(h < max_height){
						scope.setHeight(slice, Math.min(max_height, h));
						images = images.slice(i);
						continue w;
					}
				}
				this.setHeight(slice, Math.min(max_height, h));
				break;
			}
		}

		this.getHeight = function(images, width){
			width -= images.length * 5;
			var h = 0;
			var img;
			for (var i = 0; i < images.length; ++i) {
				img = images[i];
				h += img.getAttribute('data-width') / img.getAttribute('data-height');
			}
			return width / h;
		}

		this.setHeight = function(images, height){
			this.heights.push(height);
			var img;
			for (var i = 0; i < images.length; ++i) {
				img = images[i];
				//img.style.width = (height * img.getAttribute('data-width') / img.getAttribute('data-height')) + 'px';
				img.style.height = height + 'px';
			}
		}

		this.data = data;
		this.callback = callback;
		this.init();
	}

	window.Gallery =  function(ele, type, len, delay, imgs){
		this.init = function(ele, type){
			this[type](ele);
		}

		this.crossfade = function(ele){
			var slider = ele.querySelector('.slider');
			console.log(this.imgs);
			/*var scope = this;
    		this.i = 0;
    		var current_cell = arr[0];
    		var next_cell = arr[this.i+1];

	    	var run = function(){
    			window.clearInterval(timer);
    			scope.i = scope.i < scope.len ? scope.i + 1 : 0;
    			timer = window.setInterval(run, scope.delay);
    		};

	    	current_cell.add_class('fade');
	    	timer = window.setInterval(run, this.delay);	*/
		};

		this.slide = function(ele){
			var slider = $(ele.children_by_class('slider')[0]);
			var cells = slider.childNodes;
			var slider_bounds = slider.bounds();
			var animate, end, start, timer;
			var scope = this;
			var run = function(){
				window.clearInterval(timer);
				start = slider.offsetLeft;
				end = scope.i == 0 ? 0 : -1 * (scope.bounds.w * scope.i);
				animate = new animation(300);
				animate.run(slider, 'left', start, end, function(){
					scope.i = scope.i < scope.len ? scope.i + 1 : 0;
					slider_bounds = slider.bounds();
					timer = window.setInterval(run, scope.delay);
				});
			};

			timer = window.setInterval(run, this.delay);

			$(window).ev('resize', function(){
				window.clearInterval(timer);
				scope.bounds = ele.bounds();
				for(var i=0; i<cells.length; i++){
					cells[i].css({
						width: scope.bounds.w + 'px'
					});
				}
				slider.css({
					left: '0px'
				});
				scope.i = 1;
				timer = window.setInterval(run, scope.delay);
			});
		};

		this.scroll = function(ele){
			console.log('scroll');
		};

		this.bounds = ele.bounds();
		this.i = 1;
		this.len = len-1;
		this.delay = delay || 5000;
		this.imgs = imgs;
		this.init(ele, type);
	};

	function animation(duration, type){
		this.elem = null;
		this.startTime = undefined;
		this.time = undefined;
		this.duration = duration || 500;
		this.type = type || null;
		this.target = 0;
		this.start = 0;
		this.prop = null;
		this.callback = null;

		this.swing = function(p, n, firstNum, diff){
			return ((-Math.cos(p * Math.PI) / 2) + 0.5) * diff + firstNum;
		}

		this.loop = function(){
			this.time = Date.now();
			if(this.startTime === undefined)
				this.startTime = this.time;

			if(this.started){
				var dur = this.duration + this.startTime;
				if(this.time >= dur){
					this.started = false;
					this.time = undefined;
					this.startTime = undefined;
					if(this.type == 'window'){
						window.scrollTo(0, this.target);
					}else{
						this.elem.style[this.prop] = this.target + 'px'
					}

					if(this.callback)
						this.callback();
				}else{
					var curTime = this.time - this.startTime;
					var curPos = curTime / this.duration;
					var diff = (this.target - this.start);
					var ease = this.swing(curPos, curTime, 0, 1, this.duration);
					var val = Math.ceil(this.start + ((this.target - this.start) * ease));
					//console.log(val)
					if(this.type == 'window'){
						window.scrollTo(0, val);
					}else{
						this.elem.style[this.prop] = val + 'px'
					}
				}
			}
		}

		this.run = function(elem, prop, start, end, callback){
			var that = this;
			this.elem = elem;
			this.start = start;
			this.target = end;
			this.prop = prop;
			this.callback = callback;
			this.started = true;
			(function animloop(){
				window.requestAnimationFrame(animloop);
				that.loop();
			})();
		}
	}

}(window, document));
