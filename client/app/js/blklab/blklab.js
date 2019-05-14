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
});