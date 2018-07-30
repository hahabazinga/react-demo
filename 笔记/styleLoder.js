module.exports = function (resource) {
    let script = (`
    let style = document.createElement('style') ;
    style.innerText = ${JSON.stringify(resource)};
    document.head.appendChild(style)
    `)
    return script
}
let less = require('less')
module.exports = function (source) {
    this.cacheable()
    less.render(source, (err, result) => {
        this.callback(err, result.css)
    })
}

Function.prototype.bind = function (obj, args) {
    args = Array.prototype.slice.call(arguments, 1)
    let context = this
    const bound = function (newArgs) {
        args = args.concat([...newArgs])
        return context.apply(obj, args)
    }
    const f = function () { }
    f.prototype = context.prototype
    bound.prototype = new f()
    return bound
}