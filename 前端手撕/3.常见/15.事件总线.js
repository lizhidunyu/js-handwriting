class Emitter {
    constructor() {
        this.map = new Map()
    }
    on(name, cb) {
        this.map.get(name) || this.map.set(name, [])
        this.map.get(name).push(cb)
    }
    emit(name, args) {
        if (!this.map.get(name)) {
            throw new Error('该函数暂不存在')
        } else {
            this.map.get(name).forEach(fn => {
                fn(...args)
            });
        }
    }
    off(name, cb) {
        const handlers = this.map.get(name)
        if (!handlers) return
        const index = handlers.findIndex(handler => handler === cb )
        handlers.splice(index, 1)
    }
}

const emitter = new Emitter()
emitter.on('aaa', (a, b) => console.log(a+b))
const fn1 = (a) => {console.log(a)}
emitter.on('aaa', fn1)
emitter.emit('aaa', [123, 456]) 
emitter.off('aaa', fn1)
setTimeout(() => {
    emitter.emit('aaa', [123, 456]) 
})
