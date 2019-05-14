BlkLab.App = {
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
