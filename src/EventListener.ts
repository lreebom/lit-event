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

export class EventListener1<T1> extends BaseEventListener {

    public addListener(Listener: ((t1: T1) => void)): void {
        this._add(Listener);
    }

    public removeListener(Listener: ((t1: T1) => void)): void {
        this._remove(Listener);
    }

    public invoke(t1: T1): void {
        this._invoke(t1);
    }
}

export class EventListener2<T1, T2> extends BaseEventListener {

    public addListener(Listener: ((t1: T1, t2: T2) => void)): void {
        this._add(Listener);
    }

    public removeListener(Listener: ((t1: T1, t2: T2) => void)): void {
        this._remove(Listener);
    }

    public invoke(t1: T1, t2: T2): void {
        this._invoke(t1, t2);
    }
}

export class EventListener3<T1, T2, T3> extends BaseEventListener {

    public addListener(Listener: ((t1: T1, t2: T2, t3: T3) => void)): void {
        this._add(Listener);
    }

    public removeListener(Listener: ((t1: T1, t2: T2, t3: T3) => void)): void {
        this._remove(Listener);
    }

    public invoke(t1: T1, t2: T2, t3: T3): void {
        this._invoke(t1, t2, t3);
    }
}
