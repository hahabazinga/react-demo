/*
const Readable = require('stream').Readable;

// readable Stream 实现
class MyReadable extends Readable {
    constructor(dataSource, options) {
        super(options);
        this.dataSource = dataSource;
    }
    // 继承了 Readable 的类必须实现这个函数
    // 触发系统底层对流的读取
    _read() {
        const data = this.dataSource.makeData();
        this.push(data);
        console.log(data);
    }
}

// 模拟资源池
const dataSource = {
    data: new Array(10).fill('-'),
    // 每次读取时 pop 一个数据
    makeData() {
        if (!dataSource.data.length) return null;
        return dataSource.data.pop();
    }
};

const myReadable = new MyReadable(dataSource);
myReadable.setEncoding('utf8');
myReadable.on('data', (chunk) => {

});*/
/* //双工duplex stream实现, readable和writeable互不影响
var Duplex = require('stream').Duplex

const duplex = Duplex();

// readable
let i = 2;
duplex._read = function () {
  this.push(i-- ? 'read ' + i : null);
};
duplex.on('data', data => console.log(data.toString()));

// writable
duplex._write = function (chunk, encoding, callback) {
  console.log(chunk.toString());
  callback();
};
duplex.write('write');
 */


//transform stream 实现,通过transform连接readable和writeable
const Transform = require('note/stream').Transform;
const MAP = {
    'Barret': '靖',
    'Lee': '李'
};

class Translate extends Transform {
    constructor(dataSource, options) {
        super(options);
    }
    _transform(buf, enc, next) {
        const key = buf.toString();
        const data = MAP[key];
        this.push(data);
        next();
    }
}

var transform = new Translate();
transform.on('data', data => console.log(data.toString()));
transform.write('Lee');
transform.write('Barret');
transform.end();
