const asset = require('assert')
const a = [1]
const b =  [1,2]
try {
    asset.deepEqual(a ,b, 'bu')
}catch (e) {
    console.log(e)
}
console.log('r')