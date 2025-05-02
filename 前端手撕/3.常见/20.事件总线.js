class MyEventBus {
    constructor() {
        this.eventBus = {}
    }

    on(eventName, eventCb) {
        let handlers = this.eventBus[eventName]
        if (!handlers) {
            handlers = []
            this.eventBus[eventName] = handlers
        }
        handlers.push(eventCb)
    }

    off(eventName, eventCb) {
        const handlers = this.eventBus[eventName]
        if (!handlers) return
        const index = handlers.findIndex((handler) => {
            handler === eventCb
        })
        handlers.splice(index,1)
    }

    emit(eventName, ...payload) {
        const handlers = this.eventBus[eventName]
        if (!handlers) return
        handlers.forEach(handler => {
            handler(...payload)
        });
    }
}

const $bus = new  MyEventBus()
$bus.on("cb1",(a,b) => console.log('cb1',a+b))
$bus.emit("cb1",1,2)
$bus.on("cb2",() => console.log('cb2'))
$bus.emit("cb2")
const fn3 = () => console.log('cb3');
$bus.on("cb3",fn3)
$bus.emit("cb3")
// $bus.off("cb3",fn3)
$bus.emit("cb3")

