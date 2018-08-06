import React, { Component } from 'react'
import '../style/home.css'
import Content from './Content'
import { Route, Link} from 'react-router-dom'
class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                {
                    text: 'text1',
                    time: '2018/8/3',
                    id: '1'
                },
                {
                    text: 'text2',
                    time: '2018/8/3',
                    id: '2'
                },
                {
                    text: 'text3',
                    time: '2018/8/3',
                    id: '3'
                }
            ],
            chosed: ''
        }
    }
    setChosed(id) {
        this.setState({
            chosed: id
        })
    }
    render() {
        const githubIcon = require('../static/img/github.png')
        return (
            <div className="home-root">
                <div className="left-nav-list">
                    {
                        this.state.menu.map( item => <div className={item.id === this.state.chosed ? "left-nav-item  left-nav-chosed" : "left-nav-item"} key={item.id}>
                            <Link to={`${this.props.match.url}/aticle/${item.id}`} className="left-nav-text" onClick={this.setChosed.bind(this, item.id)} >{item.text}</Link>
                            <div className="left-nav-time">{item.time}</div>
                        </div>)
                    }
                </div>
                <div className="right-content">
                    <Route path={`${this.props.match.url}/aticle/:pageId`} component={Content}/>
                </div>
                <div className="home-bottom">
                    <Link to="/about/" className="home-about">关于</Link>
                    <a href="https://github.com/hahabazinga/react-demo"><img className="home-about-github" alt="github" src={githubIcon} ></img></a>
                </div>
            </div>
        )
    }
}

export default Home