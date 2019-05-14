BlkLab.dataStore = {}

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
