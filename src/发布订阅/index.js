var Emitter = /** @class */ (function () {
    function Emitter() {
        this.events = new Map();
    }
    Emitter.prototype.on = function (event, cb) {
        if (this.events.has(event)) {
            var cbList = this.events.get(event);
            cbList && cbList.push(cb);
        }
        else {
            this.events.set(event, [cb]);
        }
    };
    Emitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var cbList = this.events.get(event);
        if (cbList) {
            cbList.forEach(function (cb) { return cb.apply(void 0, args); });
        }
    };
    Emitter.prototype.off = function (event, cb) {
        var cbList = this.events.get(event);
        if (cbList) {
            cbList.splice(cbList.indexOf(cb), 1);
        }
    };
    Emitter.prototype.once = function (event, cb) {
        var _this = this;
        // 创建一个自定义函数，通过 on 触发后马上通过 off 回收掉
        var callback = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            cb.apply(void 0, args);
            _this.off(event, callback);
        };
        this.on(event, callback);
    };
    return Emitter;
}());
var bus = new Emitter();
var handler = function (a, b) {
    console.log(a);
    console.log(b);
};
// bus.once('go', handler)
bus.on('go', handler);
bus.emit('go', 1, 2);
// bus.off('go', handler)
bus.emit('go', 3, 4);
bus.emit('go', 5, 6);
