abstract class BaseEventListener {
    private _listeners: any[] = [];

    protected _add(Listener: any) {
        if (this._listeners.indexOf(Listener) < 0) {
            this._listeners.push(Listener);
        }
    }

    protected _remove(Listener: any) {
        const index = this._listeners.indexOf(Listener)
        if (index > -1) {
            this._listeners.splice(index, 1);
        }
    }

    protected _invoke(...params: any): void {
        for (let i = 0; i < this._listeners.length; i++) {
            this._listeners[i]?.(...params);
        }
    }

    public clear(): void {
        this._listeners = [];
    }
}

export class EventListener0 extends BaseEventListener {

    public addListener(Listener: (() => void)): void {
        this._add(Listener);
    }

    public removeListener(Listener: (() => void)): void {
        this._remove(Listener);
    }

    public invoke(): void {
        this._invoke();
    }
}

export class EventListener1<T1> extends BaseEventListener {

    public addListener(Listener: ((v1: T1) => void)): void {
        this._add(Listener);
    }

    public removeListener(Listener: ((v1: T1) => void)): void {
        this._remove(Listener);
    }

    public invoke(v1: T1): void {
        this._invoke(v1);
    }
}

export class EventListener2<T1, T2> extends BaseEventListener {

    public addListener(Listener: ((v1: T1, v2: T2) => void)): void {
        this._add(Listener);
    }

    public removeListener(Listener: ((v1: T1, v2: T2) => void)): void {
        this._remove(Listener);
    }

    public invoke(v1: T1, v2: T2): void {
        this._invoke(v1, v2);
    }
}

export class EventListener3<T1, T2, T3> extends BaseEventListener {

    public addListener(Listener: ((v1: T1, v2: T2, v3: T3) => void)): void {
        this._add(Listener);
    }

    public removeListener(Listener: ((v1: T1, v2: T2, v3: T3) => void)): void {
        this._remove(Listener);
    }

    public invoke(v1: T1, v2: T2, v3: T3): void {
        this._invoke(v1, v2, v3);
    }
}

export class EventListener4<T1, T2, T3, T4> extends BaseEventListener {

    public addListener(Listener: ((v1: T1, v2: T2, v3: T3, v4: T4) => void)): void {
        this._add(Listener);
    }

    public removeListener(Listener: ((v1: T1, v2: T2, v3: T3, v4: T4) => void)): void {
        this._remove(Listener);
    }

    public invoke(v1: T1, v2: T2, v3: T3, v4: T4): void {
        this._invoke(v1, v2, v3, v4);
    }
}

export class EventListener5<T1, T2, T3, T4, T5> extends BaseEventListener {

    public addListener(Listener: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => void)): void {
        this._add(Listener);
    }

    public removeListener(Listener: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => void)): void {
        this._remove(Listener);
    }

    public invoke(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): void {
        this._invoke(v1, v2, v3, v4, v5);
    }
}
