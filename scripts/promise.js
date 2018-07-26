class Promise {
    constructor(executor) {
        this.status = 'pending'
        this.value = null
        this.reason = null
        this.onResolveCallbacks = []
        this.onRejectedCallbacks = []

        let resolve = (data) => {
            this.status = 'resolve'
            this.value = data
            this.onResolveCallbacks.forEach(fn => fn())
        }
        let reject = (reason) => {
            this.status = 'rejected'
            this.reason = reason
            this.onRejectedCallbacks.forEach(fn => fn())
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }

    }
    then(onfulfilled, onrejected) {
        function resolvePromise(promise2, x, resolve, reject) {
            if (promise2 === x) {
                return reject(new TypeError('循环引用'))
            }
            let called = null
            if (x != null && (typeof x === 'object' || typeof x ==='function')) {
                try {
                    let then = x.then
                    if (typeof then === 'function') {
                        then.call(x, res => {
                            if (called) {
                                return
                            }
                            called = true
                            resolvePromise(promise2, res, resolve, reject)
                        }, rej => {
                            if (called) {
                                return
                            }
                            called = true
                            reject(res)
                        })
                    } else {
                        resolve(x)
                    }
                } catch (e) {
                    if (called) {
                        return
                    }
                    called = true
                    reject(e)
                }
            } else {
                resolve(x)
            }
        }
        onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : value => value
        onrejected = typeof  onrejected === 'function' ? onrejected : err => { throw err }
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === 'resolve') {
                setTimeout(() => {
                    try {
                        let x = onfulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onrejected(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === 'pending') {
                this.onResolveCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onfulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onrejected(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })
        return promise2
    }
}
module.exprots = Promise