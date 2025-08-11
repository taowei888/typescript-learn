interface I {
    events: Map<string, Function[]>
    on: (event: string, cb: Function) => void
    emit: (event: string, ...args: any[]) => void
    off: (event: string, cb: Function) => void
    once: (event: string, cb: Function) => void
}
class Emitter implements I {
    events: Map<string, Function[]>
    constructor() {
        this.events = new Map()
    }
    on(event: string, cb: Function) {
        if (this.events.has(event)) {
            const cbList = this.events.get(event)
            cbList && cbList.push(cb)
        } else {
            this.events.set(event, [cb])
        }
    }
    emit(event: string, ...args: any[]) {
        const cbList = this.events.get(event)
        if (cbList) {
            cbList.forEach(cb => cb(...args))
        }
    }
    off(event: string, cb: Function) {
        const cbList = this.events.get(event)
        if (cbList) {
            cbList.splice(cbList.indexOf(cb), 1)
        }
    }
    once(event: string, cb: Function) {
        // 创建一个自定义函数，通过 on 触发后马上通过 off 回收掉
        const callback = (...args: any[]) => {
            cb(...args)
            this.off(event, callback)
        }
        this.on(event, callback)
    }

}

const bus = new Emitter()
const handler = (a: any, b: any) => {
    console.log(a); console.log(b)
}
// bus.once('go', handler)
bus.on('go', handler)
bus.emit('go', 1, 2)
// bus.off('go', handler)
bus.emit('go', 3, 4)
bus.emit('go', 5, 6)
