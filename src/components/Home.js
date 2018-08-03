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