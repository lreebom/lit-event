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
exports.LitEvent5 = exports.LitEvent4 = exports.LitEvent3 = exports.LitEvent2 = exports.LitEvent1 = exports.LitEvent = void 0;
var LitEventBase = /** @class */ (function () {
    function LitEventBase() {
        this._listeners = [];
    }
    LitEventBase.prototype._add = function (Listener) {
        if (this._listeners.indexOf(Listener) < 0) {
            this._listeners.push(Listener);
        }
    };
    LitEventBase.prototype._remove = function (Listener) {
        var index = this._listeners.indexOf(Listener);
        if (index > -1) {
            this._listeners.splice(index, 1);
        }
    };
    LitEventBase.prototype._invoke = function () {
        var _a, _b;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        for (var i = 0; i < this._listeners.length; i++) {
            (_b = (_a = this._listeners)[i]) === null || _b === void 0 ? void 0 : _b.call.apply(_b, __spreadArray([_a], params, false));
        }
    };
    LitEventBase.prototype.removeAllListeners = function () {
        this._listeners = [];
    };
    return LitEventBase;
}());
var LitEvent = /** @class */ (function (_super) {
    __extends(LitEvent, _super);
    function LitEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LitEvent.prototype.addListener = function (Listener) {
        this._add(Listener);
    };
    LitEvent.prototype.removeListener = function (Listener) {
        this._remove(Listener);
    };
    LitEvent.prototype.invoke = function () {
        this._invoke();
    };
    return LitEvent;
}(LitEventBase));
exports.LitEvent = LitEvent;
var LitEvent1 = /** @class */ (function (_super) {
    __extends(LitEvent1, _super);
    function LitEvent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LitEvent1.prototype.addListener = function (Listener) {
        this._add(Listener);
    };
    LitEvent1.prototype.removeListener = function (Listener) {
        this._remove(Listener);
    };
    LitEvent1.prototype.invoke = function (v1) {
        this._invoke(v1);
    };
    return LitEvent1;
}(LitEventBase));
exports.LitEvent1 = LitEvent1;
var LitEvent2 = /** @class */ (function (_super) {
    __extends(LitEvent2, _super);
    function LitEvent2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LitEvent2.prototype.addListener = function (Listener) {
        this._add(Listener);
    };
    LitEvent2.prototype.removeListener = function (Listener) {
        this._remove(Listener);
    };
    LitEvent2.prototype.invoke = function (v1, v2) {
        this._invoke(v1, v2);
    };
    return LitEvent2;
}(LitEventBase));
exports.LitEvent2 = LitEvent2;
var LitEvent3 = /** @class */ (function (_super) {
    __extends(LitEvent3, _super);
    function LitEvent3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LitEvent3.prototype.addListener = function (Listener) {
        this._add(Listener);
    };
    LitEvent3.prototype.removeListener = function (Listener) {
        this._remove(Listener);
    };
    LitEvent3.prototype.invoke = function (v1, v2, v3) {
        this._invoke(v1, v2, v3);
    };
    return LitEvent3;
}(LitEventBase));
exports.LitEvent3 = LitEvent3;
var LitEvent4 = /** @class */ (function (_super) {
    __extends(LitEvent4, _super);
    function LitEvent4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LitEvent4.prototype.addListener = function (Listener) {
        this._add(Listener);
    };
    LitEvent4.prototype.removeListener = function (Listener) {
        this._remove(Listener);
    };
    LitEvent4.prototype.invoke = function (v1, v2, v3, v4) {
        this._invoke(v1, v2, v3, v4);
    };
    return LitEvent4;
}(LitEventBase));
exports.LitEvent4 = LitEvent4;
var LitEvent5 = /** @class */ (function (_super) {
    __extends(LitEvent5, _super);
    function LitEvent5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LitEvent5.prototype.addListener = function (Listener) {
        this._add(Listener);
    };
    LitEvent5.prototype.removeListener = function (Listener) {
        this._remove(Listener);
    };
    LitEvent5.prototype.invoke = function (v1, v2, v3, v4, v5) {
        this._invoke(v1, v2, v3, v4, v5);
    };
    return LitEvent5;
}(LitEventBase));
exports.LitEvent5 = LitEvent5;
