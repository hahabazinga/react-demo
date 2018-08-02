import React, { Component } from 'react'
import home from '../style/home.css'
import Content from './Content'
import { Route, Switch, Link} from 'react-router-dom'
class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                {
                    text: 'text1',
                    id: '1'
                },
                {
                    text: 'text2',
                    id: '2'
                },
                {
                    text: 'text3',
                    id: '3'
                }
            ]
        }
    }
    componentDidMount() {
        const localhost1 = 'localhost:3000'
        console.log(`${localhost1}${this.props.match.url}aticle`)
    }
    render() {

        return (
            <div className="home-root">
                <div className="left-nav-list">
                    {
                        this.state.menu.map( item => <Link to={`${this.props.match.url}aticle/${item.id}`} className="left-nav-item" key={item.id}>{item.text}</Link>)
                    }
                </div>
                <div className="right-content">
                    <Route path={`${this.props.match.url}aticle/:pageId`} component={Content}/>
                </div>
            </div>
        )
    }
}

export default Home