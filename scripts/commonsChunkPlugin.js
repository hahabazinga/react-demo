/*
common.js
export const common = 'common file';

first.js
import {common} from './common';
import $ from 'jquery';
console.log($，`first  ${common}`);

second.js
import {common} from './common';
import $ from 'jquery';
console.log($，`second ${common}`);
*/
const path = require('path')
const webpack = require('webpack')
const packagejson = require('../package')

const config = {
    entry: {
        first: './first.js',
        second: './second.js',
        vendor: Object.keys(packagejson.dependencies)
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    plugin: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'runtime'],// 公共模块verdor.js（这里指jquery）, webpack运行文件runtime.js
            filename: '[name].js',
            minChunks: Infinity // minChunks可以是个函数，function(module, count) { return module.context && module.context.includes('node-modules') }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',  // 从first.js和second.js中抽离的公共模块（这里指./commom）
            filename: '[name].js',
            chunks: ['first', 'second']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: 'chilren-async' // 异步加载模块中共同引用的模块会被合并到async指定的文件中，就是‘children-async’中
        })
    ]
}
// 用chunkhash作文件名适用于生产环境，可利用浏览器缓存
module.exports = config
for in obj的属性
for of 数组的value