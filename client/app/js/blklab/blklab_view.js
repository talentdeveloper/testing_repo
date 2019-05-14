BlkLab.View = function(){}

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
