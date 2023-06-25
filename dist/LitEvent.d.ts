declare abstract class LitEventBase {
    private _listeners;
    protected _add(listener: any): void;
    protected _remove(listener: any): void;
    protected _invoke(...params: any): void;
    removeAllListeners(): void;
}
export declare class LitEvent extends LitEventBase {
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    invoke(): void;
}
export declare class LitEvent1<T1> extends LitEventBase {
    addListener(listener: ((v1: T1) => void)): void;
    removeListener(listener: ((v1: T1) => void)): void;
    invoke(v1: T1): void;
}
export declare class LitEvent2<T1, T2> extends LitEventBase {
    addListener(listener: ((v1: T1, v2: T2) => void)): void;
    removeListener(listener: ((v1: T1, v2: T2) => void)): void;
    invoke(v1: T1, v2: T2): void;
}
export declare class LitEvent3<T1, T2, T3> extends LitEventBase {
    addListener(listener: ((v1: T1, v2: T2, v3: T3) => void)): void;
    removeListener(listener: ((v1: T1, v2: T2, v3: T3) => void)): void;
    invoke(v1: T1, v2: T2, v3: T3): void;
}
export declare class LitEvent4<T1, T2, T3, T4> extends LitEventBase {
    addListener(listener: ((v1: T1, v2: T2, v3: T3, v4: T4) => void)): void;
    removeListener(listener: ((v1: T1, v2: T2, v3: T3, v4: T4) => void)): void;
    invoke(v1: T1, v2: T2, v3: T3, v4: T4): void;
}
export declare class LitEvent5<T1, T2, T3, T4, T5> extends LitEventBase {
    addListener(listener: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => void)): void;
    removeListener(listener: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => void)): void;
    invoke(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): void;
}
export {};
