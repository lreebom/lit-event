"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListener3 = exports.EventListener2 = exports.EventListener1 = void 0;
var BaseEventListener = /** @class */ (function () {
    function BaseEventListener() {
        this._listeners = [];
    }
    BaseEventListener.prototype._add = function (Listener) {
        if (this._listeners.indexOf(Listener) < 0) {
            this._listeners.push(Listener);
        }
    };
    BaseEventListener.prototype._remove = function (Listener) {
        var index = this._listeners.indexOf(Listener);
        if (index > -1) {
            this._listeners.splice(index, 1);
        }
    };
    BaseEventListener.prototype._invoke = function () {
        var _a, _b;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        for (var i = 0; i < this._listeners.length; i++) {
            (_b = (_a = this._listeners)[i]) === null || _b === void 0 ? void 0 : _b.call.apply(_b, __spreadArray([_a], params, false));
        }
    };
    BaseEventListener.prototype.clear = function () {
        this._listeners = [];
    };
    return BaseEventListener;
}());
var EventListener1 = /** @class */ (function (_super) {
    __extends(EventListener1, _super);
    function EventListener1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventListener1.prototype.addListener = function (Listener) {
        this._add(Listener);
    };
    EventListener1.prototype.removeListener = function (Listener) {
        this._remove(Listener);
    };
    EventListener1.prototype.invoke = function (t1) {
        this._invoke(t1);
    };
    return EventListener1;
}(BaseEventListener));
exports.EventListener1 = EventListener1;
var EventListener2 = /** @class */ (function (_super) {
    __extends(EventListener2, _super);
    function EventListener2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventListener2.prototype.addListener = function (Listener) {
        this._add(Listener);
    };
    EventListener2.prototype.removeListener = function (Listener) {
        this._remove(Listener);
    };
    EventListener2.prototype.invoke = function (t1, t2) {
        this._invoke(t1, t2);
    };
    return EventListener2;
}(BaseEventListener));
exports.EventListener2 = EventListener2;
var EventListener3 = /** @class */ (function (_super) {
    __extends(EventListener3, _super);
    function EventListener3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventListener3.prototype.addListener = function (Listener) {
        this._add(Listener);
    };
    EventListener3.prototype.removeListener = function (Listener) {
        this._remove(Listener);
    };
    EventListener3.prototype.invoke = function (t1, t2, t3) {
        this._invoke(t1, t2, t3);
    };
    return EventListener3;
}(BaseEventListener));
exports.EventListener3 = EventListener3;
