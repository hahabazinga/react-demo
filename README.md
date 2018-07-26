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
3. 需要在哪个组件进行路由，就在改组件里使用`Switch`，这里是`main`
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
