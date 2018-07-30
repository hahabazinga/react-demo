学习react及js杂记

### router
1. 用`BrowserRouter`容纳根元素
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root'));
```
2. `App`组件里使用`main`组件
```
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">title</h1>
        </header>
        <Main/>
      </div>
    );
  }
}
```
3. 需要在哪个组件进行路由，就在该组件里使用`Switch`，这里是`main`
```
import { Route, Switch} from 'react-router-dom'
import React from 'react'
import Home from '../components/Home'
import About from '../components/About'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about/:number' component={ About } />
        </Switch>
    </main>
)

export default Main
```
4. 路由跳转
```
// Link
<Link key={item} to={`/about/${item}`}>about{item}</Link>

// this.props.history.push
this.props.history.push('/about/1')
```
5. 路由参数获取：`this.props.match.params.number`
6. `exact`：路径完全匹配才会渲染

### css
1. `@media`原理： `window.matchMedia()`检查`css`中的媒体查询
 ```
 var result = window.matchMedia('(max-width: 700px)');

 if (result.matches) {
   console.log('页面宽度小于等于700px');
 } else {
   console.log('页面宽度大于700px');
 }
 ```
 2. 单行省略号
 ```
 .a{
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: no-wrap;
   }
 ```
 3. 多行省略号
 ```
 .b{
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 3;
   overflow:hidden;
   }
  4. `1px`
  ```
  .scale-1px{
  position: relative;
  margin-bottom: 20px;
  border:none;
  }
  .scale-1px:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 200%;
  height: 200%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  }
  ```
 ### storage
 1. `localstorage`一般5M，使用前最好检查
 ```
 if (window.localStorage) {
     try {
         localStorage.setItem('bla', 'bla');
     } catch (e) {
         if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
             // todo
         } else {
             // todo
         }
     }
 }
 ```
### `CommonsChunkPlugin`
```
var webpack = require("webpack");
module.exports = {
    entry: { a: "./a", b: "./b" },
    output: { filename: "[name].js" },
    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]
}
```
当有多个入口的时候，`CommonsChunkPlugin` 会把 `a`，`b` 模块公共依赖的模块抽离出来

### `webpack`构建流程
1. 解析`webpack`配置参数，合并从`shell`传入和`webpack.config.js`文件里配置的参数，生产最后的配置结果。
2. 注册所有配置的插件，好让插件监听`webpack`构建生命周期的事件节点，以做出对应的反应。
3. 从配置的`entry`入口文件开始解析文件构建`AST`语法树，找出每个文件所依赖的文件，递归下去。
4. 在解析文件递归的过程中根据文件类型和`loader`配置找出合适的`loader`用来对文件进行转换。
5. 递归完后得到每个文件的最终结果，根据`entry`配置生成代码块`chunk`。
6. 输出所有`chunk`到文件系统。
需要注意的是，在构建生命周期中有一系列插件在合适的时机做了合适的事情，比如`UglifyJsPlugin`会在`loader`转换递归完后对结果再使用`UglifyJs`压缩覆盖之前的结果。
### `webpack plugin`例子
```
class EndWebpackPlugin {

    constructor(doneCallback, failCallback) {
        this.doneCallback = doneCallback;
        this.failCallback = failCallback;
    }

    apply(compiler) {
        // 监听webpack生命周期里的事件，做相应的处理
        compiler.plugin('done', (stats) => {
            this.doneCallback(stats);
        });
        compiler.plugin('failed', (err) => {
            this.failCallback(err);
        });
    }
}

module.exports = EndWebpackPlugin;
```
### `babel`原理
1. 使用 `babylon` 解析器对输入的源代码字符串进行解析并生成初始` AST`（`File.prototype.parse`）
2. 利用 `babel-traverse` 这个独立的包对 `AST` 进行遍历，并解析出整个树的 `path`，通过挂载的 `metadataVisitor` 读取对应的元信息，这一步叫`set AST `过程
3. `transform `过程：遍历 `AST` 树并应用各 `transformers（plugin）` 生成变换后的 `AST` 树
4. 利用 `babel-generator` 将 `AST` 树输出为转码后的代码字符串
[babel原理分析](https://octman.com/blog/2016-08-27-babel-notes/)

### `setState`小记
1. `setState` 只在合成事件和钩子函数中是“异步”的，在原生事件和 `setTimeout` 中都是同步的。
2. `setState`的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 `setState(partialState, callback)` 中的`callback`拿到更新后的结果。
3. `setState` 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和`setTimeout` 中不会批量更新，在“异步”中如果对同一个值进行多次 `setState` ， `setState` 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 `setState` 多个不同的值，在更新时会对其进行合并批量更新。

### `create-react-app`流程
1. 通过`commander`获取项目名
2. 检查项目名
3. 用项目名在当前目录下创建文件夹，并在里面初始化一个`package.json`文件
4. 进入项目目录，安装`react`、`react-dom`、`react-scripts`依赖
5. 调用`react-scripts`的`init`初始化项目
6. 结束

### 首屏
```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

// 读取写好的 loading 态的 html 和 css
var loading = {
    html: fs.readFileSync(path.join(__dirname, './loading.html')),
    css: '<style>' + fs.readFileSync(path.join(__dirname, './loading.css')) + '</style>'
}

var webpackConfig = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'xxxx.html',
      template: 'template.html',
      loading: loading
    })
  ]
};
```
复制代码然后在模板中引用即可：
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <%= htmlWebpackPlugin.options.loading.css %>
    </head>

    <body>
        <div id="root">
            <%= htmlWebpackPlugin.options.loading.html %>
        </div>
    </body>
</html>
```
### `[react] fragments portals`
`<></>`不能接受任何属性
```
    function Glossary(props) {
        return (
            <dl>
                {props.items.map(item => (
                    <React.Fragment key={item.id}>
                        <dt>{item.term}</dt>
                        <dd>{item.description}</dd>
                    </React.Fragment>
                    )
                )}
            </dl>
        )
    }
```
`key`是`<React.Fragment>`标签唯一接受的属性

```
 render() {
 //  React mounts a new div and renders the children into it
   return (
   <div>
   {this.props.children}
   </div>
    )
}
```
```
render() {
// React does *not* create a new div. It renders the children into `domNode`.
   return ReactDOM.createPortal(
   //  Any valid React child: JSX, strings, arrays, etc.
   this.props.children,
   //  `domNode` is any valid DOM node, regardless of its location in the DOM.
   domNode
   )
}
```
### `[react] context`
对于父组件，也就是`context`的生产者，需要通过一个静态属性`childContextTypes`声明提供给子组件的Context对象的属性，并实现一个实例`getChildContext`方法，返回一个代表`Context`的纯对象 (`plain object`) 。
```
 // 声明Context对象属性
  static childContextTypes = {
    propA: PropTypes.string,
    methodA: PropTypes.func
  }

  // 返回Context对象，方法名是约定好的
  getChildContext () {
    return {
      propA: 'propA',
      methodA: () => 'methodA'
    }
  }
  ```
  子组件需要通过一个静态属性`contextTypes`声明后，才能访问父组件`Context`对象的属性
  ```
  // 声明需要使用的Context属性
  static contextTypes = {
    propA: PropTypes.string
  }
  const {
      propA,
      methodA
    } = this.context
  ```