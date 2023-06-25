abstract class LitEventBase {
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

    public removeAllListeners(): void {
        this._listeners = [];
    }
}

export class LitEvent extends LitEventBase {

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

export class LitEvent1<T1> extends LitEventBase {

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

export class LitEvent2<T1, T2> extends LitEventBase {

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

export class LitEvent3<T1, T2, T3> extends LitEventBase {

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

export class LitEvent4<T1, T2, T3, T4> extends LitEventBase {

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

export class LitEvent5<T1, T2, T3, T4, T5> extends LitEventBase {

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