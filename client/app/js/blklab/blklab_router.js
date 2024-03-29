(function(history){
	
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
