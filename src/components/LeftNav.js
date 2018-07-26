import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Child from './Child'
import { Link } from 'react-router-dom'
class LeftNav extends Component{
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.name,
            menu: [1, 2]
        }
        this.btnListener = this.btnListener.bind(this)
    }
    static childContextTypes = {
        name: PropTypes.string,
        print: PropTypes.func
    }
    static defaultProps = {
        name: 'click'
    }
    getChildContext () {
        return {
            name: this.state.value,
            print: (msg) => {
                console.log(msg)
            }
        }
    }
    btnListener(e) {
        console.log('before', this)
        this.setState({
            value: this.state.value + 'click1'
        }, () => console.log(this.state.value))
        console.log('ing', this.state)
       this.props.history.push('/about/wang')
    }

    render() {
        return (
            <div>
                {
                    this.state.menu.map(item => <Link key={item} to={`/about/${item}`}>about{item}</Link>)
                }
                <button className='leftnav-btn' onClick={(e) => this.btnListener(e)}>{this.state.value}</button>
                <Child />
            </div>
        )
    }

}
export default LeftNav