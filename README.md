# lit-listener

### Install 安装

`npm install lit-event`

### Use Like Unity3D UnityEvent

```typescript
import {LitEvent, LitEvent1, LitEvent2} from "lit-event";

/**
 * An Event
 * 无参数的事件监听
 */
const event = new LitEvent();
event.addListener(()=>{
    console.log("Event");
})

/**
 * Remove All Listeners;
 */
event.removeAllListeners();
```

```typescript
/**
 * event with one number parameter
 * 带一个参数的事件监听
 */
const event1 = new LitEvent1<number>();

/**
 * Listen Event
 */
event1.addListener((v1: number) => {
    console.log("Event1", v1);
});

/**
 * Invoke Event
 */
event1.invoke(3);
```

```typescript
/**
 * event with two parameters (string ,boolean)
 * 带两个参数的事件监听
 */
const event2 = new LitEvent2<string, boolean>();

/**
 * Initialize Event
 */
const event2Listener = (v1: string, v2: boolean) => {
    console.log("Event2", v1, v2);
};

/**
 * Listen Event
 */
event2.addListener(event2Listener);

/**
 * Invoke Event
 */
event2.invoke("StartGame", true);

/**
 * Remove Event
 */
event2.removeListener(event2Listener);
```