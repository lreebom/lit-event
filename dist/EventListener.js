"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListener3 = exports.EventListener2 = exports.EventListener1 = void 0;
class BaseEventListener {
    _listeners = [];
    _add(Listener) {
        if (this._listeners.indexOf(Listener) < 0) {
            this._listeners.push(Listener);
        }
    }
    _remove(Listener) {
        const index = this._listeners.indexOf(Listener);
        if (index > -1) {
            this._listeners.splice(index, 1);
        }
    }
    _invoke(...params) {
        for (let i = 0; i < this._listeners.length; i++) {
            this._listeners[i]?.(...params);
        }
    }
    clear() {
        this._listeners = [];
    }
}
class EventListener1 extends BaseEventListener {
    addListener(Listener) {
        this._add(Listener);
    }
    removeListener(Listener) {
        this._remove(Listener);
    }
    invoke(t1) {
        this._invoke(t1);
    }
}
exports.EventListener1 = EventListener1;
class EventListener2 extends BaseEventListener {
    addListener(Listener) {
        this._add(Listener);
    }
    removeListener(Listener) {
        this._remove(Listener);
    }
    invoke(t1, t2) {
        this._invoke(t1, t2);
    }
}
exports.EventListener2 = EventListener2;
class EventListener3 extends BaseEventListener {
    addListener(Listener) {
        this._add(Listener);
    }
    removeListener(Listener) {
        this._remove(Listener);
    }
    invoke(t1, t2, t3) {
        this._invoke(t1, t2, t3);
    }
}
exports.EventListener3 = EventListener3;
