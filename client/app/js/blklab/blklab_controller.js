BlkLab.Controller = function() {}

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
