# event-listener

### Use Like Unity3D UnityEvent

```typescript
import {EventListener1, EventListener2} from "@lreebom/event-listener";

//event with one number parameter
const event1 = new EventListener1<number>();
const event1Listener = (v1: number) => {
    console.log("Event1", v1);
}
event1.addListener(event1Listener);
event1.invoke(3);
event1.removeListener(event1Listener);

//event with two parameters (string ,boolean)
const event2 = new EventListener2<string, boolean>();
const event2Listener = (v1: string, v2: boolean) => {
    console.log("Event2", v1, v2);
};
event2.addListener(event2Listener);
event2.invoke("StartGame", true);
event2.removeListener(event2Listener);

```