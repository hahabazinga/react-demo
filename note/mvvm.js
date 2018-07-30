export function defineReactive(obj, key, val){

    const property = Object.getOwnPropertyDescriptor(obj, key)
    if(property && property.configurable === false){
        return
    }

    const getter = property && property.get
    const setter = property && property.set

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable:true,
        get: function reactiveGetter() {
            const value = getter ? getter.call(obj) : val
            // todo
            return value
        },
        set: function reactiveSetter(newVal) {
            const value = getter ? getter.call(obj) : val
            if (value === newVal || (newVal !== newVal && value !== value)) {
                return
            }
            if (setter) {
                setter.call(obj, newVal)
            } else {
                val = newVal
            }
            // dep.notify()
        }
    })
}
export function sequencePromise(arr) {
    let record = function (arr, vallue) {
        arr.push(value)
        return arr
    }
    let pushRecord = record.bind(null, [])
    return arr.reduce(function (promise, task) {
        return promise.then(task).then(pushRecord)
    },Promise.resolve())
}
