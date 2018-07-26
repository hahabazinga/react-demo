/*var myAsync = generator => {
    const iterator = generator()
    const handle = iteratorResult => {
        if (iteratorResult.done) {
            return
        }
        const iteratorValue = iteratorResult.value
        if (iteratorValue instanceof Promise) {
            iteratorValue.then(result => handle(iterator.next(result)))
                .catch(e => iterator.throw(e))
        }
    }
    try {
        handle(iterator.next())
    } catch (e) {
        console.log(e)
    }
}*/
/*

myAsync(function *() {
    try {
        const a = yield Promise.resolve(1)
        const b = yield Promise.resolve(2)
        console.log(a + b)
    } catch (e) {
        console.log(e)
    }
})
*/

/*setTimeout(function(){console.log(1)},0);
new Promise(function(resolve,reject){
    console.log(2);
    resolve();
}).then(function(){console.log(3)
}).then(function(){console.log(4)});

process.nextTick(function(){console.log(5)});

console.log(6);
// 2 6 5 3 4 1*/

/*
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp:2;
overflow:hidden;
text-overflow: ellipsis;
*/


/*function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}*/
//HTML转义
/*function htmlToString(html) {
    let tmpDiv = document.createElement('div')
    tmpDiv.textContent ? (tmpDiv.textContent = html) : (tmpDiv.innerText = html)
    var output = tmpDiv.innerHTML
    tmpDiv = null
    return output
}
var html = '<alert>msg</alert>'
console.log(html)
console.log(htmlToString(html))*/

/*
// vue自定义指令
Vue.directive('qdirective', {
    bind: function (el, binding, vNode, oldValue) {
        
    },
    update: function (el, binding,vNode, oldValue) {
        
    },
    unbind: function () {
        
    }
})*/

/*const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('/user/1234', {
    cancelToken: source.token
}).catch(e => {
    if (axios.isCancel(e)) {
        console.log(e.message)
    } else{
        // do sth
    }
})
axios.post('/user/1234', {
    name: 'www'
},{
    cancelToken: source.token
})
source.cancel('canceled by user')*/
//call的原生js实现
Function.prototype.newcall = function (contetx, ...args) {
    if (typeof contetx === 'object') {
         contetx = contetx || window
    } else {
        contetx.Object.create(null)
    }
    let fn = Symbol()
    contetx[fn] = this
    //contetx.fn = this
    contetx[fn](...args)
    //contetx.fn(...args)
    delete contetx.fn
}
Function.prototype.bind = function (context, ...args) {
    var self = this
    return function () {
        return self.call(context, ...args, ...arguments)
    }
}
let foo = {
    value: 1
}
function bar() {
    console.log(this.value);
}
bar.newcall (foo);

/*
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
let module = {
    rules:[
        {
            test: /\.(css|less)$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'less-loader'
                ]
            })
        }
    ]
}
let plugins = [
    new ExtractTextWebpackPlugin('[name].css')
]
let devServer = {
    port: 8080,
    before(app) {
        aa.get('./api/test.json', (req, res) => {
            res.json({
                code: 200,
                message: 'hello world'
            })
        })
    }
}*/
