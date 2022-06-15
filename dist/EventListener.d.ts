declare abstract class BaseEventListener {
    private _listeners;
    protected _add(Listener: any): void;
    protected _remove(Listener: any): void;
    protected _invoke(...params: any): void;
    clear(): void;
}
export declare class EventListener1<T1> extends BaseEventListener {
    addListener(Listener: ((t1: T1) => void)): void;
    removeListener(Listener: ((t1: T1) => void)): void;
    invoke(t1: T1): void;
}
export declare class EventListener2<T1, T2> extends BaseEventListener {
    addListener(Listener: ((t1: T1, t2: T2) => void)): void;
    removeListener(Listener: ((t1: T1, t2: T2) => void)): void;
    invoke(t1: T1, t2: T2): void;
}
export declare class EventListener3<T1, T2, T3> extends BaseEventListener {
    addListener(Listener: ((t1: T1, t2: T2, t3: T3) => void)): void;
    removeListener(Listener: ((t1: T1, t2: T2, t3: T3) => void)): void;
    invoke(t1: T1, t2: T2, t3: T3): void;
}
export {};
